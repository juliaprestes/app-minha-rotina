import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/";
import CadastroUsuario from "../pages/CadastroUsuario/";
import Login from "../pages/Login/";
import Pagina404 from "../pages/Pagina404/";
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
import { RecaptchaProvider } from "../components/Wrappers/recaptchaProvider/recaptchaProvider";
import { OffsiteLayout } from "../components/Layouts/LayoutOffsite/offsiteLayout";

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route element={<OffsiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route element={<RecaptchaProvider />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route element={<Pagina404 />} />
          <Route path="/andamentoRotina" element={<AndamentoRotina />} />
          <Route path="/atividades" element={<Atividades />} />
          <Route path="/cadastroDependente" element={<CadastroDependentes />} />
          <Route path="/cadastroRotina" element={<CadastroRotina />} />
          <Route path="/minhasInformacoes" element={<DadosUsuario />} />
          <Route path="/escolherPerfil" element={<EscolhaPerfil />} />
          <Route
            path="/informacoesDependente"
            element={<InformacoesDependente />}
          />
          <Route path="/inicialDependente" element={<InicialDependente />} />
          <Route path="/rotinas" element={<Rotinas />} />
          <Route path="/inicialResponsavel" element={<InicialResponsavel />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Rotas;
