function getToken(token: string | undefined | null): {} | undefined {
  if (!token) {
    return undefined;
  }
  const payload = token.split(".")[1]; //pegar a segunda parte do token
  return { ...JSON.parse(window.atob(payload)), token }; //atob decodifica uma string base64
}

export default getToken;
