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

let circle=document.getElementById("circle");
circle.addEventListener("click",changeColor);

function changeColor(){
    let randomColor=Math.floor((Math.random()*16777216)).toString(16);
    circle.style.backgroundColor=`#${randomColor}`;
}