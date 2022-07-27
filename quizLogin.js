var emailPhoneNo = document.querySelector('#colFormLabelSm');
var pWord = document.querySelector('#colFormLabel');

function login(){
    let dataLogin = {
        emailPhoneNo : emailPhoneNo.value,
        pWord : pWord.value,
    }

    let users = JSON.parse(localStorage.getItem('users'))
    let status = false
    obj = {}

    users.some(el => {
        if (el.email == dataLogin.emailPhoneNo || el.password == dataLogin.pWord || el.phoneNo == dataLogin.emailPhoneNo) {
            status = true
            obj = el
        }
    })
   if (status) {
       alert('Login Successful')
       localStorage.setItem('authName', JSON.stringify(obj))
       window.location.assign('quizDashBar.html')
   }
   else{
       alert('Invalid Credentials')
   }
}