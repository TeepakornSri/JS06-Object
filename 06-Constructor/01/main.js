
function Calculator(x, y) {
    this.read = function() {
        this.x = +prompt('Enter num1');
        this.y = +prompt('Enter num2');
    };
    
    this.sum = function() {
        return this.x + this.y;
    };
    
    this.mul = function() {
        return this.x * this.y;
    };
}

// let cal = new Calculator();
// cal.read();  
// alert(cal.sum()); 
// alert(cal.mul()); 

let cal2 = new Calculator();
cal.read();  
alert(cal.sum()); 
alert(cal.mul()); 