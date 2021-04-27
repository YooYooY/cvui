import React from 'react';
import Button from './button';
import Card from '../../components/Card/card';
import Code from '../../components/Code/code';
var Example = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "cv-example" },
            React.createElement(Card, { title: "\u9ED8\u8BA4 Button", type: "inline" },
                React.createElement(Button, { onClick: function () { return alert('clicked'); } }, " default button "),
                React.createElement(Code, null, "<Button onClick={() => alert('clicked')}> default button </Button>")),
            React.createElement(Card, { title: "\u4E0D\u540C\u5C3A\u5BF8 Button", type: "inline" },
                React.createElement(Button, { size: "lg" }, " large button "),
                "\u00A0",
                React.createElement(Button, null, " normal button "),
                "\u00A0",
                React.createElement(Button, { size: "sm" }, " small button "),
                React.createElement(Code, null, "<Button size=\"lg\"> large button </Button>\n<Button> normal button </Button>\n<Button size=\"sm\"> small button </Button>")),
            React.createElement(Card, { title: "\u4E0D\u540C\u7C7B\u578B Button", type: "inline" },
                "\u00A0",
                React.createElement(Button, { btnType: "primary" }, " primary button "),
                "\u00A0",
                React.createElement(Button, { btnType: "danger" }, " danger button "),
                React.createElement(Button, { btnType: "link", href: "youyoucuocuo.top" }, "link button"),
                React.createElement(Code, null, "<Button btnType=\"primary\"> primary button </Button>\n<Button btnType=\"danger\"> danger button </Button>\n<Button btnType=\"link\" href=\"youyoucuocuo.top\">link button</Button>")))));
};
Example.defaultProps = [
    {
        属性: 'className',
        类型: 'string',
        required: '-',
        默认值: '-',
        描述: '',
    },
    {
        属性: 'disabled',
        类型: 'boolean',
        required: '-',
        默认值: 'false',
        描述: '设置 Button 禁用',
    },
    {
        属性: 'size',
        类型: '"lg" | "sm"',
        required: '-',
        默认值: '-',
        描述: '设置 Button 尺寸',
    },
    {
        属性: 'btnType',
        类型: '"default" | "danger" | "link" | "primary"',
        required: '-',
        默认值: 'default',
        描述: '设置 Button 的类型',
    },
    {
        属性: 'href',
        类型: 'string',
        required: '-',
        默认值: '-',
        描述: '当 btnType 类型为link时，渲染为a标签添加',
    },
];
export default Example;
