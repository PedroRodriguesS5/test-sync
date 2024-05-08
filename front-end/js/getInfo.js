
const divData = document.querySelector("#wrapper-info-container")

const getUserInfo = async () => {
    const response = await fetch("http://localhost:3001/user")
    const data = await response.json()
    getData(data)
}

const getData = (data) => {

    const infoData =
        `
        <span>Nome: <strong>${data.name}</strong></span>
        <span>Idade:<strong> ${data.age}</strong></span>
        <span>Rua: <strong>${data.street}</strong></span>
        <span>Bairro: <strong>${data.neighborhood} </strong></span>
        <span>Estado: <strong>${data.state}</strong></span>
        <span>Bio: <strong>${data.bio}</strong></span>`
    const newDiv = document.createElement('div')
    newDiv.innerHTML = infoData;
    newDiv.classList.add('info-container');
    divData.appendChild(newDiv)
}
getUserInfo()