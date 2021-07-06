// assistencia na definição dos tipos em typescript

let idadeField = document.getElementById('idade') as HTMLInputElement;
let botao = document.getElementById('botao');

console.log(idadeField);
console.log(botao);
botao.addEventListener('click',function(){
    console.log(idadeField.value); 
});

