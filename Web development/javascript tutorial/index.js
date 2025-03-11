/*

console.log(`tomatoes`);
console.log(`potatoes`);

// window.alert(`This is alert box`);
// window.alert(`this is another alert`);
//this is comment method


document.getElementById("heading").textContent = `Hello`;
document.getElementById("para").textContent = "this paragraph";

*/

// make variable by using: let, just declare or const
//let price = 10.99;
//console.log(price);
//console.log(`age is of price ${price}`);
//let online = true; //boolean
//console.log(`is he online? ${online}`);

//can use variables and html together:
// let age= 25;
//document.getElementById("para").textContent = `He is of age ${age}`;

//for operators can put operator behind = sign
//for example: +=, -=, *=, /=, %=, **=, ++, --, etc works in javascript

//User input
// two types: can do window prompt or thru html textbox. Do not use window prompt in real life, use html textbox

//let username
//username = window.prompt("What is username");
//console.log(username);

//from html:
/*
let username;
document.getElementById("submit").onclick = function(){
    username = document.getElementById("Text").value;
    document.getElementById('heading').textContent = `Hello ${username}`;
}
*/

//data conversion

//let age = window.prompt("how old u are?");
//age = Number(age); //this makes string to number
//age+=1;
//console.log(age, typeof age); //typeof is used to check the datatype of variable

//if i try to convert string to number, it will give NaN, meaning Not a Number

//if we want to convert anything to string, we can use String() function
//if we want to convert anything to boolean, we can use Boolean() function
//if i try to convert anything to Boolean, it will return result as true, except for 0, null, undefined, NaN, "", false


//Math is a library
//console.log(Math.PI);
//some of its functions are Math.round, which rounds up the number, 
//Math.floor, which rounds down the number
// Math.ceil, which rounds up the number
// Math.pow, which is power function
// Math.sqrt, which is square root function
// Math.abs, which is absolute function
// Math.min, which is minimum function
// Math.max, which is maximum function
// Math.random, which is random function

//math.trunc is used to remove decimal part of number



//IF statements
/*
if (statement){
    code
}
else if (statement){
    code
}
else{
    code
}
*/


//checked property is used to check if checkbox is checked or not, normally used for forms and stuff
/*
const checkbox = document.getElementById("check");
const visa= document.getElementById("visa");
const paypal = document.getElementById("paypal");
const MC = document.getElementById("MC");
const submit = document.getElementById("btn");
let para = document.getElementById("result");
const card = document.getElementById("card");

submit.onclick = function(){
    if(checkbox.checked == true){
        if(visa.checked){
            para.textContent = "You subbed to Visa";
        }
        else if (paypal.checked){
            para.textContent = "you are subscribed to paypal";
        }
        else if(MC.checked){
            para.textContent = "you are subscribed to Mastercard";
        }
        else{
            para.textContent = "no card";
        }

    }
    else{
        para.textContent = "unsubscribed";
    }
}

*/

//ternary operator
//syntax: condition? if code: else code2
/*let age=21;
age>=18? console.log("you are an adult"): console.log("you are a minor"); */
//if age is greater than 18, then adult, else minor, helps u make code shorter and shortcut for if else statements

//lets u make variables if condition is met. so can do:
//let message = age >=18? "you are an adult": "you are a minor";

/*
let price = window.prompt("enter number");
let discount = price >=100? 0.1:0.05;
let final = price - (discount * price); 
console.log(`final price is ${Math.trunc(final)}`);
*/


//switch statement is just case statements
/*
let day = window.prompt("enter day");
switch(Number(day)){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("jummah");
        break;
    case 6 | 7:
        console.log("weekend");
        break;
    default:
        console.log("invalid day");
        break;
}
*/

//string methods: so ew
//let username = "Niwatori";
//username.indexOf("a"); //this gives index of a
//username.lastIndexOf("a"); //this gives last index of a
//username.charAt(3); //this gives character at index 3
//username.length; //this gives length of string
//username.toUpperCase(); //this makes string uppercase
//username.toLowerCase(); //this makes string lowercase
//username.trim(); //this removes whitespace from string
//username.replace("Niwatori", "Niwatori2"); //this replaces string with another string
//username.replaceAll("i", "a"); //this replaces all i with a
//username.startsWith("N"); //this checks if string starts with N
//username.endsWith("i"); //this checks if string ends with i
//username.split("a"); //this splits string into array
//username.padStart(10, "a"); //this pads string with a at start
//also has padEnd


