let questionRow = document.querySelector("#questionRow");
let inputs = document.querySelector("#input");
let categoryFetch = document.querySelector("#categoryFetch");
let tbody1 = document.querySelector("#tbody");
let c = document.querySelector('.caategory');
let textArea = document.querySelector("#textArea");
let setOption1 = document.querySelector("#setOption1");
let inputOption = document.querySelector("#inputOption")
let inputRadio = document.querySelector("#inputRadio");
let dropdown1 = document.querySelector("#dropdown")
let filterSearch = document.querySelector("#filterSearch")
let editQuiz = ""

c.style.display='none'

dropdown1.innerHTML = ""
dropdown1.innerHTML ="<option value=''>select</option>"
var myQuiz = JSON.parse(localStorage.getItem("user"))|| null;

if (myQuiz !== null) {
  categoryFetch.innerHTML =""
  categoryFetch.innerHTML ="<option value=''>select</option>"
  
  myQuiz = myQuiz.filter(el => el.status == "Live")
  for (let i = 0; i < myQuiz.length; i++) {
    dropdown1.innerHTML += `<option value="${myQuiz[i].name}">${myQuiz[i].name}</option>`
    categoryFetch.innerHTML += `<option value="${myQuiz[i].name}">${myQuiz[i].name}</option>`
  }
}

function fetchData() {
  var localStorageData = JSON.parse(localStorage.getItem("saveData"))|| null;
  var myQuiz = JSON.parse(localStorage.getItem("user"))|| null;

   if (myQuiz !== null) {
    if(dropdown1.value){
      localStorageData = localStorageData.filter(el => el.categoryFetch.toLowerCase() == dropdown1.value.toLowerCase())
    }

    if (filterSearch.value) {
      console.log(filterSearch.value);
      localStorageData = localStorageData.filter(el => el.categoryFetch.toLowerCase().startsWith(filterSearch.value.toLowerCase()) || el.question.toLowerCase().startsWith(filterSearch.value.toLowerCase()))
      
    }
    categoryFetch.innerHTML =""
    myQuiz = myQuiz.filter(el => el.status == "Live")
     for (let ind = 0; ind < myQuiz.length; ind++) {
       categoryFetch.innerHTML += `<option value="${myQuiz[ind].name}">${myQuiz[ind].name}</option>`
      }
    }
  
  if(localStorageData !== null){
    tbody1.innerHTML = ""
    for (let z = 0; z < localStorageData.length; z++) {

      let join_option = localStorageData[z].answer.map((el => {
          return el.ade
      })).join(",");

      let correctAnswer = localStorageData[z].answer.filter((el =>{
        return el.correct === true
      })).map((el => {
        return el.ade
      }))[0];
      tbody1.innerHTML +=`
      <td>${z + 1}</td>
      <td>${localStorageData[z].categoryFetch}</td>
      <td>${localStorageData[z].question}</td>
      <td>${join_option}</td>
      <td>${correctAnswer}</td>
      <td>
      <i class="fas fa-trash-alt mr-3" aria-hidden="true" style = "color :; font-size : 20px;" onclick = "deleteQuiz(${z})">delete</i>
          <i class="fas fa-edit" style = "color :;font-size : 20px; margin-left : 10px" onclick = "editModal(${localStorageData[z].id})" data-toggle="modal" data-target="#exampleMod">Edit</i>
      </td>
      `
    } 
    
  }
  
}
fetchData()

function setButton() {
  if (inputs.value == "") return alert("Please select number of question")
  questionRow.innerHTML =""
  if(Number(inputs.value) > 20 ) return false;
  c.style.display=''


  for (let i = 0; i < Number(inputs.value) ; i++) {
    console.log(i);
    questionRow.innerHTML +=`
      <div class="text-white col-md-3 ml-3 mb-3" style="background-color: green;">
        <form>
          <div class="form-group">
            <label for="" class="text-white col-form-label-lg ">Question${i + 1}</label>
            <textarea class="form-control" style="resize: none;" id="exampleForm${i}" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label for="" class="text-white col-form-label-lg" id = "">Number Of Option${i + 1}}</label>
              <div class="">
                <select class="col" name="" id="setOption${i}" onchange ="generateOptsInput(${i})">
                  <option selected>select option</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
          </div>

          <div id ="option${i}">
          
          </div>

          <div class="mt-3">
            <h3>Correct Answer${i + 1}</h3>
            <div class="" id="optionSelect${i}">
            </div>
          </div>

        </form>
      
        
        

      </div>
    `
  }
}

