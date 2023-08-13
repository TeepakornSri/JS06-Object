const user = {
    fisrtName: 'codecamp',
    lastName: 'SSP',
    age: 15,

};

// For IN : Loop through Object
// for (let <key_varible> in <obj>){}

for (let key_varible in user){
    console.log(key_varible); // auto dynamics assign by JS in <string>
    // 1st let key_varible = "fisrtname"
    // 2nd let key_varible = "lastName"
    // 3rd let key_varible = "age"

    console.log(user[key_varible]); // need to access by bracket , computed key
    // 1st : user[key] == user['firstname'] ==> codecamp
    // 2nd : user[key] == user['lastName'] ==> SSP
    // 3rd : user[key] == user['age'] ==> 15

    // console.log(user.key); //แบบผิด
    //  //1st : user.key == user['key'] ==> undifined
    // // 2nd : user.key == user['key'] ==> undifined
    // // 3rd : user.key == user['key'] ==> undifined

} 

// 'firstName' in user; // true
// 'age' in user; // true