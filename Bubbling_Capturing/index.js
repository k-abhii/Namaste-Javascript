document.querySelector("#grandparent").addEventListener('click',() => {
    console.log("GrandParent Clicked");
});

document.querySelector("#parent").addEventListener('click',() => {
    console.log("Parent Clicked");
});

document.querySelector("#child").addEventListener('click',() => {
    console.log("Child Clicked");
});
=================================
    document.querySelector("#grandparent").addEventListener('click',() => {
    console.log("GrandParent Clicked");
},false);

document.querySelector("#parent").addEventListener('click',() => {
    console.log("Parent Clicked");
},false);

document.querySelector("#child").addEventListener('click',() => {
    console.log("Child Clicked");
},false);

===============================================CAPTURING========TRICKLING============

    
document.querySelector("#child").addEventListener('click',() => {
    console.log("Child Clicked");
},true);

document.querySelector("#grandparent").addEventListener('click',() => {
    console.log("Grand Parent Clicked!");
},true);

document.querySelector("#parent").addEventListener('click',() => {
    console.log("Parent Clicked!");
},true);

