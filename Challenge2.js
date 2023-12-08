const fs = require("fs")
const file = fs.readFileSync('file2.txt', 'utf8')
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const letters = ['r', 'g', 'b']
// Part 1
const limits = [12, 13, 14]
const test = [1]
const test2 = []
let test3 = 0
let n = 2
for (let i = 0; i <= file.length; i++) {
    if (file[i] == '\n') {
        test.push(n)
        n++
    } else if (numbers.includes(file[i])) {
        if (numbers.includes(file[i + 1]) && letters.includes(file[i + 3])) {
            test.push(file.substring(i, i + 2))
            test.push(file[i + 3])
        }
    }
}
for (let i = 0; i < test.length; i++) {
    if (typeof(test[i]) == 'number') {
        test2.push(test[i])
    } else if (letters.includes(test[i]) && parseInt(test[i - 1]) > limits[letters.indexOf(test[i])]) {
        test2.push(true)
    }
}
for (let i = 0; i < test2.length; i++) {
    if (typeof(test2[i]) == 'number' && test2[i + 1] != true) {
        test3 = test3 + test2[i]
    }
}
// Part 2
n = 2
const test4 = [[0, 0, 0]]
for (let i = 0; i <= file.length; i++) {
    if (file[i] == '\n') {
        test4.push([0, 0, 0])
        n++
    } else if (numbers.includes(file[i])) {
        if (numbers.includes(file[i + 1]) && letters.includes(file[i + 3])) {
            if (parseInt(file.substring(i, i + 2)) > test4[n - 2][letters.indexOf(file[i + 3])]) {
                test4[n - 2][letters.indexOf(file[i + 3])] = parseInt(file.substring(i, i + 2))
            }
        } else if (letters.includes(file[i + 2])) {
            if (parseInt(file[i]) > test4[n - 2][letters.indexOf(file[i + 2])]) {
                test4[n - 2][letters.indexOf(file[i + 2])] = parseInt(file[i])
            }
        }
    }
}
var w = 0
for (let i = 0; i < test4.length; i++) {
    w = w + (test4[i][0] * test4[i][1] * test4[i][2])
}
console.log(w)