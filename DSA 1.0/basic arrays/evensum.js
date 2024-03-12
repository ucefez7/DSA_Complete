const prompt = require("prompt-sync")();

function getEven(limit) {
    let arr = [];

    for (let i = 0; i < limit; i++) {
        let value = parseInt(prompt(`Enter value ${i + 1}: `));

        if (value % 2 === 0) {
            arr.push(value);
        } else {
            console.log("Value is not even. Please enter an even number.");
            i--; 
        }
    }

    return arr
}
console.log(getEven())