const fs = require("fs")
const file = fs.readFileSync('file4.txt', 'utf8')
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
// Part 1
const part1 = [[]]
let answer = 0
for (i = 0; i < file.length; i++) {
    if (file[i] == '\n') {
        answer = answer + part1[part1.length - 1]
        part1.push([])
    } else if (i % 118 < 41 && i % 118 > 8 && numbers.includes(file[i])) {
        part1[part1.length - 1].push(file.substring(i, i + 2))
        i++
    } else if (file[i] == '|') {
        part1.push(0)
    } else if (i % 118 > 41 && numbers.includes(file[i])) {
        if (part1[part1.length - 2].includes(file.substring(i, i + 2))) {
            if (part1[part1.length - 1] == 0) {
                part1[part1.length - 1] = 1
            } else {
                part1[part1.length - 1] = part1[part1.length - 1] * 2
            }
        } else if ((i % 118 == 115) && part1[part1.length - 2].includes(file[i] + ' ')) {
            if (part1[part1.length - 1] == 0) {
                part1[part1.length - 1] = 1
            } else {
                part1[part1.length - 1] = part1[part1.length - 1] * 2
            }
        }
        i++
    }
}
console.log(answer)
// Part 2
let part2 = []
function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
  }
for (i = 0; i < 198; i++) {
    part2.push(1)
}
for (i = 1; i < part1.length; i = i + 2) {
    for (n = 1; n <= ((getBaseLog(2, part1[i])) + 1); n++) {
        part2[((i - 1) / 2) + n] = part2[((i - 1) / 2) + n] + part2[((i - 1) / 2)]
    }
}
let answer2 = 0
for (i = 0; i < part2.length; i++) {
    answer2 = answer2 + part2[i]
}
console.log(answer2)