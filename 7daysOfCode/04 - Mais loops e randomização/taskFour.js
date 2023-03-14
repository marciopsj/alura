const prompt = require('prompt-sync')();

const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const guessNumber = (computerNumber) => {

    let shot = prompt("Tente adivinhar, de 0 a 10 em qual número estou pensando?");
    let chance = 2;
    let isBingo = (shot == computerNumber);

    if (isBingo) {
        console.log(`Na mosca! O número que pensei foi ${computerNumber}`);
    } else {
        while (chance > 0 && !isBingo) {
            shot = prompt(`Vamos lá vou te dar mais ${chance} chance(s)`);
            isBingo = (shot == computerNumber);
            chance -= 1;
        }
        (chance <= 0 && !isBingo) ? console.log(`Talvez na próxima você acerte. O número era ${computerNumber}`) : console.log(`Bingo! Acertou o número era mesmo ${computerNumber}`);
    }

}

(function () {
    const computerNumber = getRandom(0, 10);    
    guessNumber(computerNumber);
})();