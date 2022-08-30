export default function api(app, banco) {
  /*
    *** criação de cada post ***
    qual seu problema?
    o que você precisa?
    o que você tem?
    como chegar ao que você precisa?
    codificar
  */

  app.post("/echo", (request, response) => {
    //rota do post
    console.log(request.body);
    console.log(request.body.requestJson);
    response.send(request.body); // envia informações pro front em formato de objeto (json)
  });

  app.get("/", (request, response) => {
    //rota do get
    response.send("<div>teste</div>"); // envia informações pro front em formato de html
  });
}
