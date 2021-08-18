function loadingAlumnos() {

    let jqxhr = $.getJSON(urlDbInscripcionR + "?type=cierre", function(data) {})
        .done(function(data) {
            //--->
            $.each(data, function(i, val) {

                if(val.grupos == "p1"){
                    nivel = "primero" 
                }else if(val.grupos == "p2"){
                    nivel = "segundo" 
                }else if(val.grupos == "p3"){
                    nivel = "tercero" 
                }else if(val.grupos == "p4"){
                    nivel = "cuarto" 
                }else if(val.grupos == "p5"){
                    nivel = "quinto" 
                }else if(val.grupos == "p6"){
                    nivel = "sexto" 
                }else{
                    nivel = "error" 
                }



                $("#loadAlumnos").append("<tr class=\"alumnos_lista " + nivel + "\"><th scope=\"row\"><input type=\"checkbox\" class=\"idAdvance\" id=\"" + val.id_advance + "\"></th><td>" + val.id + "</td><td class=\"text-uppercase\">" + val.nombre + " " + val.paterno + " " + val.materno + "</td><td>" + nivel + "</td><td>" + val.salon + "</td><td>" + val.maestra + "</td></tr>");
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