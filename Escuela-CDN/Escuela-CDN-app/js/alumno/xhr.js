function loadingAlumnosPrimaria() {

    let jqxhr = $.getJSON(urlDbInscripcionR + "?type=primaria", function(data) {})
        .done(function(data) {
            //--->
            $.each(data, function(i, val) {

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
                                         "<td>" + idpro + "</td>" +
                                         "<td class=\"text-uppercase\">" + val.nombre + " " + val.paterno + " " + val.materno + "</td>" +
                                         "<td>" + nivel + "</td>" +
                                         "<td>" + val.salon + "</td>" +
                                         "<td>" + val.maestra + "</td></tr>"
                                         );
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