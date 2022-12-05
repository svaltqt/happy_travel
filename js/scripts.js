$(document).ready(function(){

    cont = 0;

// Metodo de la página registro
    function registro() {

        var usuario = $("#Rusuario").val();
        var correo = $("#Rcorreo").val(); 
        var contraseña = $("#Rcontraseña1").val(); 
        var contraseña2 = $("#Rcontraseña2").val();
        var tamañoPass = contraseña.length; 

       if (tamañoPass < 8) {
                var add = "<p>"                        
                    add+="<center>"+"<p style='color:red;'>"+"Contraseña muy corta"+"</p>"+"</center>"                        
                    add+="</p>"
                    $("#Capturador").html(add);
                }
       else {
        
            if (contraseña == contraseña2) {
                    
                    sessionStorage.setItem("usuario", usuario);
                    sessionStorage.setItem("pass", contraseña);
                    sessionStorage.setItem("correo", correo);                
                           
                }
            else {                    

                    var add = "<p>"                        
                    add+="<center>"+"<p style='color:red;'>"+"Contraseña no coincide"+"</p>"+"</center>"                        
                    add+="</p>"
                    $("#Capturador").html(add);
                    
                }
        
            }
     
    }// Fin Metodo de la página registro  
   
    // Funcion Login
    function login() {        
        var leerUsuario = $("#Lusuario").val();
        var leercontra = $("#Lpass").val();
        var nombre = sessionStorage.getItem("usuario"); 
        var contraseña = sessionStorage.getItem("pass");   
        
        if($("#Lusuario").val().length == 0){
            var add = "<p>"                        
                    add+="<p style='color:red;'>"+"Digite usuario"+"</p>"                       
                    add+="</p>"
        $("#verificarlogin").html(add);
        }else{ 
            if($("#Lpass").val().length == 0){
                var add = "<p>"                        
                    add+="<p style='color:red;'>"+"Digite contraseña"+"</p>"                       
                    add+="</p>"
            $("#verificarContra").html(add);
            }
            else{
                if(leerUsuario==nombre && leercontra==contraseña ){
                    $(location).attr('href','./settings.html')

                }else{
                    $("#verificarPariedad").html("<center>"+"<p style='color:red;'>"+"Usuario no existe"+"</p>"+"<center>");
                    
                }
            }
                
        }
    // Funcion Login

    // Like button  
    
    var $likeButton = $('#meGusta');

    function clickAlBoton(){

        count++;

            if(count === 1) {
                $likeButton.html('1 Like')
            }
            else {
            $likeButton.html(count + ' Likes');
            }
    }
    clickAlBoton()
        
        
    // final like button 
    }
   
    $("#registroUsuario").click(function(){
        
        registro()
    })

    $("#loginUsuario").click(function(){  
        
        login()  
 
    })

    $("#cambiarUsuario").click(function(){  
        
        var usuarioActual = $("#usuarioActual").val();
        var usuarioNuevo = $("#usuarioNuevo").val();       
        var usuarioSession = sessionStorage.getItem("usuario"); 
        
        if(usuarioActual!=usuarioSession){
            $("#verificarCambioUsuario").html("<center>"+"<p style='color:red;'>"+"Usuario no existe"+"</p>"+"<center>");
            $('input').val('');
        }
        else{
            sessionStorage.setItem("usuario", usuarioNuevo);
            $("#verificarCambioUsuario").html("<center>"+"<p style='color:green;'>"+"¡Usuario cambiado con éxito!"+"</p>"+"<center>");
            $('input').val('');
        }


    })

    $("#cambiarContra").click(function(){          
        
        var contraActual = $("#contraActual").val();
        var contraNuevo = $("#contraNueva").val();       
        var contraSession = sessionStorage.getItem("pass"); 
        var tamañoPass = contraNuevo.length; 

       if (tamañoPass < 8) {
        $("#verificarCambioContra").html("<center>"+"<p style='color:green;'>"+"¡Contraseña muy corta!"+"</p>"+"<center>");
        }else{
            if(contraActual!=contraSession){
                $("#verificarCambioContra").html("<center>"+"<p style='color:red;'>"+"contraseña no existe"+"</p>"+"<center>");
                
            }
            else{
                sessionStorage.setItem("pass", contraNuevo);
                $("#verificarCambioContra").html("<center>"+"<p style='color:green;'>"+"¡Contraseña cambiada con éxito!"+"</p>"+"<center>");
                
            }
        }
 
    })

    $("#cambiarCorreo").click(function(){  
        var correoActual = $("#correoActual").val();
        var correoNuevo = $("#correoNuevo").val();       
        var correoSession = sessionStorage.getItem("correo"); 
        
        if(correoActual!=correoSession){
            $("#verificarCambioCorreo").html("<center>"+"<p style='color:red;'>"+"Correo no válido"+"</p>"+"<center>");
            
        }
        else{
            sessionStorage.setItem("correo", correoNuevo);
            $("#verificarCambioCorreo").html("<center>"+"<p style='color:green;'>"+"¡Correo cambiado con éxito!"+"</p>"+"<center>");
            
        }
         
 
    })




});