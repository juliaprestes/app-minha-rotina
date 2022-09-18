import Config from '../../config'
import { Response, Request } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export default async function login(request: Request, response: Response) {
  const { email, senha } = request.body
  const config = await Config.getInstance()
  const secret = config.configuration.security.secret
  const banco = config.banco

  if (!banco) {
    return response
      .status(500)
      .json({ key: 'internalServerError', msg: 'Erro interno do servidor' })
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

  console.log('existentUser', existentUser)
  if (!existentUser) {
    return response
      .status(422)
      .json({ key: 'invalidEmail', msg: 'Email não encontrado' })
  }

  const { hash } = existentUser

  const comparedHash = await bcrypt.compare(senha, hash)

  if (!comparedHash) {
    return response
      .status(422)
      .json({ key: 'invalidPassword', msg: 'Senha incorreta' })
  }

  const token = jwt.sign({ id: existentUser._id }, secret)

  return response.status(200).json({
    token: token,
    key: 'loginSuccessfully',
    msg: 'Usuário logado com sucesso',
  })
}
