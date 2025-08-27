const TOUCH_PIN = 33;
const TOUCH_PIN2 = 32;

let touch = require("touch.js").connect(TOUCH_PIN);
let touch2 = require("touch.js").connect(TOUCH_PIN2);

let RGBVermelho = 21;
let RGBAzul = 23;
let RGBVerde = 4;
let ledLigado = 0;


pinMode(RGBVermelho, "output");
pinMode(RGBVerde, "output");
pinMode(RGBAzul, "output");

analogWrite(RGBVermelho, 0);
analogWrite(RGBVerde, 0);
analogWrite(RGBAzul, 0);




function ligarDesligarLED() {
    if (ledLigado) {
        analogWrite(RGBVermelho, 0.1);
        analogWrite(RGBVerde, 0.25);
        analogWrite(RGBAzul, 0.6);
    } else {
        analogWrite(RGBVermelho, 0);
        analogWrite(RGBVerde, 0);
        analogWrite(RGBAzul, 0);
    }
}

setInterval(function () {
    let count = touch.read();
    let count2 = touch2.read();
    console.log('Touch1: ',count, 'Touch2: ',count2 );

    if (count < 50 && ledLigado == 0) {
        ledLigado = 1
        ligarDesligarLED();
    } 
    if (count2 < 50 && ledLigado == 1){
        ledLigado = 0
        ligarDesligarLED()
    }

    if (count < 50 && count2 < 50) {
        ledLigado = !ledLigado
        ligarDesligarLED();
        if (count2 < 32){
            ledLigado = 0
            ligarDesligarLED();
        }
    }
}, 100)
