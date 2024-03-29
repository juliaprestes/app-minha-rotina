import { Link } from "react-router-dom";
import imagem from "../../../assets/img/rotimy.svg";
import "../../../assets/css/components/cabecalho.css";
import Navbar from "../../Navbar/Navbar";

const CabecalhoLogado = () => {
  return (
    <header className="header-cabecalho flex flex-between flex-align-center bg-azul">
      <div className="">
        <Link
          to="/selecionarPerfil"
          className="header-cabecalho__links flex flex-align-center gap"
        >
          <img className="img-cabecalho" src={imagem} alt="Logo Rotimy" />
          <h1 className="titulo-cabecalho text-orange">Minha Rotina</h1>
        </Link>
      </div>
      <Navbar />
    </header>
  );
};

export default CabecalhoLogado;
