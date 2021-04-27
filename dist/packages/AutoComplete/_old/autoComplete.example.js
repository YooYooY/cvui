var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React from 'react';
import Card from '../../../components/Card/card';
import { getDelay } from '../../../utils';
import AutoComplete from './autoComplete';
var lakers = [
    'bradley',
    'pope',
    'caruso',
    'cook',
    'cousins',
    'james',
    'AD',
    'green',
    'howard',
    'kuzma',
    'McGee',
    'rando',
];
var fetchSuggestions = function (value) {
    if (!value)
        return [];
    return lakers.filter(function (r) { return r.includes(value); }).map(function (value) { return ({ value: value }); });
};
var fetchCustomSuggestion = function (value) {
    if (!value)
        return [];
    return lakers
        .filter(function (r) { return r.includes(value); })
        .map(function (value) {
        var number = Math.round(Math.random() * 20);
        return {
            value: value,
            number: number,
        };
    });
};
var fetchPromiseSuggestions = function () {
    var _a = getDelay(), cancel = _a.cancel, delay = _a.delay;
    var fetching = false;
    var cacheData = {};
    return function (value) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!value)
                        return [2 /*return*/, []];
                    if (cacheData[value])
                        return [2 /*return*/, cacheData[value]];
                    if (fetching) {
                        cancel && cancel(value);
                        fetching = false;
                    }
                    fetching = true;
                    return [4 /*yield*/, delay(100)];
                case 1:
                    _a.sent();
                    data = fetchSuggestions(value);
                    cacheData[value] = data;
                    fetching = false;
                    if (Object.keys(cacheData).length >= 5) {
                        cacheData = {};
                    }
                    return [2 /*return*/, data];
            }
        });
    }); };
};
var renderOption = function (item) {
    return React.createElement("div", null,
        "player: ",
        item.value,
        " | number: ",
        item.number);
};
var Example = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "cv-example" },
            React.createElement(Card, { title: "base AutoComplete" },
                React.createElement(AutoComplete, { fetchSuggestions: fetchSuggestions })),
            React.createElement(Card, { title: "\u81EA\u5B9A\u4E49\u4E0B\u62C9\u6846" },
                React.createElement(AutoComplete, { fetchSuggestions: fetchCustomSuggestion, renderOption: renderOption })),
            React.createElement(Card, { title: "\u5F02\u6B65 AutoComplete" },
                React.createElement(AutoComplete, { fetchSuggestions: fetchPromiseSuggestions() })))));
};
export default Example;
