import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

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
        <Grid container id="container_cards">
          <Grid item xs={12} md={6} id="item_cards">
            <div id="card_1">
              <div id="icon_div">
                <img src={ChurchIcon} alt="Church" />
              </div>
              <div id="info">
                <span id="cerimony">Cerimônia</span>
                <span id="time">às 16:00</span>
                <span id="place">Capela Santa Luzia</span>
                <span id="adress">R. Antonio Rocha, 555</span>

                <div id="btns_info">
                  <button>
                    <a href="https://github.com" id="waze_link">
                      Waze
                    </a>
                  </button>
                  <button>
                    <a href="https://github.com" id="maps_link">
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
                <span id="cerimony">Recepção</span>
                <span id="time">após a cerimônia</span>
                <span id="place">Espaço Hibisco</span>
                <span id="adress">R. Olímpio Leite, 620</span>

                <div id="btns_info">
                  <button>
                    <a href="https://github.com" id="waze_link">
                      Waze
                    </a>
                  </button>
                  <button>
                    <a href="https://github.com" id="maps_link">
                      Google maps
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} id="item_cards">
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
                <span> Se divirta com responsabilidade</span>
                <span>
                  {" "}
                  O Uber da igreja para o buffet pode variar de R$15,00 a
                  R$21,00
                </span>
                <button>
                  <a href="https://github.io">Pedir Uber</a>
                </button>
                <span>
                  Basta clicar no botão para pedir o seu Uber de onde você
                  estiver para a recepção
                </span>
              </div>
            </div>
            <div id="card_2"></div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
