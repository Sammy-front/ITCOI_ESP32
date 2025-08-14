let LEDvermelho = 4;
let LEDamarelo = 16;
let LEDverde = 17;

pinMode(LEDvermelho, "output");
pinMode(LEDamarelo, "output");
pinMode(LEDverde, "output");

function semaforo() {

    digitalWrite(LEDvermelho, 0);
    digitalWrite(LEDamarelo, 0);
    digitalWrite(LEDverde, 1);


    setTimeout(function () {
        digitalWrite(LEDvermelho, 0);
        digitalWrite(LEDamarelo, 1);
        digitalWrite(LEDverde, 0);

        setTimeout(function () {
            digitalWrite(LEDvermelho, 1);
            digitalWrite(LEDamarelo, 0);
            digitalWrite(LEDverde, 0);

            setTimeout(semaforo, 2000);
        }, 1000);
    }, 2000)
};


semaforo();
