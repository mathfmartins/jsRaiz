//no javascript existe o conceito de high order functions, cidadão de primeira classe
//funções que recebem outras funções como argumento ou retornam outras funções
//isso quer dizer que funções são tratadas como valores

//callbacks são funções passadas como argumento para outras funções

const soma = (a, b) => a + b;

const calcula = (fn, a, b) => {
    return fn(a, b);
}

const resultado = calcula(soma, 5, 3);
resultado;


Array.prototype.mapClone = function (fn) {
    let arrResult = [];
    this.forEach(element => {
        arrResult.push(fn(element))
    });
    return arrResult;
}

let arr = [1, 2, 4, 6, 8];

const xpto = arr.mapClone((num) => {
    return num * 2;
})

xpto;

Array.prototype.filterClone = function (fn) {
    let arr = [];
    this.forEach((e) => {
        if (fn(e)) {
            arr.push(e);
        }
    });
    return arr;

}
const resulFilter = arr.filterClone((e) => e > 2);
resulFilter;

