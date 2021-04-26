import React, {
  InputHTMLAttributes,
  ReactElement,
  ChangeEventHandler,
} from 'react'
import useClassName from '../../hooks/useClassName'
import Icon from '../Icon/icon'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

type InputSize = 'lg' | 'sm'

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  disabled?: boolean
  size?: InputSize
  icon?: IconProp
  prepend?: string | ReactElement
  append?: string | ReactElement
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const Input: React.FC<InputProps> = (props) => {
  let { disabled, size, icon, prepend, append, style, ...restProps } = props

  const classes = useClassName('cv-input', {
    [`cv-input-size-${size}`]: size,
    'cv-input-disabled': disabled,
    'cv-input-group-icon': !!icon,
    'cv-input-group-prepend': !!prepend,
    'cv-input-group-append': !!append,
  })

  return (
    <div className={classes} style={style}>
      {prepend && <div className="cv-input-prepend">{prepend}</div>}
      {icon && (
        <div className="cv-input-icon">
          <Icon icon={icon} title={`title-${icon}`} />
        </div>
      )}
      <input className="cv-input-inner" disabled={disabled} {...restProps} />
      {append && <div className="cv-input-append">{append}</div>}
    </div>
  )
}

export default Input
