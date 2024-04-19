// // // function silnia(n){
// // //     if(n > 1)
// // //         return n * silnia(n-1);
// // //     else 
// // //     return 1
    
// // // }
// // // var n = prompt("podaj n:");
// // //     alert(n + "! = " + silnia(n));
// // // function bgcolor(color){
// // //     document.body.style.background = color
// // // }
// // let activeButton
// // function bgcolor(button){
// //     if(activeButton != null){
// //         activeButton.classList.remove("button-clicked")
// //     }

// //     activeButton = document.getElementById(button)
// //     activeButton.classList.add("button-clicked")
// // }
// function zmien() {
//     var x = document.getElementById("Element");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }
const ul = document.querySelector('ul')
function dodaj(){
    const value = document.querySelector('#name').value
    document.querySelector('#name').value = null
    const li = document.createElement('li')
    console.log(ul)
    li.textContent = value
    ul.appendChild(li)
}