# Namaste-Javascript



Trickling Down is also known as capturing 
Bubbling up —means event propagation if we click on child it will then go to parent then grandparent 
In case of capturing or trickling it is opposite if we click on child then it will start from grand parent then parent then child 
Back in old age Netscape has invented as capturing as main fundamental after that microsoft said bubbling as make more sense 
W3C now consider both 
In addEventListener you can us 3rd argument as useCapture as boolean 
1st argument in addEventListener is always event and 2nd argument is  callback 3rd argument boolean useCapture 
useCapture can be true or false 



W3C has given cycle will flow from trickling down to bubbling up but by giving true or false to useCapture u can control what to use 
Event Bubbling is used by default when you don’t pass any 3rd argument 
If you pass 3rd argument as false then also Even Bubbling is propagated 
When u pass 3rd argument as true then EventCapturing is propagated 
If u don’t pass 3rd argument it is considered as false 
