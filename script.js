$(document).on('click', 'nav .navbar-nav li', function(){
    $(this).addClass('active').siblings().addRemove('active')
});

function rmv(){
    document.querySelector("#input-a").addEventListener("input", function (){
        if($("#input-a").value !== ""){
            $("#img_form").hide();
            document.querySelector("#img_form").style.display = "none";
        } else if($("#input-a").value === ""){
            document.querySelector("#img_form").style.display = "inline";
        }
    })
}
rmv();
if($("#input-a").value === ""){
    document.querySelector("#img_form").style.display = "inline";
}


// SHOW RETURN

function show_return() {
    var select_box = $('#inputState').val();
    if(select_box == 'return')
    {
        $('#form2').show();
        $('#form1').hide();
    }
    else
    {
        $('#form2').hide();
        $('#form1').show();
    }

    return false
}

function show_dropdown() {
    var select_box =('#inputPassengers').val();
    if (select_box == 'dropdown')
    {
        $('#dropdown2').show();
    }
}

// $(document).ready(function(){
//     $('input[option]:disabled').css('border', '3px solid red');
// })


// DATEPICKER

$( function() {
    $( "#datepicker" ).datepicker();
  } );

  function newFunction() {
    $(function () {
        $("#datepicker").datepicker();
    });
}

$( function() {
    $( "#datepickergo" ).datepicker();
  } );

  function newFunction() {
    $(function () {
        $("#datepickergo").datepicker();
    });
}

$( function() {
    $( "#datepickerreturn" ).datepicker();
  } );

  function newFunction() {
    $(function () {
        $("#datepickerreturn").datepicker();
    });
}



var adult = 1;
function decreaseAdult() {
    if(adult > 0){
            document.getElementById('count-adult').value =--adult;
    } else{
        adult=1;
    }
    
}


function increaseAdult() {
    document.getElementById('count-adult').value =++adult;
}

var child = 0;
function decreaseChildren() {
    if(child > 0){
        document.getElementById('count-child').value =--child;
    } else{
        chlld= 0;
    }
}


function increaseChildren() {
    document.getElementById('count-child').value =++child;
}



document.querySelector("#adult-dec").addEventListener('click',incDec);

document.querySelector("#adult-inc").addEventListener('click',incDec);

document.querySelector("#child-dec").addEventListener('click',incDec);

document.querySelector("#child-inc").addEventListener('click',incDec);

function incDec(){
    var total= adult+child;
    document.querySelector("#total").textContent=total;
    
}

$('.dropdown-menu').click(function(e) {
    if (e.target.nodeName !== 'BUTTON') e.stopPropagation();
});



//autofill

// document.getElementById('same').addEventListener("click",function(){ 
//     if(document.getElementById('same')){
//        window.location="book.html";
//     var inputCityFrom=document.getElementById("inputCityFrom").value;
//     localStorage.setItem('inputCityFrom',inputCityFrom);
    
//     document.getElementById('inputCityFrom2').value= localStorage.getItem('inputCityFrom');
//     }    
// });



// document.getElementById('same').addEventListener("click",function(){ 
   
//     var inputCityFrom=document.getElementById.JSON.Parse(("inputCityFrom")).value;
//     localStorage.setItem ('inputCityFrom',inputCityFrom);
//     document.getElementById('inputCityTo').value= localStorage.getItem.JSON.stringify(('inputCityFrom'));
// });

// function passValue (){
//     var input1=document.getElementById("inputCityFrom").value;
//     localStorage.setItem("textvalue", input1);
//     return false;
// }

// document.getElementById("inputCityFrom2").innerHTML=localStorage.getItem("textvalue");



// auto fill 

//   else
//   { 
//     document.getElementById('secondaryaddress').value=""; 
//     document.getElementById('secondaryzip').value=""; 
//   } 
// } 