const POT = 33;
let LedVerde = 4;
let LedAmarelo = 32;
let LedVermelho = 27;

pinMode(LedVerde, "output")
pinMode(LedAmarelo, "output")
pinMode(LedVermelho, "output")

setInterval(() => {
    let ValorLuz = analogRead(POT) * 100;
    console.log("Nível de LUZ: " + ValorLuz.toFixed(2))

if (ValorLuz >= 5 && ValorLuz <= 24) {
    digitalWrite(LedVerde, 1);
    digitalWrite(LedAmarelo, 0);
    digitalWrite(LedVermelho, 0);
} else if (ValorLuz <= 54 && ValorLuz >= 25) {
    digitalWrite(LedVerde, 0);
    digitalWrite(LedAmarelo, 1);
    digitalWrite(LedVermelho, 0);
} else if (ValorLuz >= 54 && ValorLuz <= 100) {
    digitalWrite(LedVerde, 0);
    digitalWrite(LedAmarelo, 0);
    digitalWrite(LedVermelho, 1);
} else {
    digitalWrite(LedVerde, 0);
    digitalWrite(LedAmarelo, 0);
    digitalWrite(LedVermelho, 0);
}

}, 100);