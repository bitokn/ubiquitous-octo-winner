window.onload = function () {
    const output = document.getElementById('diceoutput')
    const button = document.getElementById('dicebutton')
    button.onclick = function () {
        let x = Math.floor(Math.random() * 6) + 1
        output.innerHTML = x
        console.log(x)
    }
    const progressBarContainer = document.getElementById("progressBars")
    for (let step = 0; step < 11; step++) {
        const new_bar = document.createElement("progress")
        let id_str = "bar_" + step
        new_bar.setAttribute("id", id_str)
        new_bar.max = 36
        new_bar.value = 0
        let stringthingyidk = `${step + 2}`.padStart(3, "-")
        const barLabelStr = document.createTextNode(stringthingyidk)
        //new_bar.value = step
        progressBarContainer.appendChild(barLabelStr)
        progressBarContainer.appendChild(new_bar)
        progressBarContainer.appendChild(document.createElement("br"))
        //console.log("Walking east one step")
    }
    let n = 2
    const double_output = document.getElementById('doubleoutput')
    const double_button = document.getElementById('doubledice')

    let dbl_button_str = ""
    for (let i = 0; i < n; i++) {
        dbl_button_str = dbl_button_str + "&#x1F3B2;"
    }
    double_button.innerHTML = dbl_button_str
    double_button.onclick = function clickerFunction() {
        let dbl_output_Str = ""
        let total = 0
        for (let i = 0; i < n; i++) {
            let x = Math.floor(Math.random() * 6) + 1
            //console.log(x)
            total += x
            dbl_output_Str += x + " "
            console.log(total)
        }
        double_output.innerHTML = dbl_output_Str + "= " + total
        if (total == 2) {
            bar_0.value += 1
        }
        if (total == 3) {
            bar_1.value += 1
        }
        if (total == 4) {
            bar_2.value += 1
        }
        if (total == 5) {
            bar_3.value += 1
        }
        if (total == 6) {
            bar_4.value += 1
        }
        if (total == 7) {
            bar_5.value += 1
        }
        if (total == 8) {
            bar_6.value += 1
        }
        if (total == 9) {
            bar_7.value += 1
        }
        if (total == 10) {
            bar_8.value += 1
        }
        if (total == 11) {
            bar_9.value += 1
        }
        if (total == 12) {
            bar_10.value += 1
        }
    }


    // for (let i = 0; i < 50000; i++) {
    //     double_button.click()
    // }

}
