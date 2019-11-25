import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <header className="box bg--energy box--shadow">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="font--uppercase text--shadow text--white text--align-center"><span className="text--light">Web Curriculo</span> Diego Guimarães Martins</h1> 
                        </div>                        
                    </div>
                </div>               
            </header>
        )
    }
}
