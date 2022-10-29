import notFound from "../../assets/img/404_notfound.png";
import { MdOutlineArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Pagina404 = () => {
  const navigate = useNavigate();

  const voltarTelaHome = () => {
    navigate("/");
  };

  return (
    <>
      <div style={{ position: "absolute" }} onClick={voltarTelaHome}>
        <MdOutlineArrowBack />
      </div>
      <main className="container flex flex--centro flex--coluna content bg-azul-claro py-md">
        <img src={notFound} alt="" />
        <p className="naoencontrado-texto">Ops, Essa página não existe!</p>
      </main>
    </>
  );
};

export default Pagina404;
