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
            <span id="about_span">Sobre a gente...</span>
            <span id="resume_span_regular">o resumo é</span>
            <span id="resume_span_bold">o resumo é</span>
          </div>

          <p id="p_1">Se conheceram no trabalho &</p>
          <p id="p_2">Ele tava pegando a fia do chefe &</p>
          <p id="p_3">Se apaixonaram &</p>
          <p id="p_4">Planejaram uma vida juntos &</p>
          <p id="p_5">E vão casar.</p>
        </div>
      </div>
    );
  }
}
