import { Request, Response } from "express";
import Config from "../../config";
import jwt from "jsonwebtoken";

export default async function lostPass(request: Request, response: Response) {
  const config = await Config.getInstance();
  const banco = config.banco;
  const { rotina, token1 } = request.body;

  const token = jwt.sign(
    {
      id: 'existentUser._id',
      nome: 'existentUser.nome',
      email: 'existentUser.email',
      nivelAcesso: 'existentUser.nivelAcesso',
    },
    'disuhadhpsdoasdyuiosd'
  )
  console.log(token)
  const token2 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImV4aXN0ZW50VXNlci5faWQiLCJub21lIjoiZXhpc3RlbnRVc2VyLm5vbWUiLCJlbWFpbCI6ImV4aXN0ZW50VXNlci5lbWFpbCIsIm5pdmVsQWNlc3NvIjoiZXhpc3RlbnRVc2VyLm5pdmVsQWNlc3NvIiwiaWF0IjoxNjY3NjA2NTQwfQ.JG00DP7DSxQRXzu5y5UQfY8z8f5X6iXZmhlvB1OAUFM'

  // if (!banco) {
  //   return response.status(500).json({
  //     key: "internalServerError",
  //     msg: "Erro interno do servidor",
  //   });
  // }
  try {
    const verifyedToken =  jwt.verify(
      token2,
      config.configuration.security.secret,
      {}
    );
  console.log("verifyedToken", verifyedToken);
  } catch (error) {
    return response.status(422).json({
      key:'tokenFailure',
      msg:'erro inesperado no token'
    })
  }

  return response.status(422).json({
    key: "sucessfulyRoutineCreated",
    msg: "Sucesso ao criar rotina",
  });
}
