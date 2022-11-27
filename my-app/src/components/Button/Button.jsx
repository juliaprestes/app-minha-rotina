import React, { useState } from "react";
import "../../assets/css/components/button.css";
import almocar from "../../assets/img/atividadesRotina/almoco.png";
import brincar from "../../assets/img/atividadesRotina/brincar.png";
import cafe from "../../assets/img/atividadesRotina/cafe.png";
import dormir from "../../assets/img/atividadesRotina/dormir.png";
import escovarDente from "../../assets/img/atividadesRotina/escovarDente.png";
import lavarMao from "../../assets/img/atividadesRotina/lavarmao.png";
import pentearCabelo from "../../assets/img/atividadesRotina/pentearCabelo.png";
import tomarBanho from "../../assets/img/atividadesRotina/tomarbanho.png";

const imagens = {
  ALMOÇAR: almocar,
  BRINCAR: brincar,
  "TOMAR CAFÉ": cafe,
  DORMIR: dormir,
  "ESCOVAR O DENTE": escovarDente,
  "LAVAR A MÃO": lavarMao,
  "PENTEAR O CABELO": pentearCabelo,
  "TOMAR BANHO": tomarBanho,
};

const UIButton = (props) => {
  const [buttonColor, setButtonColor] = useState(false);

  function handleClick(color) {
    setButtonColor(!buttonColor);
  }
  return (
    <div className="flex" onClick={props.onClick}>
      <button
        style={{ color: buttonColor }}
        onClick={handleClick}
        className={buttonColor === true ? "ui-button-green" : "ui-button "}
        titulo={props.titulo}
      >
        <img className="dimensao-img" src={imagens[props.image]} alt="" />
        {props.children}
      </button>
    </div>
  );
};

export default UIButton;
