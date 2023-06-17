let multiply = function(x,y){
    console.log(x*y);
}

/* BY BIND METHOD FUNCTION CURRYING */
let multiplyByTwo = multiply.bind(this,2) // setting x=2
multiplyByTwo(3);

let multiplyByThee = multiply.bind(this,3);
multiplyByThee(5);