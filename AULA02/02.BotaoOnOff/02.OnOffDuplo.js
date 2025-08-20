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

// setInterval(function () {
//     let statusButton = digitalRead(Button);
//     let statusButton2 = digitalRead(Button2);
//     console.log("Button Status: " + statusButton);
//     if (statusButton == statusButton2 && statusButton == 0 && statusButton2 == 0) {
//         analogWrite(RGBVermelho, 0.5);
//         analogWrite(RGBVerde, 0);
//         analogWrite(RGBAzul, 1);
//     } else {
//         analogWrite(RGBVermelho, 0);
//         analogWrite(RGBVerde, 0);
//         analogWrite(RGBAzul, 0);
//     };
// }, 10);


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

setInterval(function (){
    let estado1 = digitalRead(Button)
    let estado2 = digitalRead(Button2);
    console.log("Estado Botão 1: " + estado1 + ", Estado Botão 2: " + estado2);

    if (estado1 == 0 && estadoBotao1 == 1) {
        ledLigado = !ledLigado;
        ligarDesligarLED();
    }

    if (estado2 == 0 && estadoBotao2 == 1) {
        ledLigado = 0;
        ligarDesligarLED();
    }

    estadoBotao1 = estado1;
    estadoBotao2 = estado2;
}, 10);




// Variável para rastrear o estado do LED (false = desligado, true = ligado)
// let ledLigado = false;
// // Variável para rastrear o último estado do botão (para detectar transição)
// let ultimoEstadoBotao = 1;

// function atualizarLED() {
//     if (ledLigado) {
//         // Roxo (128, 0, 255)
//         analogWrite(RGBVermelho, 0.5);  // 128/255 ≈ 0.5
//         analogWrite(RGBVerde, 0);
//         analogWrite(RGBAzul, 1);       // 255/255 = 1
//     } else {
//         // Desligar
//         analogWrite(RGBVermelho, 0);
//         analogWrite(RGBVerde, 0);
//         analogWrite(RGBAzul, 0);
//     }
// }

// // Monitorar o botão com setInterval (com debounce implícito pelo intervalo)
// setInterval(function () {
//     let estadoBotao = digitalRead(Button);

//     // Detectar transição: botão pressionado (1 → 0 devido a input_pullup)
//     if (estadoBotao === 0 && ultimoEstadoBotao === 1) {
//         // Alternar o estado do LED
//         ledLigado = !ledLigado;
//         atualizarLED();
//     }

//     // Atualizar o último estado do botão
//     ultimoEstadoBotao = estadoBotao;
// }, 50); // Intervalo de 50ms para debounce