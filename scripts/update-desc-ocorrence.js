"use strict"

const item = localStorage.getItem('item');
const itemJson = JSON.parse(item)

let newInputDesc = document.getElementById("newDescOcorrence-input")
let newInputCep = document.getElementById("newCepOcorrence-input")
let newInputStreetName = document.getElementById("NewStreetNameOcorrence-input")
let newInputComplement = document.getElementById("NewComplementOcorrence-input")
let newInputTel = document.getElementById("NewTelOcorrence-input")
let newInputStatus = document.getElementById("newStatus-desc")
let newInputCity = document.getElementById("newCity-desc")
let backPage = document.getElementById("back-page")


newInputDesc.value = itemJson.descricao
newInputCep.value = itemJson.cep
newInputStreetName.value = itemJson.logradouro
newInputCity.textContent = itemJson.cidade
newInputComplement.value = itemJson.complemento
newInputTel.value = itemJson.telefone
newInputStatus.textContent = itemJson.status

const imageInput = document.getElementById('foto');

imageInput.addEventListener("change", function () {
    const previewImage2 = document.getElementById('preview-image');
    previewImage2.src = URL.createObjectURL(imageInput.files[0])
})

backPage.addEventListener("click", function () {
    window.location.href = './desc-ocorrence-screen.html'
})
let bntNewOcorrence = document.getElementById("bnt-new-ocorrence")
bntNewOcorrence.addEventListener("click", function () {
    window.location.href = './new-ocorrence-screen.html'
})

async function pesquisarCep(cepNewOcorrence) {
    const url = `https://viacep.com.br/ws/${cepNewOcorrence}/json/`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function preencherCampos({ target }) {
    const infoCep = await pesquisarCep(target.value)
    document.getElementById('NewStreetNameOcorrence-input').value = infoCep.logradouro
    document.getElementById('newCity-desc').value = infoCep.localidade
}

document.getElementById('newCepOcorrence-input').addEventListener("focusout", preencherCampos)


async function updateOcorrence(formDataCompleto, id) {
    const url = `http://localhost:8080/v1/reporter/ocorrencia/${id}`

    const options = {
        'method': 'PUT',
        'body': formDataCompleto
    }

    const response = await fetch(url, options)

    if (!response.ok) {
        const errorData = await response.text();
        console.error("Erro na API:", errorData)
    }

    return response.ok;
}


const buttonUpdateOcorrence = document.getElementById("bnt-update")

buttonUpdateOcorrence.addEventListener("click", async function () {
    console.log('batata')
    let id = itemJson.id

    const descInputNewOcorrence = document.getElementById("newDescOcorrence-input").value
    const streetNameNewOcorrence = document.getElementById("NewStreetNameOcorrence-input").value
    const complementInputNewOcorrence = document.getElementById("NewComplementOcorrence-input").value
    const telInputNewOcorrence = document.getElementById("NewTelOcorrence-input").value
    const cepInputNewOcorrence = document.getElementById("newCepOcorrence-input").value

    const imageInput = document.getElementById("foto")

    const data = await pesquisarCep(cepInputNewOcorrence)
    const bairroValue = data.bairro
    const cidadeValue = data.localidade
    const estadoValue = data.uf

    const formData = new FormData()

    const file = imageInput.files[0]
    if (file) {
        formData.append('midia', file, file.name)
    }

    formData.append("id_usuario_cidadao", "1")
    formData.append("id_categoria", "3")
    formData.append("id_admin_fechamento", "1")
    formData.append("descricao", descInputNewOcorrence)
    formData.append("data_registro", "2025-04-12")
    formData.append("status", "pendente")
    formData.append("email", "ana.carolina@mail.com")
    formData.append("telefone", telInputNewOcorrence)
    formData.append("logradouro", streetNameNewOcorrence)
    formData.append("bairro", bairroValue);
    formData.append("complemento", complementInputNewOcorrence)
    formData.append("cidade", cidadeValue)
    formData.append("estado", estadoValue)
    formData.append("tipo", "imagem")
    formData.append("nome", "Gustavo")
    formData.append("cep", cepInputNewOcorrence)

    console.log("Enviando FormData...")
    const sucesso = await updateOcorrence(formData, id)

    if (sucesso) {
        alert("Ocorrência atualizada com sucesso!")
    } else {
        alert("Houve um erro ao registrar a ocorrência.")
    }
})