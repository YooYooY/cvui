import { FC } from 'react';
import { TabsItemProps } from './tabsItem';
import { TabsProps } from './tabs';
export declare type ITabsComponent = FC<TabsProps> & {
    Item: FC<TabsItemProps>;
};
declare const TransTabs: ITabsComponent;
export default TransTabs;
