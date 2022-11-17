import React, { useState, useEffect } from "react";
import { getRoutine } from "../../api/api";
import useVerifyToken from "../../components/useVerifyToken";
import useAsync from "../../utils/useAsync";
import sendToast from "../../components/Layouts/LayoutToast/sendToast";

//rota ----> /inicialDependente

const InicialDependente = () => {
  const createUserHook = useAsync(loadRoutines, false);
  const [routines, setRoutines] = useState([]);
  const token = useVerifyToken();

  useEffect(() => {
    createUserHook.execute();
  });
  async function loadRoutines() {
    const routinesResponse = await getRoutine(token.token);
    if (routinesResponse.key === "sucessfulyRoutineListed") {
      setRoutines(routinesResponse.routines);
    } else {
      sendToast({
        severity: "error",
        summary: "Erro inesperado ao coletar rotinas",
      });
    }
  }

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
            {routines.map((routine, key) => (
              <div
                key={key}
                onClick={() => {
                  console.log("curtiu meu pinto?");
                }}
              >
                <img src="https://conteudo.imguol.com.br/c/noticias/67/2017/03/24/24mar2017---um-pinto-com-quatro-patas-nasceu-em-uma-ninhada-de-galinhas-num-criatorio-de-aves-no-municipio-de-mancio-lima-interior-do-acre-1490402290271_300x420.jpg.webp" />
                {routine.nome}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default InicialDependente;
