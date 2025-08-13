let LED = 4;
let LED2 = 16;
let ledstatus = 0;
let ledstatus2 = 0;



pinMode(LED, "output")
pinMode(LED2, "output")

setInterval(function(){ 
    ledstatus = !ledstatus;
    digitalWrite(LED, ledstatus)
}, 100);

setInterval(function(){
    ledstatus2 = !ledstatus2;
    digitalWrite(LED2, ledstatus2)
}, 300)

