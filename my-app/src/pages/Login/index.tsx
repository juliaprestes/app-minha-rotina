import React /*, { useState }*/ from "react";
import { Link } from "react-router-dom";
//import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
//import { useNavigate } from "react-router-dom";

const Login = () => {
  //const { executeRecaptcha } = useGoogleReCaptcha();
  //const navigate = useNavigate();
  //const [username, setUsername] = useState("");
  //const [password, setPassword] = useState("");

  // const obterAccessToken = async (tokenRecaptcha: string) => {
  //   try {
  //     if (password && username !== undefined) {
  //       const loginRequest = {
  //         username: username.toString(),
  //         senha: password,
  //         tokenRecaptcha: tokenRecaptcha,
  //       };

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

  return (
    <body>
      <section className="content bg-azul-claro py-md">
        <div className="py-lg flex flex-column align-center">
          <h1 className="py-lg titulo text-orange">Faça seu Login</h1>
          <div className="campo-email pb-lg">
            <h2 className="pb-sm text-white">Digite seu email:</h2>
            <input className="input-rounded box-shadow" type="e-mail" />
          </div>
          <div className="campo-senha">
            <h2 className="pb-sm text-white">Digite sua senha:</h2>
            <input className="input-rounded box-shadow" type="text" />
          </div>

          <Link className="py-lg text-white text-shadow" to="/">
            Esqueci minha senha →
          </Link>
          <button className="botao-redondo box-shadow text-button">
            Entrar
          </button>
          <Link className="py-lg text-white text-shadow" to="/cadastro">
            Não possui uma conta →
          </Link>
        </div>
      </section>
    </body>
  );
}; //

export default Login;
