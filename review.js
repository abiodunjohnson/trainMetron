summary ();

function summary() {
   

   let reviewFrom = sessionStorage.getItem('origin');
   let reviewTo = sessionStorage.getItem('origin2');
   let reviewDate = sessionStorage.getItem('origin4');
   let reviewVal = sessionStorage.getItem('origin5');
   let totalPrice2 = sessionStorage.getItem('origin6');
   let totalPrice3 = sessionStorage.getItem('origin6');
   let btnVal = sessionStorage.getItem('origin6');

    console.log(reviewFrom, reviewTo)
   document.querySelector("#review-from").textContent = reviewFrom
   document.querySelector("#review-to").textContent = reviewTo
   document.querySelector("#two").textContent = reviewDate;
   document.querySelector("#val3").textContent = reviewVal;
   document.querySelector('#total2').textContent = totalPrice2;
   document.querySelector('#three').textContent = totalPrice3;
   document.querySelector('#btn--val').textContent = btnVal;
}