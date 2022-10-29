import bcrypt from 'bcrypt'
import { Response, Request } from 'express'
import moment from 'moment'
import Config from '../../config'

export default async function createUser(request: Request, response: Response) {
  const { nome, email, senha, tipo } = request.body


  const config = await Config.getInstance()
  const banco = config.banco

  if (!banco) {
    return response.status(500).json({
      key: 'internalServerError',
      msg: 'Erro interno do servidor',
    })
  }

  if (tipo !== 1 && tipo !== 2) {
    return response
      .status(422)
      .json({ key: 'invalidType', msg: 'tipo inválido' })
  }

  if (!nome) {
    return response
      .status(422)
      .json({ key: 'requiredName', msg: 'Nome é obrigatório' })
  }
  if (!email) {
    return response
      .status(422)
      .json({ key: 'requiredEmail', msg: 'E-mail é obrigatório' })
  }
  if (!senha) {
    return response
      .status(422)
      .json({ key: 'requiredPassword', msg: 'Senha é obrigatório' })
  }

  const existentUser = await banco
    .collection('usuarios')
    .findOne({ email: email })


  if (existentUser) {
    return response.status(422).json({
      key: 'duplicatedUser',
      msg: 'Usuário ja cadastrado com este e-mail',
    })
  }

  const now = moment().toDate()

  const salt = await bcrypt.genSalt(12)
  const hash = await bcrypt.hash(senha, salt)

  await banco.collection('usuarios').insertMany([
    {
      nome,
      email,
      hash: hash,
      nivelAcesso: tipo,
      createdAt: now,
    },
  ])

  return response.status(200).json({
    key: 'createUserSuccessfully',
    msg: 'Usuário criado com sucesso',
  })
}
