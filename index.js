import Animal from "./Animal.js"
import Jogo from "./Jogo.js"


const cartas = [new Animal('1A', 'Leão', 80, 4, 1.2, 190, 15), new Animal('1B', 'Capivara', 5, 4, 1.2, 80, 15)]

let jogo = new Jogo('Jhonatan', 'Teixeira', cartas)
jogo.jogar()