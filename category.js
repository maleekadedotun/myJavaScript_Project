let categoryName = document.querySelector("#colFormLabel");
let categoryStatus = document.querySelector("#colFormLabelLg");
let categoryModalName = document.querySelector('#modalCategory');
let categoryModalStatus = document.querySelector('#modalStatus')
let tbody = document.querySelector("#tbody");
let increment1 = document.querySelector("#increment1");
// let general = document.querySelector("#general")
let updateIndex = ""

let myArr = [
  
  {status: "Live"},
  {status: "Not Live"},
]
myArr.forEach(element => {
  categoryStatus.innerHTML +=`<option value="${element.status}">${element.status}</option>`
});



function fetchData() {
var localStorageData = JSON.parse(localStorage.getItem("user")) || null;



  if(localStorageData !== null){
    let live = 1;
    let notlive = 1;
    let increment = 1;
    tbody.innerHTML = '';
    localStorageData.forEach((element , i) => {

      increment = Number(i + 1)
      tbody.innerHTML +=`
        <td style = "color : white; font-size : 20px; padding-bottom : 15px;">${i + 1}</td>
        <td style = "color : white; font-size : 20px;padding-bottom : 15px;">${element.name}</td>
        <td style = "color : white; font-size : 20px; padding-bottom : 15px;">${element.userType}</td>
        <td style = "color : white; font-size : 20px; padding-bottom : 15px;">${element.status}</td>
        <td>
          <i class="fa fa-trash" aria-hidden="true" style = "color : white; font-size : 20px;" onclick = "deleteItem(${i})"></i>
          <i class="fas fa-edit" style = "color : white;font-size : 20px; margin-left : 10px" onclick = "editButton(${element.id})" data-toggle="modal" data-target="#example"></i>
        </td>
      `
      if (element.status == "Live") {
       document.getElementById("live").innerHTML = live++
      }
      if (element.status == "Not Live") {
        document.getElementById("notlive").innerHTML = notlive++
      }


    });
    increment1.innerHTML = increment
  }
  
}
fetchData()

function saveButton() {
  var localStorageData = JSON.parse(localStorage.getItem("user")) || null;
  duplicateStatus = false
  if (categoryName.value == "" || categoryStatus.value == "") {
    swal({
      title: "Empty input detected"
    });
  }
  let data = {
    id : Math.floor(Math.random() * 10000),
    name : categoryName.value,
    status : categoryStatus.value,
    userType : "Admin"
  }
  let arr =[];

  if(localStorageData == null){
  arr.push(data)
    
  }
  else{
    arr = localStorageData
    for (let i = 0; i < arr.length; i++) { 
      if (data.name == arr[i].name) {
        duplicateStatus = true
      }  
    }   
    if(duplicateStatus){
      swal({
        title : "Duplicate entry detected"
      });
    }
    else{
      arr.push(data)
    }
  }
  localStorage.setItem("user", JSON.stringify(arr))
  fetchData()
}

    //deleteTodo
    function deleteItem(ind){
      swal({
        title: "Are you sure?",
        text: "Item will be deleted from cart",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if(willDelete){
          var localStorageData = JSON.parse(localStorage.getItem("user"))
          if(localStorageData){
            localStorageData.splice(ind, 1);
            localStorage.setItem("user", JSON.stringify(localStorageData))
            console.log(localStorageData)
          }
        
          swal("Item Deleted!",{
            icon: "success",
          });
          fetchData()
        }

        else{
          fetchData()
          swal("Item still in cart!")
        }
      });
      
    }


function editButton(params) {
  var localStorageData = JSON.parse(localStorage.getItem('user'))

  updateIndex = params;
  let obj = ""
  for (let z = 0; z < localStorageData.length; z++) {
    if (localStorageData[z].id == params) {
      obj = localStorageData[z]     
      console.log(obj)     
    }
  }
  categoryModalName.value = obj.name;
  categoryModalStatus.value = obj.status;

  fetchData()
}

function upDate() {
  console.log(updateIndex);
  var localStorageData = JSON.parse(localStorage.getItem('user'))

  if ( categoryModalName.value == categoryModalStatus.value) {
    swal({
      title : "fill in the input"
    });
  }

  else{
    for (let i = 0; i < localStorageData.length; i++) {
      if (localStorageData[i].id == updateIndex) {
        localStorageData[i].name = categoryModalName.value
        localStorageData[i].status = categoryModalStatus.value
      }
      
    }
    localStorage.setItem('user', JSON.stringify(localStorageData))
      // categoryModalName.value == ""
      // categoryModalStatus.value == ""
  }
  fetchData()
  
}