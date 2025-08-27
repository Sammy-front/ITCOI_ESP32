const POT = 33;
let LedVerde = 4;
let LedAmarelo = 26;
let LedVermelho = 27;
setInterval(() => {
    let ValorPot = analogRead(POT) * 100;
    console.log("Nível do Tanque: " + ValorPot.toFixed(2) )
    let angulo = 2.7 * ValorPot;
    console.log("Angulo: " + angulo.toFixed(2) + "\n")

    if (ValorPot < )

}, 100);