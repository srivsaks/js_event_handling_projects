let content=document.getElementById("content");
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
}