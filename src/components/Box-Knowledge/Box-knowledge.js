import React from "react";

function skills(item) {
  return (
    <tr key={Math.random()}>
      <td className="--no-padding-top --no-padding-left align-middle">
        {item.name}
      </td>
      <td className="--no-padding-top --no-padding-left-right align-middle text-right">
        {item.level}
      </td>
    </tr>
  );
}

function draw(items) {
  return items.map((item, index) => {
    return (
      <div key={index} className="table-responsive col-md-6">
        <table className="table table-borderless --no-margin-bottom">
          <thead>
            <tr>
              <th
                className="--no-padding-top --no-padding-left-right"
                colSpan="2"
              >
                <h3 className="--no-margin">{item.name}</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {item.skills.map((item, index) => {
              return skills(item);
            })}
          </tbody>
        </table>
      </div>
    );
  });
}

function BoxKnowledge(props) {
  return (
    <div className="box-knowledge">
      <div className="position-relative">
        <h3 className="box-knowledge__subtitle --no-margin d-inline">
          {props.items.subtitle}
        </h3>
      </div>
      <div className="row">{draw(props.items.subknowledge)}</div>
    </div>
  );
}

export default BoxKnowledge;
