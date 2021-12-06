// const listaUno = [
//     100,
//     200,
//     300,
//     500,
// ];

// let sumaListaUno = 0;

// for (let i = 0; i < listaUno.length; i++) {
//     sumaListaUno = sumaListaUno + listaUno[i];    
// }

// const promedioListaUno = sumaListaUno / listaUno.length;

function calcularMediaAritmeica(lista) {
    
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];        
    // }

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista
}