import { useState } from "react";
import { Link } from "react-router-dom";
import { crateUser, login } from "../../api/api";
import useAsync from "../../utils/useAsync";

const Cadastrar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const createUserHook = useAsync(callApi, false);

  async function callApi() {
    const userResponse = await crateUser(name, email, password, 1);
    if (userResponse.key === "createUserSuccessfully") {
      const loginResult = await login(email, password);
      if (loginResult.token && loginResult.key === "loginSuccessfully") {
        localStorage.setItem("token", loginResult.token);
      }
      console.log("loginResult", loginResult);
    }
    console.log("userResponse", userResponse);
  }

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <body className="content">
      <section className=" bg-azul-claro py-md">
        <div className="py-lg flex flex-column align-center">
          <h1 className="py-lg titulo text-orange">
            Bem vindo! Cadastre-se já
          </h1>
          <div className="campo-email pb-lg">
            <h2 className="pb-sm text-white">Nome Completo:</h2>
            <input
              className="input-rounded box-shadow"
              type="e-mail"
              onChange={handleChangeName}
            />
          </div>
          <div className="campo-email pb-lg">
            <h2 className="pb-sm text-white">Digite seu email:</h2>
            <input
              className="input-rounded box-shadow"
              type="e-mail"
              onChange={handleChangeEmail}
            />
          </div>
          <div className="campo-senha">
            <h2 className="pb-sm text-white">Digite sua senha:</h2>
            <input
              className="input-rounded box-shadow"
              type="text"
              onChange={handleChangePassword}
            />
          </div>
          <div className="my-xl">
            <Link to="/login">
              <button
                className="botao-redondo box-shadow text-button "
                onClick={createUserHook.execute}
              >
                Cadastrar
              </button>
            </Link>
          </div>
        </div>
      </section>
    </body>
  );
};

export default Cadastrar;
