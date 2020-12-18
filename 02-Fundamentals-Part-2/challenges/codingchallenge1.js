
const calcAverage = (a, b, c) => (a+b+c)/3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = (avgDolphin, avgKoala) => {
    
    if (avgDolphin >= 2 * avgKoala){
        console.log('Dolphins win')
    } else if (avgKoala >= 2 * avgDolphin){
        console.log('Koalas win')
    }else {
        console.log('No one wins')
    }
}

checkWinner(scoreDolphins, scoreKoalas)