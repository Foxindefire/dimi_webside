
const myName = "Gabriel"
function changeText (div) { 
div.innerText = `Hello my name is ${myName}`
}
const div = document.getElementById("nameDiv")

    function buttonClicked(){
const currentTime =new Date () ;
const newElement=document.createElement("div")     
newElement.innerText=`created at ${currentTime}`;
document.body.appendChild(newElement);  
}
changeText(div);