import React, { Component } from 'react';

import './styles.css'
import Sub from '../../../static/images/plano.png';


export default class header extends Component {
  render() {
    return(
        <img id="subtracao" src={Sub} alt="subtracao" />
    );
  }
}
