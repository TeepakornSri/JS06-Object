function Accumulator(startingValue) {
    this.currentValue = startingValue
    this.input = +prompt('EnterNum')
    this.read = function(){
        this.currentValue += this.input
    this.show = function(){
        alert(this.currentValue)
    }
    }
}

let accumulator = new Accumulator(20);
accumulator.read(); 
accumulator.show(); 