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
import classNames from 'classnames';
import React, { useContext, memo, useMemo } from 'react';
import { tabContext } from './tabs';
var TabsItem = memo(function (props) {
    var index = props.index, label = props.label, children = props.children, disabled = props.disabled, className = props.className, restProps = __rest(props, ["index", "label", "children", "disabled", "className"]);
    var context = useContext(tabContext);
    var classes = classNames('cv-tabsItem', className, {
        'cv-tabsItem-active': context.selectIndex === index,
    });
    var isVisible = useMemo(function () { return index === context.selectIndex; }, [
        index,
        context,
    ]);
    return isVisible ? (React.createElement("div", __assign({ className: classes }, restProps, { "data-tabs-title": label }), children)) : null;
});
TabsItem.displayName = 'TabsItem';
export default TabsItem;
