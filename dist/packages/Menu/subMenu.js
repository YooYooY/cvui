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
import React, { useContext, useState, } from 'react';
import { MenuContext } from './menu';
import classNames from 'classnames';
import Transition from '../Transition/transition';
import Icon from '../Icon/icon';
var SubMenu = function (_a) {
    var index = _a.index, title = _a.title, children = _a.children, className = _a.className;
    var context = useContext(MenuContext);
    var openedSubMenus = context.defaultOpenSubMenus;
    var isOpend = index && context.mode === 'vertical'
        // eslint-disable-next-line eqeqeq
        ? openedSubMenus === null || openedSubMenus === void 0 ? void 0 : openedSubMenus.some(function (openIdx) { return openIdx == index; })
        : false;
    var _b = useState(isOpend), menuOpen = _b[0], setOpen = _b[1];
    var classes = classNames('cv-menu-item cv-menu-submenu-item', className, {
        'is-active': context.index === index,
        'is-opened': menuOpen,
        'is-vertical': context.mode === 'vertical',
    });
    var handleClick = function (e) {
        e.preventDefault();
        setOpen(!menuOpen);
    };
    var timer;
    var handleMouse = function (e, toggle, immetiate) {
        clearTimeout(timer);
        e.preventDefault();
        if (immetiate) {
            setOpen(toggle);
        }
        else {
            timer = setTimeout(function () {
                setOpen(toggle);
            }, 250);
        }
    };
    var clickEvents = context.mode === 'vertical'
        ? {
            onClick: function (e) { return handleClick(e); },
        }
        : {};
    var hoverEvents = context.mode !== 'vertical'
        ? {
            onMouseEnter: function (e) { return handleMouse(e, true); },
            onMouseLeave: function (e) { return handleMouse(e, false); },
        }
        : {};
    var renderChildren = function () {
        var subMenuClasses = classNames('cv-menu-submenu', {
            'cv-menu-opened': menuOpen,
        });
        var childrenComponent = React.Children.map(children, function (child, i) {
            var childElement = child;
            if (childElement.type.displayName === 'MenuItem') {
                return React.cloneElement(childElement, { index: index + "-" + i });
            }
            else {
                console.warn('Warning: SubMenu has a child which is not a MenuItem component');
            }
        });
        return (React.createElement(Transition, { in: menuOpen, timeout: 300, animation: "zoom-in-top" },
            React.createElement("ul", { className: subMenuClasses }, childrenComponent)));
    };
    return (React.createElement("li", __assign({ key: index, className: classes }, hoverEvents),
        React.createElement("div", __assign({ className: "cv-menu-submenu-title" }, clickEvents),
            title,
            React.createElement(Icon, { icon: "angle-down", className: "arrow-icon" })),
        renderChildren()));
};
SubMenu.displayName = 'SubMenu';
export default SubMenu;
