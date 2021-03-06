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
        ??????: 'precent',
        ??????: 'string | number',
        required: 'true',
        ?????????: '-',
        ??????: '???????????????',
    },
    {
        ??????: 'strokeHeight',
        ??????: 'number',
        required: '-',
        ?????????: '15',
        ??????: '?????????????????????',
    },
    {
        ??????: 'size',
        ??????: '"lg" | "sm"',
        required: '-',
        ?????????: '-',
        ??????: '?????? Button ??????',
    },
    {
        ??????: 'showText',
        ??????: 'boolean',
        required: '-',
        ?????????: 'true',
        ??????: '??????????????????',
    },
    {
        ??????: 'theme',
        ??????: 'ThemeProps',
        required: '-',
        ?????????: '-',
        ??????: '??????????????????',
    },
    {
        ??????: 'stripe',
        ??????: 'boolean',
        required: '-',
        ?????????: 'false',
        ??????: '??????',
    },
    {
        ??????: 'stripeAni',
        ??????: 'boolean',
        required: '-',
        ?????????: 'false',
        ??????: '????????????',
    },
];
export default Example;
