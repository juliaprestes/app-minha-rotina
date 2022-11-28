import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { redefinePass } from "../../api/api";
import sendToast from "../../components/Layouts/LayoutToast/sendToast";
import useVerifyToken from "../../components/useVerifyToken";

// ROTA ------> /redefinirSenha
const RedefinirSenha = () => {
  const { id } = useParams();
  const [senha1, setSenha1] = useState("");
  const [senha2, setSenha2] = useState("");
  const navigate = useNavigate();
  useVerifyToken();
  const handleChangePassword1 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSenha1(event.target.value);
  };

  const handleChangePassword2 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSenha2(event.target.value);
  };

  async function sendPassFunction(event: React.FormEvent<Element>) {
    event.preventDefault();
    if (!id) {
      return;
    }
    if (senha1 !== senha2) {
      sendToast({
        severity: "error",
        summary: "Senha inválida",
        detail: "As senhas precisam ser iguais",
      });
      return;
    }
    const response = await redefinePass(id, senha1);
    if (response.key === "sucessfulyPasswordReset") {
      sendToast({
        severity: "success",
        summary: "Sucesso ao redefinir senha",
        detail: "Favor faça login para entrar",
      });
      navigate("/login");
    } else {
      sendToast({
        severity: "error",
        summary: "Falha ao redefinir senha",
        detail: response.message,
      });
    }
  }

  return (
    <>
      <form className="content bg-azul-claro py-md" onSubmit={sendPassFunction}>
        <section className=" bg-azul-claro py-md">
          <div className="py-lg flex flex-column align-center">
            <h1 className="py-lg titulo text-orange">Redefinir senha:</h1>
            <div className="campo-email pb-lg">
              <h2 className="pb-sm text-white">Senha:</h2>
              <input
                className="input-rounded box-shadow"
                type="password"
                onChange={handleChangePassword1}
              />
            </div>

            <div className="campo-email pb-lg">
              <h2 className="pb-sm text-white">Confirme sua senha:</h2>
              <input
                className="input-rounded box-shadow"
                type="password"
                onChange={handleChangePassword2}
              />
            </div>
            <button
              className="#entrar botao-redondo box-shadow text-button text-orange bg-amarelo"
              onClick={sendPassFunction}
            >
              Confirmar
            </button>
          </div>
        </section>
      </form>
    </>
  );
}; //

export default RedefinirSenha;
