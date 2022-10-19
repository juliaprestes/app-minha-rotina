import React from "react";
import styles from "./offsiteLayout.module.scss";
import { Outlet } from "react-router-dom";
import CabecalhoLogado from "../LayoutLogado/CabecalhoLogado";
import Cabecalho from "../LayoutDeslogado/Cabecalho";
import Footer from "../../Footer";
import { ToastLayout } from "../LayoutToast/LayoutToast";

export function OffsiteLayout() {
  return (
    <>
      <div className={styles.main}>
        <ToastLayout />
        <Cabecalho />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
