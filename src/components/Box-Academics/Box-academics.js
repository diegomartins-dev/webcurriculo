import React from "react";

const draw = function(items) {
  let print = [];
  let indexB = 0;
  let maxIndex = 0;

  items.map( (item, indexA) => {
    indexB = 0;
    maxIndex = Object.keys(item).length;
    for (let prop in item) {
      indexB == 0
        ? print.push(
            <div
              key={Math.random()}
              className="col-xs-12 col-sm-6 box-academics__items d-flex justify-content-start"
            >
              {item[prop]}
            </div>
          )
      : indexB + 1 == maxIndex
        ? print.push(
          <div
            key={Math.random()}
            className="col-xs-12 col-sm-2 box-academics__items d-flex justify-content-sm-start justify-content-md-end"
          >
            {item[prop]}
          </div>
        )
      : print.push(
          <div
            key={Math.random()}
            className="col-xs-12 col-sm-2 box-academics__items d-flex justify-content-sm-start justify-content-md-center"
          >
            {item[prop]}
          </div>
        );
      indexB++;
    }
    indexA + 1 != items.length &&
      print.push(<hr key={items.length + indexA + 1} />)
  });

  return print;
};

function BoxAcademics(props) {
  return (
    <div className="box-academics">
      <div className="row">{draw(props.items)}</div>
    </div>
  );
}

export default BoxAcademics;
