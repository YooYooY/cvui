import React, { FC } from 'react';
export interface MenuItemProps {
    index?: string | number;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
declare const MenuItem: FC<MenuItemProps>;
export default MenuItem;
