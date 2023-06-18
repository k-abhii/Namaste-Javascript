/*
 What is Event Delegation?
- A quick demo and examples of this techniques
- Benefits of Event Delegation?
- Limitations of Event Delegation?
*/

// document.querySelector("#category").addEventListener('click',(e)=>{
//     console.log("Parent Category Clicked!");
// })
document.querySelector("#category").addEventListener('click',(e)=>{
    console.log("Parent Category Clicked!");
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    window.location.href ="/"+e.target.id;
})
