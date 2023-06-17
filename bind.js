// Traditional Bind function How it works

let name ={
    firstname:"Abhimanyu",
    lastname:"Kumar"
}

 let printName = function(){
    console.log(this.firstname+" "+this.lastname);
 }
 let printMyName = printName.bind(name)
 printMyName();