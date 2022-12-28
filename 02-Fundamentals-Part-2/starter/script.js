'use strict';
// ~~~~~secure code~~~~
// let hasDriversLicense =false
// const passTest=true;
// if(passTest)hasDriverLicense=true;

function logger(){
    console.log("hello");
}
logger()
function fruitProcessor(apples,oranges){
    console.log(apples,oranges);
    const juice= `Juice with ${apples} apples and ${oranges}
    oranges`
    return juice
}
console.log(fruitProcessor(5,0));

// function declaration
// support hoisting !!!!!!!!!!!!
function calcAge1(birthYear){
    return 2037-birthYear
}
const age1=calcAge1(1991)
console.log(age1);


// function expression
// const age2= calcAge2(1992)
// does not support hoisting !!!!!!!!
// const calcAge2= function(birthYear){
//     return 2037-birthYear

// }
// const age2= calcAge2(1992)
// console.log(age2);


// // arrow functions
// const calcAge3 = birthYear => 2037-birthYear
// console.log(calcAge3(1991));

// const yearUntilRetirements= (birthYear, firstName) => {
//     const age= 2037- birthYear;
//     const retirement=65-age
    // return retirement
//     if(retirement>0){
//         return retirement
//     }
//     else
//     return `${firstName} retires in ${retirement} years`
// }
// console.log(yearUntilRetirements(1963,"Prabhat"));
// console.log(yearUntilRetirements(1991,"Prabhat"));


// array

// let arr=['prabhat','harshit','ojesvi']
// console.log(arr);
// array function 
// array is immutable 
// const arr1= new Array(1,2,3)
// console.log(arr1);

// const friends=['prabhat', 'ram', 'mohan','shyam']
// console.log(friends);
// let len=friends.unshift('map')
// console.log(len);
// console.log(friends);
// let add=friends.push('papa')
// console.log(add);
// let rem=friends.shift()
// console.log(rem);
// console.log(friends);

// console.log(friends.indexOf('ram'));

// console.log(friends.includes('ram'));
// console.log(friends.includes('rama'));

// const calcTips= (bill)=>{
//     return bill>=50 && bill<=300 ? bill*0.15:bill*0.2
    
// }
// const bills=[125,555,44]
// const tip=[calcTips(bills[0]),calcTips(bills[1])]
// console.log(tip);
// tip.push(calcTips(bills[2]))
// console.log(tip);

// Object

const jonas={
    firstName:'prabhat',
    lastname:'Mishra',
    age:22,
    job:'Engineer',
    friends:['Harshit','Ojesvi','Harsh'],
    clacAge: birthYear =>2037-birthYear,
    calcAge1:function(birthYear){
        return 2037-birthYear
    }
}
console.log(jonas);

// console.log(jonas.lastname);
// we can put any expression in the bracket notation
console.log(jonas['first'+'Name']);

// const InterestedIn=prompt(`what are you intersted in ? firstName,
// lastName, age, job, friends`)
// console.log(jonas.InterestedIn); jonas has no property interestedIn
// console.log(jonas[InterestedIn]);
// we get undifined when the property is not present in the object
jonas.location='India'
jonas['color']='pink'
console.log(jonas);
console.log(`${jonas.firstName} has ${jonas.friends.length} , and his best 
friend is called ${jonas.friends[1]}`);
