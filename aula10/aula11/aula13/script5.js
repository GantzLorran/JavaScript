let c = document.getElementById('cont')
let gerador = document.getElementById('grd')
let res = document.querySelector('res')
let vlr = []
function isNumero(n){//Verificar se o usuário digitou um número acima de 100 ou abaixo de 1 Ex.. (-1)
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inGerador(n, l){//Verifica os números que ja foram digitados no <select> </select>
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function gerar(){
    if(isNumero(c.value) && !inGerador(c.value, vlr)){
        vlr.push(Number(c.value))
        let op = document.createElement('option')
        op.text = `Valor ${c.value} adicionado`
        gerador.appendChild(op)
    }else{
        window.alert('Número não encontrado ou ja encontrado na lista!')
    }
    c.value = ''
    c.focus()// Limpa a caixa de texto 
}
function finalizar(){
    if(vlr.length == 0){
        window.alert('Adicione um número antes de finalizar!')
    }else{
        let maior = vlr[0]//mostra o maior valor 
        let menor = vlr[0]//mostra o menor valor
        let soma = 0
        let media = 0
        let tot = vlr.length
        for(let pos in vlr){//Verifica Qual o maior valor e qual o menor valor
            soma += vlr[pos]//Faz a soma de todos os vetores que o usuário digitar
            if(vlr[pos] > maior)
                maior = vlr[pos]
            
            if(vlr[pos] < menor)
                menor = vlr[pos]
            
        }
        media = soma/tot
        document.getElementById('res').innerHTML = ''
        document.getElementById('res').innerHTML += `<p>Ao todo temos ${tot} números!</p>`
        document.getElementById('res').innerHTML += `<p> O maior valor é ${maior}</p>`
        document.getElementById('res').innerHTML += `<p> O menor valor é ${menor}</p>`
        document.getElementById('res').innerHTML += `<p> A soma de todos os números é ${soma}</p>`
        document.getElementById('res').innerHTML += `<p> A média de todos os números é ${media} </p>`
        /*maior = valores[pos] > maior ? valores[pos] : maior
        menor = valores[pos] < menor ? valores[pos] : menor*/ //posso verificar o maior e o menor desse jeito também

    }
}