//string slicing: //username.slice(1,4); //this gives slice of string
//usage can be like:

/*
const fullname = "Niwatori oof";
let firstName = fullname.slice(0, fullname.indexOf(" "));
let lastname = fullname.slice(fullname.indexPf(" ")+1); //no need tospecify end index, it will go to end of string
*/

//practice code cuz this is wack:
/*
let email= window.prompt(`enter email`);
let username = email.slice(0,email.indexOf("@"));
let domain = email.slice(email.indexOf("@")+1,email.indexOf("."));
console.log(`username is ${username} and domain is ${domain}`);
*/

//method chaining
//so u can chain different techniques together
//e.g., look at this code:
/*
let username = window.prompt("Enter username");
username = username.trim();
let letter = username.charAt(0)
letter = letter.toUpperCase();

let extra = username.slice(1);
extra = extra.toLowerCase();

username= letter + extra;
console.log(username); */

//can all be done with just:
//let username = window.prompt("Enter username");
//username = username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase();
//console.log(username);

// Logical operators:
// &&, ||, ! are logical operators
// && is and, || is or, ! is not

//equality operators
// == is assignment
// === is strict equality, which checks for both value and datatype
// have same for != and !==


//while loops, just like if statement
/*
while (condition){
    code;
}
*/

//for a repeat loop, can do do while loop:
/*
let username;
do {
    username = window.prompt("Enter username");
} while (username === "" || username === null);
console.log(username);
*/

//for loop DO NOT MAKE i = 10, CUZ THAT WILL BREAK THE LAPTOP
/*
for(let i = 0; i<=10; i++){
    console.log(i);
}
Note: can use break to stop a loop, or continue to stop a loop    
*/

//functions
/*
function happyBirthday(age){
    console.log("oof");
    return age;
}
ans = happyBirthday(25);

for global variables, can use var, but for local variables, use let, and for global variables just declare them outside of function, inside of function is local
*/

//arrays
//let fruits = ["apple", "banana", "orange"];
//console.log(fruits[0]); itll just say undefined if u reference incorrect index
//you can add to the array by just doing fruits[3] = "grape";
//or: fruits.push("grape"); and also have fruits.pop();

//to add to start of the array, use fruits.unshift("grape");
//to remove from start of array, use fruits.shift();
// can remove from the middle using fruits.splice(1,1); its in the form array.splice(index, how many elements to remove);
//fruits.length
//fruits.indexOf(element);

//can sort array through fruits.sort(), for string will do alphabeticallly. To reverse the order just use fruits.sort().reverse();

//spread operator 
//so the spread operator basically just separates the elements in a string or an array:
// basically just use ... behind a word to make it use the separator thingy
//e.g.: let x = 'niwatori';
//let y = [...x]; //this will make y = ['n','i','w','a','t','o','r','i'];
//for an array it splits the elemnts of the array


//rest parameter
//just opposite of the spread operator, but used as a parameter
//so say u have lots of parameters, u can use ... to make them all into an array
/*e.g:
const food= "pizza";
const food2 = "burger";
const food3 = "fries";

function getFood(..foods){
    console.log(foods);
}
    over here, foods is: ["pizza", "burger", "fries"];
*/

//call back
//so java does this thing where it can run junk simultaneously and not in sequence
//for example if i have two functions: Hello and Goodbye, and Hello has a delay function, even if I run hello then goodbye, its gonna run goodbye first.
//like for example: 
/*
Hello();
Goodbe();
This will run goodbye first then hello cuz hello has delay time function and takes longer.


So to create sequence u have callbacks, where u basically run the function in another function. This is how:


Goodbye(callback){
    code code
    return(callback)
}

so when you call Goodbye(), just do:
variable = Goodbye(Hello), when u call Hello inside goodbye DO NOT USE BRACKETS 
*/

//forEach()
//this function lets u loop thru each item in an array and apply a function through it. So like, say i have  an array: numbers = [1,2,3,4,5,6,7].
//if i have a display(element) function, I can do:
//numbers.forEach(display);
//this will do the display function for each element in my array
//if i have a function actively affecting the array, then we use this:

/*
numbers = [1,2,3,4,5]
function double(element, index , array)- u have to have index and array for the actual stuff itself
{
    array[index]= element * 2;    
}

now if I have: numbers.forEach(double);
it will double every item in the numbers array
*/


