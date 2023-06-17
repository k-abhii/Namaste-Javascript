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

 /*
 This functionality we have to write bind -> Implementation 
 Every method in JS can access bind method 
 How you will provide access to every JS method to your bind method let say -->mybind()
 Function.prototype u can use for this
 How can you give printName inside your implementation ?
 when we call printMyName2 method printName should be called how u will do ? this variable  keyword --represent printName 
 
 */
Function.prototype.mybind = function(...args){
    let obj = this
    return function(){
        obj.call(args[0]);
    }
}

let printMyName2 = printName.mybind(name);
printMyName2();