let checkMenu;
let choixTheme;
let body;
 
function initialize(){
    checkMenu = document.getElementById("showMenu");
    checkMenu.onclick= showMenu;

    choixTheme = document.getElementById("ltheme");
    choixTheme.onclick = changeTheme;

    body = document.querySelector("body");
    body.className = "theme1";    
    showMenu(); 
    changeTheme();
}

window.onload = initialize;


function showMenu(){
    let menu = document.getElementById("menu");
    if(!checkMenu.checked)
        menu.style.display = "none";
    else 
        menu.style.display = "block";
}

function changeTheme(){
    body.className = choixTheme.value;
    if(choixTheme.value === "theme1") {
        checkMenu.style.display = "none";
        document.getElementById("menu").style.display = "none";
    }
    else {
        checkMenu.style.display = "";
        showMenu();
    }
}