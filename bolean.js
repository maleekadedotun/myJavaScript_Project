console.log(true, false, "true", "false");

let email = 'adedotun@gmail.com'

// let result = email.includes('@')
// let  result =email.includes('.')
// let result =email.includes('!')
// console.log(result)

let age = 25;

console.log(age == 25)
console.log(age == 20)
console.log(age != 25)
console.log(age != 20)
console.log(age >= 25)
console.log(age <= 20)


let name = 'shaun';

console.log(name =='shaun');
console.log(name =='Shaun');
console.log(name <='crystal');
console.log(name >='crystal');
console.log(name < 'trystal');

//looose comparison{different types can still be equal}
console.log(age == 25)
console.log(age == '25')
 console.log(age != 25)
 console.log(age != '25')

//strict comparison{different types cannot be equal}
console.log(age === 25)
console.log(age === '25')
console.log(age !== 25)
console.log(age !== '25')

//conversion
let score = '100'

score =Number(score)
console.log(score + 1)
console.log(typeof score)

// let result =Number('Hello')
// result = String(50)
// result =Boolean(0)
//  result =Boolean(50)
// result = Boolean('')

// console.log(result, typeof result)

// for loops

for(let i = 0; i < 5; i++){
    console.log(i)
}

const names =['ben', 'ken', 'daniel']
for(let i = 0; i < names.length; i++){
console.log(i)
let html = `<div>${names[i]}</div>`
// console.log(html)
}





