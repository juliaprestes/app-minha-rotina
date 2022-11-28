import { Request, Response } from "express";
import moment from "moment";
import Config from "../../config";
import bcrypt from "bcrypt";

export default async function changeInfos(request: Request, response: Response) {
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

    const existentUser = await banco
        .collection("usuarios")
        .findOne({
            token,
            created_at: { $gt: now.subtract({ hour: 1 }).toDate() },
            used: false,
        })


    if (!existentUser) {
        return response.status(422).json({
            key: "inexistentUser",
            msg: "Usuário inexistente",
        });
    }
    await banco.collection("usuarios").updateOne(
        {
            token,
            created_at: { $gt: now.subtract({ hour: 1 }).toDate() },
            used: false,
        },
        { $set: { used: true } }
    );

    await banco
        .collection("usuarios")
        .updateOne({ $set: { nome: existentUser.nome } }, { $set: { email: existentUser.email } });


    return response.status(422).json({
        key: "sucessfulyUpdateInfos",
        msg: "Sucesso ao editar informações",
    });
}
