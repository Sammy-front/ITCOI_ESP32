const POT = 36;
const LED = 27;

const WIFI_SSID = "WIFI_IOT";
const WIFI_PASS = "WIFI_IOT";
const MQTT_BROKER = "10.84.6.160";

const TOPIC_POT = "samuel/pot";
const TOPIC_LED = "samuel/led";

let wifi = require('Wifi');
let mqtt = require('MQTT').create(MQTT_BROKER, {client_id: "MQTT_Samuel"});

pinMode(LED, "output");

wifi.connect(WIFI_SSID, { password: WIFI_PASS });
wifi.setHostname("ESP32_Samuel"); /* Tem que ser exatamente aqui, se não ele dá erro */

wifi.on("connected", function () {
    console.log("Wifi Conectado");
    console.log(wifi.getStatus());

    mqtt.connect();
});

wifi.on("disconnected", function () {
    console.log("Wifi desconectado................");
    console.log("Conectando novamente.............");
    wifi.connect(WIFI_SSID, { password: WIFI_PASS });

});


mqtt.on("connected", function () {
    console.log("MQTT Conectado");
    mqtt.subscribe(TOPIC_LED)

});

mqtt.on("disconnected", function () {
    console.log("MQTT desiconectado.............");
    console.log("Conectando novamente...........");
    mqtt.connect();

});

mqtt.on("message", function (topic, message) {
    console.log(topic + ":" + message)
    if (topic == TOPIC_LED) {
        if (message == "on")
            digitalWrite(LED, 1)
        if (message == "off")
            digitalWrite(LED, 0)
    }
});

setInterval(function () {
    let valorPot = analogRead(POT);
    let angulo = 270 * valorPot;

    console.log("Angulo: " + angulo.toFixed(0));
    mqtt.publish(TOPIC_POT, angulo.toFixed(0))
}, 1000)