import { Link } from "react-router-dom";
import { SlUser, SlPeople } from "react-icons/sl";

// ROTA ------> /selecionarPerfil
const SelecionarPerfil = () => {
  return (
    <>
      <form className="content bg-azul-claro py-md">
        <div className="py-lg flex flex-column align-center">
          <h1 className="py-lg titulo text-orange">Bem vindo!</h1>
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
