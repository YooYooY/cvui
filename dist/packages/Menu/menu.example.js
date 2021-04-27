import React from 'react';
import Menu from './menu';
import MenuItem from './menuItem';
import SubMenu from './subMenu';
import Card from '../../components/Card/card';
import Code from '../../components/Code/code';
import Table from '../../components/Table/table';
import Markdown from '../../components/Markdown/markdown';
var menuDefaultProps = [
    {
        属性: 'defaultIndex',
        类型: 'string | number',
        required: '-',
        默认值: '-',
        描述: '默认选中',
    },
    {
        属性: 'className',
        类型: 'string',
        required: '-',
        默认值: '-',
        描述: '样式名',
    },
    {
        属性: 'mode',
        类型: "'horizontal' | 'vertical'",
        required: '-',
        默认值: 'horizontal',
        描述: '横向或纵向显示',
    },
    {
        属性: 'style',
        类型: "CSSProperties",
        required: '-',
        默认值: '-',
        描述: '样式',
    },
    {
        属性: 'onSelect',
        类型: "(selectedIndex: string) => void",
        required: '-',
        默认值: '-',
        描述: '选中回调函数方法',
    },
    {
        属性: 'defaultOpenSubMenus',
        类型: "Array<number | string>",
        required: '-',
        默认值: '-',
        描述: '默认打开menu',
    },
];
var menuItemDefaultProps = [
    {
        属性: 'index',
        类型: 'string | number',
        required: '-',
        默认值: '-',
        描述: '索引',
    },
    {
        属性: 'disabled',
        类型: 'boolean',
        required: '-',
        默认值: '',
        描述: '禁用',
    },
    {
        属性: 'className',
        类型: 'string',
        required: '-',
        默认值: '',
        描述: '样式名',
    },
    {
        属性: 'style',
        类型: "CSSProperties",
        required: '-',
        默认值: '-',
        描述: '样式',
    },
];
var subMenuDefaultProps = [
    {
        属性: 'index',
        类型: 'string | number',
        required: '-',
        默认值: 'false',
        描述: '索引',
    },
    {
        属性: 'title',
        类型: 'string',
        required: '-',
        默认值: '',
        描述: '标题',
    },
    {
        属性: 'className',
        类型: 'string',
        required: '-',
        默认值: '',
        描述: '样式名',
    }
];
var Example = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(Markdown, null, "\n### \u5F15\u5165\u65B9\u5F0F\n\n~~~jsx\nimport { Menu } from \"cvui;\nconst { MenuItem, SubMenu } = Menu;\n~~~\n\n"),
        React.createElement("div", { className: "cv-example" },
            React.createElement(Card, { title: "base Menu" },
                React.createElement(Menu, { defaultIndex: "0", defaultOpenSubMenus: [], mode: "horizontal", onSelect: function (selectedIndex) {
                        console.log(selectedIndex);
                    } },
                    React.createElement(MenuItem, null, "cool link"),
                    React.createElement(MenuItem, null, "cool link 2"),
                    React.createElement(MenuItem, { disabled: true }, "disabled"),
                    React.createElement(SubMenu, { title: "\u4E0B\u62C9\u9009\u9879" },
                        React.createElement(MenuItem, null, "\u4E0B\u62C9\u9009\u9879\u4E00"),
                        React.createElement(MenuItem, null, "\u4E0B\u62C9\u9009\u9879\u4E8C"))),
                React.createElement(Code, null, "<Menu\n    defaultIndex=\"0\"\n    defaultOpenSubMenus={[]}\n    mode=\"horizontal\"\n    onSelect={(selectedIndex) => console.log(selectedIndex)}\n>\n    <MenuItem>cool link</MenuItem>\n    <MenuItem>cool link 2</MenuItem>\n    <MenuItem disabled>disabled</MenuItem>\n    <SubMenu title=\"\u4E0B\u62C9\u9009\u9879\">\n        <MenuItem>\u4E0B\u62C9\u9009\u9879\u4E00</MenuItem>\n        <MenuItem>\u4E0B\u62C9\u9009\u9879\u4E8C</MenuItem>\n    </SubMenu>\n</Menu>\n")),
            React.createElement(Card, { title: "\u7EB5\u5411 menu" },
                React.createElement(Menu, { defaultIndex: "0", defaultOpenSubMenus: [], mode: "vertical", onSelect: function (selectedIndex) {
                        console.log(selectedIndex);
                    } },
                    React.createElement(MenuItem, null, "cool link"),
                    React.createElement(MenuItem, null, "cool link 2"),
                    React.createElement(MenuItem, { disabled: true }, "disabled"),
                    React.createElement(SubMenu, { title: "\u4E0B\u62C9\u9009\u9879" },
                        React.createElement(MenuItem, null, "\u4E0B\u62C9\u9009\u9879\u4E00"),
                        React.createElement(MenuItem, null, "\u4E0B\u62C9\u9009\u9879\u4E8C"))),
                React.createElement(Code, null, "<Menu\n    defaultIndex=\"0\"\n    defaultOpenSubMenus={[]}\n    mode=\"vertical\"\n    onSelect={(selectedIndex) => console.log(selectedIndex)}\n>\n    <MenuItem>cool link</MenuItem>\n    <MenuItem>cool link 2</MenuItem>\n    <MenuItem disabled>disabled</MenuItem>\n    <SubMenu title=\"\u4E0B\u62C9\u9009\u9879\">\n        <MenuItem>\u4E0B\u62C9\u9009\u9879\u4E00</MenuItem>\n        <MenuItem>\u4E0B\u62C9\u9009\u9879\u4E8C</MenuItem>\n    </SubMenu>\n</Menu>\n")),
            React.createElement(Card, { title: "\u9ED8\u8BA4\u5C55\u5F00 menu" },
                React.createElement(Menu, { defaultIndex: "0", defaultOpenSubMenus: [2], mode: "vertical", onSelect: function (selectedIndex) {
                        console.log(selectedIndex);
                    } },
                    React.createElement(MenuItem, null, "cool link"),
                    React.createElement(MenuItem, null, "cool link 2"),
                    React.createElement(SubMenu, { title: "\u4E0B\u62C9\u9009\u9879" },
                        React.createElement(MenuItem, null, "\u4E0B\u62C9\u9009\u9879\u4E00"),
                        React.createElement(MenuItem, null, "\u4E0B\u62C9\u9009\u9879\u4E8C"))),
                React.createElement(Code, null, "<Menu\n    defaultIndex=\"0\"\n    defaultOpenSubMenus={['2']}\n    mode=\"vertical\"\n    onSelect={(selectedIndex) => console.log(selectedIndex)}\n>\n    <MenuItem>cool link</MenuItem>\n    <MenuItem>cool link 2</MenuItem>\n    <SubMenu title=\"\u4E0B\u62C9\u9009\u9879\">\n        <MenuItem>\u4E0B\u62C9\u9009\u9879\u4E00</MenuItem>\n        <MenuItem>\u4E0B\u62C9\u9009\u9879\u4E8C</MenuItem>\n    </SubMenu>\n</Menu>\n"))),
        React.createElement("h3", null, "Menu"),
        React.createElement(Table, { data: menuDefaultProps }),
        React.createElement("h3", null, "MenuItem"),
        React.createElement(Table, { data: menuItemDefaultProps }),
        React.createElement("h3", null, "SubMenu"),
        React.createElement(Table, { data: subMenuDefaultProps })));
};
export default Example;
