const POT = 33;

setInterval(function (){
    let ValorPot = analogRead(POT) * 100;
    console.log("Nível do Tanque: " + ValorPot.toFixed(2) )
    let angulo = 2.7 * ValorPot;
    console.log("Angulo: " + angulo.toFixed(2) + "\n")
}, 100);