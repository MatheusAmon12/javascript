let carros = ['Fusca', 'Brasilia', 'Gurgel']

for (let i = 0; i < 5 ; i++){
    document.write(i + " ")
    if (i == 4){
        document.write("<br>")
    }
}
for (let i = 5; i >= 1; i--){
    document.write(i + " ")
}

for (let i = 0; i < carros.length; i++){
    document.write(`<li>${carros[i]} na posição ${i}`)
}
document.write(`<br>`)

let frutas = ['Pera', 'Uva', 'Maçã', 'Banana', 'Melancia']

frutas.forEach(function(fruta, i){//é uma forma simplificada do laço for
    document.write(`${i} ${fruta} <br>`)
})

carros.forEach(function(carros){
    document.write(`${carros} <br>`)
})