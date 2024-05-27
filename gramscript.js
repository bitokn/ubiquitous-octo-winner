window.onload = function () {
    const button_250 = document.getElementById("250ml")
    const button_500 = document.getElementById("500ml")
    const bottle = document.getElementById("bottle")
    const new_measure_button = document.getElementById("new_measure_button")
    const new_measure = document.getElementById("new_measure")
    let filled = 0
    button_250.onclick = function () {
        filled += 250
        bottle.value = filled
    }
    button_500.onclick = function () {
        filled += 500
        bottle.value = filled
    }
    new_measure_button.onclick = function () {
        let theText = new_measure.value;
        const grutton = document.createElement("button");
        grutton.setAttribute("type", "button");
        let id_str = 'button_' + theText
        console.log(id_str)
        grutton.setAttribute("id", id_str);
        grutton.innerHTML = theText + "g";
        document.body.insertAdjacentElement("afterend", grutton)
    }
}
