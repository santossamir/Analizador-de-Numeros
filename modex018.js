let n = window.document.getElementById("num")
let e = window.document.getElementById("elementos")
let r = window.document.getElementById("res")
let valores = []
 
function isNumero(nm){
   if( Number(nm) >= 1 && Number(nm) <= 100) {
        return true
    } else {
         return false
        }
}
function inLista(nm, lis) {
    if (lis.indexOf(Number(nm)) != -1){
         return true
    } else {
         return false
        }
}

function adicionar() {
    if(isNumero(n.value) && !inLista(n.value, valores)) {
        valores.push(Number(n.value))
        let item = document.createElement("option")
        item.text = `Valor ${n.value} adicionado.`
        elementos.appendChild(item)
        res.innerHTML = " "
        } else {
        window.alert("Valor inválido ou já encontrado na lista.")
      }
      n.value = " "
      n.focus()
}

function apresentar() {
    if(valores.length == 0){
        window.alert ("Adicione valores antes de finalizar!")
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let média = 0
        for (let pos in valores) {
            soma += valores[pos]
        if(valores[pos] > maior) 
            maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos] 
        }
        média = soma/tot
        res.innerHTML = " "
        res.innerHTML += `<p> Ao todo, temos ${tot} valores registrados.</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}. </p>`
        res.innerHTML += `<p> A média dos valores digitados é ${ média}.</p>`
    } 
}