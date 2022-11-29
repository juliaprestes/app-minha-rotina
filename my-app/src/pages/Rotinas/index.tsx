import React, { useState } from "react";
import useVerifyToken from "../../components/useVerifyToken";

import useAsync from "../../utils/useAsync";
import { createRoutine } from "../../api/api";
import sendToast from "../../components/Layouts/LayoutToast/sendToast";
import UIButton from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

// rota ---> /rotinas

const Rotinas = () => {
  const token = useVerifyToken() as any;
  const createUserHook = useAsync(sendCreateRoutine, false);
  const [atividades, setAtividades] = useState<string[]>([]);
  const [nomeRotina, setNomeRotina] = useState("");
  const [recompensa, setRecompensa] = useState("");
  const navigate = useNavigate();

  function onSubmit() {
    createUserHook.execute();
    navigate("/selecionarPerfil");
  }
  async function sendCreateRoutine() {
    const response = await createRoutine(
      { nome: nomeRotina, atividades, recompensa },
      token?.token
    );
    if (response.key === "sucessfulyRoutineCreated") {
      sendToast({
        severity: "success",
        summary: "Sucesso",
        detail: "Sucesso ao criar rotina",
      });
    } else {
      sendToast({
        severity: "error",
        summary: "Erro inesperado ao selecion atividades",
      });
    }
  }

  function handleChangeNomeRotina(event: React.ChangeEvent<HTMLInputElement>) {
    setNomeRotina(event.target.value);
  }

  function handleChangeRecompensa(event: React.ChangeEvent<HTMLInputElement>) {
    setRecompensa(event.target.value);
  }

  function addicionaAtividade(nome: string) {
    const index = atividades.indexOf(nome);
    if (index !== -1) {
      atividades.splice(index, 1);
      setAtividades(atividades);
      return;
    }
    setAtividades([...atividades, nome]);
  }

  return (
    <>
      <div className="container content bg-azul-claro">
        <section className="py-md">
          <div className="flex flex-column align-center">
            <h1 className="mb-lg text-center titulo text-orange">
              Crie aqui uma nova rotina:
            </h1>
            <h1 className="pb-sm text-white">
              Defina um nome, uma recompensa e selecione as atividades abaixo:
            </h1>
          </div>
          <div className="flex margin-around">
            <div className="flex flex-around ">
              <div className="pg">
                <div className="pb-sm">
                  <h2 className="pb-sm text-white">Nome:</h2>
                  <input
                    className="input-rounded box-shadow"
                    type="text"
                    onChange={handleChangeNomeRotina}
                  />
                </div>
                <div className="py-both">
                  <h2 className="pb-sm text-white ">Definir recompensa:</h2>
                  <input
                    className="input-rounded box-shadow"
                    type="text"
                    onChange={handleChangeRecompensa}
                  />
                </div>
              </div>
            </div>

            <div className="flex tabela">
              <UIButton
                onClick={() => {
                  addicionaAtividade("ALMOÇAR");
                }}
                image={"ALMOÇAR"}
              >
                ALMOÇAR
              </UIButton>
              <UIButton
                onClick={() => {
                  addicionaAtividade("BRINCAR");
                }}
                image={"BRINCAR"}
              >
                BRINCAR
              </UIButton>
              <UIButton
                onClick={() => {
                  addicionaAtividade("TOMAR CAFÉ");
                }}
                image={"TOMAR CAFÉ"}
              >
                TOMAR CAFÉ
              </UIButton>
              <UIButton
                onClick={() => {
                  addicionaAtividade("DORMIR");
                }}
                image={"DORMIR"}
              >
                DORMIR
              </UIButton>
              <UIButton
                onClick={() => {
                  addicionaAtividade("ESCOVAR O DENTE");
                }}
                image={"ESCOVAR O DENTE"}
              >
                ESCOVAR O DENTE
              </UIButton>
              <UIButton
                onClick={() => {
                  addicionaAtividade("LAVAR A MÃO");
                }}
                image={"LAVAR A MÃO"}
              >
                LAVAR A MÃO
              </UIButton>
              <UIButton
                onClick={() => {
                  addicionaAtividade("PENTEAR O CABELO");
                }}
                image={"PENTEAR O CABELO"}
              >
                PENTEAR O CABELO
              </UIButton>
              <UIButton
                onClick={() => {
                  addicionaAtividade("TOMAR BANHO");
                }}
                image={"TOMAR BANHO"}
              >
                TOMAR BANHO
              </UIButton>
            </div>
          </div>

          <div className="py-lg flex flex-around">
            <button
              className="#entrar botao-redondo box-shadow text-button text-orange bg-amarelo "
              form="loginForm"
              id="entrar"
              onClick={() => {
                onSubmit();
              }}
            >
              SALVAR
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Rotinas;
