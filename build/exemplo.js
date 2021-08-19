"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// typescript é tipado
var motor;
motor = true;
var idade;
idade = 20;
var nome;
nome = "Lucas Dias";
console.log("Motor: " + motor + " Idade: " + idade + " Nome: " + nome);
var coisa; // recebe qualquer coisa
coisa = 10;
coisa = "dez";
coisa = true;
// vetores ou arrays
var jogadores = ["lucas dias", "lucão", "georginho", "david jackson", "jonatan"];
var times;
times = ["Sesi Franca", "São Paulo", "Bauru", "Pinheiros"];
console.log("Jogadores: " + jogadores);
console.log("Times de basquete: " + times);
var zeca = {
    nome: "José da Silva Xavier",
    nota: 9,
    aprovado: false,
    situacao: function () {
        if (this.aprovado) {
            return ("Aprovado");
        }
        else {
            return ("Reprovado");
        }
    }
};
console.log(zeca);
console.log(zeca.nome + " " + zeca.nota + " " + zeca.situacao());
// implementa herança
// criando uma classe
var Funcionario = /** @class */ (function () {
    function Funcionario(atividade) {
        this.atividade = atividade;
    }
    Funcionario.prototype.exercerCargo = function () {
        console.log("A atividade \u00E9 " + this.atividade);
    };
    return Funcionario;
}());
var Docente = /** @class */ (function (_super) {
    __extends(Docente, _super);
    function Docente(name, atividade) {
        var _this = _super.call(this, atividade) || this;
        _this.name = name;
        return _this;
    }
    Docente.prototype.bomDia = function () {
        this.exercerCargo();
        return "Bom dia com alegria, " + this.name;
    };
    Docente.prototype.boaTarde = function () {
        this.exercerCargo();
        return "Boa tarde meu mano, " + this.name;
    };
    return Docente;
}(Funcionario));
var obj = new Docente("Daniel", "coordenador");
console.log(obj.bomDia());
console.log(obj.boaTarde());
