const prompt = require('prompt-sync')();
let fruits = [];
let dairy = [];
let frozen = [];
let candy = [];

const foodList = () => {
    let item = prompt("Digite o item que deseja adionar na lista: ");
    let itemCategory = prompt("Selecione a categoria: 1-Frutas | 2-Laticínios | 3-Congelados | 4-Doces");

    switch (itemCategory) {
        case '1':
            fruits.push(item);
            break;
        case '2':
            dairy.push(item);
            break;
        case '3':
            frozen.push(item);
            break;
        case '4':
            candy.push(item);
            break;
    }
}

const renderList = () => {
    console.log("Lista de Compras");
    console.log(`Frutas: ${fruits}`);
    console.log(`Laticínios: ${dairy}`);
    console.log(`Congelados: ${frozen}`);
    console.log(`Doces: ${candy}`);
}

(function () {
    let msg = prompt("Deseja incluir um item na sua lista de compra? 1-Sim | 2-Não ");
    while (msg == 1) {
        foodList();
        console.log(fruits);
        msg = prompt("Deseja incluir mais um item na sua lista de compra? 1-Sim | 2-Não ");
    }
    renderList();
})();

