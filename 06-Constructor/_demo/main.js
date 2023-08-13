
//!!!!####### Constructor Function ######!!!//


const log = console.log;
const dev1 ={
    name: 'john',
    age: 32,
    role: 'dev',
    saraly: 40_000,
    dev: function(){
        console.log('im develop some features');
    },

}


// Object Creators == Contructor Function

function Developer(name,age){
    // this = {}
    this.name = name; // {name:name} => {name:'Pun'}
    this.age = age;// {age:age}=> {age:26} => {name:'Pun',age : 26}
    this.role = 'dev'// {name:'Pun',age : 26, role: "dev"}
    this.saraly = 40_000;// {name:'Pun',age : 26, role: "dev", salraly:40_000}
    this.dev = function () {
        console.log('im develop some features');
    };// {name....., dev : fn()}
}

// Implicit Return this
// return {name...., dev : fn()}
const dev2 = new Developer('Pun', 26);
log(dev2);
const dev3 = new Developer('Tee', 28);
log(dev3);