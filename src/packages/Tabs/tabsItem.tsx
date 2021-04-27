import classNames from 'classnames'
import React, { FC, useContext, memo, useMemo } from 'react'
import { tabContext } from './tabs'

export interface TabsItemProps {
  index?: string
  label: any
  disabled?: boolean
  className?: string
}

const TabsItem: FC<TabsItemProps> = memo((props) => {
  const { index, label, children, disabled, className, ...restProps } = props
  const context = useContext(tabContext)

  const classes = classNames('cv-tabsItem', className, {
    'cv-tabsItem-active': context.selectIndex === index,
  })

  const isVisible = useMemo(() => index === context.selectIndex, [
    index,
    context,
  ])

  return isVisible ? (
    <div className={classes} {...restProps} data-tabs-title={label}>
      {children}
    </div>
  ) : null
})

TabsItem.displayName = 'TabsItem'

export default TabsItem
