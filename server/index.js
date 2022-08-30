import express from "express";
import api from "./utils/api.js";
import bodyParser from "body-parser";
import conectaBanco from "./utils/conecta.js";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const banco = conectaBanco();
api(app, banco);

app.listen(port, () => {
  console.log("server na porta ", port);
});
