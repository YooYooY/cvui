import { useState, useEffect, useMemo, useCallback } from 'react';
var cache = {};
function importAll(r) {
    r.keys()
        .filter(function (k) { return !k.includes('_'); })
        .forEach(function (key) {
        var name = key.toLowerCase().split('/')[1];
        cache[name] = r(key).default;
    });
}
importAll(require.context('../packages', true, /example\.(tsx)$/));
var getHsah = function () { return window.location.hash.toLowerCase().replace('#/', ''); };
function useHashRouter() {
    var _a = useState(function () { return getHsah(); }), route = _a[0], setRoute = _a[1];
    var routes = useState(function () { return Object.keys(cache); })[0];
    var module = useMemo(function () {
        return cache[route];
    }, [route]);
    var push = useCallback(function (name) { return (window.location.hash = '#/' + name); }, []);
    useEffect(function () {
        var hashChange = function () {
            var routeKey = getHsah();
            setRoute(routeKey);
        };
        window.addEventListener('hashchange', hashChange);
        return function () {
            window.removeEventListener('hashchange', hashChange);
        };
    }, []);
    return {
        route: route,
        module: module,
        routes: routes,
        push: push,
    };
}
export default useHashRouter;
