const person = {
    firstName : 'Josh',
    lastName : 'Farley',
    birthyear: 1994,
    job : 'Web Developer',
    friends : ['Mike', 'Jade', 'Brayden'],
    hasDriverLicense: true,
    
    // calcAge: function (birthyear){
    //     return 2037 - birthyear;
    // }

    calcAge: function (){
        this.age = 2020 - this.birthyear;
        return this.age;
    },
    info: function (){
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriverLicense ? "a driver's license": "no driver's license"}`
    }
};

console.log(person.calcAge());


console.log(person.info());