import React from 'react';
import { SelectOption } from './option';
export interface SelectProps {
    name?: string;
    multiple?: boolean;
    disabled?: boolean;
    defaultValue?: string | string[];
    placeholder?: string;
    onChange?: (selectedValue: SelectOption, selectedValues: SelectOption[]) => void;
    onVisibleChange?: (visible: boolean) => void;
}
declare const Select: React.FC<SelectProps>;
export default Select;
