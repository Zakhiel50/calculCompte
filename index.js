





// calculate all inputs
function calculate() {
    let inputCompte = document.querySelector(".input-somme")
    let inputDepenseMensuelle = document.querySelector(".input-depenses")
    let inputRevenus = document.querySelector(".input-revenus")
    let inputCartes = document.querySelector(".input-cartes")
    const depenseMensuelle = 1284.4;
    inputDepenseMensuelle.value = depenseMensuelle

    const carteValue = Number(inputCartes.value)
    const compteValue = Number(inputCompte.value)
    const revenusValue = Number(inputRevenus.value)

    let total = document.querySelector(".input-total")
    let totalValue = total.value
    totalValue = compteValue + revenusValue - carteValue - depenseMensuelle

    total.innerHTML = `${totalValue.toFixed(2)} €`
    let negatifPositif =  total.innerHTML = `${totalValue.toFixed(2)} €`
    if (negatifPositif.slice(0, 1) == "-") {
        total.style.color = "red"
    } else {
        total.style.color = "green"
    }
}

setInterval(calculate, 1000)

