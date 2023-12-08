const fs = require("fs")
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const numberNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const test = []
let second = 55
const file = fs.readFileSync('file1.txt', 'utf8')
function checkNumber(parameter1) {
    for (let i = 0; i <= 5; i++) {
        if (numberNames.includes(parameter1.substring(i, 5))) {
            test.push(String(numberNames.indexOf(parameter1.substring(i, 5))))
        }
    }
}
for (let i = 0; i <= file.length; i++) {
    if (numbers.includes(file[i]) || file[i] == '\n') {
        test.push(file[i])
    }
    checkNumber(file.substring(i - 1, i + 4))
}
console.log(test)
for (let i = 0; i <= test.length; i++) {
    if (test[i] == '\n'){
        second = second + parseInt(test[i - 1])
        second = second + ((parseInt(test[i + 1])) * 10)
    }
}
console.log(second)
parseInt(test[i - 1]) >= limits[letters.indexOf(test[i])]
