import React, { useState } from "react";
import useVerifyToken from "../../components/useVerifyToken";

//rota ----> /meusDados
const DadosResponsavel = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  //const createUserHook = useAsync(callApi, false);
  const token = useVerifyToken() as any;

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <>
      <form className="content bg-azul-claro">
        <section className="py-md">
          <div className="py-lg flex flex-column align-center">
            <h1 className="py-lg titulo text-orange">Meus Dados: </h1>
            <div className="campo-email pb-lg">
              <h2 className="pb-sm text-white">Nome Completo:</h2>
              <input
                className="input-rounded box-shadow"
                type="name"
                value={token.nome}
                onChange={handleChangeName}
              />
            </div>
            <div className="campo-email pb-lg">
              <h2 className="pb-sm text-white">Email:</h2>
              <input
                className="input-rounded box-shadow"
                type="email"
                value={token.email}
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
