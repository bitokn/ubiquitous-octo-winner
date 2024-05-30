createButton = function (_value, area) {
    const new_button = document.createElement("button")
    new_button.innerHTML = _value
    new_button.onclick = function () {
        let bruhNode = document.createElement("p")
        bruhNode.innerHTML = _value
        area.appendChild(bruhNode)
    }
    return new_button
}


window.onload = function () {
    const emojiArea = document.getElementById("emojiArea")
    const buttonArea = document.getElementById("buttonArea")

    for (let i = 0; i < 9; i++) {
        let emojiValue = "&#12851" + i + ";"
        if ((i % 3) == 0) {
            buttonArea.appendChild(document.createElement("br"))
        }

        buttonArea.appendChild(createButton(`${emojiValue}`, emojiArea))

    }
}