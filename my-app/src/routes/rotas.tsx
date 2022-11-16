import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/";
import CadastroUsuario from "../pages/CadastroUsuario/";
import Login from "../pages/Login/";
import Pagina404 from "../pages/Pagina404/";
import SelecionarPerfil from "../pages/EscolhaPerfil";
import InicialDependente from "../pages/InicialDependente";
import Rotinas from "../pages/Rotinas";
import InicialResponsavel from "../pages/OpcoesResponsavel";
import { OffsiteLayout } from "../components/Layouts/LayoutOffsite/offsiteLayout";
import RedefinirSenha from "../pages/RedefinirSenha";
import InformacoesSite from "../pages/InformacoesSite";
import DadosResponsavel from "../pages/DadosUsuarioResponsavel";

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route element={<OffsiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/selecionarPerfil" element={<SelecionarPerfil />} />
          <Route path="/inicialDependente" element={<InicialDependente />} />
          <Route path="/rotinas" element={<Rotinas />} />
          <Route path="/inicialResponsavel" element={<InicialResponsavel />} />
          <Route path="/redefinirSenha/:id" element={<RedefinirSenha />} />
          <Route path="/informacoes" element={<InformacoesSite />} />
          <Route path="/meusDados" element={<DadosResponsavel />} />
          <Route path="/*" element={<Pagina404 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Rotas;
