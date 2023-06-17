// Debouncing in Javascript 
let counter =0;
const getData=()=>{
    // calls an API and gets data 
    console.log("Fetching Data ...",counter++);
}

const debounce = function(fn,d){
    let timer;
    return function(){
        let context = this;
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            getData.apply(context,args)
            
        }, d);
    }
}
let betterFunction = debounce(getData,300); // Once we paused in typing then only API call should me made 
/* Above function make API calls only if between  two keypresses time is more than 300 ms */