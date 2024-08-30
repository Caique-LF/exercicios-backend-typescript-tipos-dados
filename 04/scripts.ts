const etiquetas = (
    produtos: {
        produto: string,
        lote: number,
        ano: number,
        qtd: number
    }[]
    ): string=>{
     let resultado: string = ''

        for(let prod of produtos){
            if(prod.qtd < 10){
                resultado += `${prod.lote}-${prod.ano}-00${prod.qtd}\n`
            } else if (prod.qtd > 100){
                resultado += `${prod.lote}-${prod.ano}-${prod.qtd}\n`
            } else {
                resultado += `${prod.lote}-${prod.ano}-0${prod.qtd}\n`
            };
        }

    return resultado
}

console.log( etiquetas([
    {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
    },
    {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 13
    },
    {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 112
    }
]));
