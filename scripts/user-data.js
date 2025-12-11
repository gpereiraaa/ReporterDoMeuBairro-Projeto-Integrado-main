"use strict"

let backPage = document.getElementById("back-page")
let editUserData = document.getElementById("edit-userData")

backPage.addEventListener("click", function () {
    window.location.href = './main-screen.html'
})

editUserData.addEventListener("click", function () {
    window.location.href = './update-user-data.html'
})

let bntNewOcorrence = document.getElementById("bnt-new-ocorrence")
bntNewOcorrence.addEventListener("click", function () {
    window.location.href = './new-ocorrence-screen.html'
})

let userInformation = document.getElementById("user-information")
userInformation.addEventListener("click", function(){
    window.location.href = "./user-data.html"
})
async function buscarDadosUsuario(id) {
    try {
        const url = `http://localhost:8080/v1/reporter/usuario/cidadao/${id}`
        const response = await fetch(url)
        const dados = await response.json()
        return dados
    } catch (error) {
        return error
    }
}

async function buscarDadosEnderecoUsuario(id) {
    try {
        const url = `http://localhost:8080/v1/reporter/usuario/cidadao/${id}`
        const response = await fetch(url)
        const dados = await response.json()
        return dados
    } catch (error) {
        return error
    }
}

const nomeCamp = document.getElementById('name-input')
const emailCamp = document.getElementById('email-input')
const telefoneCamp = document.getElementById('telefone-input')
const cpfCamp = document.getElementById('cpf-input')

const preencherCamposUsuario = async function (id) {
    try {
        const dados = await buscarDadosUsuario(id)

        dados.response.usuario.forEach(dataUser => {
            let nome = dataUser.nome  
            let email = dataUser.email  
            let telefone = dataUser.telefone  
            let cpf = dataUser.cpf

            nomeCamp.value = nome
            emailCamp.value = email
            telefoneCamp.value = telefone
            cpfCamp.value = cpf
        })
    } catch (error) {
        
    }
}

preencherCamposUsuario(41)