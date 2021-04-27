import React, { useState } from 'react';
import useClassName from '../../hooks/useClassName';
import Icon from '../Icon/icon';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';
var Alert = function (props) {
    var _a = useState(true), visible = _a[0], setVisible = _a[1];
    var title = props.title, description = props.description, type = props.type, onClose = props.onClose, closable = props.closable;
    var classes = useClassName('cv-alert', 'cv-alert-status-' + type);
    var handleClose = function () {
        setVisible(function (visible) { return !visible; });
        onClose && onClose();
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(CSSTransition, { in: visible, classNames: "cv-alert", timeout: 300, unmountOnExit: true },
            React.createElement("dl", { className: classes },
                React.createElement("dt", null,
                    React.createElement("h6", { className: "cv-alert-title" }, title),
                    closable && (React.createElement("span", { className: "cv-alert-close-btn", "data-testid": "test-close-btn", onClick: handleClose },
                        React.createElement(Icon, { icon: faTimes })))),
                description && React.createElement("dd", null, description)))));
};
Alert.defaultProps = {
    title: '',
    type: 'primary',
    closable: true,
};
export default Alert;
