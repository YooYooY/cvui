import React from 'react';
import { InputProps } from '../../Input/input';
interface DataSourceObject {
    value: string;
}
export declare type DataSourceType<T = any> = T & DataSourceObject;
export declare type RenderOption<T> = (dataSource: DataSourceType<T>) => string | React.ReactElement;
export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
    onSelect?: (item: DataSourceType) => void;
    fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
    renderOption?: (dataSource: DataSourceType) => string | React.ReactElement;
    renderLoading?: () => string | React.ReactElement;
    debounceDelay?: number;
}
declare const AutoComplete: React.FC<AutoCompleteProps>;
export default AutoComplete;
