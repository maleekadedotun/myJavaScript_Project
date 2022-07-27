// let categoryName = document.querySelector("#colFormLabel");
// let categoryStatus = document.querySelector("#colFormLabelLg");
// let tbody = document.querySelector("#tbody");
// let categoryModalName = document.querySelector('#modalCategory');
// let categoryModalStatus = document.querySelector('#modalStatus')
// let editor = ""

 

function fetchData() {
  var localStorageData = JSON.parse(localStorage.getItem("user")) || null;

  

  if(localStorageData !== null){
        let live = 1;
        let notlive = 1;
        let increment = 0;
        localStorageData.forEach((element , i) => {
            if (element.status == "Live") {
                document.getElementById("live").innerHTML = live++
            }
            if (element.status == "Not Live") {
                document.getElementById("notlive").innerHTML = notlive++
            }
        });
        document.getElementById("increment1").innerHTML = localStorageData.length
    }
  
}
fetchData()

// function saveButton() {
//   var localStorageData = JSON.parse(localStorage.getItem("user")) || null;
//   duplicateStatus = false
//   if (categoryName.value == "" || categoryStatus.value == "") {
//     swal({
//       title: "Empty input detected"
//     });
//   }
//   let data = {
//     id : Math.floor(Math.random() * 10000),
//     name : categoryName.value,
//     status : categoryStatus.value,
//     userType : "Admin"
//   }
//   let arr =[];

//   if(localStorageData == null){
//   arr.push(data)
    
//   }
//   else{
//     arr = localStorageData
//     for (let i = 0; i < arr.length; i++) { 
//       if (data.name == arr[i].name) {
//         duplicateStatus = true
//       }  
//     }   
//     if(duplicateStatus){
//       swal({
//         title : "Duplicate entry detected"
//       });
//     }
//     else{
//       arr.push(data)
//     }
//   }
//   localStorage.setItem("user", JSON.stringify(arr))
//   fetchData()
// }

// function deleteItem(y) {
//   swal({
//     title: "Are you sure?",
//     text: "Item will be deleted from cart",
//     icon: "warning",
//     buttons: true,
//     dangerMode: true,
//     })
//   var localStorageData = JSON.parse(localStorage.getItem("user"));
//   localStorageData.splice(y, 1)
  
//   localStorage.setItem("user", JSON.stringify(localStorageData))
//   fetchData()

// }

// function editButton(params) {

//   let data = {
//     name : categoryModalName.value,
//     status : categoryModalStatus.value,
//   }
//   var localStorageData = JSON.parse(localStorage.getItem('user'))

//   updateIndex = params;
//   let obj = ""
//   for (let z = 0; z < localStorageData.length; z++) {
//     if (localStorageData[z].id == params) {
//       obj = localStorageData[z]     
//       console.log(obj)     
//     }
//   }
//   categoryModalName.value = obj.name;
//   categoryModalStatus.value = obj.status;
  
//   // console.log(params);
//   // localStorage.setItem('user', JSON.stringify(localStorageData))
//   // fetchData()
// }

// function upDate() {
//   console.log(updateIndex);
//   var localStorageData = JSON.parse(localStorage.getItem('user'))

//   if ( categoryModalName.value == categoryModalStatus.value) {
//     swal({
//       title : "fill in the input"
//     });
//   }

//   else{
//     for (let i = 0; i < localStorageData.length; i++) {
//       if (localStorageData[i].id == updateIndex) {
//         localStorageData[i].name = categoryModalName.value
//         localStorageData[i].status = categoryModalStatus.value
//       }
      
//     }
//     localStorage.setItem('user', JSON.stringify(localStorageData))
//       categoryModalName.value == ""
//       categoryModalStatus.value == ""
//   }
//   fetchData()
  
// }