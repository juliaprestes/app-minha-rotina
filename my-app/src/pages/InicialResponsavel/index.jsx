import React from "react";
import { Link } from "react-router-dom";

const InicialResponsavel = () => {
  return (
    <body className="content bg-azul-claro">
      <section className="py-md">
        <div className="py-lg flex flex-column align-center">
          <h1 className="mt-lg titulo text-orange">Olá @responsavel!</h1>
          <h1 className="mb-lg text-center titulo width-600 text-orange">
            Aqui você poderá incentivar de seu filho a ter independência
          </h1>
          <div className="my-xl flex gap">
            <Link className="text-orange-100" to="#">
              <div className="botao-redondo_link">CADASTRAR DEPENDENTE</div>
            </Link>
            <Link className="text-orange-100" to="#">
              <div className="botao-redondo_link">CONSULTAR DEPENDENTE</div>
            </Link>
            <Link className="text-orange-100" to="#">
              <div className="botao-redondo_link">ROTINAS</div>
            </Link>
          </div>
        </div>
      </section>
    </body>
  );
};

export default InicialResponsavel;
