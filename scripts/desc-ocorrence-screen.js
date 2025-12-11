"use strict"

let inputDesc = document.getElementById("desc-input")
let inputCep = document.getElementById("cep-input")
let inputStreetName = document.getElementById("street-name-input")
let inputComplement = document.getElementById("complement-input")
let inputTel = document.getElementById("tel-input")
let inputCity = document.getElementById("city")
let inputStatus = document.getElementById("status")
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

let comentInput = document.getElementById("coment-input")
let comentBtn = document.getElementById("coment-btn")

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

// comentBtn.addEventListener("click", async function sentComents() {
//     let comentValue = comentInput.value
//     let dataAtual = getDate()
//     let comentArray = {
//         "texto": `${comentValue}`,
//         "data": `${dataAtual}`,
//         "id_usuario": itemJson.id_usuario,
//         "id_ocorrencia": itemJson.id_ocorrencia
//     }

//     const url = `http://localhost:8080/v1/reporter/comentario/`

//     const options = {
//         'method': 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         'body': JSON.stringify(comentArray)
//     }
//     const response = await fetch(url, options)
//     return response.ok
// })
// let idOcorrencia = itemJson.id_ocorrencia
// async function getComents(idOcorrencia) {
//     try {
//         const url = `http://localhost:8080/v1/reporter/comentario/${idOcorrencia}`
//         const response = await fetch(url)
//         const dados = await response.json()
//         return dados
//     } catch (error) {
//         return error
//     }

// }
// async function createComents(){
//     let commentsCards = document.getElementById("comments-cards")
//     let coments = await getComents() 
//     coments.response.forEach(function(item){
//         let name = item.id_usuario
//         let text = item.texto
//     })
// }