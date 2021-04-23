//********** Let And Const ********** //

const name = 'sonal';
// // var keyword
// function checkvar()
// {
// var x = 10;
// if(true){
//     var x = 20;
//     console.log(x);
// }
// console.log(x);
// }
// checkvar()

// Let keyword
function checklet() {
    let x = 10;
    if (x == 10) {
        let x = 20;
        console.log(x);
    }
    console.log(x);
}
checklet()
//name='pipaliya';
console.log(name);

let FirstName = "Sonal";
let LastName = "Rakholiya";

//********** Template Literlas ********** //

//Normal Script
console.log("My First Name is " + FirstName + ". My last Name is " + LastName + ".");
//Es6 Script
console.log(`My First Name is ${FirstName}. My Last Name is ${LastName}`);

// Add Expression 

let a = 20;
let b = 30;

console.log("Sum of a and b is \n" + (a + b));
console.log(`Sum of a and b is
${(a + b)}`);


//********** Template Literlas Strings Methods ********** //
const FName = `${FirstName}`;
const FullName = `${FirstName}${LastName} `;
console.log(FName.startsWith("s"));
console.log(FName.endsWith("l"));
console.log(FName.includes("on"));
console.log(FullName.repeat(12));


//********** Array Destructing ********** //
//Es5
const MyLng = ["Java", "PHP", ".Net", "python", "javascript"];
// var top1=MyLng[0];
// var top2 =MyLng[1];
// var top3=MyLng[2];

// console.log("My Frvrt Lng " + top1);

//ES6
// let [top1,top2,top3,top4,top5]=MyLng;
// console.log(`My frvrt Lng ${top1}`);

// let [top1,,,,topLast]=MyLng;
// console.log(`My frvrt Lng ${topLast}`);

let top1, top2;
[top1, top2] = MyLng;
console.log(`My frvrt Lng ${top1}`);

//********** JavaScript Program to Swap Two Numbers without using Third Variable ********** //
let x = 15;
let y = 20;

// let temp=x;
// x=y;
// y=temp;

[x, y] = [y, x];
console.log(`value of X is ${x}.
value of Y is ${y}.`);

//********** Object Destructuring ********** //

const biodatas = {
    name: "Sonal",
    age: 26,
    deg: "Bsc(IT)",
    hobb: {
        first: "Traveling",
        second: "Programming"
    }
}
let { name: mynames, age, deg, hobb } = biodatas
console.log(`My Name is ${name} age is ${age} my qualification is ${deg}.my hobby is ${hobb.second}`);

//********** Arrow Functions ********** //

// const sum = () => {
//     return x+y;
// }
const sum = () => x + y;
const sum1 = (z) => x + y + z;
console.log(sum());
console.log(sum1(50));

//********** Default Parameters ********** //

const mul = (a, b = 4) => {
    console.log(`Multipication of Numbers is : ${a * b}`)
}
mul(4);

//********** Rest Parameters ********** //

function Sum(...inputs) {
    console.log(...inputs);
    let tot = 0;

    for (let i of inputs) {
        tot += i;
    }
    console.log(tot);
}
Sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function FuncRest(a,b,...c){
    console.log(`${a} ${b}`);
    console.log(c);
    console.log(c[0]);
    console.log(c.length);
    console.log(c.indexOf("Edan"));

}
FuncRest("Ronaldo","naymar","Pele","Messi","Edan");

//********** Spread Parameters ********** //

let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = [7,8,9]

//arr1=arr1.concat(arr2);
arr1=[...arr1,...arr2,...arr3];

console.log(arr1);


let arrc = [...arr1,4,5,...arr3,10];
console.log(arrc);
console.log(arr1);

//********** JavaScript Word Scramble Game | Guess The Word Game in JavaScript ********** //
//‪D:\Sonal\ScrambleWord\ScrambleGame.html

// Math Object in JavaScript | Math.sign(), Math.trunc() 
