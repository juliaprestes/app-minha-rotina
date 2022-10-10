import EventEmitter from "events";
import { Toast } from "primereact/toast";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../api/api";
//import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import useAsync from "../../utils/useAsync";
import "./toast.css";

const Login = () => {
  //const { executeRecaptcha } = useGoogleReCaptcha();
  //const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const loginHook = useAsync(loginFunction, false);
  const input = document.querySelector("input");
  const toast = useRef<any>(null);

  async function loginFunction(event: React.FormEvent<Element>) {
    event.preventDefault();
    const loginResponse = await login(email, password);
    console.log("loginResponse", loginResponse);

    if (email === "" || password === "") {
      toast.current.show({
        severity: "warn",
        summary: "Favor informar Login e Senha",
      });
      return;
    }

    document.dispatchEvent(
      new CustomEvent<{ severity: string; summary: string; detail: string }>(
        "toast",
        {
          detail: {
            severity: "success",
            summary: "Success Message",
            detail: "Order submitted",
          },
        }
      )
    );
    // validar loginResponse
    if (loginResponse.token && loginResponse.key === "loginSuccessfully") {
      localStorage.setItem("token", loginResponse.token);
      //toast.current.show({
      //  sticky: false,
      //  severity: "success",
      //  summary: "sucesso",
      //  detail: "Validation ok",
      //});
    } else {
      //  toast.current.show({
      //  severity: "error",
      //  summary: loginResponse.msg,
      // sticky: false, // TODO: ARRUMAR O TOAST.. ERROS LOGIN.TS SERVER
      //  });
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
      <form className="content bg-azul-claro py-md" onSubmit={loginFunction}>
        <Toast ref={toast} />
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
            //onClick={loginHook.execute}
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
