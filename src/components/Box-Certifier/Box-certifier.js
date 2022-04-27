import React from "react";
import BoxAcademics from "../Box-Academics/Box-academics";

function draw(items) {
  return <BoxAcademics items={items.details}></BoxAcademics>
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
