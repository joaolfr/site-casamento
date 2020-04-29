import React, { Component } from "react";

import CameraIcon from "../../../assets/icons/CAMERA.png";
import ChurchIcon from "../../../assets/icons/IGREJA.png";
import Reception from "../../../assets/icons/RECEPCAO.png";
import Suit from "../../../assets/icons/TRAJE.png";
import "./styles.css";

export default class cards extends Component {
  render() {
    return (
      <div className="div_cards">
        <p id="dia_sim">O dia do sim!</p>
        <p>
          Esperamos que esse dia seja tão maravilhoso quanto a gente sonhou e as
          coisas vão acontecer da seguinte forma:
        </p>
        <div id="container_cards">
          <div id="item_cards">
            <div id="card_1">
              <div id="icon_div">
                <img src={ChurchIcon} alt="Church" />
              </div>
              <div id="info">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span id="cerimony">Cerimônia</span>
                  <span id="time">às 16:30</span>
                </div>
                <span id="place">Capela Santa Luzia</span>
                <span id="adress">R. Antonio Rocha, 555</span>

                <div id="btns_info">
                  <button>
                    <a
                      targe="_blank"
                      href="https://www.waze.com/ul?ll=-3.77789610%2C-38.49896370&navigate=yes"
                      id="waze_link"
                    >
                      Waze
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://www.google.com/maps/place/Igreja+de+Santa+Luzia/@-3.7762703,-38.497991,17.25z/data=!4m8!1m2!2m1!1scapela+santa+luzia+fortaleza!3m4!1s0x0:0xff684db0628f8b57!8m2!3d-3.777587!4d-38.4992748"
                      id="maps_link"
                    >
                      Google maps
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div id="card_1">
              <div id="icon_div">
                <img src={Reception} alt="Church" />
              </div>
              <div id="info">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span id="cerimony">Recepção</span>
                  <span id="time">após a cerimônia</span>
                </div>
                <span id="place">Espaço Hibisco</span>
                <span id="adress">R. Olímpio Leite, 620</span>

                <div id="btns_info">
                  <button>
                    <a
                      href="https://www.waze.com/ul?ll=-3.81778710%2C-38.47829290&navigate=yes"
                      id="waze_link"
                    >
                      Waze
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://www.google.com/maps/place/Espa%C3%A7o+Hibisco/@-3.8177871,-38.4804816,17z/data=!4m12!1m6!3m5!1s0x7c74567681decef:0xb9e766e96ae4184!2sEspa%C3%A7o+Hibisco!8m2!3d-3.8177871!4d-38.4782929!3m4!1s0x7c74567681decef:0xb9e766e96ae4184!8m2!3d-3.8177871!4d-38.4782929"
                      id="maps_link"
                    >
                      Google maps
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div id="item_cards">
            <div id="card_2">
              <div id="icon_div">
                <img src={Suit} alt="Suit" />
              </div>

              <div id="info_suit">
                <span id="suit">O traje é esporte fino</span>
                <span id="suit_tips">
                  Estamos ao ar livre e no Ceará, então nada melhor do que uma
                  roupa leve e confortável, lá contamos com grama também e
                  talvez seja legal a mulherada apostar no salto grosso.
                </span>
              </div>
            </div>

            <div id="card_2">
              <div id="uber">
                <span id="title"> Se divirta com responsabilidade</span>
                <span>
                  {" "}
                  O Uber da igreja para o buffet pode variar de R$15,00 a
                  R$21,00
                </span>
                <button>
                  <a href="https://github.io">Pedir Uber</a>
                </button>
                <span id="uber_request">
                  Basta clicar no botão para pedir o seu Uber de onde você
                  estiver para a recepção
                </span>
              </div>
            </div>
            <div id="card_2">
              <div id="icon_div">
                <img src={CameraIcon} alt="camera" id="camera_icon" />
              </div>
              <div id="info_suit">
                <span id="hashtag_title">#JESSICAEJOAO</span>
                <div>
                  <span>Ajuda a gente a eternizar esse momento!</span>
                  <span>Vamos amar ver pela ótica de vocês</span>
                </div>
                <button id="filter_button">Teste nosso filtro</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
