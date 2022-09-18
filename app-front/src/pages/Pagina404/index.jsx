import React from "react";
import imagem from "../../assets/img/doguito404.svg";

const Pagina404 = () => {
  return (
    <main className="container flex flex--centro flex--coluna">
      <img className="doguito-imagem" alt="ilustração doguito" />
      <p className="naoencontrado-texto">Ops, Essa página não existe!</p>
    </main>
  );
};

export default Pagina404;
