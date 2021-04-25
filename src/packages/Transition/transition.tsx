import React from 'react'
import CSSTransition, {
  CSSTransitionProps,
} from 'react-transition-group/CSSTransition'

type AnimationName =
  | 'fade-in'
  | 'zoom-in-top'
  | 'zoom-in-left'
  | 'zoom-in-bottom'
  | 'zoom-in-right'

interface TransitionBase {
  animation?: AnimationName
  wrapper?: boolean
  classNames?: string
  timeout?: number
  unmountOnExit?: boolean
}

type TransitionProps = TransitionBase | CSSTransitionProps<HTMLElement>

const Transition: React.FC<TransitionProps> = (props) => {
  const {
    children,
    classNames,
    timeout = 30,
    animation,
    wrapper,
    unmountOnExit,
    ...restProps
  } = props
  
  return (
    <CSSTransition
      classNames={classNames ? classNames : animation}
      timeout={timeout}
      unmountOnExit={unmountOnExit}
      {...restProps}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  )
}

Transition.defaultProps = {
  animation: 'fade-in',
  unmountOnExit: true,
  timeout: 300,
}

export default Transition
