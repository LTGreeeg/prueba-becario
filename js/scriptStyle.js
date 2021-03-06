//Declaración de variables

var register = document.querySelector(".register");
var optReg = document.querySelector("#optReg");
var optLog = document.querySelector("#optLog");

//Declaración de funciones para cambio de estilo
function cambioRegister(){
    register.style.display = "block";
    optReg.style.display = "none";
    optLog.style.display = "block";
}

function cambioLogin(){
    register.style.display = "none";
    optReg.style.display = "block";
    optLog.style.display = "none";
}


//Eventos para cambio de estilo
document.getElementById("btn-registro").addEventListener("click",cambioRegister);
document.getElementById("btn-login").addEventListener("click",cambioLogin);