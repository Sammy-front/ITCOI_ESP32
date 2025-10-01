// Habilita a comunicação utilizando I2C
I2C1.setup();

// Estabelecer a comunicação com o dispositivo
let mpu = require("MPU6050").connect(I2C1);

setInterval(function () {
    let acc = mpu.getGravity();
    let rot = mpu.getDegreesPerSecond();

    let angx = Math.atan(acc[0] / acc[2]) * 180 / Math.PI;
    let angy = Math.atan(acc[1] / acc[2]) * 180 / Math.PI;

    console.log("Ang. X:" + angx.toFixed(2));
    console.log("Ang. Y:" + angy.toFixed(2));

}, 500);