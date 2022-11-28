import React from "react";
import { Link } from "react-router-dom";
import useVerifyToken from "../../components/useVerifyToken";

//rota ----> /inicialResponsavel

const InicialResponsavel = () => {
  const decodedToken = useVerifyToken();
  if (!decodedToken) {
    return null;
  }
  return (
    <>
      <div className=" content bg-azul-claro">
        <section className="py-md">
          <div className="py-lg flex flex-column align-center flex-center">
            <h1 className="mt-lg titulo text-orange">
              Olá {decodedToken.nome}!
            </h1>
            <h1 className="mb-lg text-center text-white">
              Aqui você poderá incentivar de seu filho a ter independência, crie
              sua rotina na opção abaixo:
            </h1>
            <div className="my-xl  gap ">
              <Link className="text-orange-100" to="/rotinas">
                <div className="botao-redondo_link">CRIAR NOVA</div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InicialResponsavel;
