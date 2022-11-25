import nodemailer from "nodemailer";
import { Request, Response } from "express";
import Config from "../../config";
import { uuid } from "uuidv4";
import moment from "moment";
import handlebars from "handlebars";
import path from "path";
import fs from "fs";

const filePath = path.join(__dirname, "./basicMail.html");
const source = fs.readFileSync(filePath, "utf-8").toString();

export default async function lostPass(request: Request, response: Response) {
  const config = await Config.getInstance();
  const banco = config.banco;
  const { email } = request.body;

  if (!banco) {
    return response.status(500).json({
      key: "internalServerError",
      msg: "Erro interno do servidor",
    });
  }

  const template = handlebars.compile(source);

  const mail = config.configuration.mailInformation;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: mail.email,
      pass: mail.senha,
    },
  });
  const existentUser = await banco
    .collection("usuarios")
    .findOne({ email: email });

  if (!existentUser) {
    return response.status(422).json({
      key: "inexistentUser",
      msg: "Usuário inexistente",
    });
  }
  const now = moment().toDate();

  const chave = uuid();

  await banco
    .collection("forgot_password")
    .insertMany([{ email, chave, created_at: now, used: false }]);
  console.log("chave", chave);

  const replacements = {
    user: existentUser.name,
    link: chave,
  };
  const htmlToSend = template(replacements);
  const mailOptions = {
    from: "contatojuliaprestes@gmail.com",
    to: existentUser.email,
    subject: "Redefinição de senha - Minha Rotina",
    html: htmlToSend,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error(error);
    }
  });
  return response.status(422).json({
    key: "sucessfulyPasswordResetRequest",
    msg: "Sucesso ao requisitar troca de senha",
  });
}
