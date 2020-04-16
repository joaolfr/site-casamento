import React from "react";
import "./styles.css";

const Contador = () => {
  return (
    <div className="div_contador">
      <div id="counter_div">
        <span id="dias_regular">Faltam XX dias</span>
        <span id="dias_bold"> Faltam XX dias</span>
      </div>

      <div id="confirm_div">
        <button>
          <span className="first_span">Confirme sua</span>
          <span className="second_span">presença</span>
        </button>
        <button>
          <span className="first_span">Lista de </span>
          <span className="second_span">presentes</span>
        </button>
      </div>

      <div id="footer_div">
        <p>Site desenvolvido pelos noivos</p>
        <p>Todos os direitos reservados</p>
      </div>
    </div>
  );
};

export default Contador;
