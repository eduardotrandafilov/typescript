type MathFunction = (n1:number,n2:number) => number;

const somar:MathFunction = (n1,n2) =>{
    return n1 + n2;
}

const subtrair:MathFunction = (n1,n2)=>{
    return n1-n2;
}

console.log(somar(10,20));