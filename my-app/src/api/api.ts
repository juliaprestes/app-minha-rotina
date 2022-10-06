import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000",
});

export const busca = async (url: string, setDado: any) => {
  const resposta = await api.get(url);
  setDado(resposta.data);
};

//get, post, get, delete
