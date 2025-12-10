"use strict"

let logInBtn = document.getElementById("btn-logIn")



logInBtn.addEventListener("click", async function () {

    let emailInput = document.getElementById("email-input").value
    let passwordInput = document.getElementById("password-input").value
    const usuarios = {
        "senha":`${passwordInput}`
    }

    await verifyPassword(usuarios, emailInput)

    //window.location.href = './pages/main-screen.html'
})


async function verifyPassword(usuario, email) {

    const url = `http://localhost:8080/v1/reporter/autenticacao/?email=${email}`

    const options = {
        'method': 'POST',
        headers: {
            'content-type': 'application/json'
        },
        'body': JSON.stringify(usuario)
    }
    const response = await fetch(url, options)
    console.log(response)
    return response.ok
}
