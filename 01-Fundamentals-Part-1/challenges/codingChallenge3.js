let dolphinsAvg = (96 + 108 + 89) / 3
let koalasAvg = (88 + 91 + 110) / 3

console.log("Dolphins:",dolphinsAvg)
console.log("Koalas:", koalasAvg)

if (dolphinsAvg > koalasAvg) {
    console.log("Dolphins WIN!")
} else if (koalasAvg > dolphinsAvg) {
    console.log("Koalas WIN!")
}else if (dolphinsAvg === koalasAvg){
    console.log("Its a TIE!")
}

let dolphinsAvg2 = (97 + 112 + 101) / 3
let koalasAvg2 = (109 + 95 + 106) / 3

console.log("Dolphins2:", dolphinsAvg2)
console.log("Koalas2:" , koalasAvg2)

if (dolphinsAvg2 > koalasAvg2 && dolphinsAvg2 >= 100) {
    console.log("Dolphins WIN!")
} else if (koalasAvg2 > dolphinsAvg2 && koalasAvg2 >= 100) {
    console.log("Koalas WIN!")
}else if (dolphinsAvg2 === koalasAvg2 && dolphinsAvg2 >= 100 && koalasAvg2 >= 100){
    console.log("Its a TIE!")
}