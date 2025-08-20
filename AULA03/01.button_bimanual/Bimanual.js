let RGBVermelho = 21;
let RGBVerde = 4;
let RGBAzul = 23;
let Button = 18;
let Button2 = 19;

pinMode(RGBVermelho, "output");
pinMode(RGBVerde, "output");
pinMode(RGBAzul, "output");
pinMode(Button, "input_pullup");
pinMode(Button2, "input_pullup");

analogWrite(RGBVermelho, 0);
analogWrite(RGBVerde, 0);
analogWrite(RGBAzul, 0);

let ledLigado = 0;
let estadoBotao1 = 1;
let estadoBotao2 = 1;

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



let timeout = 0;
let statusLED = 0

function bimanual() {

    setInterval(function () {
        let estado1 = digitalRead(Button)
        let estado2 = digitalRead(Button2);
        console.log("Estado Botão 1: " + estado1 + ", Estado Botão 2: " + estado2);

        if (timeout == 0 && statusLED == 0) {
            if (estado1 == 0 || estado2 == 0) {
            
                timeout = 1;

                setTimeout(function () {
                    if (estado1 == 0 && estado2 == 0) {
                        analogWrite(RGBVermelho, 0.1);
                        analogWrite(RGBVerde, 0.8);
                        analogWrite(RGBAzul, 0.4);
                        statusLED = 1;
                    }
                }, 500)
            }

        } else {
                    if (estado1 == 1 || estado2 == 1 ) {
                        analogWrite(RGBVermelho, 0);
                        analogWrite(RGBVerde, 0);
                        analogWrite(RGBAzul, 0);
                        statusLED = 0;
                        if (estado1 == 1 && estado2 == 1){
                            timeout = 0;
                        }
                    }
                }
        estadoBotao1 = estado1;
        estadoBotao2 = estado2;
    }, 100);
}

bimanual();