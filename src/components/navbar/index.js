import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import "./styles.css";

function Home() {
  const [navItem, setNavItem] = useState(1);
  const NavItem = styled.span`
    font-weight: ${(props) => (props.item === navItem ? "700" : "100")};
  `;

  return (
    <div className="app">
      <div id="JJ">
        <div id="joao">João & </div>
        <div id="jessica">Jéssica</div>
      </div>

      <div id="data">
        <hr />
        <span>8 de maio de 2021</span>
        <hr />
      </div>

      <nav>
        <Link to="/" onClick={() => setNavItem(1)}>
          <NavItem item={1}>O dia do sim</NavItem>
        </Link>
        <Link to="historias" onClick={() => setNavItem(2)}>
          <NavItem item={2}>Nossa história</NavItem>
        </Link>
        <Link to="historias" onClick={() => setNavItem(3)}>
          <NavItem>Lista de presentes</NavItem>
        </Link>
        {/* <Link to="presentes" onClick={() => setNavItem(3)}>
          <NavItem item={3}>Lista de presentes</NavItem>
        </Link> */}
        <Link to="historias" onClick={() => setNavItem(4)}>
          <NavItem>Confirme sua presença</NavItem>
        </Link>
        {/* <Link to="presenca" onClick={() => setNavItem(4)}>
          <NavItem item={4}>Confirme sua presença</NavItem>
        </Link> */}
      </nav>
    </div>
  );
}

export default Home;
