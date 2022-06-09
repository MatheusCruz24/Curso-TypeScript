enum profissao{
    Padeiro,
    Atriz,
}

type pessoas = {
    nome: string,
    idade: number,
    trabalho: profissao,
}

let pessoa1: pessoas = {
    nome: "Maria",
    idade:29,
    trabalho: profissao.Atriz,
}

let pessoa2: pessoas = {
    nome: "Roberto",
    idade: 19,
    trabalho:profissao.Padeiro,
}

let pessoa3: pessoas = {
    nome: "Laura",
    idade: 32,
    trabalho:profissao.Atriz
}

let pessoas4: pessoas ={
    nome:"Carlos",
    idade:19,
    trabalho:profissao.Padeiro
}