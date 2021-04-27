import React from 'react';
import useClassName from '../../hooks/useClassName';
var Card = function (props) {
    var title = props.title, children = props.children, type = props.type;
    var classes = useClassName('cv-card', type);
    return (React.createElement("div", { className: classes },
        React.createElement("dl", null,
            React.createElement("dt", null,
                React.createElement("h3", null, title)),
            React.createElement("dd", null, children))));
};
Card.defaultProps = {
    type: 'block',
};
export default Card;
