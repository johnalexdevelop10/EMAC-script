// function newFunction(name, age, country) {
//   var name = name || 'oscar';
//   var age = age || 32;
//   var country = country || 'MX';
//   console.log(name, age, country);
// }

// // es6
// function newFunction2(name = 'oscar', age = 32, country = "MX") {
//   console.log(name, age, country);
// };

// newFunction2();
// newFunction2('Ricardo', '23', 'CO');


// //NOTA: LA FUNCTION ANONIMAS SON LAS ARROWFUNCTION

// const names =[
//   {name: 'Osquita', age: 32},
//   {name: 'Osquita', age: 32}

// ]
//  let listOfNames = names.map(function(item){
// console.log(item.name)
//  })
  
//  //otra version
// let listOfNames2 = names.map(item=> console.log(item.name))


// //clase

// class calcular{
//   constructor(){
//     //scop global se asigna esta 2 variables
//     this.valueA = 0;
//     this.valueB =0;

//   }
//   //METODO
//   sum(valueA,valueB){
//     this.valueA = valueA;
//     this.valueB = valueB;
//     return this.valueA + this.valueB

//   }
// }

const calc = new calcular();
console.log(calc.sum(2,2))

import {hello} from'./module';
hello();


//1
solution([2, 4, 5, 6]);
[4,8,10,12]
function solution(array) {
  return array.map(item=>item*2)
}; 
// let hello = "Hello";
// let world = "World";
// let epicPhrase = hello + ' ' + world;
// console.log(epicPhrase);
// let epicPhrase2 = `${hello} ${world}`;
// console.log(epicPhrase2);

// let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
//   + "otra frase epica que necesitamos."

// // es6
// let lorem2 = `otra frase epica que necesitamos
// ahora es otra frase epica
// `;

// console.log(lorem);
// console.log(lorem2);

// let person = {
//   'name': 'oscar',
//   'age': 32,
//   'country': 'MX'
// }

// console.log(person.name, person.age);

// let { name } = person;
// console.log(name);

// let team1 = ['Oscar', 'Julian', 'Ricardo'];
// let team2 = ['Valeria', 'Yesica', 'Camila'];

// let education = ['David', ...team1, ...team2];

// console.log(education);

// {
//   var globalVar = "Global Var";
// }

// {
//   let globalLet = 'Global Let';
//   console.log(globalLet);
// }

// console.log(globalVar);

// const a = 'b';
// a = 'a';
// console.log(a);
