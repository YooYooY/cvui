import React from 'react';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
declare type AlertType = 'success' | 'primary' | 'danger' | 'warning';
interface AlertBase {
    title?: string;
    description?: string;
    type?: AlertType;
    onClose?: () => void;
    closable?: boolean;
}
export declare type AlertProps = AlertBase & Omit<CSSTransitionProps, 'title'>;
declare const Alert: React.FC<AlertProps>;
export default Alert;
