import React from 'react'
import CSSTransition, {
  CSSTransitionProps,
} from '_@types_react-transition-group@4.4.1@@types/react-transition-group/CSSTransition'

type AnimationName =
  | 'zoom-in-top'
  | 'zoom-in-left'
  | 'zoom-in-bottom'
  | 'zoom-in-right'

interface TransitionBase {
  animation?: AnimationName
  warapper?: boolean
}

type TransitionProps = TransitionBase & CSSTransitionProps

const Transition: React.FC<TransitionProps> = (props) => {
  const { children, classNames, animation, wrapper, ...restProps } = props

  return (
    <CSSTransition
      classNames={classNames ? classNames : animation}
      {...restProps}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  )
}

Transition.defaultProps = {
    unmountOnExit: true,
    appear: true
}

export default Transition
