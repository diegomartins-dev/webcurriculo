import React from "react";

function ListDefault(props) {
  return (
    <ul className={props.class}>
      {props.items.map((item, index) => {
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
      })}
    </ul>
  );
}

export default ListDefault;
