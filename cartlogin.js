let phone2 = document.getElementById('phone2');
let pwd = document.getElementById('pwd');

function login() {
    let loginData = {
        id: Math.floor(Math.random() * 100000),
        phone2 : phone2.value,
        pwd : pwd.value,
    }

    let obj  = []
    let status = false;
    let users = JSON.parse(localStorage.getItem('users'))
    

    users.some(el => {
    if(el.phnNo == loginData.phone2 && el.pWord == loginData.pwd)
        status = true
        obj = el
    });
    if (status) {
        alert('Login successful')
        localStorage.setItem('authName', JSON.stringify(obj))
        window.location.assign('cartShopping.html')

    }

    else{
        alert('invalid credentials')
    }

}