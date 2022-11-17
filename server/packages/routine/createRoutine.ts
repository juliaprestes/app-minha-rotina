import { Request, Response } from "express";
import Config from "../../config";
import jwt from "jsonwebtoken";
import validateToken from "../../utils/validateToken";

export default async function lostPass(request: Request, response: Response) {
  const config = await Config.getInstance();
  const banco = config.banco;
  const { nome, imagem, recompensa, token } = request.body;

  if (!banco) {
    return response
      .status(500)
      .json({ key: 'internalServerError', msg: 'Erro interno do servidor' })
  }


  const tokenValidated = await validateToken(token)

  console.log(tokenValidated)
  if (!tokenValidated) {
    return response.status(301).redirect('http://localhost:3000/login')
  }
  await banco.collection('rotinas').insertOne(
    {
      userId: tokenValidated.id,
      nome,
      imagem,
      recompensa,
      created_at: new Date()
    },
  )
  return response.status(200).json({
    key: "sucessfulyRoutineCreated",
    msg: "Sucesso ao criar rotina",
  });
}
