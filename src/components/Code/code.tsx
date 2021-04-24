import React, { FC, useState } from 'react'
import Highlight from 'react-highlight'
import useClassName from '../../hooks/useClassName'

export interface ICodeProps {
    type?: string,
    open?: boolean
}

const Code: FC<ICodeProps> = (props) => {
  const [visible, setVisible] = useState(props.open)

  const classes = useClassName('cv-code', { hidden: !visible })
    
  return (
    <div className={classes}>
      <button
        className="cv-code-control-btn"
        onClick={() => setVisible((visible) => !visible)}
      >
        code
      </button>
      <Highlight className={props.type}>{props.children}</Highlight>
    </div>
  )
}

Code.defaultProps = {
    type:"html"
}

export default Code
