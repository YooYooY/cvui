import React, { useCallback } from 'react';
import useHashRouter from './router';
import './App.scss';
import Table from './components/Table/table';
function App() {
    var _a = useHashRouter(), push = _a.push, route = _a.route, Component = _a.module, routes = _a.routes;
    var classes = useCallback(function (r) { return "nav-link " + (route === r ? 'link-active' : ''); }, [route]);
    var nav = (React.createElement("nav", null,
        React.createElement("a", { className: "home-link", onClick: function () { return push(""); } }, "cv"),
        routes.map(function (r) { return (React.createElement("a", { key: r, onClick: function () { return push(r); }, className: classes(r) }, r)); })));
    if (!Component)
        return (React.createElement("div", { className: "home-nav" },
            React.createElement("h1", null, "CVUI"),
            nav));
    var defaultProps = Component.defaultProps;
    return (React.createElement("div", { className: "App" },
        nav,
        React.createElement("main", null,
            React.createElement("h1", null, route),
            React.createElement("div", { className: "container" },
                Component ? React.createElement(Component, null) : '404 Not Found',
                defaultProps && React.createElement(Table, { data: defaultProps })))));
}
export default App;
