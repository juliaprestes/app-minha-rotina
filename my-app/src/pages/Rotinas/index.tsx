import React from "react";
import "../../assets/css/components/rotinas.css";
import Atividades from "../../components/Rotina/Atividades";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const Rotinas = () => {
  //TODO: FAZER A TABELA DE ATIVIDADES
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

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
