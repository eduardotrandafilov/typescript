//uso de pascal case
/*
type UsuarioRoot = {
    nome: string,
    idade?:number
}
*/

interface UsuarioRoot{
    nome:string,
    idade?:number
}


interface UsuarioRoot{
    email?:string
}



function resumo(usuario:UsuarioRoot){
    return `Olá ${usuario.nome} , tudo bem ?! Você tem ${usuario.idade} anos`;
}

resumo({
    nome:'eduardo'
});