const fs = require("fs")
const file = fs.readFileSync('file5.txt', 'utf8')
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
let n = 0
let seedsString = []
while (file[n] != '\n') {
    if (numbers.includes(file[n])) {
        seedsString[seedsString.length - 1] += file[n]
    } else if ((file[n]) == ' ') {
        seedsString.push('')
    }
    n++
}
let seeds = []
function convertToString(string1, var2) {
    for (i = 0; i < string1.length; i++) {
        var2.push(parseInt(string1[i]))
    }
}
convertToString(seedsString, seeds)
console.log(seeds)
console.log(file.search('soil-to-fertilizer map:'))
console.log(file[231])
console.log(file[601])