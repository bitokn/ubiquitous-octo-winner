window.onload = function () {
    const button_0 = document.getElementById("button_empty")
    const bottle = document.getElementById("bottle")
    const new_measure_button = document.getElementById("new_measure_button")
    const new_measure = document.getElementById("new_measure")
    const buttonContainer = document.getElementById('buttonContainer');
    let filled = 0

    button_0.onclick = function () {
        filled = 0
        bottle.value = filled
    }
    createButton = function (amount) {
        let inputText = amount;
        const grutton = document.createElement("button");
        grutton.setAttribute("type", "button");
        let id_str = 'button_' + inputText
        grutton.setAttribute("id", id_str);
        grutton.innerHTML = inputText + "g";
        grutton.onclick = function () {
            filled += parseInt(amount);
            bottle.value = filled;
        };
        return grutton;
    }

    buttonContainer.appendChild(createButton(250))
    buttonContainer.appendChild(createButton(500)) // default buttons

    new_measure_button.onclick = function () {
        const new_button = createButton(new_measure.value)
        console.log(new_button)
        buttonContainer.appendChild(new_button);
    }
}
