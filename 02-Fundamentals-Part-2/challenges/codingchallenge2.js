const tips = [];
const bills = [125, 555, 44];
const total = [];

const calcTip = () => {
    bills.forEach(element => {
        if (element >= 50 && element <= 300){
           let tip = element * .15;
           total.push(tip + element);
           tips.push(tip);
        }else {
           let tip = element * .2;
           total.push(tip + element);
           tips.push(tip);

        }
    });
    console.log(tips);
    console.log(total);
}

calcTip();

