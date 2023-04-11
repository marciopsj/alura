const prompt = require('prompt-sync')()

const operation = (operationChoice) => {
    const numA = parseInt(prompt('Insira o valor 1 >'))
    const numB = parseInt(prompt('Insira o valor 2 >'))

    if (operationChoice == 'soma') {
        return console.log(`${numA} + ${numB} = ` + (numA + numB))
    }

    if (operationChoice == 'sub') {
        return console.log(`${numA} - ${numB} = ` + (numA - numB))
    }

    if (operationChoice == 'multi') {
        return console.log(`${numA} * ${numB} = ` + (numA * numB))
    }

    if (operationChoice == 'div') {
        return console.log(`${numA} / ${numB} = ` + (numA / numB))
    }
}


(function () {

    const options = ['soma', 'sub', 'multi', 'div']
    const operationChoice = prompt('Digite a operação desejada: ' + options.map((option) => option).join(' | ') + ' | sair >')

    if (operationChoice == 'sair') {
        return console.log('Até a próxima')
    }

    if (!options.includes(operationChoice)) {
        return console.log('Nenhuma opção válida')
    }

    operation(operationChoice)

})()