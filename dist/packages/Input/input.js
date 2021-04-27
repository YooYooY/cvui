var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import useClassName from '../../hooks/useClassName';
import Icon from '../Icon/icon';
var Input = function (props) {
    var _a;
    var disabled = props.disabled, size = props.size, icon = props.icon, prepend = props.prepend, append = props.append, style = props.style, restProps = __rest(props, ["disabled", "size", "icon", "prepend", "append", "style"]);
    var classes = useClassName('cv-input', (_a = {},
        _a["cv-input-size-" + size] = size,
        _a['cv-input-disabled'] = disabled,
        _a['cv-input-group-icon'] = !!icon,
        _a['cv-input-group-prepend'] = !!prepend,
        _a['cv-input-group-append'] = !!append,
        _a));
    if ("value" in props) {
        delete props.defaultValue;
        restProps.value = props.value || '';
    }
    return (React.createElement("div", { className: classes, style: style },
        prepend && React.createElement("div", { className: "cv-input-prepend" }, prepend),
        icon && (React.createElement("div", { className: "cv-input-icon" },
            React.createElement(Icon, { icon: icon, title: "title-" + icon }))),
        React.createElement("input", __assign({ className: "cv-input-inner", disabled: disabled }, restProps)),
        append && React.createElement("div", { className: "cv-input-append" }, append)));
};
export default Input;
