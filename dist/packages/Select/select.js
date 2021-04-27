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
import React, { useCallback, useEffect, useRef, useMemo, useState, memo, } from 'react';
import useClassName from '../../hooks/useClassName';
import useClickOutside from '../../hooks/useClickOutside';
import Input from '../Input/input';
import Transition from '../Transition/transition';
import Icon from '../Icon/icon';
var Tabs = memo(function (props) {
    var selectList = props.selectList, onSelect = props.onSelect;
    return (React.createElement("div", { className: "cv-select-tabs" }, selectList.map(function (item) { return (React.createElement("div", { className: "cv-select-tabs-item", key: item.value },
        item.value,
        " ",
        React.createElement(Icon, { icon: "times", onClick: function () { return onSelect(item); } }))); })));
});
var Select = function (props) {
    var name = props.name, defaultValue = props.defaultValue, placeholder = props.placeholder, multiple = props.multiple, onChange = props.onChange, disabled = props.disabled, children = props.children, onVisibleChange = props.onVisibleChange;
    // 收集子选项options；
    var collectOptions = useRef({});
    // 设置是否可见
    var _a = useState(false), visible = _a[0], setVisible = _a[1];
    // 设置选择项
    var _b = useState(function () {
        var _a;
        if (!defaultValue)
            return {};
        if (typeof defaultValue === 'string')
            return _a = {}, _a[defaultValue] = '', _a;
        if (Array.isArray(defaultValue))
            return defaultValue.reduce(function (result, prev) {
                result[prev] = '';
                return result;
            }, {});
    }), selects = _b[0], setSelects = _b[1];
    var selectValues = useMemo(function () {
        var fieldValues = Object.values(selects);
        if (multiple) {
            return fieldValues.length ? ' ' : '';
        }
        else {
            return fieldValues.join(',');
        }
    }, [selects, multiple]);
    var selectKeys = useMemo(function () { return Object.keys(selects); }, [selects]);
    var elRef = useRef(null);
    useClickOutside(elRef, function () {
        setVisible(false);
    });
    var selectList = useMemo(function () { return Object.entries(selects).map(function (_a) {
        var value = _a[0], label = _a[1];
        return ({ value: value, label: label });
    }); }, [selects]);
    // 点击选项后的回调
    var onSelect = useCallback(function (item) {
        if (multiple) {
            var exitKey = Object.keys(selects).includes(item.value);
            var selectsArr = Object.entries(selects).map(function (_a) {
                var value = _a[0], label = _a[1];
                return ({ value: value, label: label });
            });
            if (exitKey) {
                setSelects(function (oldselects) {
                    delete oldselects[item.value];
                    return __assign({}, oldselects);
                });
                selectsArr = selectsArr.filter(function (t) { return t.value !== item.value; });
            }
            else {
                setSelects(function (oldselects) {
                    var _a;
                    return (__assign(__assign({}, oldselects), (_a = {}, _a[item.value] = item.label, _a)));
                });
                selectsArr.push(item);
            }
            onChange && onChange(item, selectsArr);
        }
        else {
            setSelects(function () {
                var _a;
                return (_a = {}, _a[item.value] = item.label, _a);
            });
            setVisible(false);
            onChange && onChange(item, [item]);
        }
    }, [multiple, selects, onChange]);
    var renderChildren = useMemo(function () {
        return React.Children.map(children, function (child, index) {
            var _a;
            var childElement = child;
            var displayName = childElement.type.displayName;
            var _b = childElement.props, value = _b.value, label = _b.label, children = _b.children;
            var collectOptionsItem = (_a = {}, _a[value] = label || children || value || '', _a);
            collectOptions.current = __assign(__assign({}, collectOptions.current), collectOptionsItem);
            if (displayName === 'SelectOption') {
                return React.cloneElement(childElement, {
                    index: index,
                    onSelect: onSelect,
                    selectKeys: selectKeys,
                });
            }
            else {
                console.warn('Warning: Select has a child which is not a Option Component');
            }
        });
    }, [children, onSelect, selectKeys, collectOptions]);
    useEffect(function () {
        onVisibleChange && onVisibleChange(visible);
    }, [visible, onVisibleChange]);
    // 收集子选项后，跟默认defaultValue的值对比，渲染初始值进输入框
    useEffect(function () {
        var collectOptionsItems = collectOptions.current;
        setSelects(function (oldFileds) {
            return Object.keys(oldFileds).reduce(function (result, key) {
                result[key] = collectOptionsItems[key];
                return result;
            }, {});
        });
    }, []);
    var classes = useClassName('cv-select', {
        'cv-select-visible': visible,
    });
    return (React.createElement("div", { className: classes, ref: elRef },
        React.createElement(Input, { disabled: disabled, value: selectValues, readOnly: true, placeholder: placeholder, name: name, icon: "angle-down", onClick: function () { return setVisible(!visible); } }),
        !!selectList.length && multiple && (React.createElement(Tabs, { selectList: selectList, onSelect: onSelect })),
        React.createElement(Transition, { in: visible, timeout: 200, classNames: "cv-select-ani" },
            React.createElement("ul", { className: "cv-select-list" }, renderChildren))));
};
Select.defaultProps = {
    disabled: false,
};
export default Select;
