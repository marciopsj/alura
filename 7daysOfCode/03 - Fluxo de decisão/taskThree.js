
const containerElement = document.querySelector(".container");
const techPathElement = document.querySelector("#techPath");
const techElement = document.querySelector("#tech");
const moveOnElement = document.querySelector("#moveOn");
let listParentElement = document.querySelector(".learningList > ul");
let techChoice;  


const renderResult = () => {
    containerElement.style.display = "block";
}


const learningList = () => {
    let newTech = prompt("Deseja conhecer outras tecnologias? Digite 1 para informar.");
    if (newTech == 1) {    
        let otherTech = [];
        while (newTech == 1) {
            otherTech.push(prompt("Qual tech?"));            
            newTech = prompt("Alguma outra? Digite 1 para sim");    
        }
        for (let i = 0; i < otherTech.length; i++) {
            let newItemElement = document.createElement("li");
            newItemElement.textContent = otherTech[i];
            listParentElement.appendChild(newItemElement);
            newItemElement.setAttribute("class", "item");                       
        }
        renderResult();
    } else {
        listParentElement.appendChild(newItemElement);
        newItemElement.innerText = "vazia";
        renderResult();
    }
}

const invalidChoice = (args) => {
    if (args == 1) {
        alert("Selecione uma Tecnologia Front-End correta");
        frontTech();
    } else if (args == 2) {
        alert("Selecione uma Tecnologia Back-End correta");
        backTech();
    } else if (args == 3) {
        alert("Selecione uma inteção de carreira válida");
        moveOn();
    } else {
        alert("Opção inválida ou não informada. recarregue a págia e selecione uma Área de Tecnologia.")
    }   
}

const moveOn = (tech) => {
    const moveOnChoice = prompt("Digite 1 se deseja seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack ");
    if (moveOnChoice == 1) {
        moveOnElement.innerText = `Desejo continuar me especializando na tech ${tech}.`;
    } else if (moveOnChoice == 2) {
        moveOnElement.innerText = `Além de dominar a tech ${tech}, vou me desenvolver para tornar Fullstack!`;
    } else {
        invalidChoice(3);
    }
    learningList();
}


const frontTech = () => {    
    techChoice = prompt("Quer aprender qual tecnologia? Digite 1 para React ou 2 para Vue:");
    if (techChoice == 1) {
        techElement.innerText = "React";
        moveOn(techElement.innerText);              
    } else if (techChoice == 2) {
        techElement.innerText = "Vue";
        moveOn(techElement.innerText);
    } else {
        invalidChoice(1);
    }
}

const backTech = () => {    
    techChoice = prompt("Quer aprender qual tecnologia? Digite 1 para C# ou 2 para Java:");
    if (techChoice == 1) {
        techElement.innerText = "C#";
        moveOn(techElement.innerText);
    } else if (techChoice == 2) {
        techElement.innerText = "Java";        
        moveOn(techElement.innerText);
    } else {
        invalidChoice(2);
    }
}


(function techPath() {
    containerElement.style.display = "none";
    const pathChoice = prompt("Para qual área deseja seguir? Digite 1 para Front-End ou 2 para a área de Back-End:");
    if (pathChoice == 1) {
        techPathElement.innerText = "Front-End";
        frontTech();    
    } else if (pathChoice == 2) {
        techPathElement.innerText = "Back-End";
        backTech();
    } else {
        invalidChoice();
    }
})();




