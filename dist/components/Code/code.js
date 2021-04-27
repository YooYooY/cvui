import React, { useState } from 'react';
import Highlight from 'react-highlight';
import useClassName from '../../hooks/useClassName';
var Code = function (props) {
    var _a = useState(props.open), visible = _a[0], setVisible = _a[1];
    var classes = useClassName('cv-code', { hidden: !visible });
    return (React.createElement("div", { className: classes },
        React.createElement("button", { className: "cv-code-control-btn", onClick: function () { return setVisible(function (visible) { return !visible; }); } }, "code"),
        React.createElement(Highlight, { className: props.type }, props.children)));
};
Code.defaultProps = {
    type: "html"
};
export default Code;
