const btn = document.querySelector("#save-button")

btn.addEventListener("click", () => {
    const info = getDataForm()
    sendData(info)
})

const getDataForm = () => {
    const inputName = document.querySelector("#inputName")
    const inputAge = document.querySelector("#inputAge")
    const inputStreet = document.querySelector("#inputStreet")
    const inputNeighborhood = document.querySelector("#inputNeighborhood")
    const inputState = document.querySelector("#inputState")
    const inputBio = document.querySelector("#inputBio")

    const infoUser = {
        name: inputName.value,
        age: inputAge.value,
        street: inputStreet.value,
        neighborhood: inputNeighborhood.value,
        state: inputState.value,
        bio: inputBio.value
    }
    return infoUser
}

const sendData = async (dataUpdate) => {
    const response = await fetch("http://localhost:3001/user/update", {
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataUpdate)
    })

    if (response.status === 204) {
        cleanFields()
    }

}

const cleanFields = () => {
    document.querySelector("#name").value = ""
    document.querySelector("#age").value = ""
    document.querySelector("#street").value = ""
    document.querySelector("#neigborhood").value = ""
    document.querySelector("#state").value = ""
    document.querySelector("#bio").value = ""
}