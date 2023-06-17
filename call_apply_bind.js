let name = {
    firstname:"Abhimanyu",
    lastname :"Kumar",
    printFullName: function(){
        console.log(this.firstname+ " "+this.lastname);
    }
}
name.printFullName();