//nao sabemos o tipo de retorno obtido em um type do tipo void para uma funcao (podemos ter um retorno ou não)

type QualquerFuncao = () => void;

const msg1:QualquerFuncao = () =>{
    return 'Hello World';
}

//ao definirmos o retorno void diretamente em uma função e não em um type obrigatoriamente devemos omitir o return dela.
/* 
const msg2 = ():void =>{
    return 'Hello';
}
*/
