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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import classNames from 'classnames';
import React, { createContext, useCallback, useEffect, useRef, useState, } from 'react';
export var tabContext = createContext({
    selectIndex: '',
});
var Tabs = function (props) {
    var defaultIndex = props.defaultIndex, className = props.className, onSelect = props.onSelect, type = props.type, children = props.children, restProps = __rest(props, ["defaultIndex", "className", "onSelect", "type", "children"]);
    var _a = useState(defaultIndex), selectIndex = _a[0], setIndex = _a[1];
    var _b = useState([]), labes = _b[0], setLabes = _b[1];
    var labesRef = useRef([]);
    var classes = classNames('cv-tabs', className, {
        'cv-tabs-line': type === 'line',
        'cv-tabs-card': type === 'card',
    });
    var generChild = useCallback(function () {
        labesRef.current = [];
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            var childComponent = childElement.type;
            var labes = labesRef.current;
            var _a = childElement.props, label = _a.label, disabled = _a.disabled;
            labesRef.current = __spreadArray(__spreadArray([], labes), [{ label: label, disabled: disabled }]);
            if (childComponent.displayName === 'TabsItem') {
                return React.cloneElement(childElement, { index: index + '' });
            }
            else {
                console.warn('Warning: Tabs Children must be TabsItem');
            }
        });
    }, [children]);
    var titleClasses = useCallback(function (index, isDisabled) {
        return classNames('cv-tabs-title-item', {
            'cv-tabs-active': String(index) === selectIndex,
            'cv-tabs-title-disabled': isDisabled,
        });
    }, [selectIndex]);
    var handleSelect = useCallback(function (index) {
        setIndex(index + '');
    }, []);
    useEffect(function () {
        setLabes(labesRef.current);
    }, []);
    return (React.createElement("div", __assign({ className: classes }, restProps),
        React.createElement(tabContext.Provider, { value: {
                selectIndex: selectIndex,
                onSelect: onSelect,
            } },
            React.createElement("div", { className: "cv-tabs-title" }, labes.map(function (item, index) { return (React.createElement("div", { key: index, onClick: function () { return !item.disabled && handleSelect(index); }, className: titleClasses(index, item.disabled) }, item.label)); })),
            React.createElement("div", { className: "cv-tabs-body" }, generChild()))));
};
Tabs.defaultProps = {
    type: 'line',
    defaultIndex: '0',
};
export default Tabs;
