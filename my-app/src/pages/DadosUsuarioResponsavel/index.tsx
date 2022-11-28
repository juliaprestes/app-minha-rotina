import React, { useState } from "react";
import { changeInfos } from "../../api/api";
import sendToast from "../../components/Layouts/LayoutToast/sendToast";
import useVerifyToken from "../../components/useVerifyToken";
import { useNavigate, useParams } from "react-router-dom";

//rota ----> /meusDados
const DadosResponsavel = () => {
  const { id } = useParams();
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const token = useVerifyToken() as any;
  const navigate = useNavigate();

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangeNome = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };

  async function updateInfos(event: React.FormEvent<Element>) {
    event.preventDefault();
    if (!id) {
      return;
    }
    const response = await changeInfos(token.id, email, nome);
    console.log(response);
    if (response.key === "sucessfulyUpdateInfos") {
      sendToast({
        severity: "success",
        summary: "Sucesso ao editar informações",
        detail: "Suas informações foram atualizadas",
      });
      navigate("/selecionarPerfil");
    } else {
      sendToast({
        severity: "error",
        summary: "Falha ao editar informações",
        detail: response.message,
      });
    }
  }
  return (
    <>
      <form className=" content bg-azul-claro" onSubmit={updateInfos}>
        <section className="py-md">
          <div className="py-lg flex flex-column align-center">
            <h1 className="py-lg titulo text-orange">Meus Dados: </h1>
            <div className="campo-email pb-lg">
              <h2 className="pb-sm text-white">Nome Completo:</h2>
              <input
                className="input-rounded box-shadow"
                type="text"
                defaultValue={token.nome}
                onChange={handleChangeNome}
              />
            </div>
            <div className="campo-email pb-lg">
              <h2 className="pb-sm text-white">Email:</h2>
              <input
                className="input-rounded box-shadow"
                type="text"
                defaultValue={token.email}
                onChange={handleChangeEmail}
              />
            </div>

            <button className="my-xl botao-redondo box-shadow text-button text-orange bg-amarelo">
              Editar
            </button>
          </div>
        </section>
      </form>
    </>
  );
};

export default DadosResponsavel;
