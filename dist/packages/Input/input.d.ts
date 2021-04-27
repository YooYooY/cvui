import React, { InputHTMLAttributes, ReactElement, ChangeEventHandler } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
declare type InputSize = 'lg' | 'sm';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    disabled?: boolean;
    size?: InputSize;
    icon?: IconProp;
    prepend?: string | ReactElement;
    append?: string | ReactElement;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
declare const Input: React.FC<InputProps>;
export default Input;
