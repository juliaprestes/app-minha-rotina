import React from "react";
import getToken from "../../components/getToken";
import { useNavigate } from "react-router-dom";
import "../../assets/css/components/rotinas.css";

const Rotinas = () => {
  const decodedToken = getToken(localStorage.getItem("token"));
  const navigate = useNavigate();

  if (!decodedToken) {
    navigate("/");
    return <></>;
  }

  return (
    <>
      <div className="content bg-azul-claro">
        <section className="py-md">
          <div className=" py-lg flex flex-column align-center">
            <h1 className="mb-lg titulo  text-orange">
              Defina aqui as atividades e o nome da rotina:
            </h1>
          </div>
          <div className="">
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

          <button
            className="#entrar botao-redondo box-shadow text-button text-orange bg-amarelo"
            form="loginForm"
            id="entrar"
          >
            Salvar
          </button>
        </section>
      </div>
    </>
  );
};

export default Rotinas;
