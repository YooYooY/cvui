import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from 'react'
import useClassName from '../../hooks/useClassName'

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
  className: string
  disabled: boolean
  size: ButtonSize
  btnType: ButtonType
  children: React.ReactChild
  href: string
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

export const Button: FC<ButtonProps> = (props) => {
  const {
    btnType,
    className,
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props

  const classes = useClassName('cv-btn', className, {
    [`cv-btn-status-${btnType}`]: btnType,
    [`cv-btn-size-${size}`]: size,
    disabled: btnType === 'link' && disabled,
  })

  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType:"default"
}

export default Button
