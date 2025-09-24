const TRIGGER = 33;
const ECHO = 32;

pinMode(TRIGGER, "output");
pinMode(ECHO, "input");
let peso = null;


setInterval(() => {

    //configuração do ECHO

    setWatch(function (i) {
        let tempo = i.time - i.lastTime;

        // Calculando distancia em cm
        let distancia = 17000 * tempo;

        let altura = 220 - distancia.toFixed(2);

        // imc = p/m^2

        if (peso != null && altura > 0) {
            console.log("altura: ", altura.toFixed(2) + "cm", "    distancia: ", distancia.toFixed(2) + "cm", "   peso: ", peso + "kg")
            let imc = peso / ((altura / 100) * (altura / 100))
            console.log("imc", imc.toFixed(2))
        }
    }, ECHO, { edge: "falling" });

    // disparando trigger
    digitalPulse(TRIGGER, 1, 1);
}, 1000);