function generateOptsInput(inp) {
  let opt = document.querySelector(`#option${inp}`)
  let setOption = document.querySelector(`#setOption${inp}`).value
  let optSelect = document.querySelector(`#optionSelect${inp}`)
  opt.innerHTML ="" 
  optSelect.innerHTML = ""

  for (let i = 0; i < Number(setOption); i++) {
    opt.innerHTML +=`
    <div class="input-group col-sm-12 mb-3">
    <label class="sr-only" for="inlineFormInputGroup">Option</label>
      <div class="input-group-prepend">
        <div class="input-group-text">Option${i + 1}</div>
      </div>
      <input type="text" class="form-control" id="FormInputGroup${i}${inp}" placeholder="Option">
    </div>
    `
    optSelect.innerHTML +=`
    <div>
      <form action="">
        <div class="col-5 form-check">
          <input type="radio" id="customRadioInline1${i}${inp}" name="customRadioInline" value="FormInputGroup${i}${inp}" class="form-check-input${i + inp}">
          <label class="form-check-label" for="customRadioInline1${i}${inp}                                                               ">Option${i + 1}</label>
        </div>
      </form>
    <div>
    
    `
  }
};

function saveChanges() {
  let localStorageData = JSON.parse(localStorage.getItem("saveData"))|| null
  let parents = Math.floor(Math.random() * 100000) * Math.floor(Math.random() * 100000)

  let option = []
  for (let i = 0; i < Number(inputs.value); i++) {
    let obj = {
      question : document.querySelector(`#exampleForm${i}`).value,
      id : Math.floor(Math.random() * 10000),
      categoryFetch : categoryFetch.value,
      userType : "Admin",
      parents,
      answer : []
    }
    let optNo = Number(document.getElementById(`setOption${i}`).value)
    for (let index = 0; index < optNo; index++) {
      let options = {
        ade : document.getElementById(`FormInputGroup${index}${i}`).value,
        correct : document.getElementById(`customRadioInline1${index}${i}`).checked
      }
      obj.answer.push(options)
    }
    // localStorage.setItem("saveData", JSON.stringify(obj))
    if (localStorageData == null) {
      option.push(obj)
    }
    else{
      let stat = false
      option = localStorageData
      for (let i = 0; i < option.length; i++) {
        if (obj.question == option[i].question) {
          stat = true
        }
      }
      if (stat) {
        swal({
          title: "Duplicate entry question"
        })
      }
      else{
        option.push(obj)
      }
    }

   // localStorageData.push(obj)
  }
  // localStorage.setItem("saveData", JSON.stringify(obj))

  localStorage.setItem("saveData", JSON.stringify(option))
  fetchData()
}

function editModal(params) {
  var localStorageData = JSON.parse(localStorage.getItem("saveData"))
  editQuiz = params

  let obj =""

  for (let s = 0; s < localStorageData.length; s++) {
    if (localStorageData[s].id == params) {
      obj = localStorageData[s]
    }
  }
  textArea.value = obj.question;
  setOption1.value = obj.answer.length
  editOption(obj.answer)
}

function upDateModal() {
  let localStorageData = JSON.parse(localStorage.getItem("saveData"))
  if (textArea.value == "") {
    swal("input Empty")
  }
  else{
    for (let i = 0; i < localStorageData.length; i++) {
      if (localStorageData[i].id == editQuiz) {
        localStorageData[i].question = textArea.value;
      }
    }
  }
  localStorage.setItem("saveData", JSON.stringify(localStorageData))
  fetchData()
}

function deleteQuiz(ind) {
  swal({
    title: "Are you sure?",
    text: "Item will be deleted from cart",
    icon: "warning",
    buttons: true,
    dangerMode: true,
    })
  .then((willDelete) => {
    if(willDelete){
      var localStorageData = JSON.parse(localStorage.getItem("saveData"))
      if(localStorageData){
        localStorageData.splice(ind, 1);
        localStorage.setItem("saveData", JSON.stringify(localStorageData))
        console.log(localStorageData)
      }
    
      swal("Item Deleted!",{
        icon: "success",
      });
      fetchData()
    }

    else{
      swal("Item still in cart!")
      fetchData()
    }
  });
}

function editOption(optionQuestion) {
  inputOption.innerHTML = ""
  inputRadio.innerHTML =""
  let editCheck = 0
  for (let i = 0; i < optionQuestion.length; i++) {
    inputOption.innerHTML +=`
      <div class="input-group col-sm-12 mb-3">
        <label class="sr-only" for="inlineFormInputGroup">Option${i + 1}</label>
        <div class="input-group-prepend">
          <div class="input-group-text">Option${i + 1}</div>
        </div>
        <input type="text" class="form-control" value="${optionQuestion[i].ade}" id="editFormInputGroup" placeholder="Option">
      </div>
    `

    inputRadio.innerHTML +=`
      <div>
        <form action="">
          <div class="col-5 form-check"">
            <input checked="${optionQuestion[i].correct}" type="radio" id="editRadioInline1${i}" value="${optionQuestion[i].correct}" name="editcustomRadioInline" class="form-check-input">
            <label class="form-check-label" for="customRadioInline1">Option${i + 1}</label>
          </div>
        </form>
      <div>
    `
    if(optionQuestion[i].correct){
      editCheck = i
    }
  }
  document.getElementById(`editRadioInline1${editCheck}`).checked = true
}
