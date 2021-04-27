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
import React, { useCallback, useState, memo, useRef, useEffect, } from 'react';
import useClickOutside from '../../../hooks/useClickOutside';
import useDebounceValue from '../../../hooks/useDebounce';
import { useKeyEvent } from '../../../hooks/useKeyEvent';
import Icon from '../../Icon/icon';
import Input from '../../Input/input';
var SuggestionList = memo(function (_a) {
    var suggestionList = _a.suggestionList, selectSuggestion = _a.selectSuggestion, renderOption = _a.renderOption;
    var clickUp = useKeyEvent(38); // up
    var clickDown = useKeyEvent(40); // down
    var clickEnter = useKeyEvent(13); // enter
    var activeIndex = useRef(-1);
    useEffect(function () {
        if (!suggestionList.length)
            return;
        var maxIndex = suggestionList.length - 1;
        var index = activeIndex.current;
        if (clickUp) {
            if (activeIndex.current <= 0) {
                activeIndex.current = maxIndex;
            }
            else {
                activeIndex.current = --index;
            }
        }
        if (clickDown) {
            if (activeIndex.current >= maxIndex) {
                activeIndex.current = 0;
            }
            else {
                activeIndex.current = ++index;
            }
        }
        if (clickEnter) {
            activeIndex.current = -1;
            selectSuggestion(suggestionList[index]);
        }
    }, [clickUp, clickDown, clickEnter, suggestionList, selectSuggestion]);
    if (!suggestionList.length)
        return null;
    return (React.createElement("ul", { className: "cv-autocomplete-list" }, suggestionList.map(function (suggest, index) { return (React.createElement("li", { className: index === activeIndex.current ? 'cv-autocomplete-list-active' : '', key: index, onClick: function () { return selectSuggestion(suggest); } }, renderOption ? renderOption(suggest) : suggest.value)); })));
});
SuggestionList.defaultProps = {
    suggestionList: [],
};
var AutoComplete = function (props) {
    var onSelect = props.onSelect, fetchSuggestions = props.fetchSuggestions, renderOption = props.renderOption, renderLoading = props.renderLoading, value = props.value, debounceDelay = props.debounceDelay, restProps = __rest(props, ["onSelect", "fetchSuggestions", "renderOption", "renderLoading", "value", "debounceDelay"]);
    var complete = useRef(false);
    var elRef = useRef(null);
    var _a = useState(false), loading = _a[0], setLoading = _a[1];
    var _b = useState(value), inputValue = _b[0], setInputValue = _b[1];
    var _c = useState([]), suggestList = _c[0], setsuggestList = _c[1];
    var handleChange = useCallback(function (e) {
        var value = e.target.value;
        setInputValue(value.trim());
        complete.current = false;
    }, []);
    useClickOutside(elRef, function () {
        setsuggestList([]);
    });
    useDebounceValue(inputValue, debounceDelay, function (value) {
        if (complete.current)
            return;
        var renderData = fetchSuggestions(value);
        if (renderData instanceof Promise) {
            setLoading(true);
            renderData
                .then(function (renderResultData) {
                setsuggestList(renderResultData);
            })
                .finally(function () {
                setLoading(false);
            });
        }
        else {
            setsuggestList(renderData);
        }
    });
    var selectSuggestion = useCallback(function (suggestData) {
        setInputValue(suggestData.value);
        setsuggestList([]);
        onSelect && onSelect(suggestData);
        complete.current = true;
    }, [onSelect]);
    var loadingContent = renderLoading ? (renderLoading()) : (React.createElement(Icon, { className: "cv-autocomplete-loading", icon: "spinner", spin: true }));
    return (React.createElement("div", { className: "cv-autocomplete", ref: elRef },
        React.createElement(Input, __assign({ value: inputValue, onChange: handleChange }, restProps)),
        React.createElement("div", { className: "cv-autocomplete-result" }, loading ? (loadingContent) : (React.createElement(SuggestionList, { suggestionList: suggestList, selectSuggestion: selectSuggestion, renderOption: renderOption })))));
};
AutoComplete.defaultProps = {
    value: '',
    debounceDelay: 300,
};
export default AutoComplete;
