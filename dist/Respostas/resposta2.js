"use strict";
var profissao;
(function (profissao) {
    profissao[profissao["Padeiro"] = 0] = "Padeiro";
    profissao[profissao["Atriz"] = 1] = "Atriz";
})(profissao || (profissao = {}));
let pessoa1 = {
    nome: "Maria",
    idade: 29,
    trabalho: profissao.Atriz,
};
let pessoa2 = {
    nome: "Roberto",
    idade: 19,
    trabalho: profissao.Padeiro,
};
let pessoa3 = {
    nome: "Laura",
    idade: 32,
    trabalho: profissao.Atriz
};
let pessoas4 = {
    nome: "Carlos",
    idade: 19,
    trabalho: profissao.Padeiro
};