//.map() is the same thing as forEach(), but it returns a new array instead of editing the original array e.g.
//const numbers = [1,2,3,4,5];
//const squares = numbers.map(squareNumbers);

//.filter() = creates new array by filtering out elements
//it returns values which come out true and keeps them in

/*
let numbers = [1,2,3,4,5,6,7];
let even = numbers.filter(evens);

console.log(even);

function evens(element){
    return element % 2 === 1;
}
*/

//reduce method- .reduce()
//reduces elements to a single value (like to group values tgt)

/*
const prices = [5,20,30,5];
const total = prices.reduce(sum);

console.log(total);

function sum(accumulator, element){
    return accumulator + element;
}
*/

//the way it works is it goes through previous index and then next index, and like for loops thru the entire thing yo


//function expressions: define functions as values or variables
// so you can define functions as values and variables so that u can use them as entire parameters in another function
//U CAN PASS ENTIRE FUNCTIONS BRUH INSIDE FUNCTIONS

/*
const numbers = [1,2,3,4,5];
const squares = numbers.map(function(element){
    return element**2;
});

console.log(squares);
*/


//arrow functions = quick way to write function expressions, for simple functions u only use once

//const hello = (name) => console.log(`Hello ${name}`);
//hello('Oofers');

//if you want multiple lines of code in arrow functions:
/*
const hello = (name,age) => {console.log(`oof ${name}`)
                            console.log(`very oof ${age}`)};
hello("Oof",15);
*/




//objects and methods (beware commas, not ; )

/*
const person = {
    name: 'mimi',
    age: 27,
    sayhi: function(name){console.log(`Hello ${name}`)},
}

person.sayhi(person.name);
*/



//this = reference object in immediate context
/*
const person = {
    name: 'Bob',
    favfood: 'burgers',
    sayhi: function(){console.log(`sup ${this.name}`)},
}
person.sayhi();

*/


//constructor is a function to automatically make objects using OOP. to do it, u have to just make a function that allows parameters per properties of the object:
/*
function Car(make,model,year){
    this.make = make,
    this.model = model,
    this.year = year
}

const car1= new Car("ferrari","s26","1998");
console.log(car1.make);
*/




//classes- more structured way to work with objects and stuff, basically ur making ur own datatype

/*
class Product{
    constructor(name,price){ //constructor
        this.name = name;
        this.price = price;
    }

    display(){ //methods
        console.log(`Product is ${this.name}`);
        console.log(`Product Price is ${this.price}`);
    }
}

const product1 = new Product('shirt',204);

product1.display();
*/




//static keyword- defines properties or methods that belong to the class itself, not the actual objects in the class. Class owns it, object does not

/*
class util{
    static pi= 3.14159265; //so our Pi is just for the class itself, can also have static methods and stuff

    static diameter(radius){
        return radius*2;
    }

}
console.log(util.pi);
console.log (util.diameter(25));


//YOU CAN COUNT HOW MANY OBJECTS THERE ARE VIA THIS BRUHHHHH

class User{
    static count=0;

    constructor(username){
        this.user=username;
        User.count++; //this increments everytime i have new users
    }
}
const user1=new User('oofers');
const user2=new User('mega oofers');
console.log(User.count);
*/




//inheritance: allows new class to get properties and methods from a previous class (parent-child relationship)

//use extends to do inheritance

/*
class Animal{
    alive = true;

    eat(food){
        console.log(`${this.name} has eaten ${food}`);
    }
}

class Rabbit extends Animal{
     name = `Rabbit`;
}

class Hawk extends Animal{
    name = `Hawk`;
}

const rabbit = new Rabbit();
const hawk = new Hawk()
rabbit.eat(hawk.name);
*/




//super - keyword that allows us to call the parent (superclass) of an object
//its like using "this...." but u use super instead. e.g.:
//Note: u call super to basically call that class into that method or object

/*
class User{
    static count=0;
    exists=true;
}

class adult extends User{
    constructor(name){
        super();    // <----- call super here so i can work with static content
        User.count++;
        this.name = name;
    }
}

const person = new adult(`oofers`);
console.log(User.count);

//if you want to reference a superclass' method, do:

super.method();


//can also just use it for constructors for similar properties:
class Animal{
    constructor(name,height){
        this.name=name;
        this.height=height;
    }
}
class Fish extends Animal{
    constructor(name,height,speed){
        super(name,height);
        this.swimspeed = speed;
    }
}

const fishy= new Fish("dory",19.9,32);
console.log(fishy.name);
*/

