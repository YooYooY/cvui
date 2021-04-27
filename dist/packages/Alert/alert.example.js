import React from 'react';
import Alert from './alert';
import Card from '../../components/Card/card';
import Code from '../../components/Code/code';
var Example = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "cv-example" },
            React.createElement(Card, { title: "\u9ED8\u8BA4 Alert", type: "inline" },
                React.createElement(Alert, { title: "\u63D0\u793A\u6807\u9898" }),
                React.createElement(Code, null, "<Alert title=\"this is alert!\" />")),
            React.createElement(Card, { title: "\u526F\u6807\u9898 Alert", type: "inline" },
                React.createElement(Alert, { title: "\u63D0\u793A\u6807\u9898", type: "primary", onClose: function () { return alert('close'); }, description: "this is a long description" }),
                React.createElement(Code, null, "\n<Alert\n    title=\"\u63D0\u793A\u6807\u9898\"\n    type=\"primary\"\n    onClose={()=> alert('close')}\n    description=\"this is a long description\"\n/>")),
            React.createElement(Card, { title: "\u72B6\u6001 Alert", type: "inline" },
                React.createElement(Alert, { title: "\u63D0\u793A\u6807\u9898", type: "primary" }),
                React.createElement(Alert, { title: "\u63D0\u793A\u6807\u9898", type: "danger" }),
                React.createElement(Alert, { title: "\u63D0\u793A\u6807\u9898", type: "success" }),
                React.createElement(Alert, { title: "\u63D0\u793A\u6807\u9898", type: "warning" }),
                React.createElement(Code, null, "\n<Alert title=\"\u63D0\u793A\u6807\u9898\" type=\"primary\"/>\n<Alert title=\"\u63D0\u793A\u6807\u9898\" type=\"danger\"/>\n<Alert title=\"\u63D0\u793A\u6807\u9898\" type=\"success\"/>\n<Alert title=\"\u63D0\u793A\u6807\u9898\" type=\"warning\"/>\n")))));
};
Example.defaultProps = [
    {
        属性: 'title',
        类型: 'string',
        required: '-',
        默认值: '-',
        描述: '标题',
    },
    {
        属性: 'description',
        类型: 'string',
        required: '-',
        默认值: '-',
        描述: '副标题',
    },
    {
        属性: 'type',
        类型: "'success' | 'primary' | 'danger' | 'warning'",
        required: '-',
        默认值: 'primary',
        描述: '设置 Button 尺寸',
    },
    {
        属性: 'onClose',
        类型: 'Function',
        required: '-',
        默认值: '-',
        描述: '关闭回调函数',
    },
    {
        属性: 'closable',
        类型: 'boolean',
        required: 'true',
        默认值: '-',
        描述: '是否显示关闭按钮',
    },
];
export default Example;
