console.log('Learn Objet')

//DataTypes
//# Primitive : Boolean,Number,String,etc..
//# Non-primitive:Object

/*
###############################
##### Object declaration ######
##############################
*/

//###  {} == Stand for Object หรือ scope
// {record_1 , record_2 , record_3 , .....}
// each record => <key_name>:<value>
                //<Teepa>:<sriaree> <== sri datatype เป็นstring และ 
//<value> สามารถเก็บDatatypeไหนก้ได้ => Any Datatype
// <key_name> ชื่อ key จะมี Datatype เป็น String
// ในแต่ละ record === property (คุณสมบัติ) = = key-value => pair ตัวหน้า : == key หลัง : == value

let user = {
    firstName:'Teepa',
    lastName: 'Sriaree',
    age: 26,
    isAdmin: true,
    'like human': true,
};


/*
###################################
##### ACCESS, MODIFY, DELETE ######
###################################
*/


// Every action NEED <KEY_NAME>!!! 
// Dot Notation <obj>.<key> === <value>
// ไม่สามารถหรือข้อจำกัด คือเข้าถึงkeyที่มีspace ไม่ได้
// ถ้าAccesse และ record นั้นไม่มีอยู่จริง จะได้ค่าเป็น Undifiled


// GET,POLL,READ
// console.log(user);
console.log(user.firstName === 'Teepa');
console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);
console.log(user.isAdmin);
console.log(user["like human"]);



/*
##### MODIFY, DELETE ######
*/

// Systax : <obj>.<key_name> = newValue
user.firstName = 'Teepakorn'; // <=== MODIFY 
user.age = 25;
user.age += 2;
user.age++;
console.log(user.age)


// ADD
// Systax : <obj>.<new_key> = newValue 
user.address = 'BKK';
console.log(user);


// DELETE
// Systax : delete <obj>.<key_name>

delete user.isAdmin;

/*
###################################
##### NESTED Object ######
###################################
*/

const employee = {
    fullname: 'John Doe',
    salary:500_000,
    address: {
        district: 'Phaya Thai',  // <====== Value สามารถเป็ฯ Object ได้
        provice: 'BKK',
        country: 'Thailand',    
    },

};

console.log(employee.salary);
console.log(employee.address.provice); // <=== ถ้าจะเข้าถึงข้อมูลใน Object ใน Object จะต้อง chain . หรือ dot ต่อไปเรื่อยๆ

// Dot ใช้กับ Object เท่านั้น
// ห้ามมม ใช้กับ undefined <undifined>.<key> === ระเบิด
//วิธีแก้ Optional chaining => <undefined>?/<key>
console.log(employee.addr);
// console.log(employee.addr.provice); // <== ขึ้นError ==> -addr.provice ==  undefined.provice เพราะ addr ไม่มีอยู่จริง ค่าจึงเป็น undifined
console.log(employee.addr?.provice); // <== วิธีแก้ไม่ให้ Error แต่ยังเป็น undifined อยู่ ? คือเช็คว่าสามารถไปต่อได้ไหมหรือข้างหน้าเป็น Objectไหม


/*
###################################
##### 4.Check key ######
###################################
*/

const product = {
    id: 227,
    name:'Iphone',
    price: 50_000,
    // discount: 0.05,
};
console.log(product.discount); //undifined

// IN Operator
//Systax : <key_name_string> in <obj>
console.log('name' in product);
console.log('discount' in product);

// method hasOwnProperty
//Syntax :<obj>.hasOwnProerty(<key_name>) => BOOL
console.log(product.hasOwnProperty('name'))
console.log(product.hasOwnProperty('discount'))


/*
###################################
##### 5. Bracket Notation ######
###################################
*/
// 1 ใช้ bracket เมื่อไหร่ ชื่อ key ต้องเป็น string
// 2 ถ้าไม่ใช่ string ต้องเป็นตัวแปรที่เก็บ string // หรือเรียกว่า Computed key
// Access key-value ผ่านชื่อตัวแปรได้

console.log(product.id);
console.log(product['id']);

// console.log(product.is moblie) ==> Crash
console.log(product['is moblie']); //แบบ [] จะใช้เข้าถึงstring ที่มี space ได้

product['name'] = 'iphone-15';
// console.log(product);

let aaaaa = 'name';
console,log(product['name']);
console,log(product[aaaaa]);
console,log(product.aaaaa); // product.aaaaa === product['aaaaa'] === undefined


// short-hand 

let username = 'codecamp'
let age = 20

let user = {
    username,
    age,
}