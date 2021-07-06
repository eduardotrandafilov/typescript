function fazerRequisicao(url:string,method:'GET'|'POST'){   
    //.....
}

type RequestDetails = {
    url:string,
    method:'GET'|'POST'
} 

let req:RequestDetails = {
    url:'https://www.google.com.br',
    method:'GET'
}

//req.method = 'blabla';

req.method = 'POST';

fazerRequisicao(req.url,req.method);