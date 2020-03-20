function contagem(){
    let tc1 = document.getElementById('cont')
    let tc2 = document.getElementById('cont2')
    let tc3 = document.getElementById('cont3')
    let res = document.getElementById('res')

        if(tc1.value.length == 0 || tc2.value.length == 0 || tc3.value.length == 0){//Mostra um erro se os campos estiverem vazios
            //document.getElementById('res').innerHTML = 'Por favor digite um número!'
            res.innerHTML = "Impossível contar"
        }else{
            document.getElementById('res').innerHTML = 'Contando... <br>'
            let t1 = Number(tc1.value)
            let t2 = Number(tc2.value)
            let t3 = Number(tc3.value)
                if(t3 <= 0){// Esse if da um passo automatico se caso ele estiver vazio
                    window.alert('Passo inválido! considerando PASSO 1')
                    t3 = 1
                }
                if(t1 < t2){
                for(let c = t1; c <= t2; c += t3){//Contagem Crescente
                    document.getElementById('res').innerHTML += `${c} \u{1F449}`
                    }
                }else{
                    for(let c = t1; c >= t2; c -= t3){
                        document.getElementById('res').innerHTML += `${c} \u{1F449}`
                    }
                }
                document.getElementById('res').innerHTML +=`\u{1F3C1}`
        }
}