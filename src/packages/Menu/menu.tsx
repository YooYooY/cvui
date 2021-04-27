import React, { createContext, CSSProperties, FC, useState } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './menuItem'

type MenuMode = 'horizontal' | 'vertical'

export interface MenuProps {
  defaultIndex?: string | number
  className?: string
  mode?: MenuMode
  style?: CSSProperties
  onSelect?: (selectedIndex: string) => void
  defaultOpenSubMenus?: Array<number | string>
}

export interface IMenuContext
  extends Pick<MenuProps, 'onSelect' | 'mode' | 'defaultOpenSubMenus'> {
  index: string | number
}

export const MenuContext = createContext<IMenuContext>({ index: '0' })

export const Menu: FC<MenuProps> = (props) => {
  const {
    className,
    mode,
    style,
    children,
    defaultIndex,
    onSelect,
    defaultOpenSubMenus,
  } = props
  const [currentActive, setActive] = useState(defaultIndex)
  const classes = classNames('cv-menu', className, {
    'cv-menu-vertical': mode === 'vertical',
    'cv-menu-horizontal': mode !== 'vertical',
  })
  const handleClick = (index: string) => {
    setActive(index)
    onSelect && onSelect(index)
  }
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  }
  const renderChildren = () =>
    React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: index.toString(),
        })
      } else {
        console.warn(
          'Wraning: Menu has a child which is not a MenuItem component'
        )
      }
    })

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: [],
}

export default Menu
