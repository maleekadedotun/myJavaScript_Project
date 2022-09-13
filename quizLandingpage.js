let landSearch = document.querySelector("#landSearch");
let questionIn = document.querySelector("#questionIn");
landSearch.innerHTML = "<option value=''>select</option>"




var myQuiz = JSON.parse(localStorage.getItem("user"))|| null;
if (myQuiz !== null) {
  myQuiz = myQuiz.filter(el => el.status == "Live")
  
  for (let i = 0; i < myQuiz.length; i++) {
    landSearch.innerHTML +=`<option value="${myQuiz[i].name}">${myQuiz[i].name}</option>`
  
  }
}
let quizez = []

function questionView() {
  var localStorageData = JSON.parse(localStorage.getItem("saveData"));
  if (localStorageData !== null) {
    
  
    questionIn.innerHTML = ""
    
    if (landSearch.value) {      
      localStorageData = localStorageData.filter(el => el.categoryFetch.toLowerCase() == landSearch.value.toLowerCase())
      if (localStorageData == ""){
          return questionIn.innerHTML = `<h3 id="Norecords">No records found for selected quiz! please select any other.</h3>`
        }
        for (let i = 0; i < localStorageData.length; i++) {
          let relatedQuiz = []
          localStorageData.forEach((element, ind) =>{
            if(localStorageData[i].parents == element.parents){
              relatedQuiz.push(element)
            }
          })
          let filteredRelatedQuiz = relatedQuiz.filter(el => {
            let status = true
            quizez.forEach((ele, ind) => {
              for (let indx = 0; indx < quizez[ind].length; indx++) {
                // console.log(quizez[ind][indx].id);
                if(quizez[ind][indx].id == el.id){
                  status = false
                }
              }
            })
            return status
          })  
  
        if(filteredRelatedQuiz.length) quizez.push(filteredRelatedQuiz)
        // console.log(filteredRelatedQuiz);
        
      }
    }

      
    for (let i = 0; i < quizez.length; i++) {          
      questionIn.innerHTML +=`
        <div class="pb-5">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-body">
                <div class="row">
                <div class="col-6">
                  <h5 class="card-title">${landSearch.value}</h5>
                </div>
                <div class="col-6">
                  <h1 class="card-text" style="float: right;">${quizez[i].length}</h1>  
                </div>
                </div>    
                <button class="btn btn-success btn-lg" onclick="takeQuiz(${i})">Take-Quiz</button>
              </div>
            </div>
          </div>
        </div>
      ` 
    }
  }
}

function takeQuiz(take) {
  var usersDetails = JSON.parse(localStorage.getItem("users"));
  loginStatus = false
usersDetails.some(el =>{
    if (el.email || el.password || el.phoneNo) {
      loginStatus = true
      authName = el
    }
    if (loginStatus) {
      let quizData = []
      quizez.forEach((element, i) => {
        if(i == take) {
          quizData = element
        }
        // console.log(take);
        // console.log(quizData);
      });
      localStorage.setItem("quiz", JSON.stringify(quizData))
      // console.log(quizData);
       window.location.assign("quizPage.html")
    } 
  });

  
  
}
