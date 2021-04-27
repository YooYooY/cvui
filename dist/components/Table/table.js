import React, { useMemo } from 'react';
var Table = function (_a) {
    var data = _a.data;
    var headerRow = useMemo(function () {
        var item = data.length ? data[0] : {};
        return Object.keys(item);
    }, [data]);
    return (React.createElement("div", { className: "cv-table" },
        React.createElement("table", null,
            React.createElement("thead", null,
                React.createElement("tr", null, headerRow.map(function (title, index) { return (React.createElement("td", { key: index },
                    React.createElement("span", null, title))); }))),
            React.createElement("tbody", null, data.map(function (item, key) {
                return (React.createElement("tr", { key: key }, Object.values(item).map(function (value, index) { return (React.createElement("td", { key: index },
                    React.createElement("span", null, String(value)))); })));
            })))));
};
Table.defaultProps = {
    data: [],
};
export default Table;
