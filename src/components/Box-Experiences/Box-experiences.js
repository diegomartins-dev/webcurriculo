import React from "react";
import BoxOffices from "../Box-Offices/Box-offices";
import ListDefault from "../List-Default/List-default";
import BoxLabel from "../Box-Label/Box-label";

function draw(items) {
  return items.map((item, index) => {
    return (
      <React.Fragment key={index}>
        <li>
          <div
            className={
              "position-relative box-experiences__div__subtitle " +
              (index === 0 ? "--no-margin-top" : "")
            }
          >
            <h3 className="box-experiences__subtitle text--uppercase --no-margin-bottom">
              {item.subtitle}
            </h3>
          </div>
          <div className="box-experiences__content">
            <BoxOffices items={item.offices}></BoxOffices>
          </div>
          <div className="box-experiences__content">
            <h3 className="box-experiences__content__title">
              Atividades desenvolvidas
            </h3>

            <ListDefault items={item.activities}></ListDefault>
          </div>
          <div className="box-experiences__content">
            <h3 className="box-experiences__content__title">
              Tecnologias usadas
            </h3>
            <p className="--no-margin-bottom">
              <BoxLabel items={item.technologies}></BoxLabel>
            </p>
          </div>
        </li>
        {/* <hr className="box-experiences__divider"/> */}
      </React.Fragment>
    );
  });
}

function BoxExperiences(props) {
  return (
    <div className="box-experiences">
      <ol className="--no-margin-bottom">{draw(props.items)}</ol>
    </div>
  );
}

export default BoxExperiences;
