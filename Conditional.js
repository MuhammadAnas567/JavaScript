// let a = prompt("Hey whats your age?")
// a = Number.parseInt(a)
// // alert  = ("This age is valid")
// if (a<0) {
//     alert("This age is invalid for driving")
// }

// else if (a<9) {
//     alert("You can not thinking for driving")
// }

// else if (a<18  && a>=9) {
//     alert("You are thinking for driving")
// }

// else if (a>=18) {
//     alert("This age also valid for driving")
// }
// else{
//     alert("You can drive")
// }

// console.log("You can", a<18? "not drive" : "drive")

let a = prompt("Enter current age")
a = Number.parseInt(a)
let runAgain =true; 
    while(runAgain){
let a = prompt("Enter current age")
a = Number.parseInt(a)
 if (a<=0) {
    console.error("Please enter a current age")
}
else if (a>=18) {
    alert("You can drive")
}  

else{
    alert("You cannot drive")
}
runAgain = confirm("Do you want to play again")
    }
//     }
//     let a = prompt("Hey whats your age?")
//     a = Number.parseInt(a)
//     if (a>4) {
//         location.href ="https://google.com"
//     }

//     let color = prompt("Please enter the background color")
//     document.body.style.background = color
