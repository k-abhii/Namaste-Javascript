/*
 What is Event Delegation?
- A quick demo and examples of this techniques
- Benefits of Event Delegation?
- Limitations of Event Delegation?
*/

document.querySelector("#category").addEventListener('click',(e)=>{
    console.log("Parent Category Clicked!");
})