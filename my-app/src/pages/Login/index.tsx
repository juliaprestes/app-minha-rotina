import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/api";
import sendToast from "../../components/Layouts/LayoutToast/sendToast";

//rota ----> /login
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/inicialResponsavel");
    }
  });

  async function loginFunction(event: React.FormEvent<Element>) {
    event.preventDefault();
    const loginResponse = await login(email, password);

    if (email === "" || password === "") {
      sendToast({
        severity: "error",
        summary: "Existem erros de validação",
        detail: "Favor informar Login e Senha",
      });
      return;
    }

    // validar loginResponse
    if (loginResponse.token && loginResponse.key === "loginSuccessfully") {
      localStorage.setItem("token", loginResponse.token);
      sendToast({
        severity: "success",
        summary: "Sucesso",
        detail: loginResponse.msg,
      });
      navigate("/selecionarPerfil");
    } else {
      sendToast({
        severity: "error",
        summary: "Erro",
        detail: loginResponse.msg,
      });
      return;
    }
  }

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  //function limpar() {
  //  setEmail("");
  //  setPassword("");
  //}

  return (
    <>
      <form
        id="loginForm"
        className="content bg-azul-claro py-md"
        onSubmit={loginFunction}
      >
        <div className="py-lg flex flex-column align-center">
          <h1 className="py-lg titulo text-orange">Faça seu Login</h1>
          <div className="campo-email pb-lg">
            <h2 className="pb-sm text-white">Digite seu email:</h2>
            <input
              className="input-rounded box-shadow"
              type="email"
              onChange={(e) => handleChangeEmail(e)}
            />
          </div>
          <div className="campo-senha">
            <h2 className="pb-sm text-white">Digite sua senha:</h2>
            <input
              className="input-rounded box-shadow"
              type="password"
              onChange={(e) => handleChangePassword(e)}
            />
          </div>

          <Link className="py-lg text-white text-shadow" to="/">
            Esqueci minha senha →
          </Link>
          <button
            className="#entrar botao-redondo box-shadow text-button"
            form="loginForm"
            id="entrar"
          >
            Entrar
          </button>

          <Link className="my-lg text-white text-shadow" to="/cadastro">
            Não possui uma conta →
          </Link>

          {/* <div
            className="text-md text-white flex align-center cursor-pointer"
            onClick={voltarTelaInicial}
          >
            <MdOutlineArrowBack />
            <p className="pl-md">Voltar</p>
          </div> */}
        </div>
      </form>
    </>
  );
}; //

export default Login;
