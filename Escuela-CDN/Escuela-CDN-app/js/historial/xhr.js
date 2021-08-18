function xhrAll(){
    /*############################################################*/
    console.log("%c Load Js XHR","color:#FA2A00; font-size:24px")
        loadingAlumnos()
        loadingHistorial()
        loadingcolegiaturas()
        loadingpagos()
    /*############################################################*/
}

/*##########################################################################
   __                  _   _
  / _|                | | (_)
 | |_ _   _ _ __   ___| |_ _  ___  _ __
 |  _| | | | '_ \ / __| __| |/ _ \| '_ \
 | | | |_| | | | | (__| |_| | (_) | | | |
 |_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|
##########################################################################*/
function loadingAlumnos() {
    let x = $("#token").val()
    let jqxhr = $.getJSON(urlDbAlumnoR + "?type=onlyone&token=" + x, function(data) {})
        .done(function(data) {
            //--->
            $.each(data, function(i, val) {
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

                    $("#data_tutor").html(val.tutor)
                    $("#data_parentesco").html(val.parentes)
                    $("#data_curptutor").html(val.tutocurp)

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
function loadingHistorial(){
    let x = $("#token").val()
    let jqxhr = $.getJSON(urlDbColegiaturasR + "?type=one&token=" + x, function(data) {})
        .done(function(data) {
            //--->
            $.each(data, function(i, val) {
            })
            //--->
        })
        .fail(function(data,jqXHR,textStatus,errorThrown){xhrError(jqXHR, textStatus, errorThrown)})
        .always(function(data){})
        //--->
}
function loadingcolegiaturas(){
    let x = $("#token").val()
    let jqxhr = $.getJSON(urlDbColegiaturasA + "?type=one&token=" + x, function(data) {})
    .done(function(data) {
        $.each(data, function(i, val) {
            colegiaturasTool(val.colegiatura12_1_agosto  ,val.colegiatura12_1_agosto_m  ,"1ª ½ de agosto","1")
            colegiaturasTool(val.colegiatura_9_septiembre,val.colegiatura_9_septiembre_m,"septiembre"    ,"2")
            colegiaturasTool(val.colegiatura_10_octubre  ,val.colegiatura_10_octubre_m  ,"octubre"       ,"3")
            colegiaturasTool(val.colegiatura_11_noviembre,val.colegiatura_11_noviembre_m,"noviembre"     ,"4")
            colegiaturasTool(val.colegiatura_12_diciembre,val.colegiatura_12_diciembre_m,"diciembre"     ,"5")
            colegiaturasTool(val.colegiatura12_2_agosto  ,val.colegiatura12_2_agosto_m  ,"2ª ½ agosto"   ,"6")
            colegiaturasTool(val.colegiatura_1_enero  ,val.colegiatura_1_enero_m        ,"enero"         ,"7")
            colegiaturasTool(val.colegiatura_2_febrero,val.colegiatura_2_febrero_m      ,"febrero"       ,"8")
            colegiaturasTool(val.colegiatura_3_marzo  ,val.colegiatura_3_marzo_m        ,"marzo"         ,"9")
            colegiaturasTool(val.colegiatura_4_abril  ,val.colegiatura_4_abril_m        ,"abril"         ,"10")
            colegiaturasTool(val.colegiatura_5_mayo   ,val.colegiatura_5_mayo_m         ,"mayo"          ,"11")
            colegiaturasTool(val.colegiatura_6_junio  ,val.colegiatura_6_junio_m        ,"junio"         ,"12")
            colegiaturasTool(val.colegiatura_7_julio  ,val.colegiatura_7_julio_m        ,"julio"         ,"13")
        })
    })
    .fail(function(data,jqXHR,textStatus,errorThrown){xhrError(jqXHR, textStatus, errorThrown)})
    .always(function(data){})
}
function loadingpagos(){
    let x = $("#token").val()
    let jqxhr = $.getJSON(urlDbPagosR + "?type=all&token=" + x, function(data) {})
    .done(function(data) {
        $.each(data, function(i, val) {
            /*
            concepto: "1ª ½ de agosto"
            email: "admin@escuela"
            id: "66"
            id_advance: "C-7wmTrSx2nbELhspF6o"
            materno: "garibaldo"
            nombre: "jorge francisco"
            pago: "700"
            paterno: "rodriguez"
            precio: "700.00"
            time: "2021-08-17 04:08:38"
            user: "admin"
                                <tr>
                                <th scope="row">1</th>
                                <td>2021-01-01</td>
                                <td>colegiatura</td>
                                <td>$1400.00</td>
                                <td>0%</td>
                                <td>0%</td>
                                <td>$1400.00</td>
                                </tr>
            loadPagos
            */
            let z = '<tr>' +
                    '<th scope=\"row\">' + val.id + '</th>' +
                    '<td>' + val.time + '</td>' +
                    '<td>' + val.concepto + '</td>' +
                    '<td>$' + val.precio + '</td>' +
                    '</tr>';

            $("#loadPagos").append(z)
        })
    })
    .fail(function(data,jqXHR,textStatus,errorThrown){xhrError(jqXHR, textStatus, errorThrown)})
    .always(function(data){})
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
/*########################################################################*/