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
  let [recompensa, setRecompensa] = useState([]);
  let [nome, setNome] = useState([]);

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
        recompensa = routinesResponse.routines[ultimaRotina].routine.recompensa;
        nome = routinesResponse.routines[ultimaRotina].routine.nome;
        console.log(nome);
        setAtividades(atividades);
        setRecompensa(recompensa);
        setNome(nome);
      }
    } else {
      history("/rotinaNaoCadastrada");
    }
  }

  return (
    <>
      <div className=" content bg-azul-claro py-md ">
        <div className=" flex flex-column align-center">
          <h1 className=" titulo text-orange">
            Atividades propostas para o dia de hoje:
          </h1>
        </div>
        <div className="text-white flex flex-center flex-column align-center">
          <p>Rotina: {nome}</p>
          <p>Recompensa: {recompensa} </p>
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
          <h3>PARABÉNS!</h3>
          <h2>VOCÊ CONCLUIU SUA ATIVIDADE!</h2>
        </Popup>
      </div>
    </>
  );
};

export default InicialDependente;
