import React, { useState } from 'react';
import Input from './input';
import Card from '../../components/Card/card';
import Code from '../../components/Code/code';
export default function Example() {
    var _a = useState(''), value = _a[0], setValue = _a[1];
    var handleChange = function (e) { return setValue(e.target.value); };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "cv-example" },
            React.createElement(Card, { title: "\u9ED8\u8BA4 Input", type: "inline" },
                React.createElement(Input, { placeholder: "input value", value: value, onChange: handleChange }),
                React.createElement("span", null, value),
                React.createElement(Code, { type: "jsx" }, "const [value, setValue] = useState('')\nconst handleChange = (e: any) => setValue(e.target.value)\n \n<Input placeholder=\"input value\" value={value} onChange={handleChange} />")),
            React.createElement(Card, { title: "disabled Input", type: "inline" },
                React.createElement(Input, { disabled: true, placeholder: "disabled input" }),
                React.createElement(Code, null, "<Input disabled placeholder=\"disabled input\" />")),
            React.createElement(Card, { title: "\u5E26\u56FE\u6807 Input", type: "inline" },
                React.createElement(Input, { icon: "home", placeholder: "input value" }),
                React.createElement(Code, null, "<Input icon=\"home\" placeholder=\"input value\" />")),
            React.createElement(Card, { title: "\u524D\u7F00 Input", type: "inline" },
                React.createElement(Input, { prepend: "https://", placeholder: "input value" }),
                React.createElement(Code, null, "<Input prepend=\"https://\" placeholder=\"input value\" />")),
            React.createElement(Card, { title: "\u540E\u7F00 Input", type: "inline" },
                React.createElement(Input, { append: React.createElement("div", null, ".com"), placeholder: "input value" }),
                React.createElement(Code, null, "<Input append=\".com\" placeholder=\"input value\" />")),
            React.createElement(Card, { title: "\u4E0D\u540C\u5927\u5C0F Input", type: "inline" },
                React.createElement(Input, { prepend: "prefix", append: "extendname", placeholder: "small input", size: "sm" }),
                React.createElement(Input, { prepend: "prefix", append: React.createElement("div", null, "extendname"), placeholder: "input value" }),
                React.createElement(Input, { prepend: "prefix", append: "extendname", placeholder: "large input", size: "lg" }),
                React.createElement(Code, null, "<Input prepend=\"prefix\" append=\"extendname\" placeholder=\"small input\" size=\"sm\" />\n\n<Input prepend=\"prefix\" append=\"extendname\" placeholder=\"input value\" />\n\n<Input prepend=\"prefix\" append=\"extendname\" placeholder=\"large input\" size=\"lg\" />")))));
}
Example.defaultProps = [
    {
        ??????: 'disabled',
        ??????: 'boolean',
        required: '-',
        ?????????: 'false',
        ??????: '??????',
    },
    {
        ??????: 'size',
        ??????: "'lg' | 'sm'",
        required: '-',
        ?????????: 'normal',
        ??????: 'input??????',
    },
    {
        ??????: 'icon',
        ??????: "IconProp",
        required: '-',
        ?????????: '-',
        ??????: '??????',
    },
    {
        ??????: 'prepend',
        ??????: 'string | ReactElement',
        required: '-',
        ?????????: '-',
        ??????: '??????',
    },
    {
        ??????: 'append',
        ??????: 'string | ReactElement',
        required: '-',
        ?????????: '-',
        ??????: '??????',
    },
    {
        ??????: 'onChange',
        ??????: 'ChangeEventHandler<HTMLInputElement>',
        required: '-',
        ?????????: '-',
        ??????: 'change??????????????????',
    },
];
