import React, { useState, useEffect } from "react";
import "../../assets/css/components/rotinas.css";
import Atividades from "../../components/Rotina/Atividades";
import useVerifyToken from "../../components/useVerifyToken";
import Popup from "../../components/Popup/Popup";
import useAsync from "../../utils/useAsync";
import { createRoutine } from "../../api/api";
import sendToast from "../../components/Layouts/LayoutToast/sendToast";

// rota ---> /rotinas

const Rotinas = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timePopup, setTimePopup] = useState(false);
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
          <div className=" py-lg flex flex-column align-center">
            <h1 className="mb-lg titulo  text-orange">
              Defina aqui as atividades e o nome da rotina:
            </h1>
          </div>

          <div className="flex flex-around">
            <div>
              <div>
                <h2 className="pb-sm text-white">Nome:</h2>
                <input
                  className="input-rounded box-shadow"
                  type="email"
                  //onChange={(e) => handleChangeEmail(e)}
                />
              </div>
              <div className="campo-senha">
                <h2 className="pb-sm text-white">Definir recompensa:</h2>
                <input
                  className="input-rounded box-shadow"
                  type="password"
                  //onChange={(e) => handleChangePassword(e)}
                />
              </div>
            </div>

            <Atividades />

            <button
              className="#entrar botao-redondo box-shadow text-button text-orange bg-amarelo "
              form="loginForm"
              id="entrar"
              onClick={() => setButtonPopup(true)}
            >
              Teste popup
            </button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <h3>PARABÉNS!! VOCÊ CONCLUIU SUA ATIVIDADE</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex enim
                quis maxime officia asperiores laborum, iusto, quasi adipisci
                consequatur hic aut perferendis aliquid. Nobis rerum enim illum
                voluptas suscipit, eaque illo necessitatibus perspiciatis quasi
                et quaerat quisquam corporis ipsam reprehenderit.
              </p>
            </Popup>

            <Popup trigger={timePopup} setTrigger={setTimePopup}>
              <h3>My popup</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex enim
                quis maxime officia asperiores laborum, iusto, quasi adipisci
                consequatur hic aut perferendis aliquid. Nobis rerum enim illum
                voluptas suscipit, eaque illo necessitatibus perspiciatis quasi
                et quaerat quisquam corporis ipsam reprehenderit.
              </p>
            </Popup>
          </div>
          <div className="flex flex-around">
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
