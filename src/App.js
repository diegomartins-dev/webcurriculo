import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="box-skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <span className="box-skills__sub-title">Contatos</span>
            </div>
            <ul className="col-md-12 col-lg-3">
              <li>(71) 3014-6861</li>
              <li> (71) 9 9332-9298 </li>
            </ul>
            <ul className="col-md-12 col-lg-9">
              <li>dgmartins87@gmail.com</li>
              <li>dgmartins87@hotmail.com</li>
              <li>
                <a href="http://dgsite.pessoal.ws" target="_blank">
                  http://dgsite.pessoal.ws
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="box-skills">
        <div className="bg--info box--shadow">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="font--uppercase text--white text--shadow"><span class="text--light">Perfil</span> Profissional</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>
                Profissional ativo na área de T.I., <strong>há 05 anos</strong>, formado em <strong>Sistemas para Internet.</strong>
                <br /><strong>Desenvolvedor de Sistemas Web e Mobile</strong>, com foco no desenvolvimento <strong>Frontend/Mobile</strong>, mas
                também atuante no <strong>Backend</strong>.
              </p>
              <ul>
                <li>Freelancer –</li>
                <li>Tempo integral –</li>
                <li>Sem condução própria –</li>
                <li>Sem disponibilidade para viagens –</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="box-skills">
        <div className="bg--info box--shadow">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="font--uppercase text--white text--shadow"><span class="text--light">Formação</span> Academica</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul>
                <li>
                  <span className="box-skills__sub-title">Especialização em Engenharia de Software</span>
                  <div className="box-academics">
                    <div className="row">
                      <div className="col-xs-12 col-sm-5 box-academics__items d-inline-flex">
                        Faculdade Estácio de Sá – Estácio
                        </div>
                      <div className="col-xs-12 col-sm-2 text-xs-left text-sm-center box-academics__items d-inline-flex">
                        EAD
                        </div>
                      <div className="col-xs-12 col-sm-3 text-xs-left text-sm-center box-academics__items d-inline-flex">
                        Trancado
                        </div>
                      <div className="col-xs-12 col-sm-2 text-xs-left text-sm-right box-academics__items d-inline-flex">
                        2016.1
                        </div>
                    </div>
                  </div>
                </li>

                <li>
                  <span className="box-skills__sub-title">Superior Tecnológico em Sistemas para Internet</span>
                  <div className="box-academics">
                    <div className="row">
                      <div className="col-xs-12 col-sm-5 box-academics__items d-inline-flex">
                        Universidade Salvador – Unifacs
                        </div>
                      <div className="col-xs-12 col-sm-2 text-xs-left text-sm-center box-academics__items d-inline-flex">
                        Noturno
                        </div>
                      <div className="col-xs-12 col-sm-3 text-xs-left text-sm-center box-academics__items d-inline-flex">
                        Concluído
                        </div>
                      <div className="col-xs-12 col-sm-2 text-xs-left text-sm-right box-academics__items d-inline-flex">
                        2014.1
                        </div>
                    </div>
                  </div>
                </li>

                <li>
                  <span className="box-skills__sub-title">Superior em Engenharia da Computação</span>
                  <div className="box-academics"><div className="row">
                    <div className="col-xs-12 col-sm-5 box-academics__items d-inline-flex">
                      Faculdade de Ciências e Tecnologia – Área1
                      </div>
                    <div className="col-xs-12 col-sm-2 text-xs-left text-sm-center box-academics__items d-inline-flex">
                      Noturno
                      </div>
                    <div className="col-xs-12 col-sm-3 text-xs-left text-sm-center box-academics__items d-inline-flex">
                      Trancado
                      </div>
                    <div className="col-xs-12 col-sm-2 text-xs-left text-sm-right box-academics__items d-inline-flex">
                      2012.1
                      </div>
                  </div>
                  </div>
                </li>

                <li>
                  <div className="box-certifier">
                    <span className="box-skills__sub-title">Certificado de conclusão de curso | Treinamentos</span>
                    <div className="box-academics">
                      <div className="row">
                        <div className="col-xs-12 col-sm-5 box-academics__items d-inline-flex">
                          Treinamento Laravel – Principios básicos
                        </div>
                        <div className="col-xs-12 col-sm-2 text-xs-left text-sm-center box-academics__items d-inline-flex">
                          Conder
                        </div>
                        <div className="col-xs-12 col-sm-3 text-xs-left text-sm-center box-academics__items d-inline-flex">
                          10h
                        </div>
                        <div className="col-xs-12 col-sm-2 text-xs-left text-sm-right box-academics__items d-inline-flex">
                          2014
                        </div>
                      </div>
                    </div>

                    <hr className="--no-margin" />

                    <div className="box-academics">
                      <div className="row">
                        <div className="col-xs-12 col-sm-5 box-academics__items d-inline-flex">
                          Grupo de estudo: Design Patterns
                        </div>
                        <div className="col-xs-12 col-sm-2 text-xs-left text-sm-center box-academics__items d-inline-flex">
                          Conder
                        </div>
                        <div className="col-xs-12 col-sm-3 text-xs-left text-sm-center box-academics__items d-inline-flex">
                          --h
                        </div>
                        <div className="col-xs-12 col-sm-2 text-xs-left text-sm-right box-academics__items d-inline-flex">
                          2014
                        </div>
                      </div>
                    </div>

                    <hr className="--no-margin" />

                    <div className="box-academics">
                      <div className="row">
                        <div className="col-xs-12 col-sm-5 box-academics__items d-inline-flex">
                          Treinamento da Ferramenta de Desenvolvimento: Maker
                        </div>
                        <div className="col-xs-12 col-sm-2 text-xs-left text-sm-center box-academics__items d-inline-flex">
                          Softwell
                        </div>
                        <div className="col-xs-12 col-sm-3 text-xs-left text-sm-center box-academics__items d-inline-flex">
                          40h
                        </div>
                        <div className="col-xs-12 col-sm-2 text-xs-left text-sm-right box-academics__items d-inline-flex">
                          2011
                        </div>
                      </div>
                    </div>

                    <hr className="--no-margin" />

                    <div className="box-academics">
                      <div className="row">
                        <div className="col-xs-12 col-sm-5 box-academics__items d-inline-flex">
                          Microsoft Innovation Center: Students to Business – Banco de Dados
                        </div>
                        <div className="col-xs-12 col-sm-2 text-xs-left text-sm-center box-academics__items d-inline-flex">
                          Estácio de Sá
                        </div>
                        <div className="col-xs-12 col-sm-3 text-xs-left text-sm-center box-academics__items d-inline-flex">
                          84h
                        </div>
                        <div className="col-xs-12 col-sm-2 text-xs-left text-sm-right box-academics__items d-inline-flex">
                          2010
                        </div>
                      </div>
                    </div>

                    <hr className="--no-margin" />

                    <div className="box-academics">
                      <div className="row">
                        <div className="col-xs-12 col-sm-5 box-academics__items d-inline-flex">
                          Manutenção e Suporte à Microcomputadores
                        </div>
                        <div className="col-xs-12 col-sm-2 text-xs-left text-sm-center box-academics__items d-inline-flex">
                          SENAI
                        </div>
                        <div className="col-xs-12 col-sm-3 text-xs-left text-sm-center box-academics__items d-inline-flex">
                          120h
                        </div>
                        <div className="col-xs-12 col-sm-2 text-xs-left text-sm-right box-academics__items d-inline-flex">
                          2008
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="box-skills">
        <div className="bg--info box--shadow">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="font--uppercase text--white text--shadow"><span class="text--light">Conhecimentos</span> Profissionais</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="box-knowledge">
                <span class="box-knowledge__subtitle">Bancos de Dados </span>
                <div className="row">
                  <div className="table-responsive col-md-6">
                    <table className="table table-borderless --no-margin-bottom">
                      <thead>
                        <tr>
                          <th className="--no-padding-top --no-padding-left-right" colSpan="2">Relacionais</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="--no-padding-top align-middle">
                            SQL Server
                          </td>
                          <td className="--no-padding-top align-middle">
                            Avançado
                          </td>
                        </tr>
                        <tr>
                          <td className="--no-padding-top align-middle">
                            MySQL
                          </td>
                          <td className="--no-padding-top align-middle">
                            Avançado
                          </td>
                        </tr>
                        <tr>
                          <td className="--no-padding-top align-middle">
                            PostgreSQL
                          </td>
                          <td className="--no-padding-top align-middle">
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
                          <th className="--no-padding-top --no-padding-left-right" colSpan="2">Não Relacionais</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="--no-padding-top align-middle">
                            Firebase Realtime Database
                          </td>
                          <td className="--no-padding-top align-middle">
                            Avançado
                          </td>
                        </tr>
                        <tr>
                          <td className="--no-padding-top align-middle">
                            Firebase Cloud Storage
                          </td>
                          <td className="--no-padding-top align-middle">
                            Avançado
                          </td>
                        </tr>
                        <tr>
                          <td className="--no-padding-top align-middle">
                            MongoDB
                          </td>
                          <td className="--no-padding-top align-middle">
                            Intermediário
                          </td>
                        </tr>
                        <tr>
                          <td className="--no-padding-top align-middle">
                            Amazon AWS S3/Amplify
                          </td>
                          <td className="--no-padding-top align-middle">
                            Avançado
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

      <div className="box-experiences">
        <div className="bg--info box--shadow">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="font--uppercase text--white text--shadow"><span class="text--light">Experiências</span> Profisionais</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="box-personal">
        <div className="bg--info box--shadow">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="font--uppercase text--white text--shadow"><span class="text--light">Informações</span> Pessoais</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
