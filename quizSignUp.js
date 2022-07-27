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
        arr = []

    if (fullName.value == "" || phoneNo.value == "" || email.value =="" ||  password.value == "" || cPassWord.value =="") {
        swal(' Input cannot be empty')
    }
    else if(password.value != cPassWord.value){
        swal('Invalid Password')
    }
    else{
        if (localStorage.getItem('users') == null) {
            arr.push(data)
        }
        else{
            arr = JSON.parse(localStorage.getItem('users'))
            if (arr.some(el => el.email == data.email)) {
                return alert('Email already exist');
            }
            arr.push(data)
        }
        localStorage.setItem('users', JSON.stringify(arr))
        window.location.assign('quizLogin.html')

    }
   
}
