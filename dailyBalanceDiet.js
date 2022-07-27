var foodDays = document.querySelector('#days')
var foodTime = document.querySelector('#time');
var tableDiet =document.querySelector('#tableDiet')
const clock  = document.querySelector('#clock');


const tick = () =>{
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html =`
        <span>${now}</span>
    `;
    clock.innerHTML= html;
}
setInterval(tick, 1000)


var diet = [
    {name: 'Monday', 
    timeToEat: [
        {time : "Breakfast", food : "rice"},
        {time : "Lunch", food : "garri"},
        {time : "Dinner", food : "rice"},
    ]},

    {name: "Tuesday",  
        timeToEat: [
        {time : "Breakfast", food : "sliceBread"},
        {time : "Lunch", food : "rice"},
        {time : "Dinner", food : "rice"},
    ]},

    {name: "Wednesday", 
        timeToEat: [
        {time : "Breakfast", food : "sliceBread"},
        {time : "Lunch", food : "rice"},
        {time : "Dinner", food : "rice"},
    ]},

    {name: "Thursday", 
    timeToEat: [
        {time : "Breakfast", food : "sliceBread"},
        {time : "Lunch", food : "rice"},
        {time : "Dinner", food : "rice"},
    ]},

    {name: "Friday", 
        timeToEat: [
        {time : "Breakfast", food : "sliceBread"},
        {time : "Lunch", food : "rice"},
        {time : "Dinner", food : "rice"},
    ]},

    {name: "Saturday", 
        timeToEat: [
        {time : "Breakfast", food : "sliceBread"},
        {time : "Lunch", food : "rice"},
        {time : "Dinner", food : "rice"},
    ]},

    {name: "Sunday", 
        timeToEat: [
        {time : "Breakfast", food : "sliceBread"},
        {time : "Lunch", food : "rice"},
        {time : "Dinner", food : "rice"},
    ]},

        
    

]

for (let i = 0; i < diet.length; i++) {
    foodDays.innerHTML +=`<option value="${diet[i].name}">${diet[i].name}</option>`
}

for (let i = 0; i < diet[0].timeToEat.length; i++) {
    foodTime.innerHTML +=`<option value="${diet[0].timeToEat[i].time}">${diet[0].timeToEat[i].time}</option>`
}

function myList() {
     var localStorageData = JSON.parse(localStorage.getItem('diet'))
    var duplicate = false
    if (foodDays.value == "" && foodTime.value == "") {
        return alert('select an item.') 
    }

    else{
        var merge = {
            name : foodDays.value,
            time : foodTime.value,
        }
        diet.forEach(item =>{
            if(item.name == merge.name){
                item.timeToEat.forEach(item2 =>{
                    if(item2.time == merge.time){
                        merge.food = item2.food
                    }
                })
            }
        })

        let holder = []
        if (localStorage.getItem('diet') ==null) {
            holder.push(merge)
        }
        else{
            holder = JSON.parse(localStorage.getItem('diet'))

            holder.forEach(Items =>{
                if (merge.name==Items.name && merge.time == Items.time) {
                    duplicate = true
                }
            })

            if (duplicate) {
                alert('Duplicate entry detected')
            }
            else{
                holder.push(merge)
            }
        }

        localStorage.setItem('diet', JSON.stringify(holder))


    
    }
    
    fetchData()
}


function fetchData() {
    var localStorageData = JSON.parse(localStorage.getItem('diet'))
    tableDiet.innerHTML = ""
    tableDiet.innerHTML =`
        <td><h3>S/N</h3></td>
        <td><h3>Days</h3></td>
        <td class=""><h3>Time-To-Eat</h3></td>
        <td><h3>Food</h3></td>
    `
    localStorageData.forEach((element, a) =>{
        tableDiet.innerHTML +=`
            <td style="font-size: 20px;">${a + 1}</td>
            <td style="font-size: 20px;">${element.name}</td>
            <td style="font-size: 20px;">${element.time}</td>
            <td style="font-size: 20px;">${element.food}</td>
        `;
    })
        
    // localStorage.setItem("diet", JSON.stringify(localStorageData))
  
   
}
fetchData()

