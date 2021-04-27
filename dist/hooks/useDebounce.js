import { useEffect, useState, useRef } from 'react';
var useDebounce = function (debounceValue, delay, cb) {
    var _a = useState(function () { return debounceValue; }), value = _a[0], setDeboundVal = _a[1];
    var callbackFn = useRef();
    useEffect(function () {
        var timer = setTimeout(function () {
            callbackFn.current = cb;
            setDeboundVal(debounceValue);
        }, delay);
        return function () {
            clearTimeout(timer);
        };
    }, [debounceValue, delay, cb]);
    useEffect(function () {
        callbackFn.current && callbackFn.current(value);
    }, [value, callbackFn]);
    return value;
};
export default useDebounce;
