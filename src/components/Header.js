import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Página Inicial</Link></li>
          <li><Link to="/cadastro">Cadastro de Reserva</Link></li>
          <li><Link to="/listar">Listar Vagas</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;