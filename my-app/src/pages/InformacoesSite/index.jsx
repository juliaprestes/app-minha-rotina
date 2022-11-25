import React from "react";
import useVerifyToken from "../../components/useVerifyToken";
import recompensa from "../../assets/img/informacoesSite/recompensa.png";
import cognicao from "../../assets/img/informacoesSite/cognicao.png";
import criancas from "../../assets/img/informacoesSite/criancas.png";

//rota ----> /informacoes

const InformacoesSite = () => {
  useVerifyToken();
  return (
    <>
      <div className="content bg-azul-claro">
        <section className="py-md">
          <div className="flex flex-column align-center">
            <h1 className=" titulo text-orange">Informações do site:</h1>
          </div>
          <div className="py-lg flex flex-column ">
            <div className="mb-lg flex flex-self font-text-bold texto-info">
              <p className="text-white text-center texto-info">
                O Minha Rotina foi feito com o intuito de ajudar no
                desenvolvimento cognitivo e social de crianças dentro do
                espectro autista!
                <br></br>Aqui você que é o responsável pela criança pode
                auxiliá-la programando uma rotina de atividades que devem ser
                feitas durante o dia!
                <br></br>Por ter um sistema de recompensas, a criança fica mais
                animada para finalizar as atividades e aprende fazer as
                atividades de forma independente.
                <br></br>O perfil do Responsável é o administrador do sistema,
                com ele é possível colocar todas as atividades que precisarão
                ser executadas durante o dia.
                <br></br>A criança poderá participar desse momento entrando em
                acordo com os pais para definir uma recompensa ao final do dia.
              </p>
            </div>

            <div className="flex flex-self">
              <img className=" criancas" src={criancas} alt="" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InformacoesSite;
