const SERVO = 33;
const POT = 32;


function setPosition() {
    let ValorPot = analogRead(POT)
    let angulo = (ValorPot) * 180

    if (angulo < 0)
        angulo = 0;
    else if (angulo > 180)
        angulo = 180;


    let p = (2.5 + (angulo / 18))/100;
    analogWrite(SERVO, p, { freq: 50 })
    console.log("a: " + angulo.toFixed(2), p*100);
}

setInterval(setPosition, 50)