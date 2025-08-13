let LED = 4;
let LED2 = 16;
let LED3 = 17;

pinMode(LED, "output");
pinMode(LED2, "output");
pinMode(LED3, "output");

function semaforo() {

    digitalWrite(LED, 0);
    digitalWrite(LED2, 0);
    digitalWrite(LED3, 1);


    setTimeout(function () {
        digitalWrite(LED, 0);
        digitalWrite(LED2, 1);
        digitalWrite(LED3, 0);

        setTimeout(function () {
            digitalWrite(LED, 1);
            digitalWrite(LED2, 0);
            digitalWrite(LED3, 0);

            setTimeout(semaforo, 8000);
        }, 5000);
    }, 8000)
};


semaforo();
