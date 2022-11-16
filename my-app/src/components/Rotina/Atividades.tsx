import React from "react";
import "../../assets/css/components/rotinas.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

const Atividades = () => {
  const buttons = [
    <Button key="1">Tomar café</Button>,
    <Button key="2">Almoçar</Button>,
    <Button key="3">Dormir</Button>,
    <Button key="4">Escovar Dente</Button>,
    <Button key="5">Lavar a mão</Button>,
    <Button key="6">Pentear o cabelo</Button>,
    <Button key="7">Tomar banho</Button>,
    <Button key="8">Lavar a mão</Button>,
  ];
  //TODO: FAZER A TABELA DE ATIVIDADES

  return (
    <Box
      sx={{
        display: "flex",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
};

export default Atividades;
