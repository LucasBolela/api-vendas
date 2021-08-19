"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importa classe Router da experiencia express
var express_1 = require("express");
// cria um objeto da classe Router
var routes = express_1.Router();
// rota GET padrão /
routes.get('/', function (request, response) {
    return response.json({
        message: 'Funcionou meu primeiro exemplo'
    });
});
// exportar o objeto para uso em outro arquivo 
exports.default = routes;
