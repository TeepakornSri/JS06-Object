const log = console.log

// Copied by value
// Copied by Reference


// Primitive

// Copied by value
let massage = 'Hello'
let word = massage;

log(massage);
log(word);

massage = 'Hi';
log(massage);
log(word);

// OBJECT
let user = {  // user ไม่ได้เก็บค่าหรือ value ของ OBJECT ไว้ แต่!!!####เป็นการเก็บที่อยู่(ADDRESS)ของOBJECT###!!!!
    name: 'john',
}

// *** กำลังCOPY
// COPIED BY REFERENCE
//ASSIGN Adress ของ user ให้กับ employee 
let employee = user;
log(employee);

user.name = 'joe';
log(user);
log(employee);

