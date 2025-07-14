let h1 = document.getElementById("fun")
h1.style.color = "red"

let id1 = document.getElementById("id1")
console.log(id1.matches(".box"))
let id2 = document.getElementById("id2")
console.log(id2.matches(".box"))
console.log(sp1.closest("#sp1"))

document.getElementsByTagName("nav")[0].firstElementChild.style.color  = "red" 
document.getElementsByTagName("nav")[0].firstElementChild.style.color  = "green" 
document.getElementsByTagName("nav")[0].lastElementChild.style.color  = "green" 
Array.from(document.getElementsByTagName("li")).forEach((element) =>{
    element.style.background = "red";

})  

first.innerHTML
first.outerHTML

function sum (a,b){
    return a*b
}
console.log(sum(2,3))