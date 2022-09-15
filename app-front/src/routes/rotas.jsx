import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home/index";
import CadastroUsuario from "../pages/CadastroUsuario/index";
import Login from "../pages/Login/index";
import Pagina404 from "../pages/Pagina404/index";
import Cabecalho from "../components/Cabecalho";

function Rotas() {
  return (
    <Router>
      <Cabecalho />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/cadastro">
          <CadastroUsuario />
        </Route>
        <Route>
          <Pagina404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default Rotas;
