let pinoVermelho = 4;  // Pino PWM para vermelho
let pinoVerde = 16;    // Pino PWM para verde
let pinoAzul = 17;     // Pino PWM para azul

// Configurar pinos como saída
pinMode(pinoVermelho, "output");
pinMode(pinoVerde, "output");
pinMode(pinoAzul, "output");

// Inicializar LED RGB (apagado)
analogWrite(pinoVermelho, 0);
analogWrite(pinoVerde, 0);
analogWrite(pinoAzul, 0);

function semaforoRGB() {
    // Roxo (128, 0, 128) por 2 segundos
    analogWrite(pinoVermelho, 0.2);  // 128/255 ≈ 0.5
    analogWrite(pinoVerde, 0);
    analogWrite(pinoAzul, 0.1);      // 128/255 ≈ 0.5

    setTimeout(function () {
        // Amarelo (255, 255, 0) por 1 segundo
        analogWrite(pinoVermelho, .04);  // 255/255 = 1
        analogWrite(pinoVerde, 0.6);     // 255/255 = 1
        analogWrite(pinoAzul, 0.5);

        setTimeout(function () {
            // Laranja (255, 165, 0) por 2 segundos
            analogWrite(pinoVermelho, 1);     // 255/255 = 1
            analogWrite(pinoVerde, 0.65);     // 165/255 ≈ 0.65
            analogWrite(pinoAzul, 0);

            // Repetir o ciclo
            setTimeout(semaforoRGB, 5000);
        }, 5000);
    }, 5000);
}

// Iniciar o semáforo
semaforoRGB();