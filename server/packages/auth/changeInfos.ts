import { Request, Response } from "express";
import moment from "moment";
import Config from "../../config";
import validateToken from "../../utils/validateToken";
import jwt from "jsonwebtoken";

export default async function changeInfos(
  request: Request,
  response: Response
) {
  const config = await Config.getInstance();
  const banco = config.banco;
  const { token, email, nome } = request.body;
  const secret = config.configuration.security.secret;

  if (!banco) {
    return response.status(500).json({
      key: "internalServerError",
      msg: "Erro interno do servidor",
    });
  }
  const now = moment();

  const tokenValidated = await validateToken(token);
  if (!tokenValidated) {
    return response.status(301).redirect("http://localhost:3000/login");
  }
  console.log("tokenValidated", tokenValidated);

  await banco
    .collection("usuarios")
    .updateOne({ email: tokenValidated.email }, { $set: { email, nome } });

  const newToken = jwt.sign(
    {
      id: tokenValidated._id,
      nome,
      email,
      nivelAcesso: tokenValidated.nivelAcesso,
    },
    secret
  );

  return response.status(422).json({
    token: newToken,
    key: "sucessfulyUpdateInfos",
    msg: "Sucesso ao editar informações",
  });
}
