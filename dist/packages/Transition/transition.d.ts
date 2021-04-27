import React from 'react';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
declare type AnimationName = 'fade-in' | 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right';
interface TransitionBase {
    animation?: AnimationName;
    wrapper?: boolean;
    classNames?: string;
    timeout?: number;
    unmountOnExit?: boolean;
}
declare type TransitionProps = TransitionBase & CSSTransitionProps<HTMLElement>;
declare const Transition: React.FC<TransitionProps>;
export default Transition;
