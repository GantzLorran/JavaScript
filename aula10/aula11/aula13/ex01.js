let num = [1,2,3,4,7,6,5,8,9,10]
num.sort()
num.push()
console.log(num)
console.log(`O vetor tem ${num.length} posições!`)
console.log(`Nosso vetor é ${num[1]}`)

/*for(let pos = 0 ;pos < num.length ; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/

/*for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/

let pos = num.indexOf(9)
console.log(`O valor 7 está na posição ${pos}`)