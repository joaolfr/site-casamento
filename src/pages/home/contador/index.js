import React from "react";
import "./styles.css";

const Contador = () => {
  var countDownDate = new Date("Aug 29, 2020 15:37:25").getTime();

  // eslint-disable-next-line
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    // Output the result in an element with id="demo"
    try {
      document.getElementById("days").innerHTML = days;
      document.getElementById("days2").innerHTML = days;
    } catch (e) {}
    // If the count down is over, write some text

    if (distance < 0) {
      document.getElementById("dias_regular").innerHTML = "Hojeeeee";
      document.getElementById("dias_bold").innerHTML = "Hojeeee";
    }
  }, 1000);

  return (
    <div className="div_contador">
      <div id="counter_div">
        <span id="dias_regular">
          Faltam <span id="days"></span> dias
        </span>
        <span id="dias_bold">
          Faltam <span id="days2"></span> dias
        </span>
      </div>

      <div id="confirm_div">
        <button disabled>
          <span className="first_span">Confirme sua</span>
          <span className="second_span">presença</span>
        </button>
        <button disabled>
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
