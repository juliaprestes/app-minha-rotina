import React from "react";

//rota ----> /meusDados

const InformacoesSite = () => {
  return (
    <>
      <main className="container flex flex--centro flex--coluna content bg-azul-claro py-md">
        <div className="content bg-azul-claro">
          <div className=" py-lg flex flex-column align-center">
            <h1 className="mb-lg titulo text-orange">Informações do site:</h1>
          </div>
          <div>
            <p className="text-white descricao">
              O Minha Rotina foi feito com o intuito de ajudar no
              desenvolvimento cognitivo e social de crianças dentro do espectro
              autista!
            </p>
            <p className="text-white descricao">
              Aqui você que é o responsável pela criança pode auxiliá-la
              programando uma rotina de atividades que devem ser feitas durante
              o dia!
            </p>
            <p className="text-white descricao">
              Por ter um sistema de recompensas, a criança fica mais animada
              para finalizar as atividades e aprende fazer as atividades de
              forma independente.
            </p>
            <p className="text-white descricao">
              O perfil do Responsável é o administrador do sistema, com ele é
              possível colocar todas as atividades que precisarão ser executadas
              durante o dia. A criança poderá participar desse momento entrando
              em acordo com os pais para definir uma recompensa ao final do dia.
            </p>
            <p className="text-white descricao"></p>
          </div>
        </div>
      </main>
    </>
  );
};

export default InformacoesSite;
