let LED = 4;
let LED2 = 16;
let ledstatus = 0;
let ledstatus2 = 0;



pinMode(LED, "output")
pinMode(LED2, "output")

function Alternado() {

    digitalWrite(LED, 1)
    digitalWrite(LED2, 0)

    setTimeout(function() {
        digitalWrite(LED, 0)
        digitalWrite(LED2, 1)
        
        setTimeout(Alternado, 50000)
    }, 500)
};

Alternado();