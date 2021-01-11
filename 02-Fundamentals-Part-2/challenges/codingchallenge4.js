const tips = [];
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const total = [];


const calcLoop = () => {
    for (let i = 0; i < bills.length; i++){
        calcTip(bills[i]);
    };
    calcAvg(total);
};

const calcAvg = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    };
    let average = sum / arr.length
    console.log('Average:', average)
};

const calcTip = (bill) => {
        if (bill >= 50 && bill <= 300){
           let tip = bill * .15;
           total.push(tip + bill);
           tips.push(tip);
        }else {
           let tip = bill * .2;
           total.push(tip + bill);
           tips.push(tip);

        };
    console.log("Tips:",tips);
    console.log("Totals:",total);
};






calcLoop();
