import React, { useState } from "react";
import useVerifyToken from "../../components/useVerifyToken";
import almocar from "../../assets/img/atividadesRotina/almoco.png";
import brincar from "../../assets/img/atividadesRotina/brincar.png";
import cafe from "../../assets/img/atividadesRotina/cafe.png";
import dormir from "../../assets/img/atividadesRotina/dormir.png";
import escovarDente from "../../assets/img/atividadesRotina/escovarDente.png";
import lavarMao from "../../assets/img/atividadesRotina/lavarmao.png";
import pentearCabelo from "../../assets/img/atividadesRotina/pentearCabelo.png";
import tomarBanho from "../../assets/img/atividadesRotina/tomarbanho.png";
import useAsync from "../../utils/useAsync";
import { createRoutine } from "../../api/api";
import sendToast from "../../components/Layouts/LayoutToast/sendToast";
import UIButton from "../../components/Button/Button";

// rota ---> /rotinas

const Rotinas = () => {
  const token = useVerifyToken() as any;
  const createUserHook = useAsync(sendCreateRoutine, false);
  const [atividades, setAtividades] = useState<string[]>([]);
  const [nomeRotina, setNomeRotina] = useState("");
  const [recompensa, setRecompensa] = useState("");
  // useEffect(() => {
  //   createUserHook.execute();
  // }, []);

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
      <div className="content bg-azul-claro">
        <section className="py-md">
          <div className="flex flex-column align-center">
            <h1 className="mb-lg titulo  text-orange">
              Defina aqui as atividades e o nome da rotina:
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
                image={almocar}
                onClick={() => {
                  addicionaAtividade("almocar");
                }}
              >
                ALMOÇAR
              </UIButton>
              <UIButton
                onClick={() => {
                  addicionaAtividade("brincar");
                }}
                image={brincar}
              >
                BRINCAR
              </UIButton>
              <UIButton
                onClick={() => {
                  addicionaAtividade("tomarCafe");
                }}
                image={cafe}
              >
                TOMAR CAFÉ
              </UIButton>
              <UIButton
                onClick={() => {
                  addicionaAtividade("dormir");
                }}
                image={dormir}
              >
                DORMIR
              </UIButton>
              <UIButton
                onClick={() => {
                  addicionaAtividade("escovarDente");
                }}
                image={escovarDente}
              >
                ESCOVAR O DENTE
              </UIButton>
              <UIButton
                onClick={() => {
                  addicionaAtividade("lavarMao");
                }}
                image={lavarMao}
              >
                LAVAR A MÃO
              </UIButton>
              <UIButton
                onClick={() => {
                  addicionaAtividade("pentearCabelo");
                }}
                image={pentearCabelo}
              >
                PENTEAR O CABELO
              </UIButton>
              <UIButton
                onClick={() => {
                  addicionaAtividade("tomarBanho");
                }}
                image={tomarBanho}
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
                createUserHook.execute();
              }}
            >
              Salvar
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Rotinas;
