"use strict"

let registerBtn = document.getElementById("btn-register")

let cepNewOcorrence = document.getElementById("cep-input")
let logradouro = document.getElementById('street-name-input')
let cidade = document.getElementById('city-input')
let estado = document.getElementById('state-input')
let nome = document.getElementById("name-input")
let email = document.getElementById("email-input")
let complements = document.getElementById("complements-input")
let cpf = document.getElementById("cpf-input")
let tel = document.getElementById("tel-input")
let number = document.getElementById("street-number-input")
let password = document.getElementById("password-input")

async function pesquisarCep(cepNewOcorrence) {
    const url = `https://viacep.com.br/ws/${cepNewOcorrence}/json/`

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function preencherCampos({ target }) {
    const infoCep = await pesquisarCep(target.value)
    document.getElementById('street-name-input').value = infoCep.logradouro
    document.getElementById('city-input').value = infoCep.localidade
    document.getElementById('state-input').value = infoCep.estado
}


document.getElementById('cep-input').addEventListener("focusout", preencherCampos)

registerBtn.addEventListener("click", async function (event) {
    
    let usuarios = {
        "nome": `${nome.value}`,
        "email": `${email.value}`,
        "telefone": `${tel.value}`,
        "cpf": `${cpf.value}`,
        "logradouro": `${logradouro.value}`,
        "numero": `${number.value}`,
        "complemento": `${complements.value}`,
        "cidade": `${cidade.value}`,
        "estado": `${estado.value}`,
        "cep": `${cepNewOcorrence.value}`,
        "numero": `${number.value}`,
        "senha": `${password.value}`
    };
    console.log(usuarios)
    await inserirUser(usuarios)
    // await verifyPassword(usuarios)

    window.location.href = '../pages/main-screen.html'
})


async function inserirUser(usuario) {

    const url = `http://localhost:8080/v1/reporter/usuario/cidadao/`

    const options = {
        'method': 'POST',
        headers: {
            'content-type': 'application/json'
        },
        'body': JSON.stringify(usuario)
    }
    const response = await fetch(url, options)
    return response.ok
}
