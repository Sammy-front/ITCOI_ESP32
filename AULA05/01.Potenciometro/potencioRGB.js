const POT = 33;
let LedVerde = 4;
let LedAmarelo = 32;
let LedVermelho = 27;

pinMode(LedVerde, "output")
pinMode(LedAmarelo, "output")
pinMode(LedVermelho, "output")

setInterval(() => {
    let ValorPot = analogRead(POT) * 100;
    console.log("Nível de LUZ: " + ValorPot.toFixed(2))

if (ValorPot >= 5 && ValorPot <= 24) {
    digitalWrite(LedVerde, 0);
    digitalWrite(LedAmarelo, 0);
    digitalWrite(LedVermelho, 1);
} else if (ValorPot <= 54 && ValorPot >= 25) {
    digitalWrite(LedVerde, 0);
    digitalWrite(LedAmarelo, 1);
    digitalWrite(LedVermelho, 0);
} else if (ValorPot >= 54 && ValorPot <= 100) {
    digitalWrite(LedVerde, 1);
    digitalWrite(LedAmarelo, 0);
    digitalWrite(LedVermelho, 0);
} else {
    digitalWrite(LedVerde, 0);
    digitalWrite(LedAmarelo, 0);
    digitalWrite(LedVermelho, 0);
}

}, 100);