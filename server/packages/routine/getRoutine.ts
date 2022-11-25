import { Request, Response } from "express";
import Config from "../../config";
import jwt from "jsonwebtoken";
import validateToken from "../../utils/validateToken";

export default async function getRoutine(request: Request, response: Response) {
    const config = await Config.getInstance();
    const banco = config.banco;
    const { token } = request.body;
    console.log('rotina solicitada')
    if (!banco) {
        return response
            .status(500)
            .json({ key: 'internalServerError', msg: 'Erro interno do servidor' })
    }


    const tokenValidated = await validateToken(token)
    if (!tokenValidated) {
        return response.status(301).redirect('http://localhost:3000/login')
    }
    const routines = await banco.collection('rotinas').find({ "userId": tokenValidated.id }).toArray()


    return response.status(200).json({
        key: "sucessfulyRoutineListed",
        msg: "Sucesso ao listar rotinas",
        routines
    });
}
