import React from 'react'
import { ThemeProps } from '../Icon/icon'

export interface ProgressProps {
  precent: number
  strokeHeight?: number
  showText?: boolean
  styles?: React.CSSProperties
  theme?: ThemeProps
}

const Progress:React.FC<ProgressProps> = (props) => {
    
    const {
        precent,
        strokeHeight,
        showText,
        styles,
        theme
    } = props;
    
    return (
      <div className="cv-progress-bar" style={styles}>
        <div
          className="cv-progress-bar-outer"
          style={{ height: `${strokeHeight}` }}
        >
            <div className={`cv-progress-bar-inner color-${theme}`} style={{width:`${precent}%`}}></div>
            {showText && <span className="cv-inner-text">{`${precent}%`}</span>}
        </div>
      </div>
    )
}

export default Progress
