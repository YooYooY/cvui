import { FC } from 'react';
export interface TabsItemProps {
    index?: string;
    label: any;
    disabled?: boolean;
    className?: string;
}
declare const TabsItem: FC<TabsItemProps>;
export default TabsItem;
