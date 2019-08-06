window.onload=function (){
const signupForm=document.querySelector("#signupform");
signupForm.addEventListener('submit',(e)=>{
    e.preventDefault();
//get user info
const fullname= signupForm['signupfullname'].value;
    const email= signupForm['signupemail'].value;
    const password= signupForm['signuppassword'].value;
 
//sign up the user
auth.createUserWithEmailAndPassword(email, password).then( cred=> {
 
 window.location='index.html';
})


})
}



//login
window.onload=function (){
    
const signinForm= document.querySelector("#signinform");

signinForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    //get user info
   
    const email= signinForm['login-email'].value;
    const password=signinForm['login-password'].value;


    auth.signInWithEmailAndPassword(email,password).then(cred=> {
        console.log(cred.user);
       
        // signinForm.reset();
        if (cred.user==='auth/wrong-password') {
          alert("error");
            
        } else {
            window.location='index.html';
        }
     
    })

//     firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
      
//         // [START_EXCLUDE]
//         if (errorCode === 'auth/wrong-password') {
//           alert('Wrong password.');
//         } else {
//             window.location='index.html';
//         }
        
    
//         // [END_EXCLUDE]
//       });
   


  
})
}
