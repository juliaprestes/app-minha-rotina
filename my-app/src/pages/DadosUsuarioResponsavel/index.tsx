import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { crateUser, login } from "../../api/api";
import sendToast from "../../components/Layouts/LayoutToast/sendToast";
import useVerifyToken from "../../components/useVerifyToken";
import useAsync from "../../utils/useAsync";

//rota ----> /meusDados
const DadosResponsavel = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const createUserHook = useAsync(callApi, false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useVerifyToken();

  async function callApi() {
    setLoading(true);
    if (password.length < 8) {
      sendToast({
        severity: "error",
        summary: "Erro ao criar usuário",
        detail: "Senha deve ter pelo menos 8 caracteres",
      });
      return;
    }
    const userResponse = await crateUser(name, email, password, 1);
    if (userResponse.key === "createUserSuccessfully") {
      const loginResult = await login(email, password);
      sendToast({
        severity: "success",
        summary: "Sucesso",
        detail: userResponse.msg,
      });
      if (loginResult.token && loginResult.key === "loginSuccessfully") {
        localStorage.setItem("token", loginResult.token);
      }
      navigate("/selecionarPerfil");
    } else {
      setEmail("");
      setPassword("");
      setName("");
      sendToast({
        severity: "error",
        summary: "Erro ao criar usuário",
        detail: userResponse.msg,
      });
    }
    setLoading(false);
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
    <>
      <body className="content">
        <section className=" bg-azul-claro py-md">
          <div className="py-lg flex flex-column align-center">
            <h1 className="py-lg titulo text-orange">Meus Dados: </h1>
            <div className="campo-email pb-lg">
              <h2 className="pb-sm text-white">Nome Completo:</h2>
              <input
                className="input-rounded box-shadow"
                type="name"
                value={name}
                onChange={handleChangeName}
              />
            </div>
            <div className="campo-email pb-lg">
              <h2 className="pb-sm text-white">Email:</h2>
              <input
                className="input-rounded box-shadow"
                type="email"
                value={email}
                onChange={handleChangeEmail}
              />
            </div>
            <div className="campo-senha">
              <h2 className="pb-sm text-white">Senha:</h2>
              <input
                className="input-rounded box-shadow"
                type="password"
                value={password}
                onChange={handleChangePassword}
              />
            </div>
            <button
              className="my-xl botao-redondo box-shadow text-button text-orange bg-amarelo"
              onClick={createUserHook.execute}
              disabled={loading}
            >
              Editar
            </button>
          </div>
        </section>
      </body>
    </>
  );
};

export default DadosResponsavel;
