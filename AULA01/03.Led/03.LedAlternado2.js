let LED = 4;
let LED2 = 16;
let ledstatus = 0;
let ledstatus2 = 1;

pinMode(LED, "output")
pinMode(LED2, "output")


setInterval(function(){ 
    ledstatus = !ledstatus;
    ledstatus2 = !ledstatus2;
    digitalWrite(LED, ledstatus);
    digitalWrite(LED2, ledstatus2);
}, 1000);


let LED3 = 17;
let LED4 = 5;
let ledstatus3 = 0;
let ledstatus4 = 1;