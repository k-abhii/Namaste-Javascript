let name = {
    firstname:"Abhimanyu",
    lastname :"Kumar",
    
}

let printFullName =  function(){
    console.log(this.firstname+ " "+this.lastname);
}
printFullName.call(name);

let name2 ={
    firstname: "Sachin",
    lastname: "Tendulkar"
}
// function borrowing --call ()
printFullName.call(name2);

