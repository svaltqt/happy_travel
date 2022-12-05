$(document).ready(function(){

    cont = 0;
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
                    
                    sessionStorage.setItem("usuario"+cont, usuario)
                    sessionStorage.setItem("pass"+cont, contraseña)
                    sessionStorage.setItem("correo"+cont, correo)
                    cont++;
                                        
                }
            else {                    

                    var add = "<p>"                        
                    add+="<center>"+"<p style='color:red;'>"+"Contraseña no coincide"+"</p>"+"</center>"                        
                    add+="</p>"
                    $("#Capturador").html(add);
                    
                }
        
            }
}
   
   
   
    $("#registroUsuario").click(function(){
        
        registro()
        
        let nombre = sessionStorage.getItem('usuario'+cont)
        let correo = sessionStorage.getItem('correo'+cont)
        alert(cont)
        alert(nombre+" "+correo)

        
    })




});