//Creando los usuarios pre-definidos
var usuarios=[{email:"leo@gmail.com",password:"1234",usuario:"01"},
              {email:"camilo@gmail.com",password:"4321",usuario:"02"}];

//llamando a mi boton
var boton=document.getElementById("boton");

//indicando al boton lo que debe ejecutar
boton.addEventListener("click",Ingresar);

//funcion que debe ejecutar mi boton
function Ingresar(){

  //llamando a mis imput - email y password
    var email= document.getElementById("email").value;
    var password=document.getElementById("password").value;
    //validacion
    var emailTest= /[a-z]*@gmail.com/;
    var passTest= /\d{3}/;
    //Trabajando con email
      //llamando a mi div vacio
     var mensaje=document.getElementById("messageRed");

     if(email !== emailTest.test(email)||email !== usuarios.email){
       mensaje.innerHTML ="<br>Correo no valido</br>"
      if(email == undefined || email.length==0 ){
        mensaje.innerHTML = "<br>El campo de usuario no puede estar en blanco</br>";
      }
      if(password !== passTest.test(password)||password !== usuarios.password){
          alert("Password no valido");
      }
    }else{
      windows.location="index.html";
    }


}
