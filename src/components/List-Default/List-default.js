import React from "react";
import PropTypes from 'prop-types';

function draw(items) {
  return items.map((item, index) => {
    switch (item.type) {
      case "text":
        return <li key={index}>{item.content}</li>;
      case "link":
        return (
          <li key={index}>
            <a href={item.url} target="_blank">
              {item.content}
            </a>
          </li>
        );
      default:
        break;
    }
  });
}

function ListDefault(props) {
  return <ul className={props.class}>{draw(props.items)}</ul>;
}

ListDefault.propTypes = {
  class: PropTypes.string,
  items: PropTypes.array
};

export default ListDefault;
