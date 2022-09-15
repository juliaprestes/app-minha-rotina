import axios from "axios";
import { useState } from "react";

export const api = axios.create({
  baseURL: "http://localhost:4000",
});

export const busca = async (url, setDado) => {
  const resposta = await api.get(url);
  setDado(resposta.data);
};
