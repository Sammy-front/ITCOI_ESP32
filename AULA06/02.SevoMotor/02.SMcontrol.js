const SERVO = 33;
const POT = 32;


function setPosition() {
    let ValorPot = analogRead(POT)
    let angulo = (ValorPot) * 180

    if (angulo < 0)
        angulo = 0;
    else if (angulo > 180)
        angulo = 180;


    let p = 0.05 + (angulo / 180) * (0.1 - 0.05);
    analogWrite(SERVO, p, { freq: 50 })
    console.log("a: " + ValorPot.toFixed(2))
}

setInterval(setPosition, 50)