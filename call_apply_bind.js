let name = {
    firstname:"Abhimanyu",
    lastname :"Kumar",
    
}

let printFullName =  function(hometown, State){
    console.log(this.firstname+ " "+this.lastname+" From "+ hometown+" , "+State);
}
printFullName.call(name,"Forbesganj","Bihar");

let name2 ={
    firstname: "Sachin",
    lastname: "Tendulkar"
}
// function borrowing --call ()
printFullName.call(name2,"Mumbai","Maharastra");

