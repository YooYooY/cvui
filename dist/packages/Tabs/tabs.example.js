import React from 'react';
import TabsItem from './tabsItem';
import Tabs from './tabs';
import Card from '../../components/Card/card';
import Icon from '../Icon/icon';
import Code from '../../components/Code/code';
import Table from '../../components/Table/table';
var TabsDefaultProps = [
    {
        属性: 'defaultIndex',
        类型: 'string',
        required: '-',
        默认值: '-',
        描述: '默认选中索引值',
    },
    {
        属性: 'className',
        类型: 'string',
        required: '-',
        默认值: '',
        描述: '类名',
    },
    {
        属性: 'onSelect',
        类型: '(selectIndex: string) => void',
        required: '-',
        默认值: '',
        描述: '选中回调函数',
    },
    {
        属性: 'type',
        类型: "'line' | 'card'",
        required: '-',
        默认值: '',
        描述: '选项卡样式',
    },
];
var TabsItemDefaultProps = [
    {
        属性: 'label',
        类型: 'any',
        required: '-',
        默认值: '-',
        描述: '标题，可返回字符串或符合的React.Element',
    },
    {
        属性: 'disabled',
        类型: 'boolean',
        required: '-',
        默认值: 'false',
        描述: '禁用',
    },
    {
        属性: 'className',
        类型: 'string',
        required: '-',
        默认值: '-',
        描述: '类名',
    },
];
var Example = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "cv-example" },
            React.createElement(Card, { title: "\u57FA\u7840\u9009\u9879\u5361" },
                React.createElement(Tabs, null,
                    React.createElement(TabsItem, { label: "tab1" }, "content 1"),
                    React.createElement(TabsItem, { label: "tab2" }, "content 2"),
                    React.createElement(TabsItem, { label: "tab3", disabled: true }, "content 3"),
                    React.createElement(TabsItem, { label: "tab4" }, "content 4")),
                React.createElement(Code, null, "<Tabs>\n    <TabsItem label=\"tab1\">content 1</TabsItem>\n    <TabsItem label=\"tab2\">content 2</TabsItem>\n    <TabsItem label=\"tab3\" disabled>content 3</TabsItem>\n    <TabsItem label=\"tab4\">content 4</TabsItem>\n</Tabs>\n")),
            React.createElement(Card, { title: "\u9009\u9879\u5361\u6837\u5F0F" },
                React.createElement(Tabs, { type: "card" },
                    React.createElement(TabsItem, { label: "tab1" }, "content 1"),
                    React.createElement(TabsItem, { label: "tab2" }, "content 2"),
                    React.createElement(TabsItem, { label: "tab3", disabled: true }, "content 3"),
                    React.createElement(TabsItem, { label: "tab4" }, "content 4")),
                React.createElement(Code, null, "<Tabs type=\"card\">\n    <TabsItem label=\"tab1\">content 1</TabsItem>\n    <TabsItem label=\"tab2\">content 2</TabsItem>\n    <TabsItem label=\"tab3\" disabled>content 3</TabsItem>\n    <TabsItem label=\"tab4\">content 4</TabsItem>\n</Tabs>\n")),
            React.createElement(Card, { title: "\u81EA\u5B9A\u4E49\u9009\u9879\u5361" },
                React.createElement(Tabs, { type: "card" },
                    React.createElement(TabsItem, { label: React.createElement("div", null,
                            React.createElement(Icon, { icon: "thumbs-up" }),
                            " ",
                            React.createElement("span", null, "test")) }, "content 1"),
                    React.createElement(TabsItem, { label: "tab2" }, "content 2"),
                    React.createElement(TabsItem, { label: "tab3", disabled: true }, "content 3"),
                    React.createElement(TabsItem, { label: "tab4" }, "content 4")),
                React.createElement(Code, null, "<Tabs type=\"card\">\n    <TabsItem label={<div><Icon icon=\"thumbs-up\" /> <span>test</span></div>}>\n    content 1\n    </TabsItem>\n    <TabsItem label=\"tab2\">content 2</TabsItem>\n    <TabsItem label=\"tab3\" disabled>content 3</TabsItem>\n    <TabsItem label=\"tab4\">content 4</TabsItem>\n</Tabs>\n"))),
        React.createElement("h3", null, "Tabs Props"),
        React.createElement(Table, { data: TabsDefaultProps }),
        React.createElement("h3", null, "TabsItem Props"),
        React.createElement(Table, { data: TabsItemDefaultProps })));
};
export default Example;
