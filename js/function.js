
document.getElementById("insta").onclick = function () {
    console.log("Clik en boton Insta");
    document.getElementById("pantalla").innerHTML = "@soylucho en Instagram";
}

document.getElementById("face").onclick = function() {
    console.log("Clik en boton Face");
    document.getElementById("pantalla").innerHTML = "SoyLucho en Facebook";
}


/*Si clicamos en el botón del sol, borrarémos la clase css dark-mode del div 
con id general y se aplicará el estilo active al sol*/
document.getElementById('id-sun').onclick = function(){
    document.getElementById('gral').classList.remove('dark-mode')
    document.getElementById('id-moon').classList.remove('active')
    this.classList.add('active')
  }
  /*Si clicamos en el botón de la luna, añadiremos la clase css dark-mode del div 
  con id general y se aplicará el estilo active a la luna*/
  document.getElementById('id-moon').onclick = function(){
    document.getElementById('gral').classList.add('dark-mode')
    document.getElementById('id-sun').classList.remove('active')
    this.classList.add('active')
  }
