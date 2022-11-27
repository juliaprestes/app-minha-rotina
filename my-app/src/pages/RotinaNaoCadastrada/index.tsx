import React from "react";
import { SlUser } from "react-icons/sl";
import { Link } from "react-router-dom";
import useVerifyToken from "../../components/useVerifyToken";

const RotinaNaoCadastrada = () => {
  useVerifyToken();
  return (
    <>
      <div className="content bg-azul-claro">
        <section className="py-md">
          <div className="py-lg flex flex-column align-center">
            <h1 className="mb-lg text-center titulo text-orange">
              Ops! A rotina ainda não foi definida :(
            </h1>
            <p className="pb-sm text-white">
              Defina as atividades a serem realizadas dentro do perfil do
              responsável:
            </p>

            <div className="my-xl flex gap">
              <Link className="text-orange-100" to="/inicialResponsavel">
                <Link className="text-green text-lg" to="/inicialResponsavel">
                  <SlUser />
                </Link>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RotinaNaoCadastrada;
