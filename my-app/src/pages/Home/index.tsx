import criancaSorrindo from "../../assets/img/child.svg";
import familia from "../../assets/img/familia.svg";
import "../../assets/css/components/home.css";

const Home = () => {
  return (
    <body>
      <section className="bg-amarelo py-xl">
        <div className=" item-lista flex">
          <div className="item-lista__esquerda">
            <img
              src={criancaSorrindo}
              alt="crianca sorrindo"
              className="img-principal"
            />
          </div>
          <div className="item-lista__direita flex">
            <div className="item-lista__coluna-texto">
              <h2 className="text-blue titulo">Sua criança mais feliz </h2>
              <p className="text-blue descricao">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                est quis quasi unde. Temporibus delectus dolores commodi, beatae
                illo repudiandae nostrum maiores? Consequuntur eligendi,
                consectetur saepe minima nulla ducimus fugit officia praesentium
                ipsum rem, voluptatum, sequi nemo ad! Deleniti, accusantium.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-azul-claro py-xl">
        <div className=" item-lista flex row-reverse">
          <div className="item-lista__esquerda">
            <img src={familia} alt="familia" className="img-principal" />
          </div>
          <div className="item-lista__direita flex">
            <div className="item-lista__coluna-texto">
              <h2 className="text-orange titulo">Nossa Metodologia </h2>
              <p className="text-orange descricao">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                est quis quasi unde. Temporibus delectus dolores commodi, beatae
                illo repudiandae nostrum maiores? Consequuntur eligendi,
                consectetur saepe minima nulla ducimus fugit officia praesentium
                ipsum rem, voluptatum, sequi nemo ad! Deleniti, accusantium.
              </p>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
};

export default Home;
