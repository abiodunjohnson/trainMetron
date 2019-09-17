 passanger();

 function passanger(){
     

     let passGo = sessionStorage.getItem("origin");
     let passTo = sessionStorage.getItem("origin2");
     let passDate = sessionStorage.getItem("origin4");
     let totalC = sessionStorage.getItem("origin5");
     let totalD = sessionStorage.getItem("origin5");
     let totalPrice1 = sessionStorage.getItem('origin6');
    console.log(passGo, passDate, totalC);


     document.querySelector("#from-pass").textContent = passGo;
     document.querySelector("#to-pass").textContent = passTo;
     document.querySelector("#date--pass").textContent = passDate;
     document.querySelector("#val2").textContent = totalC;
     document.querySelector("#total--price").textContent = totalPrice1;
     document. querySelector("#val4").textContent = totalD;

    // document.querySelector("#from-pass") = passGo
    // document.querySelector("#to-pass") = passTo


    // sessionStorage.getItem("origin").textContent = passGo;
    // sessionStorage.getItem("origin2").textContent = passTo;
 }