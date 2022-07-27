var arr =[{name:"Test"}]
 var table =document.getElementById('table');
let editIndex ="";


function myList(){
    var todo = document.getElementById('todo').value;
    var tod = {
        name: todo
    }
    if(todo ==''){
        alert('fill in the input')
    }
    else{
        arr.push(tod);
        fetchData()
    }

}

function fetchData(params){
    table.innerHTML='';
    for(let i = 0; i < arr.length; i++){
     
        table.innerHTML +=`
        <tr>
            <td><h2>${i + 1}</h2></td>
            <td><h2>${arr[i].name}</h2></td>
            <td>
            <i onclick="deletetodo(${i})" class="fas fa-trash-alt delete" style="color: white; font-size:20x; cursor:pointer"></i>
            <i onclick="editTodo(${i})" class="fas fa-pen edit" style="color: white; font-size:20x; cursor:pointer"></i>
                   
            </td>
        </tr>
        `
    }  
 
}
fetchData()
//delete function   
function deletetodo(ind) {
    arr.splice(ind,1)
    fetchData()
    // alert(ind)
}

//update
function udate() {
  let inputValue = document.getElementById("todo").value;
//   console.log(inputValue);
  for (let i = 0; i < arr.length; i++) {
     if (i == editIndex ){
      arr[i].name = inputValue
     }
   }
  document.getElementById("list").classList.remove("d")
  document.getElementById("udate").classList.add("d")


  fetchData()



}

//edit
function editTodo(ed) {
    editIndex=ed
     let valued ="";
    let inp = document.getElementById("todo");
  document.getElementById("list").classList.add("d")
  document.getElementById("udate").classList.remove("d")

  arr.forEach((item, i) => {
      if (i == ed) {
       valued=item
          
      }
  })
  inp.value = valued.name    
  console.log(valued);
    
}