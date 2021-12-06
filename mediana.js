function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }

const listaUno = [
    100,
    200,
    500,
    400000000,
];

listaUno.sort();

const mitadListaUno = parseInt(listaUno.length / 2);

function esPar(numero) {
    if (numero % 2 === 0){
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(listaUno.length)) {
    const elemento1 = listaUno[mitadListaUno - 1];
    const elemento2 = listaUno[mitadListaUno];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2,]);
    mediana = promedioElemento1y2;
}else{
    mediana = listaUno[mitadListaUno];
}
