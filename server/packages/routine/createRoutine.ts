import { Request, Response } from "express";
import Config from "../../config";
import jwt from "jsonwebtoken";

export default async function lostPass(request: Request, response: Response) {
  const config = await Config.getInstance();
  const banco = config.banco;
  const { rotina, token } = request.body;

  // if (!banco) {
  //   return response.status(500).json({
  //     key: "internalServerError",
  //     msg: "Erro interno do servidor",
  //   });
  // }
  const verifyedToken = await jwt.verify(
    token,
    config.configuration.security.secret,
    {}
  );
  console.log("verifyedToken", verifyedToken);
  const decodeToken = await jwt.decode(token, {});
  console.log("decodeToken", decodeToken);

  return response.status(422).json({
    key: "sucessfulyRoutineCreated",
    msg: "Sucesso ao criar rotina",
  });
}
