import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import imagem from "../../../assets/img/rotimy.svg";
import "../../../assets/css/components/cabecalho.css";
import Navbar from "../../Navbar/Navbar";

const Cabecalho = () => {
  //const [ativo, setAtivo] = useState(false);
  //const navigate = useNavigate();

  /*function logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }*/

  return (
    <header className="header-cabecalho flex flex-between align-center bg-azul">
      <div className="flex flex-between flex-align-center bg-azul ">
        <Link to="/" className="header-cabecalho__links flex align-center gap">
          <img className="img-cabecalho" src={imagem} alt="Logo Rotimy" />
          <h1 className="titulo-cabecalho text-orange">Minha Rotina</h1>
        </Link>
      </div>
      <Navbar />
    </header>
  );
};

export default Cabecalho;
