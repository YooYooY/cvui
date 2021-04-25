import React, { memo, useMemo } from 'react'
import useClassName from '../../hooks/useClassName'
import Icon from '../Icon/icon'

export interface OptionProps {
  value: string
  label?: string
  disabled?: boolean
  selectKeys?: string[]
  index?: string | number
  onSelect?: (item: SelectOption) => void
}

export interface SelectOption {
  value: string
  label: string | React.ReactNode | React.ReactElement
}

const Option: React.FC<OptionProps> = memo((props) => {
  const {
    index,
    value,
    label,
    disabled,
    children,
    onSelect,
    selectKeys,
    ...restProps
  } = props

  const handleClick = () => {
    if (!disabled) onSelect && onSelect(selectOption)
  }

  const isSelect = useMemo(() => selectKeys?.includes(value), [
    selectKeys,
    value,
  ])

  const classes = useClassName('cv-select-item', {
    'cv-select-item-disabled': disabled,
    'cv-select-item-selected': isSelect,
  })

  const renderChild = label || children || value || ''
  const selectOption = {
    value,
    label: renderChild,
  }

  return (
    <li className={classes} onClick={handleClick} {...restProps}>
      {renderChild} {isSelect && <Icon icon="check" className="cv-select-item-icon" />}
    </li>
  )
})

Option.defaultProps = {}

Option.displayName = 'SelectOption'

export default Option
