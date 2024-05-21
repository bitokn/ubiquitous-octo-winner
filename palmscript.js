window.onload = function () {
    const output = document.getElementById('diceoutput')
    const button = document.getElementById('dicebutton')
    button.onclick = function () {
        let x = Math.floor(Math.random() * 6) + 1
        output.innerHTML = x
        console.log(x)
    }
    let n = 50
    const double_output = document.getElementById('doubleoutput')
    const double_button = document.getElementById('doubledice')
    let dbl_button_str = ""
    for (let i = 0; i < n; i++) {
        dbl_button_str = dbl_button_str + "&#x1F3B2;"
    }
    double_button.innerHTML = dbl_button_str
    double_button.onclick = function () {
        // let x = Math.floor(Math.random() * 6) + 1
        // let y = Math.floor(Math.random() * 6) + 1
        // double_output.innerHTML = String(x) + " " + String(y)
        // console.log(x)
        // console.log(y)
        let dbl_output_Str = ""
        for (let i = 0; i < n; i++) {
            let x = Math.floor(Math.random() * 6) + 1
            dbl_output_Str += x + " "
            console.log(x)
        }
        double_output.innerHTML = dbl_output_Str
    }
}
