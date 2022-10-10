import axios from "axios";

interface LoginResponse {
  token?: string;
  key: string;
  msg: string;
}

export const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const busca = async (url: string, setDado: any) => {
  const resposta = await api.get(url);
  setDado(resposta.data);
};

export async function login(email: string, senha: string): Promise<LoginResponse> {
  const response = await api.post('/auth/login', { email, senha }, { validateStatus: null })
  return response.data
}
export async function crateUser(nome: string, email: string, senha: string, tipo: number): Promise<LoginResponse> {
  const response = await api.post('/auth/create-user', { nome, email, senha, tipo }, { validateStatus: null })
  return response.data
}

//get, post, get, delete
