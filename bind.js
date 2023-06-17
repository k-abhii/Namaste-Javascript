// Traditional Bind function How it works

let name ={
    firstname:"Abhimanyu",
    lastname:"Kumar"
}

 let printName = function(hometown,state,country){
    console.log(this.firstname+" "+this.lastname+" ,"+hometown+" ,"+state+", "+country);
 }
 let printMyName = printName.bind(name,"Forbesganj")
 printMyName("Bihar","India");

 /*
 This functionality we have to write bind -> Implementation 
 Every method in JS can access bind method 
 How you will provide access to every JS method to your bind method let say -->mybind()
 Function.prototype u can use for this
 How can you give printName inside your implementation ?
 when we call printMyName2 method printName should be called how u will do ? this variable  keyword --represent printName 
inside mybind function this variable denotes printName function

 */
Function.prototype.mybind = function(...args){
    let obj = this
    params = args.slice(1);
    return function(...args2){
        obj.apply(args[0],[...params, ...args2]);
    }
}

let printMyName2 = printName.mybind(name,"Forbesganj");
printMyName2("Bihar","India");