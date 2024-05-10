

//     var Liczba1 = document.getElementById('namem'),
//     nameError = document.getElementById("nameError")
// Liczba1.addEventListener('input', () => {
    
//     if (Liczba1.value != '' && 3 <= Liczba1.value.length) {
//         nameError.innerHTML = " nice"
//     }
//     else{
//         nameError.innerHTML = "Nie nice"
//     }
//    });
// //    const emailField = document.querySelector("[namem= 'email']");
// //    const emailErrorField = document.querySelector("#emailError");
// //    emailField.addEventListener('input', () => {
// //     if(!requaredVa)
// //    })
// function requiredValidation(field,errorFiled){
//     if(!field.value || field.value === ''){
//         errorFiled.innerHTML ='To pole jest wymagane'
//         return true
//     }
//     else{
//         errorFiled.innerHTML = ' '
//     }
// }
// function minLengthValidation(field,errorFiled,minLength = 0){
//     if(!field.value.length < minLength){
//         errorFiled.innerHTML = 'To pole musi miec conajmniej ${minLebgth} znaków'
//         return true
//     }
//     else{
//         errorFiled.innerHTML = ''
//         return false
//     }
// }

// const imieInput = document.getElementById('name');
// const nazwiskoInput = document.getElementById('surname');
// const emailInput = document.getElementById('email');
// const hasloInput = document.getElementById('haslo');
// const plecSelect = document.querySelectorAll('[name=plec]');

// const telefonInput = document.getElementById('telefon');
// const dataUrodzenia = document.getElementById('dataUrodzenia'),
// error = document.querySelector("#urderror")
// plecSelect.addEventListener('input', () => {
//     if
// })
const dataUrodzenia = document.getElementById('dataUrodzenia'),
error = document.querySelector("#urderror")
function sprawdzDateUrodzenia() {
    const urodzony = new Date(dataUrodzenia.value);
    const dzisiaj = new Date();
    const rok18Lat = dzisiaj.getFullYear() - 18;
    const miesiac18Lat = dzisiaj.getMonth() + 1; 
    const dzien18Lat = dzisiaj.getDate();
  
    if (dzisiaj.getFullYear() - urodzony.getFullYear() >= 18) {
      
        error.innerHTML = 'masz 18'
     
    } else {
      error.innerHTML ='Musisz mieć co najmniej 18 lat'
    
     
    }}
    dataUrodzenia.addEventListener('input', () => {
    sprawdzDateUrodzenia()
});

const powtohaslo =  document.getElementById('powthaslo'),
haslo =  document.getElementById('hasllo'),
error1 = document.querySelector('#errorpass');
console.log("3")
function sprawdz(){
  console.log(powtohaslo.value)
  if(powtohaslo.value !== ""){
    if(powtohaslo.value === haslo.value){
      error1.innerHTML = 'git'
    } else {
      error1.innerHTML ='nie git'
    }
  }
}
powtohaslo.addEventListener('input', () => {
  sprawdz()
});

const chexx = document.getElementById('akkas'),
kosp = document.getElementById('ak'),
texxt1 = document.querySelector('#texx2')
chexx.addEventListener('input', () =>{
  if(chexx.checked){
    kosp.style.display = 'block'
    texxt1.style.display = 'block'
    kosp.disabled= false

  }else{
    texxt1.style.display = 'none'
    kosp.style.display = 'none'
    kosp.disabled= true
  }
})
const coutty12 = document.getElementById('counti'),
wojed1 = document.getElementById('wojewodo'),
wojed2 = document.getElementById('wojewod');
coutty12.addEventListener('change', () =>{
  if(coutty12.value === "Polska"){
    wojed1.hidden = false
    wojed2.hidden = true
  }
  else{
    wojed1.hidden = true
    wojed2.hidden = false
  }
})
