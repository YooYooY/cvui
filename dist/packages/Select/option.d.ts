import React from 'react';
export interface OptionProps {
    value: string;
    label?: string;
    disabled?: boolean;
    selectKeys?: string[];
    index?: string | number;
    onSelect?: (item: SelectOption) => void;
}
export interface SelectOption {
    value: string;
    label: string | React.ReactNode | React.ReactElement;
}
declare const Option: React.FC<OptionProps>;
export default Option;
