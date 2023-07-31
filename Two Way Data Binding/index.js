// can directly add without adding variable 
 
document.getElementsByClassName("Name")[0].addEventListener("keydown", function(){
document.querySelector(".Write").innerHTML = this.value;
})

// can get output using variable and instead of "this" we can use variable name for value

let last = document.getElementsByClassName("LastName")[0]
last.addEventListener("keyup", function(){
    document.querySelector(".LastN").innerHTML = last.value;
    })
// use either getElementsByClassName or querySelector
document.getElementsByClassName("Age")[0].addEventListener("keyup", function(){
    document.getElementsByClassName("writeNum")[0].innerHTML = this.value;
    })