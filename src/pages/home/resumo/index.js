import React, { Component } from "react";
import "./styles.css";
import ParkImage from "../../../assets/images/resumo.png";
export default class resumo extends Component {
  render() {
    return (
      <div id="resumo">
        <div id="park_image_div">
          <img src={ParkImage} alt="" />
        </div>
        <div id="resume_div">
          <div id="resume_header">
            <span>Sobre a gente...</span>
            <span>o resumo é</span>
          </div>

          <p>Se conheceram no trabalho &</p>
          <p>Ele tava pegando a fia do chefe &</p>
          <p>Se apaixonaram &</p>
          <p>Planejaram uma vida juntos &</p>
          <p>E vão casar.</p>
        </div>
      </div>
    );
  }
}
