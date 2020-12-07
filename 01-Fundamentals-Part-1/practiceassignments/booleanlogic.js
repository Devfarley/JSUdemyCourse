const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive){
    console.log('sarah should drive')
} else {
    console.log('someone else should drive')
}

const isTired = true;

console.log(hasDriversLicense || hasGoodVision || isTired);