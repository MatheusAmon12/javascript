let num = [5, 8, 3, 7]

num[3] = 12
num.push(89)
num[0] = 19

num.length

num.sort()

console.log(`Nosso vetor é o ${num} e tem ${num.length} posições`)

for (c = 0; c < num.length; c++){
    console.log(`${num[c]}`)
}

for (let p in num){
    console.log(num[p])
}

let pos = num.indexOf(8)
console.log(pos)