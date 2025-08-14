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
    // Verde (0, 255, 0) por 2 segundos
    analogWrite(pinoVermelho, 0);
    analogWrite(pinoVerde, 1);     // 255/255 = 1
    analogWrite(pinoAzul, 0);

    setTimeout(function () {
        // Amarelo (255, 255, 0) por 1 segundo
        analogWrite(pinoVermelho, 1);  // 255/255 = 1
        analogWrite(pinoVerde, 1);     // 255/255 = 1
        analogWrite(pinoAzul, 0);

        setTimeout(function () {
            // Vermelho (255, 0, 0) por 2 segundos
            analogWrite(pinoVermelho, 1);  // 255/255 = 1
            analogWrite(pinoVerde, 0);
            analogWrite(pinoAzul, 0);

            setTimeout(function () {
                // Roxo (128, 0, 128) por 2 segundos
                analogWrite(pinoVermelho, 0.5);  // 128/255 ≈ 0.5
                analogWrite(pinoVerde, 0);
                analogWrite(pinoAzul, 0.5);      // 128/255 ≈ 0.5

                // Repetir o ciclo
                setTimeout(semaforoRGB, 2000);
            }, 2000);
        }, 1000);
    }, 2000);
}

// Iniciar o semáforo
semaforoRGB();