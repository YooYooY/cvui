import React, { useState } from 'react';
import Button from '../Button';
import Progress from './progress';
import Card from '../../components/Card/card';
import Code from '../../components/Code/code';
var Example = function () {
    var _a = useState(50), precent = _a[0], setPrecent = _a[1];
    var _b = useState(false), stripeAni = _b[0], setStripeAni = _b[1];
    var handleChange = function () { return setPrecent(Math.round(Math.random() * 100)); };
    var handleAnimate = function () { return setStripeAni(!stripeAni); };
    return (React.createElement("div", null,
        React.createElement("div", { className: "cv-example" },
            React.createElement(Card, { title: "\u9ED8\u8BA4 Progress", type: "inline" },
                React.createElement(Button, { onClick: handleChange }, "update"),
                React.createElement(Progress, { precent: precent }),
                React.createElement(Code, null, "<Progress precent={precent} />")),
            React.createElement(Card, { title: "theme Progress", type: "inline" },
                React.createElement(Progress, { precent: "30" }),
                React.createElement(Progress, { precent: "40", theme: "danger" }),
                React.createElement(Progress, { precent: "50", theme: "success" }),
                React.createElement(Progress, { precent: "60", theme: "warning" }),
                React.createElement(Code, null, "<Progress precent=\"30\" />\n<Progress precent=\"40\" theme=\"danger\" />\n<Progress precent=\"50\" theme=\"success\" />\n<Progress precent=\"60\" theme=\"warning\" />")),
            React.createElement(Card, { title: "stripe Progress" },
                React.createElement(Button, { onClick: handleAnimate }, stripeAni ? 'stop' : 'animate'),
                React.createElement(Progress, { precent: "90", stripe: true, stripeAni: stripeAni }),
                React.createElement(Code, { type: "jsx" }, "const [stripeAni, setStripeAni] = useState(false)\nconst handleAnimate = () => setStripeAni(!stripeAni)\n\n<Progress precent=\"90\" stripe stripeAni={stripeAni}></Progress>\n")))));
};
Example.defaultProps = [
    {
        属性: 'precent',
        类型: 'string | number',
        required: 'true',
        默认值: '-',
        描述: '进度条数值',
    },
    {
        属性: 'strokeHeight',
        类型: 'number',
        required: '-',
        默认值: '15',
        描述: '进度条数值高度',
    },
    {
        属性: 'size',
        类型: '"lg" | "sm"',
        required: '-',
        默认值: '-',
        描述: '设置 Button 尺寸',
    },
    {
        属性: 'showText',
        类型: 'boolean',
        required: '-',
        默认值: 'true',
        描述: '显示进度数字',
    },
    {
        属性: 'theme',
        类型: 'ThemeProps',
        required: '-',
        默认值: '-',
        描述: '进度条主题色',
    },
    {
        属性: 'stripe',
        类型: 'boolean',
        required: '-',
        默认值: 'false',
        描述: '条纹',
    },
    {
        属性: 'stripeAni',
        类型: 'boolean',
        required: '-',
        默认值: 'false',
        描述: '条纹动画',
    },
];
export default Example;
