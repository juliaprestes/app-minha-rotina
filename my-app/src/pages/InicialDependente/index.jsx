import React from "react";

//rota ----> /meusDados

const InicialDependente = () => {
  return (
    <>
      <main className="container flex flex--centro flex--coluna content bg-azul-claro py-md">
        <div className="content bg-azul-claro">
          <div className=" py-lg flex flex-column align-center">
            <h1 className="mb-lg titulo text-orange">
              Atividades propostas para o dia de hoje:
            </h1>
          </div>
          <div>
            <p className="text-white descricao">
              Listar Atividades selecionadas na pagina rotinas do responsavel
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default InicialDependente;
