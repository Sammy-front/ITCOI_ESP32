// Habilita a comunicação utilizando I2C
I2C1.setup();

// Estabelecer a comunicação com o dispositivo
let mpu = require("MPU6050").connect(I2C1);

setInterval(function()
{
    let acc = mpu.getGravity();
    let rot = mpu.getDegreesPerSecond();

    console.log("X: " + acc[0]);
    console.log("Y: " + acc[1]);
    console.log("Z: " + acc[2] + "\n");

    console.log("Roll(X): " + rot[0]);
    console.log("Pitch(Y): " + rot[1]);
    console.log("Yaw(Z): " + rot[2] + "\n");
}, 1000);