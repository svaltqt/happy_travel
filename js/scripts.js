$(document).ready(function(){

    function login() {

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
                    return 1;                       
                }
            else {                    

                    var add = "<p>"                        
                    add+="<center>"+"<p style='color:red;'>"+"Contraseña no coincide"+"</p>"+"</center>"                        
                    add+="</p>"
                    $("#Capturador").html(add);
                    return -1;
                }
        
            }
}
   
   
   
    $("#registroUsuario").click(function(){
        
        login()
            

        
    })




});