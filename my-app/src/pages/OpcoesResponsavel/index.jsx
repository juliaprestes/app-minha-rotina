import React from "react";
import { Link } from "react-router-dom";
import getToken from "../../components/getToken";
import { useNavigate } from "react-router-dom";

//rota ----> /inicialResponsavel

const InicialResponsavel = () => {
  const decodedToken = getToken(localStorage.getItem("token"));
  const navigate = useNavigate();

  if (!decodedToken) {
    navigate("/");
    return <></>;
  }

  return (
    <>
      <div className="content bg-azul-claro">
        <section className="py-md">
          <div className="py-lg flex flex-column align-center">
            <h1 className="mt-lg titulo text-orange">
              Olá {decodedToken.nome}!
            </h1>
            <h1 className="mb-lg text-center titulo width-600 text-orange">
              Aqui você poderá incentivar de seu filho a ter independência, crie
              sua rotina na opção abaixo:
            </h1>
            <div className="my-xl flex gap">
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
