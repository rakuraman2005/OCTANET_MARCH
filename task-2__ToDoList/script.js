const inp=document.getElementById("textCon");
const tasks=document.getElementById("tasks");
let x=0,b=0;
function addTask()
{
    if(inp.value ==='')
    {
        alert("enter any task")
    }
    else
    {
     let li=document.createElement("li");
    li.innerHTML=`<div  onclick="checks(event)">${inp.value}<button onclick='remove(event)' id='delet'>remove</button></div>`;
    tasks.appendChild(li);
    inp.value='';
    let nooft=document.getElementById("notasks");
    x++;
    nooft.innerHTML=x;
    
}
}
function remove(event)
{
    event.target.parentElement.remove();
    let nooft=document.getElementById("notasks");
    x--;
    b-=2;
    nooft.innerHTML=x;
    
}
function clearAll()
{
    let lil=document.getElementById("tasks");
    while(lil.hasChildNodes())
    {
        lil.removeChild(lil.firstChild);
    }
    let nooft=document.getElementById("notasks");
    nooft.innerHTML=0;
    document.getElementById("completedtasks").innerHTML=0;
    x=0;
    b=0;
}
let d=document.getElementsByTagName("li");
function checks(event)
{
   event.target.parentElement.style.textDecoration ="line-through";
   event.target.parentElement.style.backgroundColor ="rgb(112,250,102)";
   b++;
   document.getElementById("completedtasks").innerHTML=b;
   
}

