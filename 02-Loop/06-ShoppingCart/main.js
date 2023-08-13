//ทำที่ละอย่าง แบ่งทำป็นข้อย่อยๆก่อน



let log = console.log;
//Sub program-1 : Input
let name = prompt('Enter Product Name');
let quantity = +prompt('Enter quantity');
let price = +prompt('Enter price');
let discount = +prompt('Enter discount') * 1;

//Sub program-2 : CreateObject
// const product = {
// name: name, // name : 'Hermes'
// quantity: quantity, // quantity : 20 
// price: price, // price : 500_000
// discount: discount,// discount : 0.1
// }
//!!## เมื่อไรก็ตามที่ชื่อ key ตรงกับชื่อ value จะสามารถยุบหรือย่อ Syntax (Property shorthand) ได้
const product = {
    name,
    quantity,
    price,
    discount,
};
//Sub program-3 : Calculate Price

// ต้องคิดก่อนว่าฟังกชั่นนี้ต้องการอะไรออกมา ในที่นี้ก็ price 
// price,quantity,discount => TotalPrice
// ถ้า discount 10% ส่วนที่ต้องจ่ายคือ 90%
// discount 0.1 => paid 0.9

//!!!### วิธีปกติ ใช้ได้แต่ยังไม่่ดี
// function calcPrice (price,quantity,discount) {
//     let totalprice = price * quantity * (1 - discount);
//     //          100 * 10 (1-0.1)=> 100(0.9) => 900
//     return totalprice;
// }

// let result = calcPrice(product.price, product.quantity, product.discount);
// log(result);

function calcPrice(productsObj) {
    let price = productsObj.price;
    let quantity = productsObj.quantity
    let discount = productsObj.discount ? product.discount : 0;
    return price * quantity * (1 - discount);
}

let result = calcPrice(product);
log(result);