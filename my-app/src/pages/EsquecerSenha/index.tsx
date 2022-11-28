import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { lostPass } from "../../api/api";
import sendToast from "../../components/Layouts/LayoutToast/sendToast";

const EsquecerSenha = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  async function sendEmail(event: React.FormEvent<Element>) {
    event.preventDefault();
    const response = await lostPass(email);
    if (email === "") {
      sendToast({
        severity: "error",
        summary: "Existem erros de validação",
        detail: "Favor informar o email",
      });
      return;
    }

    if (response.key === "sucessfulyPasswordResetRequest") {
      sendToast({
        severity: "success",
        summary: "Email enviado",
        detail: "Verifique sua caixa de entrada",
      });
      navigate("/login");
    } else {
      sendToast({
        severity: "error",
        summary: "Erro ao enviar email.",
        detail: "Email não encontrado",
      });
    }
  }

  return (
    <>
      <form className="content bg-azul-claro py-md" onSubmit={sendEmail}>
        <section className=" bg-azul-claro py-md">
          <div className="py-lg flex flex-column align-center">
            <h1 className="py-lg titulo text-orange">Confirme seu email</h1>
            <div className="campo-email pb-lg">
              <h2 className="pb-sm text-white">Email:</h2>
              <input
                className="input-rounded box-shadow"
                type="email"
                onChange={handleChangeEmail}
              />
            </div>

            <button
              className="#entrar botao-redondo box-shadow text-button text-orange bg-amarelo"
              onClick={sendEmail}
            >
              Confirmar
            </button>
          </div>
        </section>
      </form>
    </>
  );
}; //

export default EsquecerSenha;
