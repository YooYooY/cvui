import React, { FC } from 'react';
export declare type TabsType = 'line' | 'card';
export declare type ItemType = {
    label: any;
    disabled: boolean | undefined;
};
export interface TabsProps {
    defaultIndex?: string;
    className?: string;
    onSelect?: (selectIndex: string) => void;
    type?: TabsType;
}
interface TabsContext {
    selectIndex: string;
    onSelect?: (selectIndex: string) => void;
}
export declare const tabContext: React.Context<TabsContext>;
declare const Tabs: FC<TabsProps>;
export default Tabs;
