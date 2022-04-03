import animais from './Animais.js'
import readline from 'readline'

const nomes = animais.map(animal => animal.nome)
const rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('Animalesco> ');
rl.prompt();

rl.on('line', function (line) {
    const trimmed = line.trim()

    const animal = animais.find(animal => animal.nome.toLowerCase() === trimmed)
    if (animal) {
        console.log(animal)
    } else {
        console.log('Tendi não... Escutei vc dizendo `' + trimmed + '`.')
    }

    rl.prompt();
}).on('close', function () {
    console.log('Ah, que pena q vc tá indo embora... Obrigado por jogar Animalesco!');
    process.exit(0);
});