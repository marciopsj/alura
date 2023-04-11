const prompt = require('prompt-sync')();
let fruits = [];
let dairy = [];
let frozen = [];
let candy = [];

const breakLine = () => {
    console.log("\n")
}

const foodList = () => {
    let item = prompt("Digite o item que deseja adionar na lista: >");
    breakLine();
    let itemCategory = prompt("Selecione a categoria: 1-Frutas | 2-Laticínios | 3-Congelados | 4-Doces >");
    breakLine();
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
    breakLine();
    console.log("Lista de Compras");
    console.log(`Frutas: ${fruits}`);
    console.log(`Laticínios: ${dairy}`);
    console.log(`Congelados: ${frozen}`);
    console.log(`Doces: ${candy}`);
}

const removeItem = () => {    
    let item = prompt("Digite o item que deseja remover da lista: >");
    breakLine();
    if (fruits.includes(item)) {
        fruits.splice(fruits.indexOf(item), 1);
    } else if (dairy.includes(item)) {
        dairy.splice(dairy.indexOf(item), 1);
    } else if (frozen.includes(item)) {
        frozen.splice(frozen.indexOf(item), 1);
    } else if (candy.includes(item)) {
        candy.splice(candy.indexOf(item), 1);
    } else {
            console.log("O item não existe na lista ou não digitou corretamente");
            breakLine();
    }
    console.log("Lista atualizada:");
    renderList();
}

(function () {
    let msg = prompt("Deseja incluir um item na sua lista de compras? 1-Sim | 2-Não >");        
    while (msg == 1 || msg == 3) {
        if (msg == 1) {
            foodList();
        } else if (msg == 3) {
            renderList();
            removeItem();
        }
        msg = prompt("Deseja incluir mais um item na sua lista de compras? 1-Sim | 2-Não | 3-Remover Item >");
        breakLine();
    }
    console.log("Sua lista final:");
    renderList();
})();

