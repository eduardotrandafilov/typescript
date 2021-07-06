//geralmente usado para union types

type Opcoes = {
    weight:number,
    height: number
}

function configurar(props:Opcoes|'auto'){

}

configurar({
    weight:20,
    height: 20
});

configurar('auto');

//configurar('automatico');

function mostrarTexto(texto:string,alinhamento:'left'|'right'|'center'){
    return `<div style="text-align:${alinhamento}">${texto}</div>`;
}

mostrarTexto('ola','center');
//mostrarTexto('eduardo','blablabla');