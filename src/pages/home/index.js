import React, { Component } from 'react'

import './styles.css';
import Header from './header'
import Cards from './cards'
import Resumo from './resumo'
import Contador from './contador'

export default class home extends Component {
  render() {
    return(
        <div className="container_home">
            <Header />
            <Cards />
            <Resumo />
            <Contador />
        </div>
    );
  }
}
