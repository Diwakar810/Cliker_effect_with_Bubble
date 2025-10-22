// select the body
let body= document.body;
let color=["red","blue","yellow","green","white"]
body.addEventListener('click',(e)=>{
    console.log(e.target)
    console.log(e);
    let x= e.clientX;
    let y= e.clientY;
    console.log(x,y);
    // create the div;
    let div= document.createElement("div");
    div.classList.add("div")

    let ind= Math.floor(Math.random()*5);
    div.style.backgroundColor=color[ind];
    div.style.left=`${e.clientX}px`;
    div.style.top=`${e.clientY}px`;
    div.innerText="Hi";

    body.append(div);
    setTimeout(() => {
        div.remove();
    }, 5000);



})