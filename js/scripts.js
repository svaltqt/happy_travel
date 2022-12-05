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
    // Fin Metodo de la página registro   




}
   
   
   
    $("#registroUsuario").click(function(){
        
        registro()
        
        let nombre = sessionStorage.getItem('usuario'+cont)
        let correo = sessionStorage.getItem('correo'+cont)
        alert(cont)
        alert(nombre+" "+correo)

        
    })

    $("#loginUsuario").click(function(){        
        
        
        let nombre = sessionStorage.getItem('usuario'+0)
        let correo = sessionStorage.getItem('correo'+0)
        let contraseña = sessionStorage.getItem('pass'+0)
        alert(cont)
        alert(nombre+" "+correo)

        var leerUsuario = $("#Lusuario").val();        
        var leerContraseña = $("#Lpass").val();
        
        if(nombre ==leerUsuario && contraseña ==leerContraseña ){
            alert('Correcto')
        }

        
    })




});