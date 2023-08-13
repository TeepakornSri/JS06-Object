const user = {
    name: 'John',
    age: 33,
    isMarried: false,
    address: {
        village: 'Ladda Land',
        provice: 'Chiang Mai'
    },

};

//GET DATA
console.log(user.name);
console.log(user['name']);

let a = 'name';
console.log(user.a); // == วิ่งไปหา key a => undifined
console.log(user[a]); // == user['name'] ==> John
// NOTE : เมื่อชื่อ key ถูกเก็บไว้ในตัวแปรต้อง!!!#### ACCESS ผ่าน []  ####!!!

// DELETE

//  delete user.isMarried;
 console.log(user);
//  delete user['age']
 console.log(user);

 let b = 'address';
//  delete user[b];
 console.log(user); 

 // UPDATE

 let x = 5;
 x = x + 2;
 x += 2;
// container = value + 2  ฝั่งซ้ายมองเป็นแค่กล่องเก็บค่าเท่านั้น ด้านขวามองเป็น value

user.age = user.age +1;
user.age += 1;
console.log(user.village);
// container = value + 1

user['age'] = user['age'] + 5;
console.log(user.age);

user['age'] += 5;
console.log(user.age)

user['age']++
console.log(user.age);

// use key varible

let key = 'age';

user[key] = user[key] + 2;
// user['age'] = user['age'] + 5

console.log(user.age);

user[key] += 1;
user[key]++;
console.log(user.age);11


// Critical Point 
// bracket notation ใช้กับคีย์ที่เป็น stiring หรือ ตัวแปรที่เก็บ string
// - for(<key> in <obj>) JS จะ auto reassing key ใหม่ให้ทุกรอบ(string)
// obj[key] = obj[key] + new => container = value + new
