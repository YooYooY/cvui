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
import React, { useRef, useState } from 'react';
import axios from 'axios';
import Dragger from './dragger';
import UploadList from './uploadList';
export var Upload = function (props) {
    var action = props.action, defaultFileList = props.defaultFileList, beforeUpload = props.beforeUpload, onProgress = props.onProgress, onSuccess = props.onSuccess, onError = props.onError, onChange = props.onChange, onRemove = props.onRemove, name = props.name, headers = props.headers, data = props.data, withCredentials = props.withCredentials, accept = props.accept, multiple = props.multiple, children = props.children, drag = props.drag, restProps = __rest(props, ["action", "defaultFileList", "beforeUpload", "onProgress", "onSuccess", "onError", "onChange", "onRemove", "name", "headers", "data", "withCredentials", "accept", "multiple", "children", "drag"]);
    var fileInput = useRef(null);
    var _a = useState(defaultFileList || []), fileList = _a[0], setFileList = _a[1];
    var updateFileList = function (updateFile, updateObj) {
        setFileList(function (prevList) {
            return prevList.map(function (file) {
                if (file.uid === updateFile.uid) {
                    return __assign(__assign({}, file), updateObj);
                }
                else {
                    return file;
                }
            });
        });
    };
    var handleClick = function () {
        fileInput.current && fileInput.current.click();
    };
    var handleFileChange = function (e) {
        var files = e.target.files;
        if (!files)
            return;
        uploadFiles(files);
        if (fileInput.current) {
            fileInput.current.value = '';
        }
    };
    var handleRemove = function (file) {
        setFileList(function (prevList) {
            return prevList.filter(function (item) { return item.uid !== file.uid; });
        });
        onRemove && onRemove(file);
    };
    var uploadFiles = function (files) {
        var postFiles = Array.from(files);
        postFiles.forEach(function (file) {
            if (!beforeUpload) {
                post(file);
            }
            else {
                var result = beforeUpload(file);
                if (result && result instanceof Promise) {
                    result.then(function (processFile) { return post(file); });
                }
                else if (result !== false) {
                    post(file);
                }
            }
        });
    };
    var post = function (file) {
        var _file = {
            uid: Date.now() + '_upload-file',
            status: 'ready',
            name: file.name,
            size: file.size,
            precent: 0,
            raw: file,
        };
        setFileList(function (prevList) { return __spreadArray([_file], prevList); });
        var formData = new FormData();
        formData.append(name || 'file', file);
        if (data) {
            Object.keys(data).forEach(function (key) {
                formData.append(key, data[key]);
            });
        }
        axios
            .post(action, formData, {
            headers: __assign(__assign({}, headers), { 'Content-Type': 'multipart/form-data' }),
            withCredentials: withCredentials,
            onUploadProgress: function (e) {
                var precentage = Math.round((e.loaded * 100) / e.total) || 0;
                if (precentage < 100) {
                    updateFileList(_file, { precent: precentage, status: 'uploading' });
                    onProgress && onProgress(precentage, file);
                }
            },
        })
            .then(function (resp) {
            updateFileList(_file, { status: 'success', response: resp.data });
            onSuccess && onSuccess(resp.data, file);
        })
            .catch(function (err) {
            updateFileList(_file, { status: 'error', error: err });
            onError && onError(err, file);
        })
            .finally(function () {
            onChange && onChange(file);
        });
    };
    return (React.createElement("div", { className: "cv-upload-component" },
        React.createElement("div", { className: "cv-upload-input", style: { display: 'inline-block' }, onClick: handleClick },
            drag ? (React.createElement(Dragger, { onFile: function (files) {
                    uploadFiles(files);
                } }, children)) : (children),
            React.createElement("input", __assign({ type: "file", ref: fileInput, className: "cv-file-input", style: { display: 'none' }, onChange: handleFileChange, accept: accept, multiple: multiple }, restProps))),
        React.createElement(UploadList, { fileList: fileList, onRemove: handleRemove })));
};
Upload.defaultProps = {
    name: 'file',
};
export default Upload;
