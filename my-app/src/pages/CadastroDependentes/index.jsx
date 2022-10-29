import { Checkbox } from "primereact/checkbox";
// ROTA ------> /cadastroDependente
const CadastroDependente = () => {
  return (
    <>
      <form className="content bg-azul-claro py-md">
        <section className=" bg-azul-claro py-md">
          <div className="py-lg flex flex-column align-center">
            <h1 className="py-lg titulo text-orange">Cadastrar Dependente</h1>
            <div className="campo-email pb-lg">
              <h2 className="pb-sm text-white">Nome Completo:</h2>
              <input className="input-rounded box-shadow" type="name" />
            </div>
            <div className="campo-email pb-lg">
              <h2 className="pb-sm text-white">Data Nascimento:</h2>
              <input className="input-rounded box-shadow" type="email" />
            </div>
            <button className="my-xl botao-redondo box-shadow text-button ">
              Cadastrar
            </button>
          </div>
          <div>
            <Checkbox
              type="checkbox"
              //name="boleto"
              // value="B"
              //onChange={(e) => onCheckChange(e)}
              //checked={props.value ? props.value.indexOf("B") !== -1 : false}
              // disabled={props.disabled}
              //inputId="envioBoleto"
            />
          </div>
        </section>
      </form>
    </>
  );
}; //

export default CadastroDependente;
