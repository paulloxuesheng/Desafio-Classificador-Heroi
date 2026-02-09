// 1. Criando uma variável; uma lista de heróis (Array)
let herois = [ 
{ nome: "Wolverine", xp: 15000 },
{ nome: "Homen-Aranha", xp: 3500 },
{ nome: "Capitão América", xp: 8500 },
{ nome: "Thor", xp: 9500},
{ nome: "Homem de Ferro", xp: 11000 },
{ nome: "Hulk", xp: 6000 },
{ nome: "Viúva Negra", xp: 1800 },
{ nome: "Gavião Arqueiro", xp: 800 },
{ nome: "Pantera Negra", xp: 7200 },
{ nome: "Doutor Estranho", xp: 300 }
];

// 2. Laço de repetição For
console.log("========== CLASSIFICAÇÃO DE HERÓIS ==========\n")

// O laço "for" vai repetir o código para cada item do array
for (let i = 0; i < herois.length; i++) {

    // Com o dados do array
    let nomeHeroi = herois[i]. nome;
    let xpHeroi = herois[i].xp;
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
    nivelHeroi = "Platina";
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

// Saindo do laço. Resultado para cada herói.

// 4. Mostrando o resultado para cada herói na tela
console.log ("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi);
}

// 5. Mensagem final
console.log ("\n Classificação completa!Total de heróis: " + herois.length);
