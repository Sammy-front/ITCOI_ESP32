const POT = 33;
let LedVerde = 4;
let LedAmarelo = 32;
let LedVermelho = 27;

pinMode(LedVerde, "output")
pinMode(LedAmarelo, "output")
pinMode(LedVermelho, "output")

setInterval(() => {
    let ValorLuz = analogRead(POT);
    console.log("Nível de LUZ: " + ValorLuz.toFixed(2))
    analogWrite(LedVerde, ValorLuz)
    analogWrite(LedAmarelo, ValorLuz)
    analogWrite(LedVermelho, ValorLuz)
}, 50);