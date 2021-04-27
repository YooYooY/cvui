import { useEffect } from 'react';
var useClickOutside = function (ref, callback) {
    useEffect(function () {
        var listener = function (event) {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            callback && callback(event);
        };
        document.addEventListener('click', listener, false);
        return function () {
            document.removeEventListener('click', listener, false);
        };
    }, [ref, callback]);
};
export default useClickOutside;
