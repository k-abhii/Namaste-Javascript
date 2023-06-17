let name = {
    firstname:"Abhimanyu",
    lastname :"Kumar",
    
}

let printFullName =  function(hometown){
    console.log(this.firstname+ " "+this.lastname+" From "+ hometown);
}
printFullName.call(name,"Forbesganj");

let name2 ={
    firstname: "Sachin",
    lastname: "Tendulkar"
}
// function borrowing --call ()
printFullName.call(name2,"Mumbai");

