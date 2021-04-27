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
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import Highlight from 'react-highlight';
var components = {
    code: function (_a) {
        var node = _a.node, inline = _a.inline, className = _a.className, children = _a.children, props = __rest(_a, ["node", "inline", "className", "children"]);
        var match = /language-(\w+)/.exec(className || '');
        var isHighlighter = !inline && match;
        return isHighlighter ? (React.createElement(Highlight, __assign({ className: match[1] }, props), children)) : (React.createElement("code", __assign({ className: className }, props)));
    },
};
var Markdown = function (_a) {
    var children = _a.children;
    return (React.createElement(React.Fragment, null, typeof children === 'string' ? (React.createElement(ReactMarkdown, { remarkPlugins: [gfm], components: components, children: children })) : null));
};
export default Markdown;
