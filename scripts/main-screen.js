"use strict"

//import fake from '../ocorrence-fake.json' with {type: 'json'}

let mainScreen = document.getElementById("main-screen")
let dataInput = document.getElementById("data-input")

// let comboStatus = document.getElementById("combo-status")
// let selected = comboStatus.options[comboStatus.selectedIndex]

// comboStatus.addEventListener("change", function(){
//     console.log(selected.text)
// })

async function buscarOcorrencias() {
    try {
        const url = `http://localhost:8080/v1/reporter/ocorrencia`
        const response = await fetch(url)
        const dados = await response.json()
        return dados
    } catch (error) {
        return error
    }

}

const criarOcorrencias = async function () {
    try {
        const ocorrencias = await buscarOcorrencias()
        mainScreen.textContent = ""
        ocorrencias.response.ocorrencias.forEach(function (item) {
            let divCard = document.createElement("div")
            let cardSection = document.createElement("div")
            let cardInfo1 = document.createElement("h2")
            let cardInfo2 = document.createElement("h3")
            let cardImg = document.createElement("img")
    
            cardInfo1.textContent = `${item.logradouro}, ${item.cidade}`
            cardInfo1.classList.add("card-info-top")
    
            cardInfo2.textContent = item.nome_categoria
            cardInfo2.classList.add("card-info-bottom")
    
            cardSection.appendChild(cardInfo1)
            cardSection.appendChild(cardInfo2)
    
            cardImg.src = item.caminho_arquivo
    
            divCard.appendChild(cardSection)
            divCard.appendChild(cardImg)
            divCard.classList.add("card")
            mainScreen.appendChild(divCard)
    
    
            divCard.addEventListener('click', function () {
                let itemEscolido = item
                localStorage.setItem('item', JSON.stringify(itemEscolido))
                window.location.href = './desc-ocorrence-screen.html'
            })
        })
    } catch (error) {
        const erro = document.createElement('h3')
        erro.textContent = 'Nenhuma ocorrencia encontrada'
        mainScreen.appendChild(erro)
    }
}

criarOcorrencias()

async function fiterBydata() {
    let dataValue = dataInput.Value


    let dataArray = dataValue.split("-")
    const url = `http://localhost:8080/v1/reporter/ocorrencia/data?ano=${dataArray[0]}&mes=${dataArray[1]}&dia=${dataArray[2]}`
    const response = await fetch(url)
    const dados = await response.json()
    return dados
}

const criarOcorrenciasFiltradasPorData = async function () {
        mainScreen.textContent = ""
    try {
        const ocorrencias = await fiterBydata()

        ocorrencias.response.ocorrencias.forEach(function (item) {
            let divCard = document.createElement("div")
            let cardSection = document.createElement("div")
            let cardInfo1 = document.createElement("h2")
            let cardInfo2 = document.createElement("h3")
            let cardImg = document.createElement("img")
    
            cardInfo1.textContent = `${item.logradouro}, ${item.cidade}`
            cardInfo1.classList.add("card-info-top")
    
            cardInfo2.textContent = item.nome_categoria
            cardInfo2.classList.add("card-info-bottom")
    
            cardSection.appendChild(cardInfo1)
            cardSection.appendChild(cardInfo2)
    
            cardImg.src = item.caminho_arquivo
    
            divCard.appendChild(cardSection)
            divCard.appendChild(cardImg)
            divCard.classList.add("card")
            mainScreen.appendChild(divCard)
    
    
            divCard.addEventListener('click', function () {
                let itemEscolido = item
                localStorage.setItem('item', JSON.stringify(itemEscolido))
                window.location.href = './desc-ocorrence-screen.html'
            })
        })
    } catch (error) {
        const erro = document.createElement('h3')
        erro.textContent = 'Nenhuma ocorrencia encontrada'
        mainScreen.appendChild(erro)
    }
}

// async function fiterByStatus() {
//     const url = `http://localhost:8080/v1/reporter/ocorrencia/status?status=${selected}`
//     const response = await fetch(url)
//     const dados = await response.json()
//     return dados
// }

// const criarOcorrenciasFiltradasPorStatus = async function () {
//     mainScreen.textContent = ""
// try {
//     const ocorrencias = await fiterByStatus()

//     ocorrencias.response.ocorrencias.forEach(function (item) {
//         let divCard = document.createElement("div")
//         let cardSection = document.createElement("div")
//         let cardInfo1 = document.createElement("h2")
//         let cardInfo2 = document.createElement("h3")
//         let cardImg = document.createElement("img")

//         cardInfo1.textContent = `${item.logradouro}, ${item.cidade}`
//         cardInfo1.classList.add("card-info-top")

//         cardInfo2.textContent = item.nome_categoria
//         cardInfo2.classList.add("card-info-bottom")

//         cardSection.appendChild(cardInfo1)
//         cardSection.appendChild(cardInfo2)

//         cardImg.src = item.caminho_arquivo

//         divCard.appendChild(cardSection)
//         divCard.appendChild(cardImg)
//         divCard.classList.add("card")
//         mainScreen.appendChild(divCard)


//         divCard.addEventListener('click', function () {
//             let itemEscolido = item
//             localStorage.setItem('item', JSON.stringify(itemEscolido))
//             window.location.href = './desc-ocorrence-screen.html'
//         })
//     })
// } catch (error) {
//     const erro = document.createElement('h3')
//     erro.textContent = 'Nenhuma ocorrencia encontrada'
//     mainScreen.appendChild(erro)
// }
// }

let bntNewOcorrence = document.getElementById("bnt-new-ocorrence")
bntNewOcorrence.addEventListener("click", function () {
    window.location.href = './new-ocorrence-screen.html'
})

dataInput.addEventListener("focusout", criarOcorrenciasFiltradasPorData)