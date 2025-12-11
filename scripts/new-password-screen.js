"use strict"

let NewPasswordBtn = document.getElementById("btn-newPassword")

NewPasswordBtn.addEventListener("click", function () {
    if(verifiedPassword.status_code == 200){
        window.location.href = './pages/main-screen.html'
    }else{
        return
    }
})