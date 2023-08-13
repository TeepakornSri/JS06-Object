

let calculator = {
    x: null,
    y: null,
    read(){
    this.x = +prompt('Enter num1')
    this.y = +prompt('Enter num2')
    },
    sum(){
        return this.x + this.y
    },

    mul(){
        return this.x * this.y
    },

  };
  
  
  calculator.read();
  console.log(calculator)
  alert(calculator.sum());
  alert(calculator.mul());