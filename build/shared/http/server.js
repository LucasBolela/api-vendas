"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importa dependência do express
var express_1 = __importDefault(require("express"));
// cria um servidor express
var servidor = express_1.default();
var routes_1 = __importDefault(require("./routes/routes"));
// associa as rotas ao servidor 
servidor.use(routes_1.default);
require("./../typeorm/index");
// sobe o servidor, que fica escutando e aguardando as requisições
servidor.listen(3333, function () {
    console.log("Server up and running");
});
