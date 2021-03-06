//Usuarios registrados
var user1= "diego@gmail.com";
var pass1= "pass123";




//Variables login, evento y función


var input  = document.getElementById("log-submit");
 

input.addEventListener("click", login);


function login() {

        window.location="./views/home.html";
  
}

function chngPass() {
        window.location="./views/password.html";

}







