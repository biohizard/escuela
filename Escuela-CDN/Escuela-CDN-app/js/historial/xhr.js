/*##########################################################################
____  ______ _____________ 
\   \/  /   |   \______   \
 \     /    ~    \       _/
 /     \    Y    /    |   \
/___/\  \___|_  /|____|_  /
      \_/     \/        \/ 
##########################################################################*/
function allXhr(){
    console.log("%c Load Js XHR","color:#FA2A00; font-size:24px")
        loadingSelectAll()

    /*
            
        loadingHistorial()
        
        loadingpagos()
        */
}
/*########################################################################*/

/*##########################################################################
   __                  _   _
  / _|                | | (_)
 | |_ _   _ _ __   ___| |_ _  ___  _ __
 |  _| | | | '_ \ / __| __| |/ _ \| '_ \
 | | | |_| | | | | (__| |_| | (_) | | | |
 |_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|
##########################################################################*/
    function loadingSelectAll(){
        $("#ins_gradocursar").empty().append("<option value=\"null\"> - Nivel – Grupo – Salon -</option>")
        let jqxhr = $.getJSON(urlDbGruposR + "?type=all",function(data){})
            .done(function(data) {
                $.each(data, function(i, val) {
                    if(val.grupos == "k1"){
                        grupoDefine = "Preescolar 1"
                    }else if(val.grupos == "k2"){
                        grupoDefine = "Preescolar 2"
                    }else if(val.grupos == "k3"){
                        grupoDefine = "Preescolar 3"
                    }else if(val.grupos == "p1"){
                        grupoDefine = "Primaria 1"
                    }else if(val.grupos == "p2"){
                        grupoDefine = "Primaria 2"
                    }else if(val.grupos == "p3"){
                        grupoDefine = "Primaria 3"
                    }else if(val.grupos == "p4"){
                        grupoDefine = "Primaria 4"
                    }else if(val.grupos == "p5"){
                        grupoDefine = "Primaria 5"
                    }else if(val.grupos == "p6"){
                        grupoDefine = "Primaria 6"
                    }
                    $("#ins_gradocursar").append("<option value=\""+ val.id_advance +"\"> " + grupoDefine + " " + val.salon + "</option>");               
                })
            })
            .fail(function(data, jqXHR, textStatus, errorThrown){xhrError(jqXHR, textStatus, errorThrown)})
            .always(function(data){
                setTimeout(function(){alumnoAll()},250);
            })
    }
    function loadingAlumnos() {
        let x = $("#token").val()
        let y = $("#id").val()
        let jqxhr = $.getJSON(urlDbAlumnoR + "?type=onlyone&token=" + x + "&id=" + y,function(data){})
            .done(function(data) {
                $.each(data,function(i,val){
                        $("#ins_id").val(val.id)
                        $("#ins_nombremaestra").val(val.maestra)
                        $('#ins_gradocursar').val(val.grado)    
                        $('#ins_exalumno').val(val.exalumno)
                        $('#ins_tipopago').val(val.tipopago)
                        /*datos del alumno*/
                        $("#ins_nombrealumno").val(val.nombre)
                        $("#ins_apaternoalumno").val(val.paterno)
                        $("#ins_amaternoalumno").val(val.materno)
                        $("#ins_curp").val(val.curp)
                        $("#ins_direccion").val(val.direccion)
                        $("#ins_cp").val(val.cp)

                        $("#ins_fechanacimiento").val(val.fecha)
                        $("#ins_edad").val(val.edad)
                        $("#ins_estatura").val(val.estatura)
                        $("#ins_peso").val(val.peso)
                        $("#ins_tiposanguineo").val(val.sangre)
                        $("#ins_telefono").val(val.telefono)
                        $("#ins_recados").val(val.recado)
                        
                        $("#tutor_tutor").val(val.tutor)
                        $("#tutor_parentesco").val(val.parentes)
                        $("#tutor_tutocurp").val(val.tutocurp)
                        
                        $("#data_id").html(val.id)
                        $("#data_nombre").html(val.nombre + " " + val.paterno + " " + val.materno)
                        $("#data_fecha").html(val.fecha)
                        $("#data_edad").html(val.edad)

                        $("#data_curpalumno").html(val.curp)
                        $("#data_sexo").html(val.sexo)
                        $("#data_estatura").html(val.estatura)
                        $("#data_sangre").html(val.sangre)
                        
                        $("#data_tel1").html(val.telefono)
                        $("#data_tel2").html(val.recado)

                        $("#data_direccion").html(val.direccion)
                        $("#data_cp").html(val.cp)

                        $("#data_inscripcion").html("$" + val.inscripcion)
                        $("#data_colegiatura").html("$" + val.colegiatura)
                        $("#data_dpp").html(val.dpp + "%")
                        $("#data_beca").html(val.beca + "%")
                        $("#data_interes").html(val.interes + "%")

                        $("#data_nivel").html(val.grupos)
                        $("#data_grupo").html(val.salon)

                        /*PARA ALUMNOS DE 1ER GRADO*/
                        $("#ins_annoskinder").val(val.annoskinder)
                        $("#ins_maestraausubel").val(val.maestraausubel)
                        $("#ins_procedencia").val(val.procedencia)

                        $("#ins_lectoescritura").val(val.lectoescritura)
                        $("#ins_lectoescriturapor").val(val.lectoescriturapor)
                        $("#ins_problema").val(val.lectoescritura)
                        /*DATOS DEL TUTOR*/
                        $("#data_tutor").html(val.tutor)
                        $("#data_parentesco").html(val.parentes)
                        $("#data_curptutor").html(val.tutocurp)

                        if(val.grado == "p-0adhSVX0b9MNxkLxwf" || val.grado == "p-ie6NKuPBjG8iS8m3oj"){
                            $("#new").removeClass("d-none")
                        }else{
                            $("#new").addClass("d-none")
                        }


                })
            })
            .fail(function(data,jqXHR,textStatus,errorThrown){xhrError(jqXHR,textStatus,errorThrown)})
            .always(function(data){})
            //--->
    }
    function loadingcolegiaturas(){
        $("#historiaAlumno").empty()
        let x = $("#token").val()
        let jqxhr = $.getJSON(urlDbColegiaturasA + "?type=one&token=" + x, function(data) {})
        .done(function(data) {
            $.each(data, function(i, val) {
                colegiaturasTool(val.col_inscripcion,val.dinero_inscripcion,"inscripcion","1")             
                colegiaturasTool(val.col_seguro,val.dinero_seguro,"seguro","2")             
                colegiaturasTool(val.col_material,val.dinero_material,"material","3")           

                colegiaturasTool(val.col_1agosto,val.dinero_1agosto,"1 Agosto","4")
                colegiaturasTool(val.col_2agosto,val.dinero_2agosto,"2 Agosto","5")

                colegiaturasTool(val.col_septiembre,val.dinero_septiembre,"Septiembre","6")
                colegiaturasTool(val.col_octubre,val.dinero_octubre,"Octubre","7")
                colegiaturasTool(val.col_noviembre,val.dinero_noviembre,"Noviembre","8")
                colegiaturasTool(val.col_diciembre,val.dinero_diciembre,"Diciembre","9")
                
                colegiaturasTool(val.col_enero,val.dinero_enero,"Enero","10")
                colegiaturasTool(val.col_febrero,val.dinero_febrero,"febrero","11")
                colegiaturasTool(val.col_marzo,val.dinero_marzo,"marzo","12")
                colegiaturasTool(val.col_abril,val.dinero_abril,"abril","13")
                colegiaturasTool(val.col_mayo,val.dinero_mayo,"mayo","14")
                colegiaturasTool(val.col_junio,val.dinero_junio,"junio","15")
                colegiaturasTool(val.col_julio,val.dinero_julio,"julio","16")


            })
        })
        .fail(function(data,jqXHR,textStatus,errorThrown){xhrError(jqXHR, textStatus, errorThrown)})
        .always(function(data){})
    }
    function loadingpagos(){
        $("#loadPagos").empty()
        $.getJSON(urlDbPagosR + "?type=all&token=" + $("#token").val() + "&id=" + $("#id").val())
        .done(function(data) {
            $.each(data, function(i, val) {
                if(val.Code == 104){
                    $("#loadPagos").append('<tr><th scope=\"row\">Sin ventas</th></tr>');
                }else{            
                    $("#loadPagos").append('<tr>' +'<th scope=\"row\">' + val.id + '</th>' +'<td>' + val.time + '</td>' +'<td>' + val.concepto + '</td>' +'<td>$' + val.pago + '</td>' +'</tr>');
                }                
            })
        })
        .fail(function(data, jqXHR, textStatus, errorThrown){xhrError(jqXHR, textStatus, errorThrown)})
            .always(function(data){})
    }
    function loadingHistorial(){
        let x = $("#token").val()
        let jqxhr = $.getJSON(urlDbColegiaturasR + "?type=one&token=" + x,function(data){})
            .done(function(data){
                $.each(data,function(i,val){
                })
            })
            .fail(function(data,jqXHR,textStatus,errorThrown){xhrError(jqXHR,textStatus,errorThrown)})
            .always(function(data){})
    }
    function updateDataInscripcion() {

        console.log("let update form")
        let x = $("#token").val()
        let y = $("#id").val()
        let alumno_id                = $("#ins_id").val()
        let alumno_token             = $("#token").val()
        let alumno_nombremaestra     = $("#ins_nombremaestra").val()
        let alumno_exalumno          = $("#ins_exalumno").val()
        let alumno_gradocursar       = $("#ins_gradocursar").val()
        let alumno_tipopago          = $("#ins_tipopago").val()

        let alumno_nombrealumno      = $("#ins_nombrealumno").val()
        let alumno_apaternoalumno    = $("#ins_apaternoalumno").val()
        let alumno_amaternoalumno    = $("#ins_amaternoalumno").val()
        let alumno_curp              = $("#ins_curp").val()
        let alumno_sexo              = $("#ins_sexo").val()
        let alumno_direccion         = $("#ins_direccion").val()
        let alumno_cp                = $("#ins_cp").val()

        let alumno_fechanacimiento   = $("#ins_fechanacimiento").val()
        let alumno_edad              = $("#ins_edad").val()
        let alumno_estatura          = $("#ins_estatura").val()
        let alumno_peso              = $("#ins_peso").val()
        let alumno_tiposanguineo     = $("#ins_tiposanguineo").val()
        let alumno_telefono          = $("#ins_telefono").val()
        let alumno_recados           = $("#ins_recados").val()

        let alumno_annoskinder       = $("#ins_annoskinder").val()
        let alumno_maestraausubel    = $("#ins_maestraausubel").val()
        let alumno_procedencia       = $("#ins_procedencia").val()
        let alumno_lectoescritura    = $("#ins_lectoescritura").val()
        let alumno_lectoescriturapor = $("#ins_lectoescriturapor").val()
        let alumno_problema          = $("#ins_problema").val()

        let alumno_tutor             = $("#tutor_tutor").val()
        let alumno_parentesco        = $("#tutor_parentesco").val()
        let alumno_tutocurp          = $("#tutor_tutocurp").val()

        let settings = {
            "url": urlDbAlumnoU + "?type=onlyone&token=" + x + "&id=" + y,
            "method": "POST",
            "timeout": 0,
            "headers": {
                /*"Authorization": "Basic cm9vdDphZG1pbg==",*/
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "data":{
                'save_id'               :alumno_id,
                'save_token'            :alumno_token,
                'save_nombremaestra'    :alumno_nombremaestra,
                'save_exalumno'         :alumno_exalumno,
                'save_gradocursar'      :alumno_gradocursar,
                'save_tipopago'         :alumno_tipopago,
                'save_nombrealumno'     :alumno_nombrealumno,
                'save_apaternoalumno'   :alumno_apaternoalumno,
                'save_amaternoalumno'   :alumno_amaternoalumno,
                'save_curp'             :alumno_curp,
                'save_sexo'             :alumno_sexo,
                'save_direccion'        :alumno_direccion,
                'save_cp'               :alumno_cp,
                'save_fechanacimiento'  :alumno_fechanacimiento,
                'save_edad'             :alumno_edad,
                'save_estatura'         :alumno_estatura,
                'save_peso'             :alumno_peso,
                'save_tiposanguineo'    :alumno_tiposanguineo,
                'save_telefono'         :alumno_telefono,
                'save_recados'          :alumno_recados,
                'save_annoskinder'      :alumno_annoskinder,
                'save_maestraausubel'   :alumno_maestraausubel,
                'save_procedencia'      :alumno_procedencia,
                'save_lectoescritura'   :alumno_lectoescritura,
                'save_lectoescriturapor':alumno_lectoescriturapor,
                'save_problema'         :alumno_problema,
                'save_tutor'            :alumno_tutor,
                'save_parentesco'       :alumno_parentesco,
                'save_tutocurp'         :alumno_tutocurp
                    }
        }

        let jqxhr1 = $.ajax(settings)
            .done(function(data) {
                //$.each(data, function(i, val) {})
            })
            .fail(function(data, jqXHR, textStatus, errorThrown) {
                console.info("Run: all user loading error");
                xhrError(jqXHR, textStatus, errorThrown);
            })
            .always(function(data) {
                console.info("Run: all user always");
                alumnoAll()
                $("#modalUpdate").modal("hide");
                $("#generaractualizacion").removeAttr('disabled');
                $("input").val(" ");
                $("input").empty();
                
            })
        
    }
/*########################################################################*/

/*##########################################################################
           | |                     | | (_)
  ___ _   _| |__    _ __ ___  _   _| |_ _ _ __   ___  ___
 / __| | | | '_ \  | '__/ _ \| | | | __| | '_ \ / _ \/ __|
 \__ \ |_| | |_) | | | | (_) | |_| | |_| | | | |  __/\__ \
 |___/\__,_|_.__/  |_|  \___/ \__,_|\__|_|_| |_|\___||___/
##########################################################################*/
    function colegiaturasTool(a,b,z,n){
        
        if(a == 0){
            pago         = "No Pagado";
            color        = "text-danger"
            resultPagado = false;
        }else{
            pago         = "Si Pagado";
            color        = "text-success"
            resultPagado = true;
        }

        let x = '<tr>' +
        '    <th scope="row">'+n+'</th>' +
        '    <td>'+ z + '</td>' +
        '    <td class=\"' + color + '\">' + pago +'</td>' +
        '    <td>$'+ b + '</td>' +
        '</tr>';
        $("#historiaAlumno").append(x)
    }
    function alumnoAll(){
        //DATOS GENERALES DEL ALUMNO
        loadingAlumnos()
        //DATOS HISTORIAL COLEGIATURAS
        loadingcolegiaturas()
        //HSTORIAL PAGOS
        loadingpagos()
        
    }
/*########################################################################*/