const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//inicializando o app
const app = express();

//realtime
const server = require("http").Server(app);
const io = require("socket.io")(server);

//conectando a database
mongoose.connect("mongodb://localhost:27017/mongotwitter", 
  // mongodb://localhost:27017/mongotwitter
  //mongodb://<user>:<password>@mlab.com
{
  useNewUrlParser: true
});

//variavel/middleware visivel a tudo, ela é passada pelo req
app.use((req, res, next) => {
  req.io = io;
  //next continua o fluxo...
  return next();
});

//habilitando cors
app.use(cors());

// usa o json para requisicoes
app.use(express.json());
//rotas
app.use(require("./routes"));

//servindo na porta
server.listen("3000", () => {
  console.log("Server started on port 3000 :D");
});
