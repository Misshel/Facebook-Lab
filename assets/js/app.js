var publicarBoton=document.getElementById("publicar");
publicarBoton.addEventListener("click",publicaPost);
function publicaPost(){
  var cajaDeNewPost=document.getElementById("cajaDeNewPost").value;

  //validar con el boton Publicar q exista  texto en el imput
  if(cajaDeNewPost==undefined||cajaDeNewPost.length==0){
    alert("Para crear un nuevo post ingrese texto");
  }
  var newPost = cajaDeNewPost;
  var newDiv= document.createElement("div");
      newDiv.innerHTML="<br>" + newPost + "</br>";
  var muro = document.getElementById("nuevospost");
  //Pubicar un post
    muro.appendChild(newDiv);
    //limpia la caja despues de publicar un post
  document.getElementById("cajaDeNewPost").value='';
}
//cuando hago click en publicar debo crear un obj JS que guarde el post
var Amigos=[];
var publico=[];
var contador=0;
function Post(post){
    contador ++;
    this numPost=contador;
    this.newPost=post;
    this.mostrar=function(){
      if()
    }

}
//Eliminar un post especifico
//Filtrar los posts por amigo o publico
//confirmar antes de eliminar un post
//Al hacer click en el boton Editar debe cambiar el texto por un input con texto y cambiar el link "Editar" por Guardar
//al guar dar el texto editado debe volver al texto normal pero con la informacion editada
