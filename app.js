// bienvenida y nombre de la trivia//
alert("¡¡¡Bienvenido a Tech-Chimuelo!!!" );
var name = prompt("¡¡juega con nosotros!! Ingresa tu Nombre");
var play = prompt(" Quieres jugar " + name );
    play= play.toLowerCase();
var preguntas = 0;

switch (play) {
    case "no":
        alert("gracias");
    break;

    case "si":
        alert("responde las preguntas");
        window.location.replace("quiz.html");
    break;

    default:
        alert("Debes responder SI o NO");
    break;
}
/// preguntas formulario
