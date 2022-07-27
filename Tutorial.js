// function validateForm() {

//     let malik =document.getElementById('malik');
    
//    let pass =document.getElementById('password').value;
//    let pass1 =document.getElementById('password1').value;

//    if(pass == pass1){
//        malik.innerHTML = 'password confirm';
//    }
//    else{
//        malik.innerHTML = 'incorrect password';
//    }


// }



function linko(){
    document.getElementById('demo1').innerHTML='';
    document.getElementById('demo2').innerHTML='';
    document.getElementById('demo3').innerHTML='';
    document.getElementById('demo4').innerHTML='';
    document.getElementById('demo5').innerHTML='';
    document.getElementById('demo6').innerHTML='';  

    var malik = document.getElementById('demo').value;
    if( malik >= 70  &&  malik <=100){
    document.getElementById('demo1').innerHTML='A'
    // console.log(malik)
    alert('Grade A')
    }
    else if(malik >=60 && malik <=69){
        document.getElementById('demo2').innerHTML='B'
        alert('Grade B')
    }
    else if (malik >=50 && malik <=59 ){
        document.getElementById('demo3').innerHTML='C'
        alert('Grade C')
    }
    else if(malik >=40 && malik <=49){
        document.getElementById('demo4').innerHTML='D'
        alert('Grade D')
    }
    else if(malik >=30 && malik <=39){
        document.getElementById('demo5').innerHTML='E'
        alert('Grade E')
    }
    else if (malik >=0 && malik <=29){
     document.getElementById('demo6').innerHTML='Fail'
    alert('You fail this course')
    }
}
    


//ASCII

let mine ='Maleek'
for(i=0; i<mine.length; i++){
console.log(mine.charCodeAt(i))
    
}

let mean = String.fromCharCode(100,105,101,32,115,121,116,101,109);
document.getElementById('front').innerHTML= mean;
console.log(mean);

let crown ="Crownbirth Limited"
for(i = 0; i < crown.length; i++){
//    birth = crown.charCodeAt(crown.length)
console.log(crown.charCodeAt(i))
document.getElementById('edu2').innerHTML +=crown.charCodeAt(i);
}

let edu =String.fromCharCode(67,114,111,119,110,98,105,114,116,104,32,76,105,109,105,116,101,100)
console.log(edu)
document.getElementById('edu1').innerHTML=edu;



function text(){
    //head
    document.getElementById('check');
    //input
    var Account = document.getElementById('num1').value;

    //convert from the first select section of the html
    let x = Number(Account)
        //select
        accountBalance = document.getElementById('search1').value;
        accountSheet = document.getElementById('search2').value;

    //condition statement
    if(accountSheet==true){
        if(accountBalance==true && Account > 0){
         check.innerHTML = 'Your balance $'+ x.toFixed(2)+ ' .'; 
        }
        else if (accountBalance==false){
        check.innerHTML ='Your account is no longer active'+ '.';
        }
        else if(Account == 0){
        check.innerHTML ='Your account is empty'
        }
        else if(Account < 0){
            check.innerHTML ='Your balance is negative please contact Bank'
        }
        
    }
    else{
        check.innerHTML ='Thank you, have a nice day'
    }
    
}

   
    

function rem(){
    
    var item1 =document.getElementById('item1').value;
    

    var amount = 1000
    owner = 5000



    var cal =item1 * amount;
    var result = owner - item1 ;
    
    console.log(cal)
    
    document.getElementById('amount').innerHTML = cal;
    document.getElementById('item4').innerHTML = owner;

    document.getElementById('item3').innerHTML =result;

   //baby wears
   item5 = document.getElementById('item5').value;

    var amount2 = 500;
     var total = 50000

    var baby =item5 * amount2 
     
    document.getElementById('item6').innerHTML =baby;


       document.getElementById('item8').innerHTML =total;
       var result1 =total - item5 ;

       document.getElementById('item7').innerHTML =result1

    

}







// let forms = document.querySelector('#form')


// forms.addEventListener('submit', function(e){
// e.preventDefault();

// });

function ValidateAccNUmber(e) {

    var acctButton = document.getElementById('acctButton');

    const Account =[
        {acctName : 'Adebayo Maleek', acctNo : 3046928537},
        {acctName : 'Adeoye Idayat', acctNo : 24536745372},
        {acctName : 'Adesanya Samuel', acctNo : '0046956437'},
    ]
    var userid = event.target.value
    var message =''

    for(i =0; i < Account.length; i++ ){
      if(userid.length < 10){
          message ="Account number incomplete"
          break;
       }
       else{
           if(Account[i].acctNo == userid){
             message = Account[i].acctName;
             break;
            }
            else{
                message ="This Account does not exist";
            }
       }
       
    }
    acctButton.innerHTML =message;
}




function evenOrOdd(){
    var userInput = Number(document.getElementById("userVal").value);
    if ((userInput % 2) == 0){
      document.getElementById("results").innerHTML = "The Number is Even";
    } else if ((userInput % 2) == 1){
      document.getElementById("results").innerHTML = "The Number is Odd";
    } else {
      document.getElementById("results").innerHTML = "NaN";
    }
}
  
const cars = ["BMW", "Volvo", "Saab", "Ford"];

for(i = 0; i < cars.length;i++){
let text =cars[i]
console.log(text)
}