import React from "react";
import imagem from "../assets/img/rotimy.svg";
import "../assets/css/componentes/cabecalho.css";

const Cabecalho = () => {
  return (
    <header className="cabecalho">
      <div>
        <a href="/" className="">
          <img className="cabecalho__logo" src={imagem} alt="Logo Rotimy" />
          <h1 className="cabecalho__titulo">Minha Rotina</h1>
        </a>
      </div>
      <div>
        <nav className="">
          <ul className="">
            <li>
              <a href="/" className="inicio">
                Início
              </a>
            </li>
            <li>
              <a href="/" className="sobre">
                Sobre
              </a>
            </li>

            <li>
              <a href="/login" className="entrar">
                Entrar
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Cabecalho;
