import React, { useState, useEffect } from "react";
import { getRoutine } from "../../api/api";
import useVerifyToken from "../../components/useVerifyToken";
import useAsync from "../../utils/useAsync";
import Popup from "../../components/Popup/Popup";
import UIButton from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

//rota ----> /inicialDependente

const InicialDependente = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [routines, setRoutines] = useState([]);
  let [atividades, setAtividades] = useState([]);
  const token = useVerifyToken();
  const createUserHook = useAsync(loadRoutines, false);
  const history = useNavigate();

  useEffect(() => {
    createUserHook.execute();
  }, []); // não tirar o [] para não fica em loop infinito

  async function loadRoutines() {
    const routinesResponse = await getRoutine(token.token);

    if (routinesResponse.routines.length !== 0) {
      if (routinesResponse.key === "sucessfulyRoutineListed") {
        setRoutines(routinesResponse.routines);
        const ultimaRotina = routinesResponse.routines.length - 1;
        atividades = routinesResponse.routines[ultimaRotina].routine.atividades;
        setAtividades(atividades);
      }
    } else {
      history("/rotinaNaoCadastrada");
    }
  }

  return (
    <>
      <div className=" content bg-azul-claro py-md ">
        <div className=" py-lg flex flex-column align-center">
          <h1 className="mb-lg titulo text-orange">
            Atividades propostas para o dia de hoje:
          </h1>
        </div>

        <div className="py-lg flex tabela-crianca">
          {atividades.map((routine, key) => (
            <UIButton
              key={key}
              onClick={() => {
                setButtonPopup(true);
              }}
              image={routine.toUpperCase()}
            >
              {routine.toUpperCase()}
            </UIButton>
          ))}
        </div>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>PARABÉNS!! VOCÊ CONCLUIU SUA ATIVIDADE</h3>
        </Popup>
      </div>
    </>
  );
};

export default InicialDependente;
