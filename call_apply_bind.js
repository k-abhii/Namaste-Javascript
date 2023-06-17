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

