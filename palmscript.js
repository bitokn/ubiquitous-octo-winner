window.onload = function () {
    const output = document.getElementById('diceoutput')
    const button = document.getElementById('dicebutton')
    button.onclick = function () {
        let x = Math.floor(Math.random() * 6) + 1
        output.innerHTML = x
        console.log(x)
    }
}