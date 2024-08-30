const separarString = (palavra: string): string=>{
    let resultado: string = '';
    for (let index = 0; index < palavra.length; index++) {
        if(index === 0){
            resultado += palavra[index]
        } else{ 
            resultado += `-${palavra[index]}`
        }
    }
    return resultado;
}

console.log(separarString(''))