//getters and setters
//these are stuff to solidify the internals of a class/object
//they allow u to use _property, which are private properties
//what does this do? Basically it stops classes and objects from being externally controlled
//you also can set rules for what can be input and output


class rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }

    set width(newWidth){
        if (newWidth>0){
            this._width= newWidth; //this _width makes it private, so u can privately work with the class without others interfering with it in code
        }
        else{
            console.error('enter a positive number bruh');
        }
    }

    set height(newHeight){
        if (newHeight>0){
            this._height = newHeight; //this blocks properties from being assigned until these conditions are met
        }
        else{
            console.error('enter a positive number bruh');
        }
    }

    //to get stuff privately set using _property, u need getter
    get width(){
        return `${this._width.toFixed(1)}cm`; // what this does is whenever i do any object.width, it wont give me the width property itll only give me this string
    }

    get height(){
        return this._width;
    }
    //^^^^^ the above two are properties
}



//destructuring = extract values from arrays and objects, then assign to variable
//[] for arrays
//{} for objects
//basically what u got is the ability to take multiple parts of an array at once, rly helpful, e.g.:

let x = 1;
let y = 2;

[x,y] = [y,x] //first brackets = destructure.  second brackets = assignt to array

console.log(x);
console.log(y); 

//can also be used for assigning elements. for example:
let numbers = [1,2,3,4,5,6,7];
let [firstn,secondn,thirdn,...extra]=numbers; //over here firstn holds 1, secondn holds 2, thirdn holds 3 and ...extra holds the rest of the characters


//for objects, you can destruct them into their individual properties. e.g.:

const person = {
    name: "Niwa",
    password: "Tomato 23",
    age: 19,
}

//to separatly call each property: (if i have an undefined property, i can define it there in the brackets)
const {name,password,age,job='unemployed'} = person;
console.log(name);
console.log(job); 

//where to use this? Can destructure in function parameters:

function display({name,password,age}){
    console.log(name);
    console.log(password);
    console.log(age);
}
display(person);




//Nested objects-where u have an object in an object
//e.g. shoppingCart{Mouse{},keyboard{},monitor{}}
//to call stuff:
const people={
    name: 'potato',
    address: {
        country:"Canada",
        city:"toronto",
        place: "the collegeway"
    }
}
console.log(people.address.place);

//better usage as per example:
class Person{
    constructor(name,age,...address){
        this.name=name;
        this.age=age;
        this.address = new Address(...address);
    }
}
class Address{
    constructor(country,city,place){
        this.country=country;
        this.city=city;
        this.place=place;
    }
}

const person1 = new Person("niwa", '19', 'Canada','Toronto','Collegeway')
console.log(person1.address.place);






//Arrays of objects, where u have array of type: object
//you can make arrats of objects as follows:
const fruits =[{name:'apple',color: 'red',price:29},
                {name:'banana',color:'yellow',price:19},
                {name:'tomato',color:'red',price:30}]
console.log(fruits[0].price);





//.sort() function- basically sorts everything, but as a string, or character by character. but it sorts it at least.  
//e.g.
let frts=['apple','banana','tomato','kiwi','pear']
console.log(frts.sort());

//but for numbers, if i store 10, it sees 10 as 1 and then 0
//e.g.:
let nmbr=[1,2,10,3,4,40];
console.log(nmbr.sort());
//sorts to: 1,10,2,3,4,40
//to make it numerically sort
//This function uses merge sort and compares, if it gets negative it knows  b>a, if positive a>b


//Date objects: objects that  have date and time

//works as: Date(year,month,day,hour,minute,second,ms) Jan starts from 0 btw

const date =new Date(); //current time
console.log(date);

const date2= new Date(2024,0,1,2,3,4,5); //setting ur own time
console.log(date2);

const date3= new Date("2024-01-01T12:00:00z"); //z for utc time
console.log(date3)

const year = date.getFullYear();
const month = date.getMonth();

//to set dates can also do:
date.setFullYear(2025);
date.setMonth(0);
date.setDate(1);//day
date.setHours(2);
date.setMinutes(3);
date.setSeconds(4);



//Closure- function defined inside another function. the child function has access to variables and scope of outer functionl used for private variables and state maintenance

//e.g.

function outer(){
    let message='hello';
    function inner(){
        console.log('hello');
    }
    inner();
}
outer();


