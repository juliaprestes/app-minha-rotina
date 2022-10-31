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
    <header className="header-cabecalho flex flex-between align-center bg-azul">
      <div className="flex flex-between flex-align-center bg-azul ">
        <Link to="/" className="header-cabecalho__links flex align-center gap">
          <img className="img-cabecalho" src={imagem} alt="Logo Rotimy" />
          <h1 className="titulo-cabecalho text-orange">Minha Rotina</h1>
        </Link>
      </div>
      <div>
        <nav>
          <ul className="menu-opcoes gap"></ul>
        </nav>
      </div>
      {/*  */}
      <div className="flex flex-between gap align-center">
        <div className="text-orange cursor-pointer">
          <GiHamburgerMenu onClick={toggle} />
        </div>
        {ativo ? (
          <div className="enabled text-orange" style={{}}>
            <div className="cursor-pointer my-md" onClick={logout}>
              <p>Meus Dados</p>
            </div>
            <div className="cursor-pointer my-md" onClick={logout}>
              <p>Informações do site</p>
            </div>
            <div className="cursor-pointer my-md" onClick={logout}>
              <p>Logout</p>
            </div>
          </div>
        ) : (
          <div className="disabled" />
        )}
      </div>
      {/*  */}
    </header>
  );
};

export default Cabecalho;
