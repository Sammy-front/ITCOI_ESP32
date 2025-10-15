const KEYBOARD_R = [19, 18, 5, 17];
const KEYBOARD_C = [16, 4, 2, 15];
const KEYBOARD_V = "D#0*C987B654A321";

let keyboard = require("KeyPad").connect(KEYBOARD_C, KEYBOARD_R);
let key_last = -1;

let tentativa = [];
let confirme = "D";
const senha = "24250687";

setInterval(function () {
    let key = keyboard.read();

    if (key >= 0 && key != key_last) {
        let tecla = KEYBOARD_V[key]
        console.log("Tecla pressionada: " + KEYBOARD_V[key]);
        
        if (tecla === confirme) {

            if (tentativa.join('') === senha) {
                console.log("Cofre aberto!");
            } else {
                console.log("Senha incorreta!");
            }
            tentativa = [];
        } else {
            tentativa.push(tecla)
        }
    }
    key_last = key;
}, 100);


// const KEYBOARD_R = [19, 18, 5, 17];
// const KEYBOARD_C = [16, 4, 2, 15];
// const KEYBOARD_V = "D#0*C987B654A321";

// let keyboard = require("KeyPad").connect(KEYBOARD_C, KEYBOARD_R);
// let key_last = -1;

// let tentativa = [];
// let senha = [];       // senha armazenada
// let confirme = "D";   // tecla para confirmar
// let loginCount = 0;   // contador de logins bem-sucedidos
// let criandoSenha = false; // flag se estamos criando a senha

// console.log("Pressione D para confirmar. Se a senha não existir, digite a nova senha e confirme com D.");

// setInterval(function () {
//     let key = keyboard.read();

//     if (key >= 0 && key != key_last) {
//         let tecla = KEYBOARD_V[key];
//         console.log("Tecla pressionada: " + tecla);

//         if (tecla === confirme) {
//             if (senha.length === 0) {
//                 // Criar nova senha
//                 senha.push(...tentativa);
//                 console.log("Nova senha criada com sucesso!");
//             } else {
//                 // Verifica tentativa de login
//                 if (tentativa.join('') === senha.join('')) {
//                     console.log("Cofre aberto!");
//                     loginCount++;
//                     if (loginCount >= 3) {
//                         console.log("Senha deletada após 3 logins.");
//                         senha.length = 0;
//                         loginCount = 0;
//                     }
//                 } else {
//                     console.log("Senha incorreta!");
//                 }
//             }
//             tentativa = []; // reset para próxima tentativa
//         } else {
//             // Adiciona à tentativa, ignorando teclas inválidas como D (confirm) ou *
//             if (!["D", "*", "#"].includes(tecla)) {
//                 tentativa.push(tecla);
//             }
//         }
//     }

//     key_last = key;
// }, 100);
