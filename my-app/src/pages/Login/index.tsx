import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../api/api";
import sendToast from "../../components/Layouts/LayoutToast/sendToast";
import { redirect } from "react-router-dom";
//import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const Login = () => {
  //const { executeRecaptcha } = useGoogleReCaptcha();
  //const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useRef<any>(null);
  async function loginFunction(event: React.FormEvent<Element>) {
    event.preventDefault();
    const loginResponse = await login(email, password);
    console.log("loginResponse", loginResponse);

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
      console.log("redirecting");
      redirect("/selecionarPerfil");
    } else {
      sendToast({
        severity: "error",
        summary: "Erro",
        detail: loginResponse.msg,
      });
      return;
    }
  }
  //const obterAccessToken = async (tokenRecaptcha: string) => {
  // try {
  //   if (password && email !== undefined) {
  //     const loginRequest = {
  //      username: email.toString(),
  //       senha: password,
  //     tokenRecaptcha: tokenRecaptcha,
  //   };

  //       const result = await UsuarioRepository.logar(loginRequest);

  //       if (result.autenticado === true) {
  //         localStorage.setItem("token", result.token);
  //         navigate("/EscolhaPerfil");
  //       }
  //       // } else {
  //       //   //TODO: toast, msg erro***
  //       //   /*setMensagem({
  //       //     severity: "error",

  //       //     texto: "Todos os campos devem ser preechidos e selecionados.",
  //       //   });*/
  //     }

  //     // Erros já geram toasts de erro automaticamente pelo interceptor em api.ts

  //     // eslint-disable-next-line no-empty
  //   } catch {}
  // };

  // const getRecaptchaThenLogin = React.useCallback(async () => {
  //   const token = await executeRecaptcha("verify");
  //   obterAccessToken(token);
  // }, [password, username]);

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // document?.addEventListener("keyup", (e) => {
  //   if (e.key === "Enter") {
  //     loginHook.execute().catch(() => {});
  //     new Promise((resolve) => setTimeout(resolve, 5000)).catch();
  //     return;
  //   }
  // });

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

          <Link className="py-lg text-white text-shadow" to="/cadastro">
            Não possui uma conta →
          </Link>
        </div>
      </form>
    </>
  );
}; //

export default Login;
