import React from 'react';
import Card from '../../components/Card/card';
import Code from '../../components/Code/code';
import Button from '../Button';
import Icon from '../Icon';
import Upload from './upload';
var Example = function () {
    var checkFileSize = function (file) {
        if (Math.round(file.size / 1024) > 50) {
            alert('file too big');
            return false;
        }
        return true;
    };
    return (React.createElement("div", { className: "cv-example" },
        React.createElement(Card, { title: "\u4E0A\u4F20\u7EC4\u4EF6" },
            React.createElement(Upload, { action: "https://www.mocky.io/v2/5cc8019d300000980a055e76", name: "file", onChange: function noRefCheck() { }, onProgress: function noRefCheck() { }, onRemove: function noRefCheck() { }, onSuccess: function noRefCheck() { } },
                React.createElement(Button, { btnType: "primary", size: "lg" },
                    React.createElement(Icon, { icon: "upload" }),
                    " \u70B9\u51FB\u4E0A\u4F20")),
            React.createElement(Code, null, "<Upload\n    action=\"https://www.mocky.io/v2/5cc8019d300000980a055e76\"\n    name=\"file\"\n    onChange={function noRefCheck() {}}\n    onProgress={function noRefCheck() {}}\n    onRemove={function noRefCheck() {}}\n    onSuccess={function noRefCheck() {}}\n>\n    <Button btnType=\"primary\" size=\"lg\">\n    <Icon icon=\"upload\" /> \u70B9\u51FB\u4E0A\u4F20\n    </Button>\n</Upload>")),
        React.createElement(Card, { title: "\u81EA\u5B9A\u4E49\u4E0A\u4F20\u524D\u68C0\u67E5" },
            React.createElement(Upload, { action: "https://www.mocky.io/v2/5cc8019d300000980a055e76", beforeUpload: checkFileSize },
                React.createElement(Button, { size: "lg", btnType: "primary" },
                    React.createElement(Icon, { icon: "upload" }),
                    " \u4E0D\u80FD\u4F20\u5927\u4E8E50Kb\uFF01",
                    ' ')),
            React.createElement(Code, null, "const checkFileSize = (file: File) => {\n    if (Math.round(file.size / 1024) > 50) {\n      alert('file too big')\n      return false\n    }\n    return true\n};  \n\n<Upload\n    action=\"https://www.mocky.io/v2/5cc8019d300000980a055e76\"\n    beforeUpload={checkFileSize}\n>\n    <Button size=\"lg\" btnType=\"primary\">\n    <Icon icon=\"upload\" /> \u4E0D\u80FD\u4F20\u5927\u4E8E50Kb\uFF01{' '}\n    </Button>\n</Upload>")),
        React.createElement(Card, { title: "\u62D6\u62FD\u4E0A\u4F20" },
            React.createElement(Upload, { action: "https://www.mocky.io/v2/5cc8019d300000980a055e76", name: "file", drag: true, multiple: true, onChange: function noRefCheck() { }, onProgress: function noRefCheck() { }, onRemove: function noRefCheck() { }, onSuccess: function noRefCheck() { } },
                React.createElement(Icon, { icon: "upload", size: "5x", theme: "secondary" }),
                React.createElement("br", null),
                React.createElement("p", null, "\u70B9\u51FB\u6216\u8005\u62D6\u52A8\u5230\u6B64\u533A\u57DF\u8FDB\u884C\u4E0A\u4F20")),
            React.createElement(Code, null, "<Upload\n    action=\"https://www.mocky.io/v2/5cc8019d300000980a055e76\"\n    name=\"file\"\n    drag\n    multiple\n    onChange={function noRefCheck() {}}\n    onProgress={function noRefCheck() {}}\n    onRemove={function noRefCheck() {}}\n    onSuccess={function noRefCheck() {}}\n>\n    <Icon icon=\"upload\" size=\"5x\" theme=\"secondary\" />\n    <br />\n    <p>\u70B9\u51FB\u6216\u8005\u62D6\u52A8\u5230\u6B64\u533A\u57DF\u8FDB\u884C\u4E0A\u4F20</p>\n</Upload>"))));
};
Example.defaultProps = [
    {
        属性: 'action',
        类型: 'string',
        required: 'true',
        默认值: '-',
        描述: '上传地址',
    },
    {
        属性: 'defaultFileList',
        类型: 'UploadFile[]',
        required: '-',
        默认值: '-',
        描述: '上传文件数组',
    },
    {
        属性: 'beforeUpload',
        类型: '(file: File) => boolean | Promise<File>',
        required: '-',
        默认值: '-',
        描述: '上传前触发方法',
    },
    {
        属性: 'onProgress',
        类型: '(precentage: number, file: File) => void',
        required: '-',
        默认值: '-',
        描述: '上传进度触发方法',
    },
    {
        属性: 'onSuccess',
        类型: '(data: any, file: File) => void',
        required: '-',
        默认值: '-',
        描述: '上传成功触发方法',
    },
    {
        属性: 'onError',
        类型: '(err: any, file: File) => void',
        required: '-',
        默认值: '-',
        描述: '上传失败触发方法',
    },
    {
        属性: 'onChange',
        类型: ' (file: File) => void',
        required: '-',
        默认值: '-',
        描述: '文件变化触发方法',
    },
    {
        属性: 'onRemove',
        类型: '(file: UploadFile) => void',
        required: '',
        默认值: '-',
        描述: '删除文件触发方法',
    },
    {
        属性: 'headers',
        类型: 'Record<string, any>',
        required: '-',
        默认值: '-',
        描述: '发送请求头',
    },
    {
        属性: 'name',
        类型: ' string',
        required: '-',
        默认值: '-',
        描述: '文件字段名',
    },
    {
        属性: 'data',
        类型: 'Record<string, any>',
        required: '-',
        默认值: '-',
        描述: '发送数据',
    },
    {
        属性: 'withCredentials',
        类型: 'boolean',
        required: '-',
        默认值: 'false',
        描述: '是否允许携带cookie',
    },
    {
        属性: 'accept',
        类型: 'string',
        required: '-',
        默认值: '-',
        描述: 'file 标签属性，规定可上传类型',
    },
    {
        属性: 'multiple',
        类型: 'boolean',
        required: '-',
        默认值: '-',
        描述: '是否允许多选',
    },
    {
        属性: 'drag',
        类型: 'boolean',
        required: '-',
        默认值: '-',
        描述: '是否允许拖动上传',
    },
];
export default Example;
