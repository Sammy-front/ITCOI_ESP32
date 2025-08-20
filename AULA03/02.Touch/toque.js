let TOUCH_PIN = 33;
let touch = require("touch.js").connect(TOUCH_PIN);

setInterval(function(){

    let valorTouch = touch.read();

    console.log(valorTouch);
}, 250);
