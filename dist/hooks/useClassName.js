import { useMemo } from 'react';
var useClassName = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return useMemo(function () {
        return args
            .filter(Boolean)
            .map(function (classname) {
            if (typeof classname === 'string')
                return classname;
            var classes = [];
            for (var _i = 0, _a = Object.entries(classname); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                value && classes.push(key);
            }
            return classes.join(' ');
        })
            .join(' ');
    }, [args]);
};
export default useClassName;
