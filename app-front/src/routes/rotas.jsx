import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home/";
import CadastroUsuario from "../pages/CadastroUsuario/";
import Login from "../pages/Login/";
import Pagina404 from "../pages/Pagina404/";
import Cabecalho from "../components/Cabecalho";
import Footer from "../components/Footer";
import AndamentoRotina from "../pages/AndamentoRotina/";
import Atividades from "../pages/Atividades/";
import CadastroDependentes from "../pages/CadastroDependentes/";
import CadastroRotina from "../pages/CadastroRotina";
import DadosUsuario from "../pages/DadosUsuario/";
import EscolhaPerfil from "../pages/EscolhaPerfil";
import InformacoesDependente from "../pages/InformacoesDependente/";
import InicialDependente from "../pages/InicialDependente";
import Rotinas from "../pages/Rotinas";
import InicialResponsavel from "../pages/InicialResponsavel";

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
        <Route path="/andamentoRotina">
          <AndamentoRotina />
        </Route>
        <Route path="/atividades">
          <Atividades />
        </Route>
        <Route path="/cadastroDependente">
          <CadastroDependentes />
        </Route>
        <Route path="/cadastroRotina">
          <CadastroRotina />
        </Route>
        <Route path="/minhasInformacoes">
          <DadosUsuario />
        </Route>
        <Route path="/escolherPerfil">
          <EscolhaPerfil />
        </Route>
        <Route path="/informacoesDependente">
          <InformacoesDependente />
        </Route>
        <Route path="/inicialDependente">
          <InicialDependente />
        </Route>
        <Route path="/rotinas">
          <Rotinas />
        </Route>
        <Route path="/inicialResponsavel">
          <InicialResponsavel />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default Rotas;
