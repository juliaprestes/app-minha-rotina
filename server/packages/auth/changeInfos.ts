import { Request, Response } from "express";
import moment from "moment";
import Config from "../../config";
import validateToken from "../../utils/validateToken";

export default async function changeInfos(
  request: Request,
  response: Response
) {
  const config = await Config.getInstance();
  const banco = config.banco;
  const { token, email, nome } = request.body;

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

  await banco
    .collection("usuarios")
    .updateOne({ id: token.id }, { $set: { email, nome } });

  return response.status(422).json({
    key: "sucessfulyUpdateInfos",
    msg: "Sucesso ao editar informações",
  });
}