//so, we can use closures kinda like classes, so we can keep variabes inside them private but we can also maintain their state. e.g.:
function counter(){
    let count=0;
    count++;
}
//everytime i call the function it will make the count back to 0 again. the reason its inside the function is so that it can stay private and cant  be altered from the outside.

//now, what we can do to make sure it doesnt keep resetting to 0 is:

function setCount(){
    let counte = 0;
    function increase(){
        counte++;
        console.log(`count increased to ${counte}`);
    }

    function getCount(){ //we need this cuz we have 
        return counte;
    }
    return {increase,getCount}; //this returns as an object
}

const countey= setCount(); //this makes counter an object with the increase and getCount properties, cuz thats whats being returned

countey.increase();
countey.increase();
console.log(`Counter is ${countey.getCount()}`);
//keeps count private and manages its state, so sugoi




//setTimeout() is just time.sleep


//ES6 Module is like a library, external file that contains reusable code which can be imported into oteher JS files

import {pi,circumference,area,volume} from './modulepractice.js'

console.log(pi);
let radius = 24;
console.log(circumference(radius).toFixed(2));





// synchronous and async programming

//so sync programming is line by line in sequence
//async coding is when multiple operations done at once without having to wait, so input output operations, all that junk, u dont have to wait. process include:

//I/O operations, network requests and fetching data, but handled with stuff like callbacks, Promises, Async/Await
//basically with anything that takes time u use async

//example of async:
/*
setTimeout(()=>console.log('Task 1'),3000); //this prints last

console.log('Task 2');
console.log('Task 3');
console.log('terminate ------')

//to control this, use callbacks:
function func1(callback){
    setTimeout(()=>{console.log('Task 1');callback()},3000);
    
}

function func2(){
    console.log('Task 2');
    console.log('Task 3');
    console.log('terminate------')
}

func1(func2);
*/




//Error handling: what to do when there is an error, mainly security, input and network errors
//try{} - encloses trial code
//catch{} - catch and handle errors
//finally{} - not necessary code, but its used for finishing touches. this code always run and is used to close files, cloe connections etc.
//e.g.
try{
    const numerator = Number(27);
    const divisor = Number(0);

    if (divisor == 0){
        throw new Error("You cant divide by 0"); //how to make ur own new errors
    }

    if (isNaN(divisor) || isNaN(numerator)){
        throw new Error("You need to have numbers for the values") //for if there was an input, and u surround smth with Number(string) = NaN
    } 
}
catch(error){
    console.log('there is an error:');
    console.log(error);
}
finally{
    console.log('done');
}




//DOM- document object model
/* So, turns out that every webpage is just an object. uk how we do document.getElementById? thats just a method of the document object

the document object has everything in the document as its properties.

so for example, if i wanna change the background color of the webpage, i just need to do

document.body.style.backgroundColor = "hsl(0,0%,15%)";

this makes the entire background color black. so u can basically html in js, for stuff like make dark mode and stuff lol
*/



//element selectors- to get elements in HTML from the DOM

//1. document.getElementById, alr know this- returns Element or Null
const heading = document.getElementById("heading");
heading.style.backgroundColor ='yellow'; //styling uses camelCase

//2. document.getElementsClassName();
const test=document.getElementsByClassName("test");
//treats items as array for values with class name, e.g.
//test[0].style.backgroundColor="blue";
//lacks some array methods like forEach


//to make all of them green  or something, can do this instead of for loop

Array.from(test).forEach(test => {test.style.backgroundColor="lightgreen";});


//3. document.querySelector() - this searches the document for whats in the brackets and i f it finds stuff then it will set it to a variable that u assign to or it returns null
//returns first element it finds btw

//btw for a class, use .[classname], for id use #
const element = document.querySelector("#para");
element.textContent = 'oof';
element.style.backgroundColor = "red";

//4. querySelectorAll() - like querySelector but uses an array, just like getElementsClassName
//this time has array methods like a normal person

const paras = document.querySelector("p");
paras.style.fontSize="2rem";


//DOM navigation
//basically to navigate between child elements of a div or something in html, basically to go between different stuff in html. There is a few:
// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

/*
so basically to help you navigate between different elements inside a div or something, u use these values:
like say u have something like:
<div id = 'container'>
    <h1 id='first'>oof<h1>
    <h1 id = 'second' >oof2<h1>
</div>

oof = container.firstElementChild
oof2 = container.lastElementChild

oof2 = getElementById('first').nextElementSibling
oof = getElementById('second').nextElementSibling

*/




