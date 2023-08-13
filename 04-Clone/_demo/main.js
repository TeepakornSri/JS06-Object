const log = console.log;

let todo = {
    task: 'Do Hw',
    complete: false,
    due_date: '13-08-2023',

};


// !!!### Clone ###!!!

// const newTodo ={}
// วิธีที่ 1
// เอาต้นแบบมา loop แล้ว assign ที่ละ key:value ให้ object ใหม่

// for(let key in todo) { //#############!!!!!!!!!!!
//     // Assign ที่ละ key:value ให้ newTodo

//     newTodo[key] = todo[key];
    // newTodo['task'] = todo['task'] => 'Do Hw'
    // newTodo['complete'] = todo['complete'] => 'false'
    // newTodo['due_date'] = todo['due_date'] => '13-08-2023'
    
// }

// log(newTodo);
// newTodo.complete = true;
// log(newTodo.complete);
// log(todo.complete);





// 2. Object.assign (destination,[src1,src2,src3])
// กรณี key ว่าง merge เข้าด้วยกันจากขวาไปซ้าย ถ้ามี key ซ้ำกัน ขวาจะoverride ทางซ้าย
// เป็นการ merge ยุบรวมเข้าด้วยกัน และ OVERRIDE  แต่มี key ที่ซ้ำกันจะเอาขวาทับซ้าย

// 2A
// const newTodo = {}

// EVAL Direction : RIGHT -> LEFT คือ การ process จาก ขวาไปซ้าย
// Object.assign(newTodo,todo) // retrue address ของ destination 

// 2B
const newTodo = Object.assign({},todo);

log(newTodo);