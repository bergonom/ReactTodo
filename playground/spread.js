// function add(a,b) {
//   return a + b;
// }
//
// console.log(add(3,1));
// console.log(add(...[9,2]));
//
// var groupA = ['jen', 'cory'];
// var groupB = ['vik'];
// var final = [3, ...groupA];
// console.log(final);

var person = ['Andrew', 26];
var personTwo = ['jojo', 22];
// Hi Andrew, you are 26

function printHi(name, age) {
  console.log("Hi",name,"you are",age);
}

printHi(...person);
printHi(...personTwo);

var name = ['mike', 'ben'];
var final = ['jojo', ...name];
final.forEach((name) => {
  console.log("hi " + name)
});
