function gerar(){
    let c = document.getElementById('cont')
    let gr = document.getElementById('botao1')
    let res = document.getElementById('tab')
    if(c.value.length == 0){
        window.alert('Por favor digite um número!')
    }
    if(c == ''){
        c = 1
    }
    else{
        let n = Number(cont.value)
        let c = 1
        tab.innerHTML = ''
            while(c <= 10){
                let item = document.createElement('option')//criar o <option> no HTML
                item.text = `${n} X ${c} = ${n*c}`
                item.value = `${c}`
                tab.appendChild(item)
                c++
            }
        }
    }