import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="bg--success box--shadow">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 text--white text--shadow">
                            <h5>Links Úteis</h5>
                            <ul className="--no-list-style --no-padding-left">
                                <li><a className="text--white" href="#">GitHub</a></li>
                                <li><a className="text--white" href="#">Linkedin</a></li>
                                <li><a className="text--white" href="#">Portifólio</a></li>
                            </ul>                            
                        </div>
                        {/* <div className="col-sm-12 col-md-6 text-sm-left text-md-right">
                            <a href="#" className="btn btn-outline-light text--white text--shadow">
                                <h5>
                                    Entrar <span className="text--light">no gerenciador</span>                                    
                                </h5>
                            </a>
                        </div> */}
                        <div className="col-12">
                            <small className="text--white text--shadow">Todos os direitos reservados a Diego Guimarães Martins</small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



