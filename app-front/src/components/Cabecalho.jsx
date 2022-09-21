import React from "react";
import { Link } from "react-router-dom";
import imagem from "../assets/img/rotimy.svg";

const Cabecalho = () => {
  return (
    <header className="header-cabecalho">
      <div>
        <Link to="/" className="">
          <img className="img-cabecalho" src={imagem} alt="Logo Rotimy" />
          <h1 className="titulo-cabecalho">Minha Rotina</h1>
        </Link>
      </div>
      <div>
        <nav className="menu-opcoes">
          <ul className="">
            <li>
              <Link to="/" className="inicio">
                Início
              </Link>
            </li>
            <li>
              <Link to="/login" className="entrar">
                Entrar
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Cabecalho;
