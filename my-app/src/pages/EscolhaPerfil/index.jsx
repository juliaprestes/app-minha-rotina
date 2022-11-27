import { Link } from "react-router-dom";
import { SlUser, SlPeople } from "react-icons/sl";
import useVerifyToken from "../../components/useVerifyToken";

// ROTA ------> /selecionarPerfil
const SelecionarPerfil = () => {
  useVerifyToken();
  return (
    <>
      <form className="container content bg-azul-claro py-md">
        <div className="py-lg flex flex-column align-center">
          <h1 className="py-lg titulo text-white">
            Bem vindo ao <span className="text-orange">MinhaRotina!</span>
          </h1>
          <p className="text-white text-md mb-xlg">
            Escolha um perfil de acesso:
          </p>

          <div className="flex gap-100">
            <div className="flex-column text-center">
              <Link className="text-green text-lg" to="/inicialResponsavel">
                <SlUser />
                <p className="text-white text-sm">Responsável</p>
              </Link>
            </div>
            <div className="text-green text-lg flex-column text-center">
              <Link className="text-green text-lg" to="/inicialDependente">
                <SlPeople />
                <p className="text-white text-sm">Dependente</p>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}; //

export default SelecionarPerfil;
