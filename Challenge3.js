const fs = require("fs")
const file = fs.readFileSync('file3.txt', 'utf8')
const symbols = ['!', '@', '#', '$', '%', '&', '*', '/', '=', '-', '+']
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const locations = [-143, -142, -141, -1, 1, 141, 142, 143]
// Part 1
const scan4 = []
for (i = 0; i < file.length; i++) {
    for (n = 0; n <= locations.length; n++) {
        if (symbols.includes(file[i + locations[n]]) && numbers.includes(file[i])) {
            scan4.push('')
            if (numbers.includes(file[i - 1])) {
                if (numbers.includes(file[i - 2])) {
                    scan4[scan4.length - 1] += file[i - 2]
                }
                scan4[scan4.length - 1] += file[i - 1]
                scan4[scan4.length - 1] += file[i]
                if (numbers.includes(file[i + 1])) {
                    scan4[scan4.length - 1] += file[i + 1]
                }
                i++
            } else if (numbers.includes(file[i + 1])) {
                scan4[scan4.length - 1] += file[i]
                scan4[scan4.length - 1] += file[i + 1]
                if (numbers.includes(file[i + 2])) {
                    scan4[scan4.length - 1] += file[i + 2]
                    i = i + 1
                }
                i = i + 1
            } else {
                scan4[scan4.length - 1] += file[i]
            }
            n = 8
        }
    }
}
let d = 0
for (i = 0; i < scan4.length; i++) {
    d = d + parseInt(scan4[i])
}
// Part 2
const scan1 = []
let w = 0
for (i = 0; i < file.length; i++) {
    if (file[i] == '*') {
        for (n = 0; n <= locations.length; n++) {
            if (numbers.includes(file[i + locations[n]])) {
                if (! scan1.includes(i)) {
                    scan1.push(i)
                    scan1.push(['', ''])
                    w = 0
                } else {
                    w = 1
                }
                if (numbers.includes(file[i + locations[n] - 1])) {
                    if (numbers.includes(file[i + locations[n] - 2])) {
                        scan1[scan1.indexOf(i) + 1][w] += file[i + locations[n] - 2]
                    }
                    scan1[scan1.indexOf(i) + 1][w] += file[i + locations[n] - 1]
                    scan1[scan1.indexOf(i) + 1][w] += file[i + locations[n]]
                    if (numbers.includes(file[i + locations[n] + 1])) {
                        scan1[scan1.indexOf(i) + 1][w] += file[i + locations[n] + 1]
                    }
                    if (n == 0 || n == 5) {
                        n++
                    }
                } else if (numbers.includes(file[i + locations[n] + 1])) {
                    scan1[scan1.indexOf(i) + 1][w] += file[i + locations[n]]
                    scan1[scan1.indexOf(i) + 1][w] += file[i + locations[n] + 1]
                    if (numbers.includes(file[i + locations[n] + 2])) {
                        scan1[scan1.indexOf(i) + 1][w] += file[i + locations[n] + 2]
                        if (n == 0 || n == 5) {
                            n++
                        }
                    }
                    if (n == 0 || n == 1 || n == 5 || n == 6) {
                        n++
                    }
                } else {
                    scan1[scan1.indexOf(i) + 1][w] += file[i + locations[n]]
                }
            }
        }
    }
}
console.log(scan1[1])
const scan2 = []
for (i = 1; i < scan1.length + 1; i = i + 2) {
    if (scan1[i][1] != '') {
    scan2.push(scan1[i][0])
    scan2.push(scan1[i][1])
    }
}
const scan3 = []
for (i = 0; i < scan2.length; i++) {
    scan3.push('')
    for (n = 0; n < scan2[i].length; n++) {
        if (numbers.includes(scan2[i][n])) {
            scan3[scan3.length - 1] += scan2[i][n]
        } else if (scan2[i][n] = ' ') {
            scan3.push('')
        }
    }
}
console.log(scan3)
let part4 = []
for (i = 0; i < scan3.length; i++) {
    if (parseInt(scan3[i]) != parseInt(scan3[i - 1])) {
        part4.push(parseInt(scan3[i]))
    }
}
console.log(part4)
let part = 0
let result = 0
for (i = 0; i < part4.length; i++) {
    if (i % 2 == 0) {
        part = part4[i]
    } else {
        result = result + (part * part4[i])
    }
}
console.log(result)