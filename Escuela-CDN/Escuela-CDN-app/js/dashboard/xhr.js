/*##########################################################################
____  ______ _____________ 
\   \/  /   |   \______   \
 \     /    ~    \       _/
 /     \    Y    /    |   \
/___/\  \___|_  /|____|_  /
      \_/     \/        \/ 
##########################################################################*/
function allXhr(){
    //loadingpagos()
    loadingSelectAll()
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
    function saveDataInscripcion(){
        console.log("let save form")
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
            "url": urlDbAlumnoC,
            "method": "POST",
            "timeout": 0,
            "headers": {
                /*"Authorization": "Basic cm9vdDphZG1pbg==",*/
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "data":{
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
                $("#exampleModalToggle").modal("hide");
            })
        
    }    
    function loadingpagos(){
        $.getJSON(urlDbPagosR + "?type=now")
        .done(function(data) {
            $.each(data, function(i, val) {
            /*
                [
                {
                    "id": "78",
                    "id_advance": "C-MzrpkhxwQb4PWL3joe",
                    "time": "2021-08-23 03:08:23",
                    "id_advance_usuario": "AfN9M25VoJmSU8Ps9w2",
                    "id_advance_alumno": "73d2bd688102a9c3bf84",
                    "id_advance_programas": "col1-usGq4VZo59EHgYX",
                    "pago": "700",
                    "concepto": "1ª ½ de agosto",
                    "type": "colegiatura",
                    "descripcion": "1ª ½ de agosto",
                    "precio": "700.00",
                    "fecha_limite": "2021-09-14",
                    "nombre": "jorge francisco",
                    "paterno": "rodriguez",
                    "materno": "garibaldo"
                }
                ]            
                */
                let x = '<tr>' +
                        '<th scope=\"row\">' + val.id + '</th>' +
                        '<td>' + val.time + '</td>' +
                        '<td>' + val.nombre + " " + val.paterno + " " + val.materno + '</td>' +
                        '<td>' + val.grupos + '</td>' +
                        '<td>' + val.concepto + '</td>' +
                        '<td>' + "$"+val.pago + '</td>' +
                    '</tr>';
                    
                    $("#reporteNow").append(x);
            })
        })
        .fail(function(data, jqXHR, textStatus, errorThrown){xhrError(jqXHR, textStatus, errorThrown)})
        .always(function(data){})
    }
    function loadingSelectAll(){
        //--->
        $("#ins_gradocursar").empty().append("<option value=\"null\"> - Nivel – Grupo – Salon -</option>")   
        let jqxhr = $.getJSON(urlDbGruposR + "?type=all", function(data) {
            })
            .done(function(data) {
                //--->
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
                //--->
            })
            .fail(function(data, jqXHR, textStatus, errorThrown) {
                xhrError(jqXHR, textStatus, errorThrown);
            })
            .always(function(data) {
                changeGrado()
            })
            //--->  
    }
    function readeDataInscripcion() {
        console.log("%cXHR: %cmetales/detalles loadingMetalesSaldo", "color: red", "color: green");
        $("#loadingMetalesCierres").fadeIn().empty()
    
        let id_advance = $("#id_advance_x").val();
    
        let jqxhr = $.getJSON(urlSaldoR + "/?name=Saldo&type=saldo&id=" + id_advance, function(data) {})
            .done(function(data) {
                //--->
                $.each(data, function(i, val) {
                        if (val.Error) {
                            console.error("%cXHR: %cmetales/detalles Error DB saldo", "color: red", "color: yellow");
                        } else {
                            //$("#btnModalSaldo").hide()
                            //$("#btnModalCierre,#btnModalEntrega,#btnentregasMultipleModal,#btnModalEntregaUnica,#reloadCaja").show()
    
                            $(".saldoActual").html(val.detail_saldo_actual)
    
                            $("#xhrCliente").html(val.firstname + " " + val.secondname)
                            $("#xhrSaldo").html(val.detail_saldo_actual)
                            $("#xhrCliente").show()
                            $("#xhrSaldotxt").show()
                        }
                    })
                    //--->
            })
            .fail(function(data, jqXHR, textStatus, errorThrown){
                console.info("Run: all user loading error")
                xhrError(jqXHR, textStatus, errorThrown)
            })
            .always(function(data) {})
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
    function changeGrado(){
        $('#ins_gradocursar').on('change', function() {
            let varGradoCursar = $(this).val();
            varGradoCursar     = varGradoCursar.split("-");  
                /*
                inscripcion         colegiatura         interes
                #ins_inscripcion    #ins_colegiatura    #ins_descuento
                */
                if(
                    varGradoCursar[0] == "k" ){
                    $("#ins_inscripcion").val(" ").val("$450.00")
                    $("#ins_colegiatura,#ins_colegiatura_print").val(" ").val("$950.00")
                    $("#ins_interes").val(" ").val("15%")
                    }else if(
                    varGradoCursar[0] == "p"
                        ){
                        $("#ins_inscripcion").val(" ").val("$780.00")
                        $("#ins_colegiatura,#ins_colegiatura_print").val(" ").val("$1400.00")
                        $("#ins_interes").val(" ").val("15%")
                    }
        })
    }
    function changeDpa(){
        console.log("DPA")
        $("#ins_gradocursar").on('change',function(){
            if($(this).val() == 'null'){
                $("#ins_dpp,#ins_colegiatura_print").val(" ")
                $("#ins_dpp").attr('disabled',true)
            }else{
                $("#ins_dpp").removeAttr("disabled",false)      
            }
        })

        $("#ins_dpp").on('click',function(){ 
            $(this).val(" ")
        })

        $("#ins_dpp").on('change', function() {
            
            //x
            let x = $("#ins_colegiatura").val()
                x = x.split("$")
                
            //Y
            let y = $(this).val()

            //Z
            let colegiatura = parseFloat(x[1]);
            let porcentaje  = (parseInt(y)/100);
        
            let z = colegiatura-(colegiatura*porcentaje);

            $("#ins_colegiatura_print").val(" ").val("$" + z)
        })
    }
/*########################################################################*/