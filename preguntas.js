var correctas=0;
var incorrectas=0;
var i = 0;
alert("Sección de preguntas!!");
while(i<4){
  if(i==0){
    preg1();
  }else if (i==1) {
    preg2();
  }else if (i==2) {
    preg3();
  }else if (i==3) {
    preg4()
  }
  i++;
}
if(i==4){
  alert("Sus preguntas correctas fueron " + correctas+"\n" + "Sus preguntas incorrectas fueron " + incorrectas);
}

function preg1(){
var  pregunta1 = prompt("¿quien es el/la co fundadora y ceo de laboratoria?\n"+
"a)barack obama \n"+
"b) steve Jobs \n"+
"c)grace hooper \n"+
"d) Mariana Costa");

if (pregunta1.toString()==="d") {
alert("Correcto!!");
correctas++;
}else{
  alert("Equivocado :( , la respuesta correcta era d) Mariana Costa");
  incorrectas++;
}
}

function preg2(){
var  pregunta2 = prompt("¿Es Google uno de los aliados regionales de Laboratoria?\n"+
"a)si \n"+
"b)no "
);

if (pregunta2.toString()==="a") {
alert("Correcto!!");
correctas++;
}else{
  alert("Equivocado :(, la respuesta correcta era a)si, google es uno de los aliados regionales de Laboratoria");
  incorrectas++;
}
}

function preg3(){
var  pregunta3 = prompt("¿Es Mexico la primera sede instaurada por Laboratoria?\n"+
"a)si \n"+
"b)no "
);

if (pregunta3.toString()==="b") {
alert("Correcto!!");
correctas++;
}else{
  alert("Equivocado :(, la respuesta correcta era b)no, la primera sede tuvo lugar en Lima, Perú");
  incorrectas++;
}
}

function preg4(){
    var pregunta4 = prompt("¿cual es el slogan de Laboratoria?\n"+
    "a)Un mundo Tech para mujeres\n"+
    "b)Código que transforma\n"+
    "c)Formación de mujeres en la tecnología"
    );

  if (pregunta4.toString()==="b") {
  alert("Correcto!!");
  correctas++;
  }else{
    alert("Equivocado :(, la respuesta correcta era b) Código que transforma");
    incorrectas++;
  }
  }
