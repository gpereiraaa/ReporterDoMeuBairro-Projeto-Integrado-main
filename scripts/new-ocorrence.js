"use strict"

let saveOcorrence = document.getElementById("bnt-new-ocorrence-2")
let backPage = document.getElementById("back-page")

async function pesquisarCep(cepNewOcorrence) {
    const url = `https://viacep.com.br/ws/${cepNewOcorrence}/json/`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function preencherCampos({ target }) {
    const infoCep = await pesquisarCep(target.value)
    document.getElementById('street-name-new-ocorrence').value = infoCep.logradouro
    document.getElementById('city-input').value = infoCep.localidade
}

document.getElementById('cep-input-new-ocorrence').addEventListener("focusout", preencherCampos)

saveOcorrence.addEventListener("click", async function () {

    const descInputNewOcorrence = document.getElementById("desc-input-new-ocorrence").value
    const streetNameNewOcorrence = document.getElementById("street-name-new-ocorrence").value
    const complementInputNewOcorrence = document.getElementById("complementOcorrence-input-new-ocorence").value
    const telInputNewOcorrence = document.getElementById("tel-input-new-ocorence").value
    const cepInputNewOcorrence = document.getElementById("cep-input-new-ocorrence").value
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
    const sucesso = await createOcorrence(formData)

    if (sucesso) {
        alert("Ocorrência registrada com sucesso!")
    } else {
        alert("Houve um erro ao registrar a ocorrência.")
    }
})


const imageInput = document.getElementById('foto');

imageInput.addEventListener("change", function () {
    const previewImage = document.getElementById('preview-image');
    previewImage.src = URL.createObjectURL(imageInput.files[0])
})


async function createOcorrence(formDataCompleto) {
    const url = `http://localhost:8080/v1/reporter/ocorrencia/`

    const options = {
        'method': 'POST',
        'body': formDataCompleto
    }

    const response = await fetch(url, options)
    
    if (!response.ok) {
        const errorData = await response.text();
        console.error("Erro na API:", errorData)
    }
    
    return response.ok;
}

backPage.addEventListener("click", function () {
    window.location.href = './main-screen.html'
})