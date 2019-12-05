import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer";
import BoxSkills from "./components/Box-skills/Box-skills";
import ListDefault from "./components/List-Default.js/List-Default";
import BoxAcademics from "./components/Box-Academics/Box-academics";
import BoxCertifier from "./components/Box-Certifier/Box-certifier";
import BoxKnowledge from "./components/Box-Knowledge/Box-knowledge";
import * as db from "./mocks/fakeDB.json";
import BoxLabel from "./components/Box-Label/Box-label";
import BoxOffices from "./components/Box-Offices/Box-offices";
import BoxExperiences from "./components/Box-Experiences/Box-experiences";

const items = db.default;

function App() {
  return (
    <div className="App">
      <Header />

      <BoxSkills
        title={
          <React.Fragment>
            <span className="text--light text--capitalize">Perfil</span>{" "}
            Profissional
          </React.Fragment>
        }
      >
        <div className="row --no-padding">
          <div className="col-12">
            <p dangerouslySetInnerHTML={{ __html: items.perfil.content }}></p>
            <ListDefault
              items={items.perfil.details}
              class="--no-margin-bottom"
            ></ListDefault>
          </div>
        </div>
      </BoxSkills>

      <BoxSkills
        title={
          <React.Fragment>
            <span className="text--light text--capitalize">Formação</span>{" "}
            Academica
          </React.Fragment>
        }
      >
        <div className="row --no-padding">
          <div className="col-12">
            <ul className="list-academics --no-list-style --no-padding-left --no-margin-bottom">
              {items.academics.map((item, index) => {
                return (
                  <li key={index}>
                    <h3 className="box-skills__sub-title --no-margin">
                      {item.subtitle}
                    </h3>
                    <BoxAcademics items={item.details}></BoxAcademics>
                  </li>
                );
              })}
              <li>
                <BoxCertifier items={items.certifiers}></BoxCertifier>
              </li>
            </ul>
          </div>
        </div>
      </BoxSkills>

      <BoxSkills
        title={
          <React.Fragment>
            <span className="text--light text--capitalize">Conhecimentos</span>{" "}
            Profissionais
          </React.Fragment>
        }
      >
        {items.knowledges.map((item, index) => {
          return <BoxKnowledge key={index} items={item}></BoxKnowledge>;
        })}
      </BoxSkills>

      <BoxSkills
        title={
          <React.Fragment>
            <span className="text--light text--capitalize">Experiências</span>{" "}
            Profissionais
          </React.Fragment>
        }
      >
        <div className="row --no-padding">
          <div className="col-12">
            <BoxExperiences items={items.experiences}></BoxExperiences>
          </div>
        </div>
      </BoxSkills>

      <BoxSkills
        title={
          <React.Fragment>
            <span className="text--light text--capitalize">Informações</span>{" "}
            Pessoais
          </React.Fragment>
        }
      >
        <div className="row --no-padding">
          <div className="col-12">
            <p className="--no-margin-bottom">Brasileiro, 31 anos, solteiro.</p>
          </div>
        </div>
      </BoxSkills>

      <BoxSkills
        subtitle={{ class: "--no-padding-top-bottom", content: "Contatos" }}
      >
        <div className="row --no-padding">
          <div className="col-md-12 col-lg-9">
            <ListDefault
              items={items.contacts}
              class="--no-margin-bottom --no-list-style --no-padding-left"
            ></ListDefault>
          </div>
        </div>
      </BoxSkills>

      <Footer />
    </div>
  );
}

export default App;
