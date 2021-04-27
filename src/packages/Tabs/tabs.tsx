import classNames from 'classnames'
import React, {
  createContext,
  FC,
  FunctionComponentElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { TabsItemProps } from './tabsItem'

export type TabsType = 'line' | 'card'

export type ItemType = { label: any; disabled: boolean | undefined }

export interface TabsProps {
  defaultIndex?: string
  className?: string
  onSelect?: (selectIndex: string) => void
  type?: TabsType
}

interface TabsContext {
  selectIndex: string
  onSelect?: (selectIndex: string) => void
}

export const tabContext = createContext<TabsContext>({
  selectIndex: '',
})

const Tabs: FC<TabsProps> = (props) => {
  const {
    defaultIndex,
    className,
    onSelect,
    type,
    children,
    ...restProps
  } = props

  const [selectIndex, setIndex] = useState(defaultIndex as string)
  const [labes, setLabes] = useState<ItemType[]>([])
  const labesRef = useRef<ItemType[]>([])

  const classes = classNames('cv-tabs', className, {
    'cv-tabs-line': type === 'line',
    'cv-tabs-card': type === 'card',
  })

  const generChild = useCallback(() => {
    labesRef.current = []
    return React.Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<TabsItemProps>
      const childComponent = childElement.type
      const labes = labesRef.current!
      const { label, disabled } = childElement.props
      labesRef.current = [...labes, { label, disabled }]

      if (childComponent.displayName === 'TabsItem') {
        return React.cloneElement(childElement, { index: index + '' })
      } else {
        console.warn('Warning: Tabs Children must be TabsItem')
      }
    })
  }, [children])

  const titleClasses = useCallback(
    (index, isDisabled) => {
      return classNames('cv-tabs-title-item', {
        'cv-tabs-active': String(index) === selectIndex,
        'cv-tabs-title-disabled': isDisabled,
      })
    },
    [selectIndex]
  )

  const handleSelect = useCallback((index) => {
    setIndex(index + '')
  }, [])

  useEffect(() => {
    setLabes(labesRef.current)
  }, [])

  return (
    <div className={classes} {...restProps}>
      <tabContext.Provider
        value={{
          selectIndex,
          onSelect,
        }}
      >
        <div className="cv-tabs-title">
          {labes.map((item, index) => (
            <div
              key={index}
              onClick={() => !item.disabled && handleSelect(index)}
              className={titleClasses(index, item.disabled)}
            >
              {item.label}
            </div>
          ))}
        </div>
        <div className="cv-tabs-body">{generChild()}</div>
      </tabContext.Provider>
    </div>
  )
}

Tabs.defaultProps = {
  type: 'line',
  defaultIndex: '0',
}

export default Tabs
