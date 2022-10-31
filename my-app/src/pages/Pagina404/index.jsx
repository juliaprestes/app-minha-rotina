import notFound from "../../assets/img/404_notfound.svg";

const Pagina404 = () => {
  return (
    <>
      <main className="container flex flex--centro flex--coluna content bg-azul-claro py-md">
        <img src={notFound} alt="not found" width="500px" />
      </main>
    </>
  );
};

export default Pagina404;
