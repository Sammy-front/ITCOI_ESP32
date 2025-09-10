const SERVO = 33;

let ang = 0;

function setPosition(ang) {
    if (ang < 0)
        ang = 0;
    else if (ang > 180)
        ang = 180;


    let p = (ang / 18 + 2.5) / 100;
    analogWrite(SERVO, p, { freq: 50 })
}

setInterval(function () {
    setPosition(ang)
}, 50)