
function validateForm() {

    let malik =document.getElementById('malik');
    
   let pass =document.getElementById('password').value;
   let pass1 =document.getElementById('password1').value;

   if(pass == pass1){
       malik.innerHTML = 'password confirm';
   }
   else{
       malik.innerHTML = 'incorrect password';
   }


}