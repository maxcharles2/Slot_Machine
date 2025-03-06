document.querySelector('button').addEventListener('click', spinSlots);

const slotSymbols = {
    cherry: "🍒",
    lemon: "🍋",
    watermelon: "🍉",
    star: "⭐",
    orange: "🍊",
    bell: "🔔"
}
//Object.values() is a built in function or method or prototype inside of javascript
const symbolsArray = Object.values(slotSymbols);

console.log(symbolsArray);

function getRandomSymbol() {
    //randomizes the elements inside the array and returns them
    return symbolsArray[Math.floor(Math.random() * symbolsArray.length)];
}

function spinSlots() {
    let slot1 = getRandomSymbol();
    let slot2 = getRandomSymbol();
    let slot3 = getRandomSymbol();

    //learn textContent, innerText, innerHTML in Anki
    document.getElementById('slot1').textContent = slot1;
    document.getElementById('slot2').textContent = slot2;
    document.getElementById('slot3').textContent = slot3;

    if(slot1 === slot2 && slot2 === slot3) {
        document.getElementById('result').textContent = "you win";
    } else {
        document.getElementById('result').textContent = "you lose";
    }
}

//variable or inteeger to take money or give money ()

//object person (name, last name, money)

//add to the todo list and add or take things away