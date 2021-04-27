import React from 'react';
import Card from '../../components/Card/card';
import Select from './select';
import Option from './option';
import Code from '../../components/Code/code';
import Markdown from '../../components/Markdown/markdown';
import Table from '../../components/Table/table';
var options = [
    { value: 'apple', label: '苹果' },
    { value: 'watermelon', label: '西瓜' },
    { value: 'mango', label: '芒果' },
];
var SelectDefaultProps = [
    {
        属性: 'name',
        类型: 'string',
        required: '-',
        默认值: '-',
        描述: '',
    },
    {
        属性: 'multiple',
        类型: 'boolean',
        required: '-',
        默认值: 'false',
        描述: '是否多选',
    },
    {
        属性: 'defaultValue',
        类型: "string | string[]",
        required: '-',
        默认值: '',
        描述: '默认选项',
    },
    {
        属性: 'placeholder',
        类型: 'string',
        required: '-',
        默认值: '-',
        描述: 'input placeholder',
    },
    {
        属性: 'onChange',
        类型: "(selectedValue: SelectOption,selectedValues: SelectOption[]) => void",
        required: '-',
        默认值: '-',
        描述: '选中触发函数',
    },
    {
        属性: 'onVisibleChange',
        类型: "(visible: boolean) => void",
        required: '-',
        默认值: '-',
        描述: '下拉框显示触发函数',
    },
];
var OptionDefaultProps = [
    {
        属性: 'value',
        类型: 'string',
        required: '-',
        默认值: '-',
        描述: '默认值',
    },
    {
        属性: 'label',
        类型: 'string',
        required: '-',
        默认值: '-',
        描述: '显示值',
    },
    {
        属性: 'disabled',
        类型: 'boolean',
        required: '-',
        默认值: '-',
        描述: '禁用',
    },
];
var Example = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(Markdown, null, "\n\u5F15\u5165\u7EC4\u4EF6:\n~~~js\nimport { Select } from \"cvui\";\nconst { Option } = Select;\n~~~\n"),
        React.createElement("div", { className: "cv-example" },
            React.createElement(Card, { title: "Select example", type: "inline" },
                React.createElement(Select, { placeholder: "\u8BF7\u9009\u62E9", onChange: function (item) { return alert(item.value); } }, options.map(function (item) { return (React.createElement(Option, { value: item.value, key: item.value }, item.label)); })),
                React.createElement(Code, { open: true }, "<Select placeholder=\"\u8BF7\u9009\u62E9\" onChange={(item) => alert(item.value)}>\n  <Option value=\"apple\">\u82F9\u679C</Option>\n  <Option value=\"watermelon\">\u897F\u74DC</Option>\n  <Option value=\"mango\">\u8292\u679C</Option>\n</Select>\n")),
            React.createElement(Card, { title: "\u9ED8\u8BA4\u503C \u4E0E \u7981\u7528\u9009\u9879", type: "inline" },
                React.createElement(Select, { placeholder: "\u9ED8\u8BA4\u503C", defaultValue: "apple" }, options.map(function (item) { return (React.createElement(Option, { value: item.value, disabled: item.value === 'mango', key: item.value }, item.label)); })),
                React.createElement(Code, { open: true }, "<Select placeholder=\"\u9ED8\u8BA4\u503C\" defaultValue=\"apple\">\n  <Option value=\"apple\">\u82F9\u679C</Option>\n  <Option value=\"watermelon\">\u897F\u74DC</Option>\n  <Option value=\"mango\" disabled>\u8292\u679C</Option>\n</Select>\n")),
            React.createElement(Card, { title: "Select \u591A\u9009", type: "inline" },
                React.createElement(Select, { placeholder: "\u53EF\u4EE5\u591A\u9009\u54E6~", multiple: true, defaultValue: ['apple', 'mango'] }, options.map(function (item) { return (React.createElement(Option, { value: item.value, key: item.value }, item.label)); })),
                React.createElement(Code, { open: true }, "<Select placeholder=\"\u53EF\u4EE5\u591A\u9009\u54E6~\" multiple defaultValue={['apple', 'mango']}>\n  <Option value=\"apple\">\u82F9\u679C</Option>\n  <Option value=\"watermelon\">\u897F\u74DC</Option>\n  <Option value=\"mango\">\u8292\u679C</Option>\n</Select>\n")),
            React.createElement(Card, { title: "Select \u7981\u7528", type: "inline" },
                React.createElement(Select, { placeholder: "disabled", disabled: true, defaultValue: ['apple', 'mango'] }, options.map(function (item) { return (React.createElement(Option, { value: item.value, key: item.value }, item.label)); })),
                React.createElement(Code, { open: true }, "<Select placeholder=\"disabled\" disabled defaultValue={['apple', 'mango']}>\n  <Option value=\"apple\">\u82F9\u679C</Option>\n  <Option value=\"watermelon\">\u897F\u74DC</Option>\n  <Option value=\"mango\">\u8292\u679C</Option>\n</Select>\n"))),
        React.createElement("h3", null, "Select Props"),
        React.createElement(Table, { data: SelectDefaultProps }),
        React.createElement("h3", null, "Option Props"),
        React.createElement(Table, { data: OptionDefaultProps })));
};
export default Example;
