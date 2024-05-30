createButton = function (_value, area) {
    const new_button = document.createElement("button")
    new_button.innerHTML = _value
    new_button.id = "button_" + _value[7]
    // console.log(new_button.id)
    new_button.onclick = function () {
        emojiField.innerHTML += _value
    }
    return new_button
}


window.onload = function () {
    const emojiArea = document.getElementById("emojiArea")
    const buttonArea = document.getElementById("buttonArea")
    const emojiField = document.getElementById("emojiField")
    for (let i = 0; i < 9; i++) {
        let emojiValue = "&#12851" + i + ";"
        if ((i % 3) == 0) {
            buttonArea.appendChild(document.createElement("br"))
        }

        buttonArea.appendChild(createButton(`${emojiValue}`, emojiField))

    }
    // for (let i = 0; i < 10000; i++) {
    //     button_1.onclick()
    // }
}