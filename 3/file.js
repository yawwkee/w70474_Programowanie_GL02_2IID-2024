
function zmienTekst12() {
    document.getElementById("tekst").innerHTML = "Witaj na mojej stronie!";
        alert("ALERRT"); 
        document.getElementById("res").innerHTML = `Wynik =  ${parseInt(liczb1) + parseInt(liczb2)}`;
        
        
    }

const a = 100;
for(let i = 0; i <= a; i++){
    if(i % 2 === 0){
        console.log(i);
    }  
}
  
     var liczb1 = prompt("podaj 1 liczbe");
     var liczb2 = prompt("podaj 2 liczbe");
    
     setInterval(date12,1000)
    function date12(){
        var date = new Date()
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var secunds = date.getSeconds();
        document.getElementById("data").innerHTML = `${hours}:${minutes}:${secunds}`
    }
    function game(){
    var number = Math.floor(Math.random() * 100);
    var shot = -1;
    var count = 0;
    while(number != shot){
        shot = prompt(" ");
        count++;
        if(number > shot){
            alert("Za mala");
        }
        else if(number < shot){
            alert("za duza")
        }
        else{
            alert(`Zgadles ${count}`)
        }
    }

    }
