I2C1.setup();
let lcd = require("HD44780").connectI2C(I2C1)

const human = [
    0B01110,
    0B10001,
    0B11011,
    0B10001,
    0B01110,
    0B10001,
    0B10001,
    0B10001

];

lcd.createChar(0, human);
lcd.setCursor(0, 0);
lcd.print("Meu human: ");
lcd.write(0)