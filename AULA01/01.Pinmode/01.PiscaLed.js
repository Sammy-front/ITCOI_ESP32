let LED = 2;

let LEDSTATUS = 0;


pinmode(LED, "output")

setInterval(function(){ 
    LEDSTATUS = !LEDSTATUS;
    digitalWrite(LED, LEDSTATUS)
}, 5000);

