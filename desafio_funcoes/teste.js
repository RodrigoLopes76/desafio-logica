function somar(numero1, numero2) {
    return numero1 + numero2;
}

  let resultado = somar(5, 3); // A função vai dar de presente 5 + 3 = 8
  console.log("A soma é: " + resultado); // Vai mostrar A soma é: 8

  
function rankear(vitorias, derrotas){
  return vitorias - derrotas  
}
let (ranking) = rankear(100, 2)

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