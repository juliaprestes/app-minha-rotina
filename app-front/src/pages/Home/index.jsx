import React from "react";
import ListaPost from "../../components/ListaPost";

const Home = () => {
  return (
    <body>
      <div className="">
        <h2 className="">Minha Rotina</h2>
      </div>
      <ListaPost url={"/posts"} />
    </body>
  );
};

export default Home;
