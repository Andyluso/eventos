const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {

    if (altura.value !== '' && peso.value !== '') {
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        let classification = ''

        if (imc < 18.5) {
            classification = 'Abajo del peso'
        } else if (imc >= 18.5 && imc < 25) {
            classification = 'Peso normal'
        } else if (imc > 25 && imc < 30) {
            classification = 'por encima del peso'
        } else if (imc > 30 && imc < 35) {
            classification = 'Obesidad moderada'
        } else if (imc > 35 && imc < 41) {
            classification = 'Obesidad severa'
        } else {
            classification = 'Obesidad morvida'
        }

        resultado.innerHTML = `IMC: ${imc} (${classification})`
    } else {
        resultado.innerHTML = 'rellene los campos'
    }
}