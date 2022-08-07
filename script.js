function decrescerNumero() {
    let inNumero = document.getElementById('inNumero')
    let outSaida = document.getElementById('outSaida')

    let numero = Number(inNumero.value)

    let saida = `Decrescer de ${numero} a 1: ${numero}`

    for (let i = numero - 1; i >= 1; i--) {
        saida += `, ${i}`
    }

    outSaida.innerHTML= saida 
}
let btDecrescer = document.getElementById('btDecrescer')
btDecrescer.addEventListener('click', decrescerNumero)