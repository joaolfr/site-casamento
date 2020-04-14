import React, { Component } from 'react'
import { Link } from '@reach/router'
import './styles.css'

export default class home extends Component {
  render() {
    return(
        <div className="app">
          <div id="JJ">
            <div id="joao">João & </div>
            <div id="jessica">Jéssica</div>
          </div>

          <div id="data">

            <hr />
            <span>29 de agosto de 2020</span>
            <hr />

          </div>
            
          <nav>
              <Link to="/">O dia do sim</Link>
              <Link to="historias">Nossa história</Link>
              <Link to="presentes">Lista de presentes</Link>
              <Link to="presenca" id="confirme_presenca">Confirme sua presença</Link>
          </nav>

          
        </div>
    );
  }
}
