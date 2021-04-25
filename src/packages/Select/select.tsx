import React, {
  useCallback,
  useEffect,
  useRef,
  useMemo,
  useState,
  memo,
} from 'react'
import useClassName from '../../hooks/useClassName'
import useClickOutside from '../../hooks/useClickOutside'
import Input from '../Input/input'
import Transition from '../Transition/transition'
import { OptionProps, SelectOption } from './option'
import Icon from '../Icon/icon'

export interface SelectProps {
  name?: string
  multiple?: boolean
  disabled?: boolean
  defaultValue?: string | string[]
  placeholder?: string
  onChange?: (
    selectedValue: SelectOption,
    selectedValues: SelectOption[]
  ) => void
  onVisibleChange?: (visible: boolean) => void
}

interface SelectTabsProps {
  selectList: SelectOption[]
  onSelect: (item: SelectOption) => void
}

const Tabs: React.FC<SelectTabsProps> = memo((props) => {
  const { selectList, onSelect } = props

  return (
    <div className="cv-select-tabs">
      {selectList.map((item) => (
        <div className="cv-select-tabs-item" key={item.value}>
          {item.value} <Icon icon="times" onClick={() => onSelect(item)} />
        </div>
      ))}
    </div>
  )
})

const Select: React.FC<SelectProps> = (props) => {
  const {
    name,
    defaultValue,
    placeholder,
    multiple,
    onChange,
    disabled,
    children,
    onVisibleChange,
  } = props

  // 收集子选项options；
  const collectOptions = useRef<Record<string, any>>({})
  // 设置是否可见
  const [visible, setVisible] = useState(false)
  // 设置选择项
  const [selects, setSelects] = useState<Record<string, any>>(() => {
    if (!defaultValue) return {}
    if (typeof defaultValue === 'string') return { [defaultValue]: '' }
    if (Array.isArray(defaultValue))
      return defaultValue.reduce((result, prev) => {
        result[prev] = ''
        return result
      }, {} as any)
  })

  const selectValues = useMemo(() => {
    const fieldValues = Object.values(selects)
    if (multiple) {
      return fieldValues.length ? ' ' : ''
    } else {
      return fieldValues.join(',')
    }
  }, [selects, multiple])
  const selectKeys = useMemo(() => Object.keys(selects), [selects])

  const elRef = useRef<HTMLDivElement>(null)

  useClickOutside(elRef, () => {
    setVisible(false)
  })

  const selectList = useMemo(
    () => Object.entries(selects).map(([value, label]) => ({ value, label })),
    [selects]
  )

  // 点击选项后的回调
  const onSelect = useCallback(
    (item: SelectOption) => {
      if (multiple) {
        const exitKey = Object.keys(selects).includes(item.value)
        let selectsArr: SelectOption[] = Object.entries(
          selects
        ).map(([value, label]) => ({ value, label }))

        if (exitKey) {
          setSelects((oldselects) => {
            delete oldselects[item.value]
            return { ...oldselects }
          })
          selectsArr = selectsArr.filter((t) => t.value !== item.value)
        } else {
          setSelects((oldselects) => ({
            ...oldselects,
            [item.value]: item.label,
          }))
          selectsArr.push(item)
        }
        onChange && onChange(item, selectsArr)
      } else {
        setSelects(() => ({ [item.value]: item.label }))
        setVisible(false)
        onChange && onChange(item, [item])
      }
    },
    [multiple, selects, onChange]
  )

  const renderChildren = useMemo(() => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<
        OptionProps & { children: React.ReactNode }
      >
      const { displayName } = childElement.type

      const { value, label, children } = childElement.props
      const collectOptionsItem = { [value]: label || children || value || '' }
      collectOptions.current = {
        ...collectOptions.current,
        ...collectOptionsItem,
      }

      if (displayName === 'SelectOption') {
        return React.cloneElement(childElement, {
          index,
          onSelect,
          selectKeys,
        })
      } else {
        console.warn(
          'Warning: Select has a child which is not a Option Component'
        )
      }
    })
  }, [children, onSelect, selectKeys, collectOptions])

  useEffect(() => {
    onVisibleChange && onVisibleChange(visible)
  }, [visible, onVisibleChange])

  // 收集子选项后，跟默认defaultValue的值对比，渲染初始值进输入框
  useEffect(() => {
    const collectOptionsItems = collectOptions.current
    setSelects((oldFileds) => {
      return Object.keys(oldFileds).reduce((result, key) => {
        result[key] = collectOptionsItems[key]
        return result
      }, {} as any)
    })
  }, [])

  const classes = useClassName('cv-select', {
    'cv-select-visible': visible,
  })

  return (
    <div className={classes} ref={elRef}>
      <Input
        disabled={disabled}
        value={selectValues}
        readOnly
        placeholder={placeholder}
        name={name}
        icon="angle-down"
        onClick={() => setVisible(!visible)}
      />
      {!!selectList.length && multiple && (
        <Tabs selectList={selectList} onSelect={onSelect} />
      )}
      <Transition in={visible} timeout={200} classNames="cv-select-ani">
        <ul className="cv-select-list">{renderChildren}</ul>
      </Transition>
    </div>
  )
}

Select.defaultProps = {
  disabled: false,
}

export default Select
