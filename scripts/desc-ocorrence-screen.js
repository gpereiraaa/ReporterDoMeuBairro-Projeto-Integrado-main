"use strict"

let inputDesc = document.getElementById("descOcorrence-input")
let inputCep = document.getElementById("cepOcorrence-input")
let inputStreetName = document.getElementById("streetNameOcorrence-input")
let inputComplement = document.getElementById("complementOcorrence-input")
let inputTel = document.getElementById("telOcorrence-input")
let inputCity = document.getElementById("city-desc")
let inputStatus = document.getElementById("status-desc")
let backPage = document.getElementById("back-page")
const imagem = document.getElementById("preview")

const item = localStorage.getItem('item');
const itemJson = JSON.parse(item)

inputDesc.value = itemJson.descricao
inputCep.value = itemJson.cep
inputStreetName.value = itemJson.logradouro
inputCity.textContent = itemJson.cidade
inputComplement.value = itemJson.complemento
inputTel.value = itemJson.telefone
inputStatus.textContent = itemJson.status
imagem.src = itemJson.caminho_arquivo


let updateOcorrence = document.getElementById("update-ocorrence")
updateOcorrence.addEventListener("click", function () {
    window.location.href = './update-desc-ocorrence.html'
})
backPage.addEventListener("click", function () {
    window.location.href = './main-screen.html'
})
let bntNewOcorrence = document.getElementById("bnt-new-ocorrence")

bntNewOcorrence.addEventListener("click", function () {
    window.location.href = './new-ocorrence-screen.html'
})