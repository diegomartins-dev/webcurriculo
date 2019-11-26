import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      

      <div className="box-skills">
        <div className="bg--info box--shadow">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="font--uppercase text--white text--shadow"><span class="text--light text--capitalize">Perfil</span> Profissional</h2>
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
              <ul className="--no-margin-bottom">
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
                <h2 className="font--uppercase text--white text--shadow"><span class="text--light text--capitalize">Formação</span> Academica</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="list-academics --no-list-style --no-padding-left">
                <li>
                  <h3 className="box-skills__sub-title --no-margin">Especialização em Engenharia de Software</h3>
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
                  <h3 className="box-skills__sub-title --no-margin">Superior Tecnológico em Sistemas para Internet</h3>
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
                  <h3 className="box-skills__sub-title --no-margin">Superior em Engenharia da Computação</h3>
                  <div className="box-academics">
                    <div className="row">
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
                    <h3 className="box-skills__sub-title --no-margin">Certificado de conclusão de curso | Treinamentos</h3>
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
                <h2 className="font--uppercase text--white text--shadow"><span class="text--light text--capitalize">Conhecimentos</span> Profissionais</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="box-knowledge">
                <h3 class="box-knowledge__subtitle --no-margin">Bancos de Dados </h3>
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
                          <th className="--no-padding-top --no-padding-left-right" colSpan="2">Não Relacionais</th>
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
                          <th className="--no-padding-top --no-padding-left-right" colSpan="2">Linguagens</th>
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
                          <th className="--no-padding-top --no-padding-left-right" colSpan="2">Frameworks</th>
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
                <h2 className="font--uppercase text--white text--shadow"><span class="text--light text--capitalize">Experiências</span> Profisionais</h2>
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
                    <h3 className="box-experiences__subtitle text--uppercase --no-margin-bottom">Freelancer</h3>

                    <div className="box-experiences__content">
                      <h3 className="box-experiences__content__title">
                        Desenvolvedor Frontend
                      </h3>
                      <p>
                        Agosto/2018 a Atualmente
                      </p>
                    </div>

                    <div className="box-experiences__content">
                      <h3 className="box-experiences__content__title">
                        Atividades desenvolvidas
                      </h3>
                      <ul>
                        <li>Desenvolvimento de app híbrido usando Ionic 3</li>
                        <li>Desenvolvimento com tecnologias Frontend</li>
                        <li>Criação e edição do layout personalizado para app/sistemas web</li>
                        <li>Versionamento de sistema</li>
                        <li>Constante vivencia com HTML, CSS, Javascript , Typescript, Ionic, Angular e Firebase</li>
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
                    <h3 className="box-experiences__subtitle text--uppercase --no-margin-bottom">Avansys</h3>

                    <div className="box-experiences__content">
                      <h3 className="box-experiences__content__title">
                        Analista de Sistemas Jr
                      </h3>
                      <p>
                        Setembro/2015 a Março/2016
                      </p>
                    </div>

                    <div className="box-experiences__content">
                      <h3 className="box-experiences__content__title">
                        Atividades desenvolvidas
                      </h3>
                      <ul>
                        <li>Trabalhar embarcado em um dos clientes da Avansys e desenvolver;</li>
                        <li>Criação de um sistema de pesquisas e formulários para área de educação – Sistema Inculca;</li>
                        <li>Constante vivencia com análise, modelagem do banco de dados e consultas SQL;</li>
                        <li>Manutenção em sistemas com o framework ExtJS;</li>
                        <li>Constante vivencia com Javascript, Jquery, Codeigniter, PHP, Mysql</li>
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
                <h2 className="font--uppercase text--white text--shadow"><span class="text--light text--capitalize">Informações</span> Pessoais</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="box-personal">
                <p>Brasileiro, 31 anos, solteiro.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div >
  );
}

export default App;
