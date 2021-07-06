let idade:string | number = 90;

idade = '90';

function mostrarIdade(idade:string | number){
    if(typeof idade === 'string'){
        console.log(idade.toUpperCase());
    }else{
        console.log(idade);
    }
}

mostrarIdade(20);
mostrarIdade('20');