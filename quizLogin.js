var emailPhoneNo = document.querySelector('#colFormLabelSm');
var pWord = document.querySelector('#colFormLabel');

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

function login(){
    let dataLogin = {
        emailPhoneNo : emailPhoneNo.value,
        pWord : pWord.value,
    }

    let users = JSON.parse(localStorage.getItem('users'))
    console.log(users);
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
       for (let i = 0; i < users.length; i++) {
            if (users[i].userType == "user") {
                window.location.assign("quizLandingPage.html")
            }
            else{
                location.assign("quizDashBar.html")
                localStorage.setItem("loginUser", JSON.stringify(obj))
            }
        }
   }

}

