var fullName = document.querySelector('#Full-Name');
var phoneNo =document.querySelector('#Phone-Number');
var email = document.querySelector('#Email');
var password = document.querySelector('#Password');
var cPassWord = document.querySelector('#Confirm-Password');

function signUp() {
    let data = {
        fullName : fullName.value,
        phoneNo : phoneNo.value,
        email  : email.value,
        password : password.value,
        cPassWord : cPassWord.value,
        userType : 'user'
    }
    let arr = []    

    if (fullName.value == "" || phoneNo.value == "" || email.value =="" ||  password.value == "" || cPassWord.value =="") {
        alert(' Input cannot be empty')
    }
    else if(password.value != cPassWord.value){
       alert('Invalid Password')
    }
    else{
        if (localStorage.getItem('users') == null) {
            arr.push(data)
        }
        else{
          arr = JSON.parse(localStorage.getItem("users"))
          // console.log(arr);
          const even = (el) => el.email === data.email;
            if (arr.some(el => el.email == data.email)) {
              return  alert('Email already exist');
            }
            arr.push(data)
            // console.log(arr);
        }
        localStorage.setItem("users", JSON.stringify(arr))
        window.location.assign('quizLogin.html')

    }

}

if(localStorage.getItem('users') == null) {
    localStorage.setItem('users', JSON.stringify([{
      fullName: "Admin",
      email: "admin@admin.com",
      phoneNo: 08141687496,
      password: 123456789,
      userType: 'admin'
    }]))
  } else {
    let records = JSON.parse(localStorage.getItem('users'));

    if(records.some(el => el.email.toLowerCase() == 'admin@admin.com' || el.fullName.toLowerCase() == 'admin') == false) {
      records.push({
        fullName: "Admin",
        email: "admin@admin.com",
        phoneNo: 08141687496,
        password: 123456789,
        userType: 'admin'
      })
    }
    localStorage.setItem('users', JSON.stringify(records))
  }
