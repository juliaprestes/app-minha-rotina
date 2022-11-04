import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Início",
    path: "/selecionarPerfil",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Rotinas",
    path: "/rotinas",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Meus Dados",
    path: "/meusDados",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Informações do Site",
    path: "/informacoes",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
];
