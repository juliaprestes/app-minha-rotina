import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import imagem from "../../../assets/img/rotimy.svg";
import "../../../assets/css/components/cabecalho.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Cabecalho = () => {
  const [ativo, setAtivo] = useState(false);
  const navigate = useNavigate();

  function toggle() {
    setAtivo(!ativo);
  }

  function logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <header className="header-cabecalho flex flex-between flex-align-center bg-azul">
      <div className="header-cabecalho flex flex-between flex-align-center bg-azul ">
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
          <ul className="menu-opcoes gap"></ul>
        </nav>
      </div>
      <div className="text-orange">
        <GiHamburgerMenu onClick={toggle} />
        {ativo ? (
          <div className="" style={{}}>
            <ul>
              <li>Meus Dados</li>
              <li>Informações do site</li>
              <div onClick={logout}>
                <li>Logout</li>
              </div>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default Cabecalho;
