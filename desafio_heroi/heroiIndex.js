class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.atack= {
            mago:"magia",
            guerreiro: "espada",
            monge: "artes marciais",
            ninja: "shuriken",
        }
        }
    atackMode(){
        console.log(`O ${this.tipo} atacou usando ${this.atack[this.tipo]}`)
    }
}
let heroiMago = new heroi("Jão", 23, "mago")
let heroiGuerreiro = new heroi("Zé", 50, "guerreiro")
let heroiMonge = new heroi("Yoda", 1200, "monge")
let heroiNinja = new heroi("ChunLi", 12, "ninja")
heroiMago.atackMode()
heroiGuerreiro.atackMode()
heroiMonge.atackMode()
heroiNinja.atackMode()