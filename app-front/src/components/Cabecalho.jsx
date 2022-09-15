import React from "react";
import { Link } from "react-router-dom";
import imagem from "../assets/img/rotimy.svg";
import "../assets/css/componentes/cabecalho.css";

const Cabecalho = () => {
  return (
    <header className="cabecalho">
      <div>
        <Link to="/" className="">
          <img className="cabecalho__logo" src={imagem} alt="Logo Rotimy" />
          <h1 className="cabecalho__titulo">Minha Rotina</h1>
        </Link>
      </div>
      <div>
        <nav className="">
          <ul className="">
            <li>
              <Link to="/" className="inicio">
                Início
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="sobre">
                Sobre
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
