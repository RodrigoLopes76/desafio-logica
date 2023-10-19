

function rankear(vitorias, derrotas){
    return vitorias - derrotas  
}
const ranking = rankear(5, 2)

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
console.log(`O Herói tem saldo de vitórias de ${ranking} está no nível ${rankeadas}`)
