import axios from "axios";

interface LoginResponse {
  token?: string;
  key: string;
  msg: string;
}

export const api = axios.create({
  baseURL: "http://localhost:3001",
});

export async function login(email: string, senha: string): Promise<LoginResponse> {
  const response = await api.post('/auth/login', { email, senha }, { validateStatus: null })
  return response.data
}
export async function crateUser(nome: string, email: string, senha: string, tipo: number): Promise<LoginResponse> {
  const response = await api.post('/auth/create-user', { nome, email, senha, tipo }, { validateStatus: null })
  return response.data
}

export async function redefinePass(chave: string, senha: string) {
  const response = await api.post('/auth/redefine-pass', { chave, senha }, { validateStatus: null })
  return response.data
}

export async function createRoutine(routinesToSave: { nome: string, atividades: string[], recompensa: string }, token: string) {
  const response = await api.post('api/create-routine', { routinesToSave, token }, { validateStatus: null })
  return response.data
}

export async function getRoutine(token: string) {
  const response = await api.post('/api/get-routines', { token }, { validateStatus: null })
  return response.data
}

export async function lostPass(token: string) {
  const response = await api.post('/auth/lost-pass', { token }, { validateStatus: null })
  return response.data
}


//get, post, get, delete
