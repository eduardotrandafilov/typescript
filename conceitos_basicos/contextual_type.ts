let nomes = ['eduardo','danilo','nadia','fulano',90];

nomes.forEach(function (nome){
    if(typeof nome === 'string'){
        console.log(nome.toUpperCase());
    }else{
        console.log(nome);
    }
});

