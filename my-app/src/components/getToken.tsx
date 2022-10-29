function getToken(token: string | undefined): {} | undefined {
  if (!token) {
    return undefined;
  }
  const payload = token.split(".")[1]; //pegar a segunda parte do token
  return JSON.parse(window.atob(payload)); //atob decodifica uma string base64
}

export default getToken;
