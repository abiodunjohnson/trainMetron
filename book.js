let firstD =sessionStorage.getItem("origin");
let secondD =   sessionStorage.getItem("origin2");
let thirdD = sessionStorage.getItem("origin3");
let fourD =sessionStorage.getItem("origin4");
let fifthD =sessionStorage.getItem("origin5");

document.querySelector("#secondlocation").value = firstD;
 document.querySelector("#return").value = secondD;
document.querySelector("#datepicker2").value = thirdD;
document.querySelector("#seat1").value = fourD;
 document.querySelector("#pass2").value = fifthD;
 
 document.querySelector("#from").textContent = firstD;
 document.querySelector("#to").textContent = secondD;
 document.querySelector("#left_date").textContent = thirdD;
 document.querySelector("#val").textContent = fifthD;


 let allRadios = document.querySelectorAll('.input--radio');
function checkR(){
    for(let i=0; i< allRadios.length; i++){
     if(allRadios[i].checked){
         document.querySelector('#price--total').textContent = allRadios[i].value * fifthD;
        //  return i.textContent;
     }
 }
}
 
 document.querySelector('.container--radio').addEventListener("click", checkR );