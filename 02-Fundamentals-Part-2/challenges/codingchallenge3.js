const Mark = {
    firstName: 'Mark',
    lastName: 'Plop',
    fullName: firstName + lastName,
    mass: 78,
    height: 1.69,
    calcBMI: function (){
       this.BMI = this.mass / this.height ** 2;
       return this.BMI;
    }
};

const John = {
    firstName: "John",
    lastName: "Smith",
    fullName: firstName + lastName,
    mass: 92,
    height: 1.95,
    calcBMI: function (){
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
     }
};

