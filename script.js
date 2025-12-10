"use strict"

let header = document.getElementById("header")
let subHeader = document.getElementById("sub-header")


let cepNewOcorrence = document.getElementById("cep-input-new-ocorrence")

// Telas
let ocorrenceDescScreen = document.getElementById("ocorrenceDesc-screen")
let newOcorrenceScreen = document.getElementById("newOcorrence-screen")
let userDataScreen = document.getElementById("user-data")
let NewUserDataScreen = document.getElementById("NewUser-data")
let UpdatedOcorrenceDescScreen = document.getElementById("UpdatedOcorrenceDesc-screen")

// botoes header
let userInformation = document.getElementById("user-information");
let userNotification = document.getElementById("user-notification");
let newOcorrence = document.getElementById("bnt-new-ocorrence")

let backPage_NewOcorrenceMain = document.getElementById("back-page-NewOcorrence-main")
let backPage_DescOcorrenceMain = document.getElementById("back-page-DescOcorrence-main")
let backPage_UserDataMain = document.getElementById("back-page-UserData-main")
let backPage_newUserDataUserData = document.getElementById("back-page-newUserData-userData")

let edit_userData = document.getElementById("edit-userData")








newOcorrence.addEventListener("click", function () {
    subHeader.classList.add("invisible")
    subHeader.classList.remove("sub-header")

    mainScreen.classList.add("invisible")
    mainScreen.classList.remove("main-screen")

    newOcorrenceScreen.classList.remove("invisible")
    newOcorrenceScreen.classList.add("newOcorrence-screen")

    ocorrenceDescScreen.classList.remove("ocorrenceDesc-screen")
    ocorrenceDescScreen.classList.add("invisible")

    userDataScreen.classList.remove("user-data")
    userDataScreen.classList.add("invisible")
})

userInformation.addEventListener("click", function () {
    subHeader.classList.add("invisible")
    subHeader.classList.remove("sub-header")

    newOcorrenceScreen.classList.add("invisible")
    newOcorrenceScreen.classList.remove("newOcorrence-screen")

    ocorrenceDescScreen.classList.remove("ocorrenceDesc-screen")
    ocorrenceDescScreen.classList.add("invisible")

    mainScreen.classList.add("invisible")
    mainScreen.classList.remove("main-screen")

    userDataScreen.classList.add("user-data")
    userDataScreen.classList.remove("invisible")
})

backPage_NewOcorrenceMain.addEventListener("click", function () {
    subHeader.classList.remove("invisible")
    subHeader.classList.add("sub-header")

    newOcorrenceScreen.classList.add("invisible")
    newOcorrenceScreen.classList.remove("newOcorrence-screen")

    mainScreen.classList.remove("invisible")
    mainScreen.classList.add("main-screen")
})

backPage_DescOcorrenceMain.addEventListener("click", function () {
    subHeader.classList.remove("invisible")
    subHeader.classList.add("sub-header")

    ocorrenceDescScreen.classList.add("invisible")
    ocorrenceDescScreen.classList.remove("ocorrenceDesc-screen")

    mainScreen.classList.remove("invisible")
    mainScreen.classList.add("main-screen")
})
backPage_UserDataMain.addEventListener("click", function () {
    subHeader.classList.remove("invisible")
    subHeader.classList.add("sub-header")

    userDataScreen.classList.add("invisible")
    userDataScreen.classList.remove("user-data")

    mainScreen.classList.remove("invisible")
    mainScreen.classList.add("main-screen")
})
edit_userData.addEventListener("click", function () {
    userDataScreen.classList.add("invisible")
    userDataScreen.classList.remove("user-data")

    NewUserDataScreen.classList.remove("invisible")
    NewUserDataScreen.classList.add("user-data")
})
backPage_newUserDataUserData.addEventListener("click", function () {
    userDataScreen.classList.remove("invisible")
    userDataScreen.classList.add("user-data")

    NewUserDataScreen.classList.add("invisible")
    NewUserDataScreen.classList.remove("user-data")
})
backPage_updateOcorrenceDescOcorrence.addEventListener("click", function () {
    UpdatedOcorrenceDescScreen.classList.remove("UpdatedOcorrenceDesc-screen")
    UpdatedOcorrenceDescScreen.classList.add("invisible")

    ocorrenceDescScreen.classList.add("ocorrenceDesc-screen")
    ocorrenceDescScreen.classList.remove("invisible")
})