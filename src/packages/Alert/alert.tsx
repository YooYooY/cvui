import React, { useState } from 'react'
import useClassName from '../../hooks/useClassName'
import Icon from '../Icon/icon'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AlertType = 'success' | 'primary' | 'danger' | 'warning'

interface AlertBase {
  title?: string
  description?: string
  type?: AlertType
  onClose?: () => void
  closable?: boolean
}

export type AlertProps = AlertBase & Omit<CSSTransitionProps, 'title'>

const Alert: React.FC<AlertProps> = (props) => {
  const [visible, setVisible] = useState(true)
  const { title, description, type, onClose, closable } = props

  const classes = useClassName('cv-alert', 'cv-alert-status-' + type)

  const handleClose = () => {
    setVisible((visible) => !visible)
    onClose && onClose()
  }

  return (
    <>
      <CSSTransition
        in={visible}
        classNames="cv-alert"
        timeout={300}
        unmountOnExit
      >
        <dl className={classes}>
          <dt>
            <h6 className="cv-alert-title">{title}</h6>
            {closable && (
              <span
                className="cv-alert-close-btn"
                data-testid="test-close-btn"
                onClick={handleClose}
              >
                <Icon icon={faTimes} />
              </span>
            )}
          </dt>
          {description && <dd>{description}</dd>}
        </dl>
      </CSSTransition>
    </>
  )
}

Alert.defaultProps = {
  title: '',
  type: 'primary',
  closable: true,
}

export default Alert
