import React from 'react'
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import useClassName from '../../hooks/useClassName'


export type ThemeProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'

export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps
}

const Icon: React.FC<IconProps> = ({ className, theme, ...restProps }) => {
  const classes = useClassName('cv-icon', className, {
    [`cv-icon-status-${theme}`]: theme,
  })

  return (
    <>
      <FontAwesomeIcon className={classes} {...restProps} />
    </>
  )
}

export default Icon
