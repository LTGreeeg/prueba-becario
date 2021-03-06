//Variables lista de usuarios registrados
var mostrar = document.getElementById("mostrar");
var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");




var usuarios={

    usuario: ["Diego","Rodrigo","Ximena","Michelle" ],
    password:["123","345","567","789"],
    correo:["diego@gmail.com","rodrigo@gmail.com","ximena@gmail.com","michelle@gmail.com"]

}

function imprimir1() {

    let user = usuarios.usuario;
    let pass = usuarios.password;
    let mail = usuarios.correo;
    
    let resultado;
  
            mostrar.style.visibility = "visible";
            resultado = ` <br> Usuario -> Nombre: ${user[0]}<br> Mail:${mail[0]}<br> Pass: ${pass[0]} `;
            mostrar.innerHTML = resultado;

         
}
function imprimir2() {

    let user = usuarios.usuario;
    let pass = usuarios.password;
    let mail = usuarios.correo;
    
    let resultado;
  
            mostrar.style.visibility = "visible";
            resultado = ` <br> Usuario -> Nombre: ${user[1]}<br> Mail:${mail[1]}<br> Pass: ${pass[1]} `;
            mostrar.innerHTML = resultado;
         
}
function imprimir3() {

    let user = usuarios.usuario;
    let pass = usuarios.password;
    let mail = usuarios.correo;
    
    let resultado;
  
            mostrar.style.visibility = "visible";
            resultado = ` <br> Usuario -> Nombre: ${user[2]}<br> Mail:${mail[2]}<br> Pass: ${pass[2]} `;
            mostrar.innerHTML = resultado;
         
}
function imprimir4() {

    let user = usuarios.usuario;
    let pass = usuarios.password;
    let mail = usuarios.correo;
    
    let resultado;
  
            mostrar.style.visibility = "visible";
            resultado = ` <br> Usuario -> Nombre: ${user[3]}<br> Mail:${mail[3]}<br> Pass: ${pass[3]} `;
            mostrar.innerHTML = resultado;
         
}



