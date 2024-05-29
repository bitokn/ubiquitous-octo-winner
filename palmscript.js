window.onload = function () {
    const output = document.getElementById('diceoutput')
    const button = document.getElementById('dicebutton')
    button.onclick = function () {
        let x = Math.floor(Math.random() * 6) + 1
        output.innerHTML = x
        console.log(x)
    }
    let barArray = []
    const progressBarContainer = document.getElementById("progressBars")
    // let n = 2
    let n = parseInt(prompt("how many dice", "2"))
    for (let i = n; i <= (n * 6); i++) {
        const new_bar = document.createElement("progress")
        let id_str = "bar_" + i
        new_bar.id = id_str
        new_bar.max = 35
        new_bar.value = 0
        let stringthingyidk = `${i}`.padStart(3, "-")
        const barLabelStr = document.createTextNode(stringthingyidk)
        //new_bar.value = step
        barArray.push(i)
        progressBarContainer.appendChild(barLabelStr)
        progressBarContainer.appendChild(new_bar)
        progressBarContainer.appendChild(document.createElement("br"))
        //console.log("Walking east one step")
    }
    console.log(barArray)
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
        for (let i = 0; i < barArray.length; i++) {
            let bar_i = document.getElementById(("bar_" + barArray[i]))
            if (total == i + n) {
                bar_i.value += 1
                console.log(bar_i)
            }
        }
    }

    const rollbutton = document.getElementById("rollbunch")
    rollbutton.onclick = function () {
        for (let i = 0; i < 100; i++) {
            double_button.click()
        }
    }
}
