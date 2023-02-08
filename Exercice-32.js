let colorH2;
let listeP;
let i = 0;

window.addEventListener("load",init); 

function init (){
    let button1 = document.getElementById("b1");
    button1.onclick = action1;


    colorH2 = document.querySelector("h1").style.color;
    let button2 = document.getElementById("b2");
    button2.onclick = action2;


    let button3 = document.getElementById("b3");
    button3.onclick = action3;
    listeP = document.querySelectorAll("p");


}

//Action du bouton 1
function action1(){
    let el1 = document.getElementById("contents");
    el1.style.backgroundColor = "yellow";
}

//Action du bouton 2
function action2(){
    let el2 = document.querySelector("h1");
    if(el2.style.color !== "red") {
        el2.style.color = "red";
    }
    else {
        el2.style.color = colorH2;
    }
}

//Action du bouton 3
function action3(){
    if(i<5) {    
        if(listeP[i].style.fontStyle !== "italic"){
            listeP[i].style.fontStyle = "italic";
            i++;
        }
    }
}



