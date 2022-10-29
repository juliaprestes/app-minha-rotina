import { Link } from "react-router-dom";
import imagem from "../../../assets/img/rotimy.svg";
import "../../../assets/css/components/cabecalho.css";

const Cabecalho = () => {
  return (
    <header className="header-cabecalho flex flex-between flex-align-center bg-azul">
      <div>
        <Link
          to="/"
          className="header-cabecalho__links flex flex-align-center gap"
        >
          <img className="img-cabecalho" src={imagem} alt="Logo Rotimy" />
          <h1 className="titulo-cabecalho text-orange">Minha Rotina</h1>
        </Link>
      </div>
      <div>
        <nav>
          <ul className="menu-opcoes gap">
            <li>
              <Link to="/login" className="text-orange">
                Entrar
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Cabecalho;
