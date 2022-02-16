// Uncomment to test ReadMore event
/*let content=document.getElementById("content");
let button=document.getElementById("show-more");

console.log(content);

button.onclick=()=>{
    // expand the box
    if(content.className===""){
       content.className="open";
       button.innerHTML="Collapse Now"
    }
    else{
        content.className="";
        button.innerHTML="Expand";
    }
}*/

// Uncomment to test Random color generator
/*let circle=document.getElementById("circle");
circle.addEventListener("click",changeColor);

function changeColor(){
    let randomColor=Math.floor((Math.random()*16777216)).toString(16);
    circle.style.backgroundColor=`#${randomColor}`;
}*/

// Uncomment to test copy event,submit event
/*let output=document.getElementById("output");
document.querySelector("form").addEventListener("submit",(e)=>{
e.preventDefault();
console.log(e.target.value)
output.textContent=`event was fired at ${e.timeStamp}`
})

let nameText=document.querySelector('input[type="text"]');
nameText.addEventListener("input",()=>{
    output.textContent=`You entered ${nameText.value}`
})

nameText.addEventListener("copy",()=>{
    alert("You copied text")
})*/

// Below prints chains of Hi text when mouse is over a particular div
/*let myText=document.getElementById("my-text");
let psuedoImage=document.getElementById("psuedo-image");

psuedoImage.addEventListener("mouseover",(e)=>{
    myText.textContent+="hii "
    let dotDiv=document.createElement("div");
    dotDiv.className="dot";
    document.body.appendChild(dotDiv);
    dotDiv.style.top=e.clientY+"px";
    dotDiv.style.left=e.clientX+"px";
})*/