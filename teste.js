const nickname = "ze"
const xp = 2000
let nivel = ""
switch (xp){
    case < 1000:
        nível = "Ferro"
        break
    case <= 2000:
        nivel = "Bronze"
        break
    case <= 5000:
        nivel = "Prata"
        break
    case <= 7000:
        nivel = "Ouro"
        break
    case <= 8000:
        nivel = "Platina"
        break
    case <= 9000:
        nivel = "Ascendente"
        break
    case < 10000:
        nivel = "Imortal"
        break
    default:
        nivel = "Radiante"
    }
    console.log(`O Herói de nome ${nickname} está no nível de ${nivel}`)