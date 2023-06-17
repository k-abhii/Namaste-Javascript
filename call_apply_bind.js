let name = {
    firstname:"Abhimanyu",
    lastname :"Kumar",
    
}

let printFullName =  function(hometown, State){
    console.log(this.firstname+ " "+this.lastname+" From "+ hometown+" , "+State);
}
printFullName.apply(name,["Forbesganj","Bihar"]);

let name2 ={
    firstname: "Sachin",
    lastname: "Tendulkar"
}
// function borrowing --call ()
// call method 1st argument refernce after that you can pass function argument individually in call method argument
// In apply only difference is we have to pass argument in arraylist

printFullName.call(name2,"Mumbai","Maharastra");

// bind --It is a method ,that can be called later, similar to call we pass argument 

let printMyName = printFullName.bind(name,"Forbesganj","Bihar");
console.log(printMyName);
printMyName();
