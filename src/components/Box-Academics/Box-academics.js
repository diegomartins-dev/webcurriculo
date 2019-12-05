import React from "react";

const draw = function(items){

    let print = [];
    let index = 0;
    let maxIndex = Object.keys(items).length;

    for(let item in items){
        index == 0 ? (
            print.push(
                <div key={index} className="col-xs-12 col-sm-5 box-academics__items d-flex justify-content-start">
                    {items[item]}
                </div>
            )
        ) : index + 1 == maxIndex ? (
            print.push(
                <div key={index} className="col-xs-12 col-sm-3 box-academics__items d-flex justify-content-sm-start justify-content-md-end">
                    {items[item]}
                </div>
            )
        ) : (
            print.push(
                <div key={index} className="col-xs-12 col-sm-2 box-academics__items d-flex justify-content-sm-start justify-content-md-center">
                    {items[item]}
                </div>
            )
        );
        index++;
    }

    return print
}

function BoxAcademics(props) {
  return (
    <div className="box-academics">
      <div className="row">
        {draw(props.items)}
      </div>
    </div>
  );
}

export default BoxAcademics;
