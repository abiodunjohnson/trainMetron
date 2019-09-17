summary ();

function summary() {
    alert("review");

   let reviewFrom = sessionStorage.getItem('origin');
   let reviewTo = sessionStorage.getItem('origin2');
   let reviewDate = sessionStorage.getItem('origin4');
   let reviewVal = sessionStorage.getItem('origin5');

    console.log(reviewFrom, reviewTo)
   document.querySelector("#review-from").textContent = reviewFrom
   document.querySelector("#review-to").textContent = reviewTo
   document.querySelector("#two").textContent = reviewDate;
   document.querySelector("#val3").textContent = reviewVal;
}