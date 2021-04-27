import React, {
  FC,
  FunctionComponentElement,
  useContext,
  useState,
} from 'react'
import { MenuContext } from './menu'
import classNames from 'classnames'
import { MenuItemProps } from './menuItem'
import Transition from '../Transition/transition'
import Icon from '../Icon/icon'

export interface SubMenuProps {
  index?: string | number
  title: string
  className?: string
}

const SubMenu: FC<SubMenuProps> = ({ index, title, children, className }) => {
  const context = useContext(MenuContext)
  const openedSubMenus = context.defaultOpenSubMenus
  const isOpend =
    index && context.mode === 'vertical'
      // eslint-disable-next-line eqeqeq
      ? openedSubMenus?.some((openIdx) => openIdx == index)
      : false

  const [menuOpen, setOpen] = useState(isOpend)
  const classes = classNames('cv-menu-item cv-menu-submenu-item', className, {
    'is-active': context.index === index,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical',
  })

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(!menuOpen)
  }

  let timer: any
  const handleMouse = (
    e: React.MouseEvent,
    toggle: boolean,
    immetiate?: boolean
  ) => {
    clearTimeout(timer)
    e.preventDefault()
    if (immetiate) {
      setOpen(toggle)
    } else {
      timer = setTimeout(() => {
        setOpen(toggle)
      }, 250)
    }
  }
  const clickEvents =
    context.mode === 'vertical'
      ? {
          onClick: (e: React.MouseEvent) => handleClick(e),
        }
      : {}
  const hoverEvents =
    context.mode !== 'vertical'
      ? {
          onMouseEnter: (e: React.MouseEvent) => handleMouse(e, true),
          onMouseLeave: (e: React.MouseEvent) => handleMouse(e, false),
        }
      : {}
  const renderChildren = () => {
    const subMenuClasses = classNames('cv-menu-submenu', {
      'cv-menu-opened': menuOpen,
    })
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, { index: `${index}-${i}` })
      } else {
        console.warn(
          'Warning: SubMenu has a child which is not a MenuItem component'
        )
      }
    })

    return (
      <Transition in={menuOpen} timeout={300} animation="zoom-in-top">
        <ul className={subMenuClasses}>{childrenComponent}</ul>
      </Transition>
    )
  }

  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="cv-menu-submenu-title" {...clickEvents}>
        {title}
        <Icon icon="angle-down" className="arrow-icon" />
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu
