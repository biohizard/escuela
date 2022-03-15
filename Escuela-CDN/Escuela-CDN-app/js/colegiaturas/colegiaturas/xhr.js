/*##########################################################################
____  ______ _____________
\   \/  /   |   \______   \
 \     /    ~    \       _/
 /     \    Y    /    |   \
/___/\  \___|_  /|____|_  /
      \_/     \/        \/
##########################################################################*/
function colegiaturasXhr(){
    console.log("%c Load Js XHR ","color:magenta; font-size:24px")
    loadingconfig()
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
function loadingconfig(){
    $.getJSON(urlDbconfigR + "?type=all")
    .done(function(data) {
        $.each(data, function(i, val) {

           if(val.concepto == "colegiatura"   ){printConfig(val.value,"txt_colegiatura"   ,"config_costo","$")}
           if(val.concepto == "colegiaturades"){printConfig(val.value,"txt_colegiaturades","config_colegiatura","$")}
           if(val.concepto == "1Agosto"       ){printConfig(val.value,"txt_1Agosto"       ,"config_1agosto","$")}
           if(val.concepto == "2Agosto"       ){printConfig(val.value,"txt_2Agosto"       ,"config_2agosto","$")}
           if(val.concepto == "colegiaturaEsp"){printConfig(val.value,"txt_colegiaturaEsp","config_colegiatura_especial","$")}

           if(val.concepto == "inscripcion"   ){printConfig(val.value,"txt_inscripcion"   ,"config_inscripcion","$")}
           if(val.concepto == "seguro"        ){printConfig(val.value,"txt_seguro"        ,"config_seguro","$")}
           if(val.concepto == "material"      ){printConfig(val.value,"txt_material"      ,"config_material","$")}
           if(val.concepto == "interes"       ){printConfig(val.value,"txt_interes"       ,"config_interes","%")}
           if(val.concepto == "dpa"           ){printConfig(val.value,"txt_dpa"           ,"config_dpa","%")}               
        })
        /*colegiatura select list*/
        loadingSelectAll()
        /*buscar ID*/
        autoComplete()
        loadingFechas()
    })
    .fail(function(data, jqXHR, textStatus, errorThrown){xhrError(jqXHR, textStatus, errorThrown)})
    .always(function(data){})
}

function autoComplete(x){
    console.log("%cXhr: Run-> autoComplete: busca los alumnos por ID ","color:green;")
    $('#firstName').autocomplete({
      minLength:4,
      delay:1,
      source: function (req, add) {
        // XMLHttpRequest --->
          $.getJSON(urlDbAlumnoS + "?type=find&search=0",req, function (data) {
          var suggestions = [];
          $.each(data, function (i, val) {
            if (val.Buscador == "Error") {
              suggestions.push({
                id: "Error 101",
                value: "Busqueda fallida",
              });
            } else {
                if(val.Code == 104){
                    suggestions.push({
                        id: "Error 101",
                        value: "Busqueda fallida",
                    });
                }else{
                    suggestions.push({
                        id        : val.id,
                        idAdvance : val.id_advance_alumno,
                        ex        : val.exalumno,
                        value     : val.nombre + " " + val.paterno + " " + val.materno,
                        tipopago  : val.tipopago
                    });
                }
            }
          });
          add(suggestions);
        });
      },
      select: function (event,ui) {

        $("#cobroId").val(ui.item.id)        
        $("#cobrotextId,#cobrotextId_x").html(ui.item.id)        
        $("#print_alumno,#print_alumno").html(ui.item.value)
        $("#cobroIdadvance").val(ui.item.idAdvance) 
        $("#cobroNombre").val(ui.item.value)
        $("#exalumno").val(ui.item.ex)
        $("#precio_change_x").attr('disabled',true)
        
        inputClear()
        loadingcolegiaturas()
        tipo(ui.item.tipopago)
      }
    })
}
function loadingcolegiaturas(){
    $("#historiaAlumno").empty()
    let x = $("#cobroIdadvance").val()
    let jqxhr = $.getJSON(urlDbColegiaturasA + "?type=one&token=" + x, function(data) {})
    .done(function(data) {
        $.each(data, function(i, val) {

            /*
            colegiatura true  o false 
                col_septiembre
            dinero colegiatura
                dinero_septiembre   
            costo de la colegiatura
                cos_septiembre

                "col_septiembre": "1",
                "cos_septiembre": "0",
                dinero_septiembre": "1400",

                lialDataColegiatura(mes,col,dinero,costo)

            lialDataColegiatura("inscripcion",val.col_inscripcion ,val.dinero_inscripcion ,val.cos_inscripcion ,1)
            lialDataColegiatura("seguro"     ,val.col_seguro      ,val.dinero_seguro      ,val.cos_seguro      ,2)
            lialDataColegiatura("material"   ,val.col_material    ,val.dinero_material    ,val.cos_material    ,3)
            */
           if(val.beca_saldoafavor > 0){
            $("#textprecio_saldoafavor").html("$" + val.beca_saldoafavor)
            $("#saldoAfavoril").removeClass("d-none")
           }else{
            $("#saldoAfavoril").addClass("d-none")
           }    

                lialDataColegiatura("1ªagosto"  ,val.col_1agosto   ,val.dinero_1agosto   ,val.cos_1agosto   ,4)
                lialDataColegiatura("septiembre",val.col_septiembre,val.dinero_septiembre,val.cos_septiembre,5)
                lialDataColegiatura("octubre"   ,val.col_octubre   ,val.dinero_octubre   ,val.cos_octubre   ,6)
                lialDataColegiatura("noviembre" ,val.col_noviembre ,val.dinero_noviembre ,val.cos_noviembre ,7)
                lialDataColegiatura("diciembre" ,val.col_diciembre ,val.dinero_diciembre ,val.cos_diciembre ,8)
                lialDataColegiatura("2ªagosto"  ,val.col_2agosto   ,val.dinero_2agosto   ,val.cos_2agosto   ,9)
                lialDataColegiatura("enero"     ,val.col_enero     ,val.dinero_enero     ,val.cos_enero     ,10)
                lialDataColegiatura("febrero"   ,val.col_febrero   ,val.dinero_febrero   ,val.cos_febrero   ,11)
                lialDataColegiatura("marzo"     ,val.col_marzo     ,val.dinero_marzo     ,val.cos_marzo     ,12)
                lialDataColegiatura("abril"     ,val.col_abril     ,val.dinero_abril     ,val.cos_abril     ,13)
                lialDataColegiatura("mayo"      ,val.col_mayo      ,val.dinero_mayo      ,val.cos_mayo      ,14)
                lialDataColegiatura("junio"     ,val.col_junio     ,val.dinero_junio     ,val.cos_junio     ,15)
                lialDataColegiatura("julio"     ,val.col_julio     ,val.dinero_julio     ,val.cos_julio     ,16)

        })
        $("#cobros_serpro").attr("disabled",false)
    })
    .fail(function(data,jqXHR,textStatus,errorThrown){xhrError(jqXHR, textStatus, errorThrown)})
    .always(function(data){})
}

function loadingSelectAll(){
    console.log("%cXhr: Run-> loadingSelectAll: carga la lista de servicios y productos","color:green;")
    //--->
    let jqxhr = $.getJSON(urlDbSerproA + "?type=colegiatura&x=y", function(data) {})
        .done(function(data){
            //--->
            $.each(data, function(i, val) {
                if(
                    val.concepto == "septiembre" ||
                    val.concepto == "octubre"    ||
                    val.concepto == "noviembre"  ||
                    val.concepto == "diciembre"  ||
                    val.concepto == "enero"      ||
                    val.concepto == "febrero"    ||
                    val.concepto == "marzo"      ||
                    val.concepto == "abril"      ||
                    val.concepto == "mayo"       ||
                    val.concepto == "junio"      ||
                    val.concepto == "julio"      ||
                    val.concepto == "1ª ½ de agosto" ||
                    val.concepto == "2ª ½ de agosto"
                ){
                    x = val.concepto + " $" + val.precio;
                    $("#cobros_serpro").append("<option value=\""+ val.id_advance +"\">" + x +"</option>");
                }else{
                    /*
                    x = val.concepto + " $" + val.precio;
                    $("#cobros_serpro").append("<option value=\""+ val.id_advance +"\">" + x +"</option>");
                    */
                }
            })
            //--->
        })
        .fail(function(data,jqXHR,textStatus,errorThrown){xhrError(jqXHR, textStatus, errorThrown)})
        .always(function(data){})
        //--->
}
function loadingFechas(){
    
    $.getJSON(urlDbSerproA  + "?type=fechas")
    .done(function(data) {
        $.each(data, function(i, val) {
            /*
            concepto: "colegiatura"
            fecha: "2022-05-10"
            id: "13"
            id_advance: "cLeTEBN8rsXKMlU99VjN"
            mes: "5"
            time: "2021-07-26 03:03:50"            
            */
            if(val.mes == 1){
                var mesConfig = "Enero"
            }else if(val.mes == 2){
                var mesConfig = "Febrero"
            }else if(val.mes == 3){
                var mesConfig = "Marzo"
            }else if(val.mes == 4){
                var mesConfig = "Abril"
            }else if(val.mes == 5){
                var mesConfig = "Mayo"
            }else if(val.mes == 6){
                var mesConfig = "Junio"
            }else if(val.mes == 7){
                var mesConfig = "Julio"
            }else if(val.mes == 8){
                var mesConfig = "Agosto"
            }else if(val.mes == 9){
                var mesConfig = "Septiembre"
            }else if(val.mes == 10){
                var mesConfig = "Octubre"
            }else if(val.mes == 11){
                var mesConfig = "Noviembre"
            }else if(val.mes == 12){
                var mesConfig = "Diciembre"
            }

            var mesActual = new Date();
            var mes       = mesActual.getMonth() + 1;

            if(mes == val.mes){
                $("#config_mes").val(val.fecha)
                $("#config_depo_mesB").val(val.fecha2)
                $("#config_fechainteres").val(val.interes)
                $("#config_depo_fechainteresB").val(val.interes2)
            }
            

        })
    })
    .fail(function(data,jqXHR,textStatus,errorThrown){xhrError(jqXHR, textStatus, errorThrown)})
    .always(function(data){})
}
function savePago(){
    /*
    save_fecha: 2022/03/14 00:22:48
    save_idUsuario: AfN9M25VoJmSU8Ps9w2
    save_idAlumno: 10
    save_idAdvanceAlumno: fc2edfe26c1ac5976c26
    save_nombreAlumno: jorge francisco rodriguez garibaldo
    save_concepto: 1ª
    save_idadconcepto: col1-usGq4VZo59EHgYX
    save_resta: 105
    save_pago: 805
    save_total: 805
    save_restafavorResto: 00.00
    save_interes: true
    */

    /*
    costo
    resta
    interes
    total
    */
   
    /*
        let xCosto       = $("#cobros_serpro").find("option:selected").text();
        let yCosto       = xCosto.split(" ");
        let zCosto       = yCosto[1].split("$");
        var ticket_costo = zCosto[1];
        
        let print_total_x = $("#print_total").html();
        let print_total_y = print_total_x.split("$");
        var ticket_pago   = print_total_y[1];

        let total_x      = $("#print_total").html();
            total_x      = total_x.split("$");
        var ticket_total = total_x;

    if($("#textprecio_interes").text() == '$00.00'){
        let resta_x      = $("#text_precio_change_x").html();
            resta_x      = resta_x.split("$");
        var ticket_resta = resta_x[1];
        var ticket_interes = false;
    }else{
        let resta_x      = $("#textprecio_interes").html();
            resta_x      = resta_x.split("$");
        var ticket_resta = resta_x[1];
        var ticket_interes = true;
    }
    */
    let ticket_costo   = $("#textprecio_costo").html()
        ticket_costo   = ticket_costo.split("$")
    let ticket_resta   = $("#text_precio_change_x").html()
        ticket_resta   = ticket_resta.split("$")
    let ticket_interes = $("#textprecio_interes").html()
        ticket_interes = ticket_interes.split("$")
    let ticket_subtotal   = $("#print_subtotal").html()
        ticket_subtotal   = ticket_subtotal.split("$")
    let ticket_pago    = $("#precio_PorPagar").val()

    let ticket_interesParcial =  $("#print_interesparcial").html()
        ticket_interesParcial =  ticket_interesParcial.split("$")
    let ticket_total          = $("#print_total").html()
        ticket_total          = ticket_total.split("$")

    let ticket_fecha           = $("#configFecha").val();
    let ticket_idUsuario       = $("#cobroIdUsuario").val();

    let ticket_idAlumno        = $("#cobroId").val();
    let ticket_idAdvanceAlumno = $("#cobroIdadvance").val();
    let ticket_nombreAlumno    = $("#cobroNombre").val();

    let ticket_concepto        = $("#cobros_serpro option:selected").html();
        ticket_concepto        = ticket_concepto.split(" ")
        ticket_concepto1       = ticket_concepto[0]

    let ticket_idadconcepto    = $("#cobros_serpro option:selected").val();

    let restafavorResto_x      = $("#saldoafavorResto").html(); restafavorResto_x = restafavorResto_x.split("$");

    let settings = {
        "url"    : urlDbColegiaturasPagosU + '?type=updatedata',
        "method" : "POST",
        "timeout": 0,
        "headers": {
            /*"Authorization": "Basic cm9vdDphZG1pbg==",*/
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "data"   : {
            "save_fecha"           : ticket_fecha,
            "save_idUsuario"       : ticket_idUsuario,
            "save_idAlumno"        : ticket_idAlumno,
            "save_idAdvanceAlumno" : ticket_idAdvanceAlumno,
            "save_nombreAlumno"    : ticket_nombreAlumno,
            "save_concepto"        : ticket_concepto1,
            "save_idconcepto"      : ticket_idadconcepto,
            "save_costo"           : ticket_costo[1],
            "save_resta"           : ticket_resta[1],
            "save_interes"         : ticket_interes[1],
            "save_subtotal"        : ticket_subtotal[1],
            "save_pago"            : ticket_pago,
            "save_restafavorResto" : restafavorResto_x[1],
            "save_interesParcial"  :ticket_interesParcial[1],
            "save_total"           :ticket_total[1]
        }
    }

    let jqxhr1 = $.ajax(settings).done(function(response) {
            console.log("Run: Cierres")
        })
        .done(function(data) {
            //$.each(data, function(i, val) {})
            //formClear()
            $("#ModalPrint").modal("show")
        })
        .fail(function(data, jqXHR, textStatus, errorThrown) {
            console.info("Run: all user loading error");
            xhrError(jqXHR, textStatus, errorThrown);
        })
        .always(function(data) {
            console.info("Run: all user always");
        })

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
function printConfig(a,b,c,d){
    $("#" + c).val(a)
    
    if(d == "$"){
        $("#" + b).html(d + " " + a)
    }else if(d == "%"){
        $("#" + b).html(a + " " + d)
    }
}
function tipo(x){
    if(x == 'efectivo'){
        $("#tipoefectivo,#btnSaveCobro").removeClass("d-none")
        $("#tipodeposito,#btnSaveDeposito").addClass("d-none")

    }else if(x == 'deposito'){
        $("#tipodeposito,#btnSaveDeposito").removeClass("d-none")
        $("#tipoefectivo,#btnSaveCobro").addClass("d-none")

        datosTicket()

    }else{
        console.error("tipo error")
        $("#tipodeposito").addClass("d-none")
        $("#tipoefectivo").addClass("d-none")
    }
    
    $("#colHistorial,#colTicket").removeClass("d-none")
}
function lialDataColegiatura(mes,col,dinero,costo,num){
    //alert(mes+"---"+col+"---"+dinero+"---"+costo+"---"+num);

    if(mes == "inscripcion"){
        var costo_x = "780"
    }else if(mes == "meterial"){
        var costo_x = "850"
    }else if(mes == "seguro"){
        var costo_x = "180"
    }else if(mes == "material"){
        var costo_x = "850"
    }else if(mes == "1ªagosto"){
        var costo_x = "700"
    }else if(mes == "2ªagosto"){
        var costo_x = "700"
    }else{
        var costo_x = "1400"
    }
    dinero  = parseInt(dinero);
    costo_x = parseInt(costo_x);
    /*
    pagodo_m_ -> precio de la col
    costo_m_  -> pagado
    */
   
    if(col == dinero && col >0){
        console.log(dinero + " ### pagado " + mes + "###" + costo)
        resultPagado = true;
        pago         = "Si Pagado " + mes;
        color        = "text-success"
    }else if(col == 0 ){
        console.log(dinero + "### no pagado " + mes + "###" + costo)
        resultPagado = false;
        pago         = "No Pagado " + mes;
        color        = "text-danger";
    }else if(col > dinero){
        console.log(dinero + "### parcial " + mes + "###" + costo)
        resultPagado = false;
        pago         = "Pagado parcialmete " + mes;
        color        = "text-warning"
    }
    //console.log(mes + " --- " + dinero + " --- " + costo_x)

    let x = '<li class="list-group-item">' +
            ' ' + mes + ':     ' +
            '   <ul>'+
            '       <li><input type="text" id="historialval_m_' + mes + '"  value="'  + resultPagado + '" disabled></li>' + 
            '       <li><input type="text" id="pagodo_m_'       + mes + '"   value="' + col         + '" disabled></li>' + 
            '       <li><input type="text" id="costo_m_'        + mes + '"   value="' + dinero     + '" disabled></li>' + 
            '       <li><input type="text" id="num_m_'          + num + '"   value="' + num      + '" disabled></li>' + 
            '   </ul>'+
            '</li>';
            $("#dataColegiatura").append(x)

    let y =   '<li class="list-group-item d-flex justify-content-between lh-sm">'
            + '     <div>'
            + '         <span  class="' + color + ' text-capitalize" id="print_fecha' + mes + '"> ' + pago + '</span>'
            + '     </div>'
                '</li>';

                $("#historiaAlumno").append(y);
}