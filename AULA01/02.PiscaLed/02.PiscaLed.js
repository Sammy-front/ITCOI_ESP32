let LED = 26;

let LEDSTATUS = 0;

pinMode(LED, "output")

function PiscaLED() {

    digitalWrite(LED, 1);

    setTimeout(function () {
        digitalWrite(LED, 0);

        setTimeout(PiscaLED, 500);
    }, 500);
}

PiscaLED()