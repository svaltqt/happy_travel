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
                    $(location).attr('href','./index.html')

                }else{
                    $("#verificarPariedad").html("<center>"+"<p style='color:red;'>"+"Usuario no existe"+"</p>"+"<center>");
                    
                }
            }
                
        }

        var nombre = sessionStorage.getItem("usuario");       
         
        
        
    
    }
   
    $("#registroUsuario").click(function(){
        
        registro()
    })

    $("#loginUsuario").click(function(){  
        
        login()  
 
    })




});