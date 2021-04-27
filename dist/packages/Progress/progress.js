import React from 'react';
import useClassName from '../../hooks/useClassName';
var Progress = function (props) {
    var _a;
    var precent = props.precent, strokeHeight = props.strokeHeight, showText = props.showText, styles = props.styles, theme = props.theme, stripe = props.stripe, stripeAni = props.stripeAni;
    var classes = useClassName('cv-progress', (_a = {},
        _a["cv-progress-status-" + theme] = theme,
        _a['cv-progress-stripe'] = stripe,
        _a['cv-progress-stripe-active'] = stripe && stripeAni,
        _a));
    return (React.createElement("div", { className: classes, style: styles },
        React.createElement("div", { className: "cv-progress-outer", style: { height: strokeHeight + "px" } },
            React.createElement("div", { className: "cv-progress-inner", style: { transform: "translateX(" + precent + "%)" } })),
        showText && React.createElement("span", { className: "cv-progress-text" }, precent + "%")));
};
Progress.defaultProps = {
    strokeHeight: 15,
    showText: true,
    theme: 'primary',
    stripe: false,
    stripeAni: false
};
export default Progress;
