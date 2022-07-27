function bolt(){

    var click =document.getElementById('click');
   var result = document.getElementById('demo').Value;

    var castle1 =document.getElementById('castle1').value;
    var castle2 =document.getElementById('castle2').value;

    if(castle1 ==true){
    if(castle2 ==true && result ==''){
      click.innerHTML ='A dragon appears and attack'
     
    }
    } 

}


var namer = 'My belove Family'
for(i = 0; i < namer.length; i++){
console.log(namer.charCodeAt(i))
document.getElementById('rest1').innerHTML +=namer.charCodeAt(i)
}

var love =String.fromCharCode(77,121,32,98,101,108,111,118,101,32,70,97,109,105,108,121,);
   document.getElementById('rest').innerHTML =love;


function luck(){
  //h2
  var check =document.getElementById('check');
    //Input
  var Account = document.getElementById('reus').value;
    //select
  var April1 = document.getElementById('April1').value;
  var April2 = document.getElementById('April2').value;
  let x = Number(Account)

  if(April1 == true){
    if(April2 == true && Account > 0){
      check.innerHTML = 'your Accout Balnace is $' + x.toFixed(3)+'.' ;
    }
  }

}


function myFunction(namer){
  const names =['Demi', 'Tolu', 'Deola', 'Gbemi', 'Delight', 'Emmanuel']

  for(let i = 0; i < names.length; i++){
    if(names[i]== namer){
      console.log(names[i])
    }
  }
}
myFunction('Tolu')

function dolf(){
  let num =[30,10,15,99,50,120];

  for(let i =num.length-1; i > 0; i--){
    let k =Math.floor(Math.random() * i)
    let j = num[i]
    num[i] = num[k]
    num[k] =j
    console.log(num[k])
  }
  document.getElementById('num1').innerHTML =num
 
}
