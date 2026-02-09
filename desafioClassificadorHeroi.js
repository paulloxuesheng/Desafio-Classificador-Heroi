// 1. Criando Variáveis para o Herói
let nomeHeroi = "Aprendiz";
let xpHeroi = 1500;

// 2. Criando Variável para cada nível (começa vazia)
let nivelHeroi = "";

// 3. Decidindo o nível com base no XP

if (xpHeroi < 1000) {
    nivelHeroi = "Ferro";
}
else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivelHeroi = "Bronze";
}
else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivelHeroi = "Prata";
}
else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivelHeroi = "Ouro";
}
else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivelHeroi = "Plantina";
}
else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivelHeroi = "Ascendente";
}
else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivelHeroi = "Imortal";
}
else if (xpHeroi >= 10001) {
    nivelHeroi = "Radiante";
}

// 4. Mostrando o resultado na tela
console.log ("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi);

