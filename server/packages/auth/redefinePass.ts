import { Request, Response } from 'express'
import moment from 'moment'
import Config from '../../config'
import bcrypt from 'bcrypt'

export default async function lostPass(request: Request, response: Response) {
    const config = await Config.getInstance()
    const banco = config.banco
    const { chave, senha } = request.body

    if (!banco) {
        return response.status(500).json({
            key: 'internalServerError',
            msg: 'Erro interno do servidor',
        })
    }

    const now = moment()
    const passRecovery = await banco
        .collection('forgot_password')
        .findOne({ chave, created_at: { $lte: now.subtract({ hour: 1 }).toDate() } })


    if (!passRecovery) {
        return response.status(422).json({
            key: 'inexistentUser',
            msg: 'Usuário inexistente',
        })
    }

    const salt = await bcrypt.genSalt(12)
    const hash = await bcrypt.hash(senha, salt)

    await banco.collection('usuarios').updateOne({ email: passRecovery.email }, { hash })


    return response.status(422).json({
        key: 'sucessfulyPasswordReset',
        msg: 'Sucesso ao trocar de senha',
    })
}