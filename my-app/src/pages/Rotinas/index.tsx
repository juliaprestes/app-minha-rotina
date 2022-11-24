import React, { useState, useEffect } from "react";
import useVerifyToken from "../../components/useVerifyToken";
import Popup from "../../components/Popup/Popup";
import almoco from "../../assets/img/atividadesRotina/almoco.png";
import brincar from "../../assets/img/atividadesRotina/brincar.png";
import cafe from "../../assets/img/atividadesRotina/cafe.png";
import dormir from "../../assets/img/atividadesRotina/dormir.png";
import escovarDente from "../../assets/img/atividadesRotina/escovarDente.png";
import lavarmao from "../../assets/img/atividadesRotina/lavarmao.png";
import pentearCabelo from "../../assets/img/atividadesRotina/pentearCabelo.png";
import tomarBanho from "../../assets/img/atividadesRotina/tomarbanho.png";
import useAsync from "../../utils/useAsync";
import { createRoutine } from "../../api/api";
import sendToast from "../../components/Layouts/LayoutToast/sendToast";
import UIButton from "../../components/Button/Button";

// rota ---> /rotinas

const Rotinas = () => {
  const token = useVerifyToken();
  // const createUserHook = useAsync(sendCreateRoutine, false);
  // const [nome, setNome] = useState("");
  // const [imagem, setImagem] = useState("");
  // const [recompensa, setRecompensa] = useState("");

  // const token = useVerifyToken() as any;

  // useEffect(() => {
  //   createUserHook.execute();
  // });
  // async function sendCreateRoutine() {
  //   const response = await createRoutine(
  //     nome,
  //     imagem,
  //     recompensa,
  //     token?.token
  //   );
  //   if (response.key === "sucessfulyRoutineCreated") {
  //     sendToast({
  //       severity: "success",
  //       summary: "Sucesso",
  //       detail: "Sucesso ao criar rotina",
  //     });
  //   } else {
  //     sendToast({
  //       severity: "error",
  //       summary: "Erro inesperado ao selecion atividades",
  //     });
  //   }
  // }

  //TODO: FAZER A TABELA DE ATIVIDADES

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
                    type="email"
                    //onChange={(e) => handleChangeEmail(e)}
                  />
                </div>
                <div className="py-both">
                  <h2 className="pb-sm text-white ">Definir recompensa:</h2>
                  <input
                    className="input-rounded box-shadow"
                    type="password"
                    //onChange={(e) => handleChangePassword(e)}
                  />
                </div>
              </div>
            </div>

            <div className="flex tabela">
              <UIButton image={almoco}>ALMOÇAR</UIButton>
              <UIButton image={brincar}>BRINCAR</UIButton>
              <UIButton image={cafe}>TOMAR CAFÉ</UIButton>
              <UIButton image={dormir}>DORMIR</UIButton>
              <UIButton image={escovarDente}>ESCOVAR O DENTE</UIButton>
              <UIButton image={lavarmao}>LAVAR A MÃO</UIButton>
              <UIButton image={pentearCabelo}>PENTEAR O CABELO</UIButton>
              <UIButton image={tomarBanho}>TOMAR BANHO</UIButton>
            </div>
          </div>

          <div className="py-lg flex flex-around">
            <button
              className="#entrar botao-redondo box-shadow text-button text-orange bg-amarelo "
              form="loginForm"
              id="entrar"
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
