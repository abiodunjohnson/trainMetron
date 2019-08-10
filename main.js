// const selector = (value) => {
//     return document.querySelector(value);
//   }
//   //FORM FOR FLIGHT
//   const flightForm = selector('#flightForm');
//   const origin = selector('#originFrom');
//   const destination = selector('#destinationTo');
//   const departingDate = selector('#departing-date-picker');
//   const returningDate = selector('#returning-date-picker');
//   const adult = selector('#adultNumber');
//   const children = selector('#childrenNumber');
//   const classType = selector('#classType');
//   const ticket_origin = selector('#ticket_origin')
//   const ticket_destination = selector('#ticket_destination')
//   const ticket_departing = selector('#ticket_departing')
//   const ticket_returning = selector('#ticket_returning')
//   const ticket_adult = selector('#ticket_adult')
//   const ticket_children = selector('#ticket_children')
//   const ticket_classType = selector('#ticket_classType')
//   flightForm.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const origin1 = origin.value;
//     const destination1 = destination.value;
//     const departingDate1 = departingDate.value;
//     const returningDate1 = returningDate.value;
//     const adult1 = adult.options[adult.selectedIndex].value;
//     const children1 = children.options[children.selectedIndex].value;
//     const classType1 = classType.options[classType.selectedIndex].value;
//     sessionStorage.setItem('origin_input', origin1)
//     sessionStorage.setItem('destination1_input', destination1)
//     sessionStorage.setItem('departingDate1_input', departingDate1)
//     sessionStorage.setItem('returningDate1_input', returningDate1)
//     sessionStorage.setItem('adult1_input', adult1)
//     sessionStorage.setItem('children1_input', children1)
//     sessionStorage.setItem('classType1_input', classType1)
//     const origin_input = sessionStorage.getItem('origin_input')
//     const destination1_input = sessionStorage.getItem('destination1_input')
//     const departingDate1_input = sessionStorage.getItem('departingDate1_input')
//     const returningDate1_input = sessionStorage.getItem('returningDate1_input')
//     const adult1_input = sessionStorage.getItem('adult1_input')
//     const children1_input = sessionStorage.getItem('children1_input')
//     const classType1_input = sessionStorage.getItem('classType1_input')
//     ticket_origin.textContent = origin_input;
//     ticket_destination.textContent = destination1_input ;
//     ticket_departing.textContent = departingDate1_input;
//     ticket_returning.textContent = returningDate1_input;
//     ticket_adult.textContent = adult1_input;
//     ticket_children.textContent = children1_input;
//     ticket_classType.textContent = classType1_input;
    
//     console.log(origin_input)
//   })
//   // // FORM FOR HOTEL
//   const hotelForm = selector("#hotelForm");
//   const hotel_destination = selector("#hotel_destination");
//   const hotel_preference = selector("#hotel_preference");
//   const check_in_date = selector("#check_in_date");
//   const check_out_date = selector("#check_out_date");
//   const nationality = selector('#nationality');
//   let checkBox  = [...document.querySelectorAll('input[type="radio"]')]; 
//   const ticket_city = selector('#ticket_city');
//   const ticket_hotelPreference = selector('#ticket_hotelPreference');
//   const ticket_checkIn = selector('#ticket_checkIn');
//   const ticket_checkOut = selector('#ticket_checkOut');
//   const ticket_room = selector('#ticket_room');
//   const ticket_nationality = selector('#ticket_nationality');
//   hotelForm.addEventListener('submit', (e)=>{
//         e.preventDefault();
//   //display value of checked checkbox
//   function checkboxChecked(boxArray) {
//     var ArgLength = boxArray.length;
//     let checked = [];
//     for (var i = 0; i < ArgLength; i++) {
//         if (boxArray[i].checked) {
            
//             checked.push(boxArray[i].value)
//         }
//     }
//     return checked;
//   }
//   const hotel_destination1 = hotel_destination.value;
//   const hotel_preference1 =  hotel_preference.options[hotel_preference.selectedIndex].value;
//   const check_in_date1  = check_in_date.value;
//   const check_out_date1 =check_out_date.value;
//   const nationality1 = nationality.options[nationality.selectedIndex].value;
//   const room_number1 = checkboxChecked(checkBox)
//   sessionStorage.setItem("hotel_destination1_input", hotel_destination1)
//   sessionStorage.setItem("hotel_preference1_input", hotel_preference1)
//   sessionStorage.setItem("check_in_date1_input", check_in_date1)
//   sessionStorage.setItem("check_out_date1_input", check_out_date1)
//   sessionStorage.setItem("room_number1_input", room_number1)
//   sessionStorage.setItem("nationality1_input", nationality1)
//   const hotel_destination1_input = sessionStorage.getItem("hotel_destination1_input");
//   const hotel_preference1_input = sessionStorage.getItem("hotel_preference1_input");
//   const check_in_date1_input = sessionStorage.getItem("check_in_date1_input");
//   const check_out_date1_input = sessionStorage.getItem("check_out_date1_input");
//   const room_number1_input = sessionStorage.getItem("room_number1_input");
//   const nationality1_input = sessionStorage.getItem("nationality1_input");
//   ticket_city.textContent = hotel_destination1_input;
//   ticket_hotelPreference.textContent = hotel_preference1_input;
//   ticket_checkIn.textContent = check_in_date1_input;
//   ticket_checkOut.textContent = check_out_date1_input;
//   ticket_room.textContent = room_number1_input;
//   ticket_nationality.textContent = nationality1_input;
//   })    
//   // FORM FOR RIDE



document.getElementById('same').addEventListener("click",function(){ 

if(document.getElementById('same')){
     
    var inputCityFrom=document.getElementById("inputCityFrom").value;
    localStorage.setItem('inputCityFrom',inputCityFrom);
    window.document.location="./book.html"; 
    document.getElementById('inputCityFrom2').value= localStorage.getItem('inputCityFrom');
};
});