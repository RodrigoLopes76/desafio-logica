class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    if (tipo = mago){
        atack = "magia"
    }else (tipo = guerreiro){
        atack = "espada"
    }else (tipo = monge){
        atack = "artes marciais"
    }else (tipo = ninja){
        atack = "shuriken"
    }
    atackMode(){
        console.log(`o ${tipo} atacou usando ${atack}`)
    }
}
let heroiMago = new heroi(Jão, 23, mago)
let heroiGuerreiro = new heroi(Zé, 50, guerreiro)
let heroiMonge = new heroi(Yoda, 1200, monge)
let heroiNinja = new heroi(ChunLi, 12, ninja)



/*lém disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)
"o {tipo} atacou usando {ataque}"