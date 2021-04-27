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
import React, { memo, useMemo } from 'react';
import useClassName from '../../hooks/useClassName';
import Icon from '../Icon/icon';
var Option = memo(function (props) {
    var index = props.index, value = props.value, label = props.label, disabled = props.disabled, children = props.children, onSelect = props.onSelect, selectKeys = props.selectKeys, restProps = __rest(props, ["index", "value", "label", "disabled", "children", "onSelect", "selectKeys"]);
    var handleClick = function () {
        if (!disabled)
            onSelect && onSelect(selectOption);
    };
    var isSelect = useMemo(function () { return selectKeys === null || selectKeys === void 0 ? void 0 : selectKeys.includes(value); }, [
        selectKeys,
        value,
    ]);
    var classes = useClassName('cv-select-item', {
        'cv-select-item-disabled': disabled,
        'cv-select-item-selected': isSelect,
    });
    var renderChild = label || children || value || '';
    var selectOption = {
        value: value,
        label: renderChild,
    };
    return (React.createElement("li", __assign({ className: classes, onClick: handleClick }, restProps),
        renderChild,
        " ",
        isSelect && React.createElement(Icon, { icon: "check", className: "cv-select-item-icon" })));
});
Option.defaultProps = {};
Option.displayName = 'SelectOption';
export default Option;
