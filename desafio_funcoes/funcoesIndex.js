
//Definindo a função

function rankear(vitorias, derrotas){
    return vitorias - derrotas
}

//Definindo a constante

const ranking = rankear(25, 14)

//Condições de ranking

if (ranking < 10) {
    rankeadas = "Ferro"
} else if (ranking <= 20){
    rankeadas = "Bronze"
} else if (ranking <= 50){
    rankeadas = "Prata"
}else if (ranking <= 80){
    rankeadas = "Ouro"
}else if (ranking <= 90){
    rankeadas = "Diamante"
}else if (ranking <= 100){
    rankeadas = "Lendário"
}else {
    rankeadas = "Imortal"
}

//Mensagem de saída
console.log(`O Herói tem saldo de vitórias de ${ranking} está no nível ${rankeadas}`)
