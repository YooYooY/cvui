import React, { CSSProperties, FC } from 'react';
declare type MenuMode = 'horizontal' | 'vertical';
export interface MenuProps {
    defaultIndex?: string | number;
    className?: string;
    mode?: MenuMode;
    style?: CSSProperties;
    onSelect?: (selectedIndex: string) => void;
    defaultOpenSubMenus?: Array<number | string>;
}
export interface IMenuContext extends Pick<MenuProps, 'onSelect' | 'mode' | 'defaultOpenSubMenus'> {
    index: string | number;
}
export declare const MenuContext: React.Context<IMenuContext>;
export declare const Menu: FC<MenuProps>;
export default Menu;
