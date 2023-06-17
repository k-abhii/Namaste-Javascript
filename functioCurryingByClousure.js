let multiply = function(x){
    return function(y){
        console.log(x*y);
    }
}
let multiplyByTwo = multiply(2);
multiplyByTwo(3);

let multiplyByThee = multiply(3);
multiplyByThee(10);

/*
It is a technique in functional programming, that transforms the function of multiple arguments
 into several functions of a single argument in sequence. 

 We simply wrap a function inside a function, which means we are going to return a function from another
  function to obtain this kind of translation. The parent function takes the first provided argument and 
  returns the function that takes the next argument and this keeps on repeating till the number of arguments ends. 
  Hopefully, the function that receives the last argument returns the expected result.  

Note: An American mathematician named Haskell Curry developed this technique, that’s why it is called currying.
*/