function validarFormulario(){
    var nombre= document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var email= document.getElementById("email").value.trim();
    var tel = document.getElementById("tel").value.trim();
    var mensaje= document.getElementById("mensaje").value.trim();
    
  
    if (nombre === "" || apellido === "" || email === "" || tel === "" || mensaje ===""){
      alert ("Por favor, complete todos los campos brindados.");
      return false ;
    } else{
     ;
      }
    alert("Formulario enviado con éxito.");  
  }
  
    
    
  // TRANSICION COMENTARIOS
  
  window.addEventListener('scroll', function() {
    var comentarioca1 = document.querySelector('.comentarioca1');
    var posicioncomentarioca1 = comentarioca1.getBoundingClientRect().top;
    var alturaPantalla = window.innerHeight / 1.2;
  
    if(posicioncomentarioca1 < alturaPantalla){
      comentarioca1.classList.add('visible');
    } else {
      comentarioca1.classList.remove('visible');
    }
  });
  
  window.addEventListener('scroll', function() {
    var comentarioca2 = document.querySelector('.comentarioca2');
    var posicioncomentarioca2 = comentarioca2.getBoundingClientRect().top;
    var alturaPantalla = window.innerHeight / 1.2;
  
    if(posicioncomentarioca2 < alturaPantalla){
      comentarioca2.classList.add('visible');
    } else {
      comentarioca2.classList.remove('visible');
    }
  });
  
  window.addEventListener('scroll', function() {
    var comentarioco1 = document.querySelector('.comentarioco1');
    var posicioncomentarioco1 = comentarioco1.getBoundingClientRect().top;
    var alturaPantalla = window.innerHeight / 1.2;
  
    if(posicioncomentarioco1 < alturaPantalla){
      comentarioco1.classList.add('visible');
    } else {
      comentarioco1.classList.remove('visible');
    }
  });
  
  window.addEventListener('scroll', function() {
    var comentarioco2 = document.querySelector('.comentarioco2');
    var posicioncomentarioco2 = comentarioco2.getBoundingClientRect().top;
    var alturaPantalla = window.innerHeight / 1.2;
  
    if(posicioncomentarioco2 < alturaPantalla){
      comentarioco2.classList.add('visible');
    } else {
      comentarioco2.classList.remove('visible');
    }
  });