let day ='No day'

switch(new Date().getDay()){
    case 0:
    day = 'sunday';
    break;

    case 1:
    day = 'Monday';
    break;

    case 2:
    day = 'tuesday';
    break;

    case 3:
    day = 'wednesday';
    break;

    case 0:
    case 4:
    day = 'Thursday';
    break;

    case 5:
    day = 'Saturday';
    break;

    case 6:
    day = 'Sunday';
        break;
}
// document.getElementById('demo').innerHTML ="Today is " + day


let gender ='default'

// switch(male){
//     case 0:
//         gender ='Male'
//         break;

//         case 1:
//             gender ='female'
//             break;
// }
// document.getElementById('demo1').innerHTML='my gender'

let names =['Ade', 'Tummy', 'Dummy','Sunny', 'Yummy']

for(i =0; i < names.length; i++){
    // document.getElementById("demo1").innerHTML += names[i] + "<br>"
    // console.log(names[i]);
}

const personkeys ={fname:1, lname:1, age:1}
const personsobj = [{fname:" john"}, {lname:' Doe'}, {age: 25}]
let value ="";
for(let x in personkeys){

    for(i = 0; i <  personsobj.length; i++){
     if(x == Object.keys(personsobj[i])){
         value += personsobj[i][x] + ' ';
       console.log(value)

     }
    }

}
    document.getElementById('demo1').innerHTML = value;