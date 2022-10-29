import styles from "./offsiteLayout.module.scss";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import CabecalhoDeslogado from "../LayoutDeslogado/CabecalhoDeslogado";
import Cabecalho from "../LayoutHomePage/Cabecalho";
import CabecalhoLogado from "../LayoutLogado/CabecalhoLogado";

import Footer from "../../Footer";
import { ToastLayout } from "../LayoutToast/LayoutToast";

export function OffsiteLayout() {
  const { pathname } = useLocation();

  function HeaderSwitch() {
    switch (pathname) {
      case "/":
        return <Cabecalho />;
      case "/cadastro":
        return (
          <>
            <CabecalhoDeslogado />
          </>
        );
      case "/login":
        return (
          <>
            <CabecalhoDeslogado />
          </>
        );
      default:
        return (
          <>
            {" "}
            <CabecalhoLogado />
          </>
        );
    }
  }

  return (
    <>
      <div className={styles.main}>
        <ToastLayout />
        <HeaderSwitch />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
