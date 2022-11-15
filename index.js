'use strict';
const mark = {
    fullName : 'Mark Miller',
    mass : 78,
    height : 1.69,

     calBMI : function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
     }
};
const john = {
    fullName : 'John Smith',
    mass : 92,
    height : 1.95,

    calBMI : function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }

};
mark.calBMI();
console.log(mark.bmi);
john.calBMI();
console.log(john.bmi);

if(mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
}else if(john.bmi > mark.bmi){
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}