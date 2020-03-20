let amigo = {Nome: 'Lorran', 
sexo: 'M', 
idade: 23,
peso: 58.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(2)//Esse comando muda o valor da variável peso
console.log(`${amigo.Nome} pesa ${amigo.peso}kg`)
//let amigo = [] //declara um array vazio serve muito para criar caixa de mensagem