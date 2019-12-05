import React from "react";
import BoxAcademics from "../Box-Academics/Box-academics";

function draw(items) {
  let print = [];
  items.details.map((item, index) => {
    print.push(<BoxAcademics key={index} items={item}></BoxAcademics>);
    items.details.length != index + 1 &&
      print.push(
        <hr key={items.details.length + index + 1} className="--no-margin" />
      );
  });
  return print;
}

function BoxCertifier(props) {
  return (
    <div className="box-certifier">
      <h3 className="box-skills__sub-title --no-margin">
        {props.items.subtitle}
      </h3>
      {draw(props.items)}
    </div>
  );
}

export default BoxCertifier;
