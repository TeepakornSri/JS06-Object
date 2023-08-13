const multiplyNumeric = (object,num) => {
    for(let key in object) {
        // console.log(key)
        let value = object[key];
       if (typeof value === 'number'){
        // console.log(value, num);
        // update value
        // object[key] = object[key] * num
        // object[key] = value * num
        object[key] *= num
        // menu['width'] = 200 * 3
        // menu['height'] = 300 * 3
       }
    }
};

let menu = {
    width: 200,
    height: 300,
    title: 'My menu',
};

multiplyNumeric(menu,10);
console.log(menu)



