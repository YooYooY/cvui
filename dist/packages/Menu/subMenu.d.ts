import { FC } from 'react';
export interface SubMenuProps {
    index?: string | number;
    title: string;
    className?: string;
}
declare const SubMenu: FC<SubMenuProps>;
export default SubMenu;
