import { Link } from "react-router-dom";

const Cadastrar = () => {
  return (
    <body className="content">
      <section className=" bg-azul-claro py-md">
        <div className="py-lg flex flex-column align-center">
          <h1 className="py-lg titulo text-orange">
            Bem vindo! Cadastre-se já
          </h1>
          <div className="campo-email pb-lg">
            <h2 className="pb-sm text-white">Nome Completo:</h2>
            <input className="input-rounded box-shadow" type="e-mail" />
          </div>
          <div className="campo-email pb-lg">
            <h2 className="pb-sm text-white">Digite seu email:</h2>
            <input className="input-rounded box-shadow" type="e-mail" />
          </div>
          <div className="campo-senha">
            <h2 className="pb-sm text-white">Digite sua senha:</h2>
            <input className="input-rounded box-shadow" type="text" />
          </div>

          <Link className="py-lg text-white text-shadow" to="/">
            Esqueci minha senha →
          </Link>
          <button className="botao-redondo box-shadow text-button">
            Cadastrar
          </button>
          <Link className="py-lg text-white text-shadow" to="/cadastro">
            Não possui uma conta →
          </Link>
        </div>
      </section>
    </body>
  );
};

export default Cadastrar;
