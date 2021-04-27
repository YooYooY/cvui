import { useEffect, useState } from 'react';
export var useKeyEvent = function (key) {
    var _a = useState(false), hasClick = _a[0], setHasClick = _a[1];
    useEffect(function () {
        var handleKeyDown = function (e) {
            if (e.keyCode === key) {
                setHasClick(true);
            }
        };
        var handleKeyUp = function () {
            setHasClick(false);
        };
        document.addEventListener('keydown', handleKeyDown, false);
        document.addEventListener('keyup', handleKeyUp, false);
        return function () {
            document.removeEventListener('keydown', handleKeyDown, false);
            document.removeEventListener('keyup', handleKeyUp, false);
        };
    }, [key]);
    return hasClick;
};
