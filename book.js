let location1 = sessionStorage.getItem("origin");
let location2 =  sessionStorage.getItem("origin2");
let seatb =  sessionStorage.getItem("origin3");
let dateP =  sessionStorage.getItem("origin4");
let allPassB = sessionStorage.getItem("origin5");


 document.querySelector("#secondlocation").value = location1
document.querySelector("#return").value = location2
document.querySelector("#seat1").value = seatb
document.querySelector("#datepicker2").value = dateP
document.querySelector("#pass2").value = allPassB
// console.log(location1, location2, allPassB)

document.querySelector("#from").textContent = location1;
document.querySelector("#to").textContent = location2;
document.querySelector("#left_date").textContent = dateP;
document.querySelector("#val").textContent = allPassB;

let allRadios = document.querySelectorAll('.input--radio');
function checkR(){
    for(let i=0; i < allRadios.length; i++){
     if(allRadios[i].checked){
         let totalPrice=  document.querySelector('#price--total')
         totalPrice.textContent = allRadios[i].value * allPassB;
         sessionStorage.setItem('origin6', totalPrice.textContent);
         console.log(sessionStorage.getItem('origin6'));
         return i.textContent;
     }
 }
}
 
 document.querySelector('.container--radio').addEventListener("click", checkR );

 function total(){
    let totalNumber = document.querySelector('#price--total');

   
 }
 
 

 // Getting to Passenger
//  let totalPass = document.querySelector("#pass");
//  let location = document.querySelector("#secondlocation");
 