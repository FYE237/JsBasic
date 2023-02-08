function init() {
    let parent = document.body;
    let child1 = document.createElement("ul");
    

    let words=["one","two","third"];
    let i = 0;
    for(i = 0 ; i < 3;i++ ){
        let child2 = document.createElement("li");
        child2.innerHTML = words[i]; 
        child1.appendChild(child2);
        if(i === Number(2)) {
            child2.classList.add("last");
        }
    }
    parent.appendChild(child1);
  }
  
  window.addEventListener("load", init);