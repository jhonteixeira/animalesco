
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function distribuirCartas(cartas) {
    cartas = shuffle(cartas)
    const numCartas = cartas.length
    const cartas1 = cartas.slice(0, numCartas / 2)
    const cartas2 = cartas.slice(numCartas / 2, numCartas)
    return [cartas1, cartas2]
}


class Jogo {
    constructor(jogador1Nome, jogador2Nome, cartas) {
        this.vez = jogador1Nome
        this.jogador1Nome = jogador1Nome
        this.jogador2Nome = jogador2Nome

        const [cartas1, cartas2] = distribuirCartas(cartas)
        this.jogador1Cartas = cartas1
        this.jogador2Cartas = cartas2
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

            console.log(this.jogador1Cartas.length)

            acabou = this.jogoAcabou()
        }
        console.log(acabou)
    }
}

export default Jogo