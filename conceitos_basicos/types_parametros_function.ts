function firstLetterUpperCase(name:string){
    let primeiraletra =  name.charAt(0).toUpperCase();
    let demaisletras = name.substring(1);
    return primeiraletra + demaisletras;
}


console.log(firstLetterUpperCase('eduardo'));