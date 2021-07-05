function resumo(usuario:{nome:string,idade:number}){
    return `Olá ${usuario.nome} , tudo bem ?! Você tem ${usuario.idade} anos`;
}

let u = {
    nome:'eduardo',
    idade:20
}

console.log(resumo(u));