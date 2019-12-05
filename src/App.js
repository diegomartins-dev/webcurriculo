import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer";
import BoxSkills from "./components/Box-skills/Box-skills";
import ListDefault from "./components/List-Default.js/List-Default";
import BoxAcademics from "./components/Box-Academics/Box-academics";

const items = {
  contacts: [
    {
      content: "dgmartins87@gmail.com",
      type: "text"
    },
    {
      content: "dgmartins87@hotmail.com",
      type: "text"
    },
    {
      content: "http://dgsite.pessoal.ws",
      url: "http://dgsite.pessoal.ws",
      type: "link"
    }
  ],
  perfil: {
    content:
      "<p>Profissional ativo na área de T.I., <strong>há 05 anos</strong>, formado em <strong>Sistemas para Internet.</strong><br /><strong>Desenvolvedor de Sistemas Web e Mobile</strong>, com foco no desenvolvimento <strong>Frontend/Mobile</strong>, mas também atuante no <strong>Backend</strong>.</p>",
    details: [
      {
        content: "Freelancer –",
        type: "text"
      },
      {
        content: "Tempo integral –",
        type: "text"
      },
      {
        content: "Sem condução própria –",
        type: "text"
      },
      {
        content: "Sem disponibilidade para viagens –",
        type: "text"
      }
    ]
  },
  academics: [
    {
      subtitle: "Especialização em Engenharia de Software",
      details: {
        institute: "Faculdade Estácio de Sá – Estácio",
        modality: "EAD",
        status: "Trancado",
        year: "2016.1"
      }
    },
    {
      subtitle: "Superior Tecnológico em Sistemas para Internet",
      details: {
        institute: "Universidade Salvador – Unifacs",
        modality: "Noturno",
        status: "Concluido",
        year: "2014.1"
      }
    },
    {
      subtitle: "Superior em Engenharia da Computação",
      details: {
        institute: "Faculdade de Ciências e Tecnologia – Área1",
        modality: "Noturno",
        status: "Trancado",
        year: "2012.1"
      }
    }
  ],
  certifiers: {
    subtitle: "Certificado de conclusão de curso | Treinamentos",
    details: [
      {
        name: "Treinamento Laravel – Principios básicos",
        institute: "Conder",
        hours: "10h",
        year: "2014"
      },
      {
        name: "Grupo de estudo: Design Patterns",
        institute: "Conder",
        hours: "--h",
        year: "2014"
      },
      {
        name: "Treinamento da Ferramenta de Desenvolvimento: Maker",
        institute: "Softwell",
        hours: "40h",
        year: "2011"
      },
      {
        name:
          "Microsoft Innovation Center: Students to Business – Banco de Dados",
        institute: "Estácio de Sá",
        hours: "84h",
        year: "2010"
      },
      {
        name: "Manutenção e Suporte à Microcomputadores",
        institute: "SENAI",
        hours: "120h",
        year: "2008"
      }
    ]
  }
};

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
            <ul className="list-academics --no-list-style --no-padding-left">
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
                <div className="box-certifier">
                  <h3 className="box-skills__sub-title --no-margin">
                    {items.certifiers.subtitle}
                  </h3>
                  <BoxAcademics
                    items={items.certifiers.details[0]}
                  ></BoxAcademics>

                  <hr className="--no-margin" />

                  <BoxAcademics
                    items={items.certifiers.details[1]}
                  ></BoxAcademics>

                  <hr className="--no-margin" />

                  <BoxAcademics
                    items={items.certifiers.details[2]}
                  ></BoxAcademics>

                  <hr className="--no-margin" />

                  <BoxAcademics
                    items={items.certifiers.details[3]}
                  ></BoxAcademics>

                  <hr className="--no-margin" />

                  <BoxAcademics
                    items={items.certifiers.details[4]}
                  ></BoxAcademics>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </BoxSkills>

      <div className="box-skills">
        <div className="bg--info box--shadow">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="font--uppercase text--white text--shadow">
                  <span class="text--light text--capitalize">
                    Conhecimentos
                  </span>{" "}
                  Profissionais
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="box-knowledge">
                <h3 class="box-knowledge__subtitle --no-margin">
                  Bancos de Dados{" "}
                </h3>
                <div className="row">
                  <div className="table-responsive col-md-6">
                    <table className="table table-borderless --no-margin-bottom">
                      <thead>
                        <tr>
                          <th
                            className="--no-padding-top --no-padding-left-right"
                            colSpan="2"
                          >
                            Relacionais
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="--no-padding-top --no-padding-left align-middle">
                            SQL Server
                          </td>
                          <td className="--no-padding-top --no-padding-left align-middle">
                            Avançado
                          </td>
                        </tr>
                        <tr>
                          <td className="--no-padding-top --no-padding-left align-middle">
                            MySQL
                          </td>
                          <td className="--no-padding-top --no-padding-left align-middle">
                            Avançado
                          </td>
                        </tr>
                        <tr>
                          <td className="--no-padding-top --no-padding-left align-middle">
                            PostgreSQL
                          </td>
                          <td className="--no-padding-top --no-padding-left align-middle">
                            Intermediário
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="table-responsive col-md-6">
                    <table className="table table-borderless --no-margin-bottom">
                      <thead>
                        <tr>
                          <th
                            className="--no-padding-top --no-padding-left-right"
                            colSpan="2"
                          >
                            Não Relacionais
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="--no-padding-top --no-padding-left align-middle">
                            Firebase Realtime Database
                          </td>
                          <td className="--no-padding-top --no-padding-left align-middle">
                            Avançado
                          </td>
                        </tr>
                        <tr>
                          <td className="--no-padding-top --no-padding-left align-middle">
                            Firebase Cloud Storage
                          </td>
                          <td className="--no-padding-top --no-padding-left align-middle">
                            Avançado
                          </td>
                        </tr>
                        <tr>
                          <td className="--no-padding-top --no-padding-left align-middle">
                            MongoDB
                          </td>
                          <td className="--no-padding-top --no-padding-left align-middle">
                            Intermediário
                          </td>
                        </tr>
                        <tr>
                          <td className="--no-padding-top --no-padding-left align-middle">
                            Amazon AWS S3/Amplify
                          </td>
                          <td className="--no-padding-top --no-padding-left align-middle">
                            Avançado
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="box-knowledge">
                <h3 class="box-knowledge__subtitle --no-margin">Backend </h3>
                <div className="row">
                  <div className="table-responsive col-md-6">
                    <table className="table table-borderless --no-margin-bottom">
                      <thead>
                        <tr>
                          <th
                            className="--no-padding-top --no-padding-left-right"
                            colSpan="2"
                          >
                            Linguagens
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="--no-padding-top --no-padding-left align-middle">
                            C
                          </td>
                          <td className="--no-padding-top --no-padding-left align-middle">
                            Intermediário
                          </td>
                        </tr>
                        <tr>
                          <td className="--no-padding-top --no-padding-left align-middle">
                            PHP
                          </td>
                          <td className="--no-padding-top --no-padding-left align-middle">
                            Avançado
                          </td>
                        </tr>
                        <tr>
                          <td className="--no-padding-top --no-padding-left align-middle">
                            JAVA
                          </td>
                          <td className="--no-padding-top --no-padding-left align-middle">
                            Básico
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="table-responsive col-md-6">
                    <table className="table table-borderless --no-margin-bottom">
                      <thead>
                        <tr>
                          <th
                            className="--no-padding-top --no-padding-left-right"
                            colSpan="2"
                          >
                            Frameworks
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="--no-padding-top --no-padding-left align-middle">
                            Codeigniter
                          </td>
                          <td className="--no-padding-top --no-padding-left align-middle">
                            Avançado
                          </td>
                        </tr>
                        <tr>
                          <td className="--no-padding-top --no-padding-left align-middle">
                            Laravel
                          </td>
                          <td className="--no-padding-top --no-padding-left align-middle">
                            Avançado
                          </td>
                        </tr>
                        <tr>
                          <td className="--no-padding-top --no-padding-left align-middle">
                            NodeJs
                          </td>
                          <td className="--no-padding-top --no-padding-left align-middle">
                            Intermediário
                          </td>
                        </tr>
                        <tr>
                          <td className="--no-padding-top --no-padding-left align-middle">
                            ExpressJs
                          </td>
                          <td className="--no-padding-top --no-padding-left align-middle">
                            Intermediário
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="box-skills">
        <div className="bg--info box--shadow">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="font--uppercase text--white text--shadow">
                  <span class="text--light text--capitalize">Experiências</span>{" "}
                  Profisionais
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="box-experiences">
                <ol className="--no-margin-bottom">
                  <li>
                    <h3 className="box-experiences__subtitle text--uppercase --no-margin-bottom">
                      Freelancer
                    </h3>

                    <div className="box-experiences__content">
                      <h3 className="box-experiences__content__title">
                        Desenvolvedor Frontend
                      </h3>
                      <p>Agosto/2018 a Atualmente</p>
                    </div>

                    <div className="box-experiences__content">
                      <h3 className="box-experiences__content__title">
                        Atividades desenvolvidas
                      </h3>
                      <ul>
                        <li>Desenvolvimento de app híbrido usando Ionic 3</li>
                        <li>Desenvolvimento com tecnologias Frontend</li>
                        <li>
                          Criação e edição do layout personalizado para
                          app/sistemas web
                        </li>
                        <li>Versionamento de sistema</li>
                        <li>
                          Constante vivencia com HTML, CSS, Javascript ,
                          Typescript, Ionic, Angular e Firebase
                        </li>
                      </ul>
                    </div>

                    <div className="box-experiences__content">
                      <h3 className="box-experiences__content__title">
                        Tecnologias usadas
                      </h3>
                      <p>
                        <span className="box-label">Bootstrap</span>
                        <span className="box-label">Materialize</span>
                        <span className="box-label">HTML5</span>
                        <span className="box-label">CSS3</span>
                        <span className="box-label">Javascript</span>
                        <span className="box-label">Jquery</span>
                        <span className="box-label">Angular</span>
                        <span className="box-label">Typescritp</span>
                        <span className="box-label">MySql</span>
                        <span className="box-label">Git</span>
                        <span className="box-label">Bitbucket</span>
                        <span className="box-label">SASS</span>
                        <span className="box-label">VSCode</span>
                        <span className="box-label">Npm</span>
                        <span className="box-label">NodeJs</span>
                        <span className="box-label">Firebase</span>
                        <span className="box-label">API Facebook</span>
                        <span className="box-label">ES2016</span>
                        <span className="box-label">Heroku</span>
                        <span className="box-label">ExpressJS</span>
                        <span className="box-label">MongoDB</span>
                        <span className="box-label">Mongoose</span>
                        <span className="box-label">React</span>
                        <span className="box-label">Redux</span>
                        <span className="box-label">BEM</span>
                        <span className="box-label">Utility-First</span>
                      </p>
                    </div>
                  </li>
                  <li>
                    <h3 className="box-experiences__subtitle text--uppercase --no-margin-bottom">
                      Avansys
                    </h3>

                    <div className="box-experiences__content">
                      <h3 className="box-experiences__content__title">
                        Analista de Sistemas Jr
                      </h3>
                      <p>Setembro/2015 a Março/2016</p>
                    </div>

                    <div className="box-experiences__content">
                      <h3 className="box-experiences__content__title">
                        Atividades desenvolvidas
                      </h3>
                      <ul>
                        <li>
                          Trabalhar embarcado em um dos clientes da Avansys e
                          desenvolver;
                        </li>
                        <li>
                          Criação de um sistema de pesquisas e formulários para
                          área de educação – Sistema Inculca;
                        </li>
                        <li>
                          Constante vivencia com análise, modelagem do banco de
                          dados e consultas SQL;
                        </li>
                        <li>Manutenção em sistemas com o framework ExtJS;</li>
                        <li>
                          Constante vivencia com Javascript, Jquery,
                          Codeigniter, PHP, Mysql
                        </li>
                      </ul>
                    </div>

                    <div className="box-experiences__content">
                      <h3 className="box-experiences__content__title">
                        Tecnologias usadas
                      </h3>
                      <p className="--no-margin-bottom">
                        <span className="box-label">Bootstrap</span>
                        <span className="box-label">HTML5</span>
                        <span className="box-label">CSS3</span>
                        <span className="box-label">Javascript</span>
                        <span className="box-label">Jquery</span>
                        <span className="box-label">ExtJs</span>
                        <span className="box-label">SVN Tortoise</span>
                        <span className="box-label">MySql</span>
                        <span className="box-label">Codeigniter</span>
                        <span className="box-label">PHP</span>
                        <span className="box-label">MySQL Administrator</span>
                        <span className="box-label">NetBeans</span>
                        <span className="box-label">Access</span>
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="box-skills">
        <div className="bg--info box--shadow">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="font--uppercase text--white text--shadow">
                  <span class="text--light text--capitalize">Informações</span>{" "}
                  Pessoais
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="--no-margin-bottom">
                Brasileiro, 31 anos, solteiro.
              </p>
            </div>
          </div>
        </div>
      </div>
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
