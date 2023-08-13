const log = console.log;

//!!### Method and this keyword ###!!!//



//###########!!! 1. Intro Method ##########!!!////

// object === Collection of property and/or method
//Each record => called property
//Each property=> <key>:<value>

//some record => <key>:<FN>
//called method == ความสามารถของ object

function devwebsit() {
    console.log("I'm wording")
}
function meeting() {
    console.log("I'm meeting")
}
function sleeping() {
    console.log("I'm sleeping")
}

// const programmer = {
//     name: 'Tee', //==> called propertty
//     age: 26,//==> called propertty
//     dev: devwebsit, //==> called method
//     //total 2 property 1 method
//     meet: meeting,
//     sleep: sleeping,
// };

//property
// log(programmer.name);
// log(programmer.age);


//method == ความสามารถของ Object
//Syntax : <obj>.<method>()
// programmer.dev(); //===> ต้องใส่call fn == ()
// programmer.meet()
// programmer.sleep()


//####!!!! 2. Alternative Syntax ######!!!!//


// method สามารถเก็บfnที่ไม่มีชื่อได้

// let name = 'jonh'
// let age = 30
// const programmer = {

//     // property shorthand
//     name,
//     age,
//     dev: function () {
//         console.log("I'm working")
//     },
//     meet: () => console.log("I'm meeting"),

//     // เรียกว่า Method shorthand
//     sleep() {
//         console.log("I'm sleeping")
//     }
// }

//Mimi-lab
//สร้าง Object ของตัวเอง
//ระบุคุณสมบัติของตัวเอง 2-3ข้อ
// ระบุความสามารถของตัวเอง 4 ข้อ (cover ทุก syntax)
// key :namedfunction
//key : anonymos fn
//key : arrowFN
//key : shorthand


let name = 'Pun';
let age = 26;
let gender = 'male';

const me = {
    name,
    age,
    gender,

    work: function working() { // key :namedfunction
        console.log('Working')
    },

    eat: function () { //key : anonymos fn
        console.log(console.log('eating'))
    },

    sleep: (time) => { console.log(`I'm sleeping ${time}`) }, //key : arrowFN


    focus() {
        console.log('focus mode') //key : shorthand
    },

}
//!!!#### สามารถใส่ค่าparameterเข้าไปในFNได้ ####!!!///


me.work();
me.eat();
me.sleep('allthetime'); // ===> OOP : Object Oriented Program



// #########################
// ########### 3. Intro OOP
// #########################

// OOP : Object Oriented Program

// const car = {
//     brand: 'Tesla',
//     model: 'X',
//     speed: 80,
//     drive: () => console.log('Driving'),
//     'auto pilot': () => console.log('Self Driving'),
// };

// log(car.brand, car.model);

// // Caller.Method
// car.drive();
// car['auto pilot']();

// const calculator = {
//     sum: (x, y) => x + y,
//     minus: (x, y) => x - y,
// };

// let r1 = calculator.sum(5, 7);
// let r2 = calculator.minus(7, 3);
// log(r1, r2);

// log(car.speed);
// car.speed = calculator.sum(car.speed, 20);
// log(car.speed);





//#######!!!!!!! 4. This keyword #######!!!!!!//

// JS keyword : if,else,for,while,do,switch,this
//Questtion : ทำอย่างไร method จะสามารถเข้าถึง property ของตัวเองได้ ==> ใช้ this

// const user = {
//     name: 'codecamp',
//     age: 15,
//     sayHi: function(){
//         console.log(`Hello ${this.name}`);
//     },
//     growold: function (){
//         console.log(this); //this == user , this.age == user.age
//         this.age++;

//     },
// };


// // user.sayHi();
// // user.name = 'software park';
// // user.sayHi();

// log(user.age);
// user.growold();
// log(user.age);

// //  Q : this ถูก Solve ตัั้งแค่ตอนที่เขียน function หรือไม่
// // A : NO
// function dev (feature) {
//     console.log(`${feature} feature developed by ${this.name}`)
// }

// const programmer1 = {
//     name: 'john',
//     develop: dev,
// }
// const programmer2 = {
//     name: 'jane',
//     develop: dev,
// }

// //this ถูก solve ตอนเรียกใช้ Method
// // Caller.method => this == caller == object before the dot 

// // Checkpoint-1 : this == object ที่เรียกใช้  method
// programmer1.develop('Login')
// programmer2.develop('Register')


// #####!!!!!  5. Execution Context == Caller #####!!!!!///

//Global (Brower) : window object

//window.alert("I'm am Global!!!");
// this.alert("iam Global this");
//alert("I'am execute in window");


//FN Declaration จะทำ sayHi ไปติดใน windowObj
// Hoisting
function sayHi() {
    console.log(this); // window
}

//Execute Context = Window
window.sayHi();
this.sayHi();
sayHi();

// Function Context
var names = 'codecamp'
function sayHello() {
    console.log(this.names);
}

// Window Caller
sayHello();

const user = {
    name: 'john',
    say: sayHello,
    scream: () => {
        console.log(`scream by ${this.name}`) // #########!!!!! Arrow ไม่มีความสามาถสร้าง Context ==> loose Context ==> Chain to window (ไปหาอันที่ใหญ่กว่า) สรุป อย่าใช้ this กับ arrow FN!!!!
    },
};

// user Caller
user.say();

user.scream();

//this == Object Caller สรุปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปปป