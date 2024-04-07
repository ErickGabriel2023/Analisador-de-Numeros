const btoAdicionar = document.getElementById("adicionar");
const btoFinalizar = document.querySelector('input#finalizar')
const entradaNumero = document.getElementById("numero");
const tabela = document.getElementById("tabela"); 
const res = document.querySelector('div#res')
let memoriaDeNumeros = [];

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        return false
    }
}

function inTabela(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}

btoAdicionar.addEventListener("click", () => {
    if (isNumero(entradaNumero.value) && !inTabela(entradaNumero.value, memoriaDeNumeros)) {
        memoriaDeNumeros.push(Number(entradaNumero.value))
        let option = document.createElement('option')
        option.text = `Valor ${entradaNumero.value} adicionado.`
        tabela.appendChild(option)
        res.innerHTML = ''
    }else{
        alert("Valor inválido ou já encontrado na lista")
    }
    entradaNumero.value = ''
    entradaNumero.focus()
});

btoFinalizar.addEventListener("click", () => {
    if (memoriaDeNumeros.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let valorTotal = memoriaDeNumeros.length
        let maiorValor = memoriaDeNumeros[0];
        let menorValor = memoriaDeNumeros[0];
        let somaTotalDosValores = 0
        let mediaDosValores = 0
        for (let pos in memoriaDeNumeros) {
            somaTotalDosValores += memoriaDeNumeros[pos]
            if (memoriaDeNumeros[pos] > maiorValor)
                maiorValor = memoriaDeNumeros[pos]
            if (memoriaDeNumeros[pos] < menorValor)
                menorValor = memoriaDeNumeros[pos]
        }
        mediaDosValores = somaTotalDosValores / valorTotal
        
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos <strong>${valorTotal}</strong> números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi <strong>${maiorValor}</strong></p>`
        res.innerHTML += `<p>O menor valor informado foi <strong>${menorValor}</strong></p>`
        res.innerHTML += `<p>Somando todos os valores, temos <strong>${somaTotalDosValores}</strong></p>`
        res.innerHTML += `<p>A média dos valores informado foi <strong>${mediaDosValores}</strong></p>`

    }
})