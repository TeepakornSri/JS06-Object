const TERMINATE = 'stop';
const object = {}
let key;
let value;

do {
    key = prompt('Enter key');
    value = prompt('Enter value');

    if (!isNaN(value) && value != null  ) {
        object[key] = value;
    }
    
} while (value != TERMINATE);

console.log(object);