import React from 'react'
import useClassName from '../../hooks/useClassName';
import { ThemeProps } from '../Icon/icon'

export interface ProgressProps {
  precent: number | string,
  strokeHeight?: number
  showText?: boolean
  styles?: React.CSSProperties
  theme?: ThemeProps
  stripe?: boolean
  stripeAni?: boolean
}

const Progress: React.FC<ProgressProps> = (props) => {
  const {
    precent,
    strokeHeight,
    showText,
    styles,
    theme,
    stripe,
    stripeAni,
  } = props

  
  const classes = useClassName('cv-progress', {
    [`cv-progress-status-${theme}`]: theme,
    'cv-progress-stripe': stripe,
    'cv-progress-stripe-active': stripe && stripeAni,
  })

  return (
    <div className={classes} style={styles}>
      <div className="cv-progress-outer" style={{ height: `${strokeHeight}px` }}>
        <div
          className="cv-progress-inner"
          style={{ transform: `translateX(${precent}%)` }}
        ></div>
      </div>
        {showText && <span className="cv-progress-text">{`${precent}%`}</span>}
    </div>
  )
}

Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: 'primary',
  stripe: false,
  stripeAni: false
}

export default Progress
