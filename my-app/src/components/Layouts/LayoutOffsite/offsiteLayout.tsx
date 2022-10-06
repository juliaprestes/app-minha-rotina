import React from "react";
import styles from "./offsiteLayout.module.scss";
import { Outlet } from "react-router-dom";
import Cabecalho from "../../Cabecalho";
import Footer from "../../Footer";

export function OffsiteLayout() {
  return (
    <>
      <div className={styles.main}>
        <Cabecalho />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
