

logger = () => {
 console.log("My name is Jonas");
}

logger();
// Function Declaration
const calcAge1 = (birthYear) => {
    return 2020 - birthYear;
}

const age1 = calcAge1(1994);
console.log(age1);
// Function Expression
const calcAge2 = function (birthYear) {
    return 2020 - birthYear;
}

const age2 = calcAge2(1994)

console.log(age2)



