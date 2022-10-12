let amigo = {nome: 'Matheus', 
sexo: 'M', 
peso: 88.0, 
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)