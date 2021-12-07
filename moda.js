const listaUno = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

const listaUnoCount = {};

listaUno.map(
    function (elemnto) {
        if (listaUnoCount[elemnto]) {
            listaUnoCount[elemnto] += 1;
        } else{
            listaUnoCount[elemnto] = 1;
        }
    }
);

const listaUnoArray = Object.entries(listaUnoCount).sort(
    function (elemntoA, elementoB) {
        return elemntoA[1] - elementoB[1]
    }
);

const moda = listaUnoArray[listaUnoArray.length - 1];