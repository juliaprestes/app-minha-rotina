import React, { useState, useEffect } from "react";
import { getRoutine } from "../../api/api";
import useVerifyToken from "../../components/useVerifyToken";
import useAsync from "../../utils/useAsync";
import sendToast from "../../components/Layouts/LayoutToast/sendToast";
import Popup from "../../components/Popup/Popup";
import UIButton from "../../components/Button/Button";

//rota ----> /inicialDependente

const InicialDependente = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [routines, setRoutines] = useState([]);
  const token = useVerifyToken();
  const createUserHook = useAsync(loadRoutines, false);

  console.log("routines", routines);

  useEffect(() => {
    createUserHook.execute();
  }, []); // não tirar o [] para não fica em loop infinito
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
      <div className="content bg-azul-claro py-md">
        <div className=" py-lg flex flex-column align-center">
          <h1 className="mb-lg titulo text-orange">
            Atividades propostas para o dia de hoje:
          </h1>
        </div>
        <div>
          {routines.map((routine, key) => (
            <div
              key={key}
              onClick={() => {
                console.log("curtiu meu pinto?");
              }}
            >
              {routine.nome}
            </div>
          ))}
        </div>

        <UIButton>ALMOÇAR</UIButton>

        <div className="py-lg flex flex-around">
          <button
            className="#entrar botao-redondo box-shadow text-button text-orange bg-amarelo "
            form="loginForm"
            id="entrar"
            onClick={() => setButtonPopup(true)}
          >
            Teste popup
          </button>
        </div>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>PARABÉNS!! VOCÊ CONCLUIU SUA ATIVIDADE</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex enim
            quis maxime officia asperiores laborum, iusto, quasi adipisci
            consequatur hic aut perferendis aliquid. Nobis rerum enim illum
            voluptas suscipit, eaque illo necessitatibus perspiciatis quasi et
            quaerat quisquam corporis ipsam reprehenderit.
          </p>
        </Popup>
      </div>
    </>
  );
};

export default InicialDependente;
