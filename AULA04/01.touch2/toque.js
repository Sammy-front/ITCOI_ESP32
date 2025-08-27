const TOUCH_PIN = 33;
let touch = require("touch.js").connect(TOUCH_PIN);

setInterval(function () {
    let count = touch.read();
    console.log(count);
}, 100)