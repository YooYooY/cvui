import React from 'react';
import Icon from '../Icon';
import Progress from '../Progress';
var UploadList = function (props) {
    var fileList = props.fileList, onRemove = props.onRemove;
    return (React.createElement("ul", { className: "cv-upload-list" }, fileList.map(function (item) { return (React.createElement("li", { className: "cv-upload-list-item", key: item.uid },
        React.createElement("span", { className: "file-name file-name-" + item.status },
            React.createElement(Icon, { icon: "file-alt", theme: "secondary" }),
            item.name),
        React.createElement("span", { className: "file-status" },
            (item.status === 'uploading' || item.status === 'ready') && (React.createElement(Icon, { icon: "spinner", spin: true, theme: "primary" })),
            item.status === 'success' && (React.createElement(Icon, { icon: "check-circle", theme: "success" })),
            item.status === 'error' && (React.createElement(Icon, { icon: "times-circle", theme: "danger" }))),
        React.createElement("span", { className: "file-actions" },
            React.createElement(Icon, { icon: "times", onClick: function () { return onRemove(item); } })),
        item.status === "uploading" && React.createElement(Progress, { precent: item.precent || 0 }))); })));
};
export default UploadList;
