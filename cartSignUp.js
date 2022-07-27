let firstName = document.getElementById('firstName');
let lastName = document.getElementById('LastName');
let phoneNo = document.getElementById('PhoneNo');
let Password = document.getElementById('Password');
let confirmPassword = document.getElementById('ConfirmPassword');
let email = document.getElementById('email');

function signUp() {
    let data = {
        id : Math.floor(Math.random() * 100000),
        name : firstName.value,
        lname: lastName.value,
        phnNo : phoneNo.value,
        pWord : Password.value,
        cPassWord :confirmPassword.value,
        email : email.value,
    }

    // let status = false;
    let arr = [];
    if ((firstName.value == "" || lastName.value == "") || (phoneNo.value == "" || Password.value == "") || (confirmPassword.value == "")) {
        alert('empty input')
    }
    else if (Password.value != confirmPassword.value) {
        alert('Invalid password')
    }
    else{
        if(localStorage.getItem('users') == null) {
            arr.push(data)

        }
        else{
            arr = JSON.parse(localStorage.getItem('users'))
            if(arr.some(el => el.email == data.email)){
                return alert("Email already exist")
            }
            arr.push(data)
            // console.log(arr);
        }
        localStorage.setItem('users', JSON.stringify(arr))
        window.location.assign('cartLogin.html')    
    }
}

