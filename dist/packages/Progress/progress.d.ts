import React from 'react';
import { ThemeProps } from '../Icon/icon';
export interface ProgressProps {
    precent: number | string;
    strokeHeight?: number;
    showText?: boolean;
    styles?: React.CSSProperties;
    theme?: ThemeProps;
    stripe?: boolean;
    stripeAni?: boolean;
}
declare const Progress: React.FC<ProgressProps>;
export default Progress;
