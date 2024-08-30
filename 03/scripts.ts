const tabuadas = (numeros: number[]): string =>{
    let resultado: string = '';
    
    for(const n of numeros){
        for (let index = 0; index <= 10 ; index++) {
            resultado += `${n} x ${index} = ${n * index} \n`

            if(index === 10){
                resultado += '----------------- \n'
            }
        }
    }
    
    return resultado;
}

console.log(tabuadas([1, 5, 10]));
