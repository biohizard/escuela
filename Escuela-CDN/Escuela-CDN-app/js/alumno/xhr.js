/*##########################################################################
____  ______ _____________ 
\   \/  /   |   \______   \
 \     /    ~    \       _/
 /     \    Y    /    |   \
/___/\  \___|_  /|____|_  /
      \_/     \/        \/ 
##########################################################################*/
function allXhr(){
    loadingAlumnosKinder()
    loadingAlumnosPrimaria()
}
/*########################################################################*/

/*##########################################################################
_______________ __________  ____________________.___________    _______    _________
\_   _____/    |   \      \ \_   ___ \__    ___/|   \_____  \   \      \  /   _____/
 |    __) |    |   /   |   \/    \  \/ |    |   |   |/   |   \  /   |   \ \_____  \ 
 |     \  |    |  /    |    \     \____|    |   |   /    |    \/    |    \/        \
 \___  /  |______/\____|__  /\______  /|____|   |___\_______  /\____|__  /_______  /
     \/                   \/        \/                      \/         \/        \/ 
##########################################################################*/
    /*CRUD*/
    function loadingAlumnosKinder() {

        let jqxhr = $.getJSON(urlDbInscripcionR + "?type=kinder", function(data) {})
            .done(function(data) {
                //--->
                $.each(data, function(i, val) {
                    
                    if(val.Code){
                        console.error("Error 401: DB vacia")
                    }else{

                        if(val.grupos == "k1"){
                            nivel = "primero" 
                            idpro  = "JR" + val.id
                        }else if(val.grupos == "k2"){
                            nivel = "segundo" 
                            idpro  = "JR" + val.id
                        }else if(val.grupos == "k3"){
                            nivel = "tercero" 
                            idpro  = "JR" + val.id
                        }else{
                            nivel = "error" 
                        }
                        $("#loadAlumnos").append("<tr class=\"alumnos_lista " + nivel + "\">" +
                            "<th scope=\"row\"><input type=\"checkbox\" class=\"idAdvance\" id=\"" + val.id_advance + "\"></th>" +
                            "<td class=\""   + val.id_advance + "\">" + idpro + "</td>" +
                            "<td class=\"text-capitalize\">" + val.nombre + " " + val.paterno + " " + val.materno + "</td>" +
                            "<td class=\"text-capitalize\">" + nivel + "</td>" +
                            "<td class=\"text-capitalize\">" + val.salon + "</td>" +
                            "<td class=\"text-capitalize\">" + val.tipopago + "</td>" +
                            "<td class=\"text-capitalize\">" + val.maestra + "</td></tr>"
                        );

                    }

                })
                //--->
            })
            .fail(function(data, jqXHR, textStatus, errorThrown){xhrError(jqXHR, textStatus, errorThrown)})
            .always(function(data) {})
            //--->
    }
    function loadingAlumnosPrimaria() {

        let jqxhr = $.getJSON(urlDbInscripcionR + "?type=primaria", function(data) {})
            .done(function(data) {
                //--->
                $.each(data, function(i, val) {
                    if(val.Code){
                        console.error("Error 401: DB vacia")
                    }else{

                        if(val.grupos == "p1"){
                            nivel = "primero" 
                            idpro  = "PR" + val.id
                        }else if(val.grupos == "p2"){
                            nivel = "segundo" 
                            idpro  = "PR" + val.id
                        }else if(val.grupos == "p3"){
                            nivel = "tercero" 
                            idpro  = "PR" + val.id
                        }else if(val.grupos == "p4"){
                            nivel = "cuarto" 
                            idpro  = "PR" + val.id
                        }else if(val.grupos == "p5"){
                            nivel = "quinto" 
                            idpro  = "PR" + val.id
                        }else if(val.grupos == "p6"){
                            nivel = "sexto" 
                            idpro  = "PR" + val.id
                        }else{
                            nivel = "error" 
                        }

                        $("#loadAlumnos").append("<tr class=\"alumnos_lista " + nivel + "\">" +
                            "<th scope=\"row\"><input type=\"checkbox\" class=\"idAdvance\" id=\"" + val.id_advance + "\"></th>" +
                            "<td class=\""    + val.id_advance + "\">" + idpro + "</td>" +
                            "<td class=\"text-capitalize\">" + val.nombre + " " + val.paterno + " " + val.materno + "</td>" +
                            "<td class=\"text-capitalize\">" + nivel + "</td>" +
                            "<td class=\"text-capitalize\">" + val.salon + "</td>" +
                            "<td class=\"text-capitalize\">" + val.tipopago + "</td>" +
                            "<td class=\"text-capitalize\">" + val.maestra + "</td></tr>"
                        );

                    }

                })
                //--->
            })
            .fail(function(data, jqXHR, textStatus, errorThrown) {
                console.info("Run: all user loading error");
                xhrError(jqXHR, textStatus, errorThrown);
            })
            .always(function(data) {
    
    
            })
            //--->
    }    
/*########################################################################*/

/*##########################################################################
            ___.            __________               __  .__                     
  ________ _\_ |__          \______   \ ____  __ ___/  |_|__| ____   ___________ 
 /  ___/  |  \ __ \   ______ |       _//  _ \|  |  \   __\  |/    \_/ __ \_  __ \
 \___ \|  |  / \_\ \ /_____/ |    |   (  <_> )  |  /|  | |  |   |  \  ___/|  | \/
/____  >____/|___  /         |____|_  /\____/|____/ |__| |__|___|  /\___  >__|   
     \/          \/                 \/                           \/     \/       
##########################################################################*/

/*########################################################################*/     