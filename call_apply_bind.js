let name = {
    firstname:"Abhimanyu",
    lastname :"Kumar",
    printFullName: function(){
        console.log(this.firstname+ " "+this.lastname);
    }
}
name.printFullName();

let name2 ={
    firstname: "Sachin",
    lastname: "Tendulkar"
}
name.printFullName.call(name2);