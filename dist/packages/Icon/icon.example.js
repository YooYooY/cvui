import React, { useCallback, useState, memo, useMemo } from 'react';
import Icon from './icon';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Markdown from '../../components/Markdown/markdown';
import useDebounce from '../../hooks/useDebounce';
library.add(fas);
var describe = "\n# \u56FE\u6807\u7EC4\u4EF6\n\n\u5E38\u7528\u56FE\u6807\u96C6\u5408 \u57FA\u4E8E react-fontawesome\u3002\n\n\u652F\u6301 react-fontawesome\u7684\u6240\u6709\u5C5E\u6027\uFF0C\u5C5E\u6027\u67E5\u8BE2\u5730\u5740 [react-fontawesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react)\n\n\u652F\u6301 fontawesome \u6240\u6709 free-solid-icons\uFF0C\u56FE\u6807\u67E5\u8BE2\u5730\u5740 [fontawesome](https://fontawesome.com/icons?d=gallery&p=2)\n\n## \u5F15\u7528\u65B9\u6CD5\n\n### \u5355\u4E2A\u56FE\u6807\u5F15\u5165\n\n~~~js\nimport { Icon } from 'cvui'\nimport { faCoffee } from '@fortawesome/free-solid-svg-icons'\n\nconst element = <Icon icon={faCoffee} />\n~~~\n\n### \u5168\u90E8\u56FE\u6807\u5F15\u5165\n~~~js\nimport { Icon } from 'cvui'\nimport { library } from '@fortawesome/fontawesome-svg-core'\nimport { fas } from '@fortawesome/free-solid-svg-icons'\nlibrary.add(fas)\n\nconst element = <Icon icon=\"coffee\" />\n~~~\n";
var iconDatas = Object.values(fas).map(function (item) { return item.iconName; });
var Icons = memo(function (_a) {
    var value = _a.value;
    var data = useMemo(function () {
        return iconDatas.filter(function (iconname) { return iconname.includes(value); });
    }, [value]);
    return (React.createElement(React.Fragment, null, data.map(function (iconName) { return (React.createElement("div", { className: "cv-example-icon", key: iconName },
        React.createElement(Icon, { theme: "primary", size: "lg", spin: ['fan', 'spinner', 'undo'].includes(iconName), transform: { flipY: iconName === "undo" }, icon: iconName }),
        React.createElement("p", null, iconName))); })));
});
var Example = function () {
    var _a = useState('fan'), searchVal = _a[0], setSearchVal = _a[1];
    var handleChange = useCallback(function (event) {
        var value = event.target.value.trim();
        setSearchVal(function () { return value; });
    }, []);
    var value = useDebounce(searchVal, 500);
    return (React.createElement(React.Fragment, null,
        React.createElement(Markdown, null, describe),
        React.createElement("input", { type: "sarch", className: "cv-example-input", placeholder: "\uD83D\uDD0D \u8F93\u5165\u56FE\u6807\u641C\u7D22", value: searchVal, onChange: handleChange }),
        React.createElement("div", { className: "cv-example" },
            React.createElement(Icons, { value: value }))));
};
Example.defaultProps = [
    {
        属性: 'theme',
        类型: '"success" | "danger" | "warning" | "info" | "primary" | "secondary" | "light" | "dark"',
        required: '-',
        默认值: '-',
        描述: '支持框架主题 根据主题显示不同的颜色',
    },
    {
        属性: 'icon',
        类型: 'IconProp | string',
        required: 'true',
        默认值: '-',
        描述: '图标样式',
    },
    {
        属性: 'inverse',
        类型: 'boolean',
        required: 'false',
        默认值: '-',
        描述: '反色',
    },
    {
        属性: 'spin',
        类型: 'boolean',
        required: '-',
        默认值: 'false',
        描述: '图标动画',
    },
    {
        属性: 'flip',
        类型: "\"horizontal\" | \"vertical\" | \"both\"",
        required: '-',
        默认值: '-',
        描述: '动画方向',
    },
    {
        属性: 'pull',
        类型: "\"left\" | \"right\"",
        required: '-',
        默认值: '-',
        描述: '左右方向',
    },
    {
        属性: 'rotation',
        类型: "90 | 180 | 270",
        required: '-',
        默认值: '-',
        描述: '旋转角度',
    },
    {
        属性: 'Transform',
        类型: "size?:number | x?: number | y?: number | rotate?: number | flipX?: boolean | flipY: boolean",
        required: '-',
        默认值: '-',
        描述: '转换',
    },
    {
        属性: 'size',
        类型: "\"xs\" | \"lg\" | \"sm\" | \"1x\" | \"2x\" | \"3x\" | \"4x\" | \"5x\" | \"6x\" | \"7x\" | \"8x\" | \"9x\" | \"10x\"",
        required: '-',
        默认值: '-',
        描述: '图标大小',
    },
];
export default Example;
