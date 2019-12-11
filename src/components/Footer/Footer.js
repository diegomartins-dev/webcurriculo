import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div className="bg--success box--shadow">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 text--shadow">
              <h5 className="text--white">Links Úteis</h5>
              <ul className="--no-list-style --no-padding-left">
                <li>
                  <a
                    className="text--white"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/diegohyenna"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    className="text--white"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/diego-martins-362136123/"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    className="text--white"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://dgsite.pessoal.ws"
                  >
                    Portifólio
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6 text-sm-left text-md-right">
              {/* <Link to={"/login"}>
                <a
                  href="#"
                  className="btn btn-outline-light text--shadow"
                >
                  <h5 className="text--white">
                    Entrar <span className="text--light">no gerenciador</span>
                  </h5>
                </a>
              </Link> */}
            </div>
            <div className="col-12">
              <small className="text--white text--shadow">
                Todos os direitos reservados a Diego Guimarães Martins
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
