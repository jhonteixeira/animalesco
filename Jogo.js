class Jogo {
    constructor(jogador1Nome, jogador2Nome, cartas) {
        this.vez = jogador1Nome
        this.jogador1Nome = jogador1Nome
        this.jogador2Nome = jogador2Nome

        this.jogador1Cartas = [cartas[0]]
        this.jogador2Cartas = [cartas[1]]
    }

    jogoAcabou() {
        if (this.jogador1Cartas.length === 0) {
            return `jogador 2 (${this.jogador2Nome}) venceu`
        }

        if (this.jogador2Cartas.length === 0) {
            return `jogador 1 (${this.jogador1Nome}) venceu`
        }

        return false
    }

    jogar() {
        let acabou = this.jogoAcabou()
        while (!acabou) {

            const animal = this.jogador1Cartas.pop()
            this.jogador2Cartas.push(animal)

            acabou = this.jogoAcabou()
        }
        console.log(acabou)
    }
}

export default Jogo