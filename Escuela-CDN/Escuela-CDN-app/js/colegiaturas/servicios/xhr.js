/*##########################################################################
____  ______ _____________ 
\   \/  /   |   \______   \
 \     /    ~    \       _/
 /     \    Y    /    |   \
/___/\  \___|_  /|____|_  /
      \_/     \/        \/ 
##########################################################################*/
function colegiaturasXhr(){
    console.log("%c Load Js XHR ","color:#FA2A00; font-size:24px")
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
function autoComplete(){
    console.log("%cXhr: Run-> autoComplete: busca los alumnos por ID ","color:SkyBlue;")
    //--->
    $("#firstName").autocomplete({
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
      select: function (event, ui) {
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
      },
    });
    //--->
}    
function loadingSelectAll(){
    console.log("%cXhr: Run-> loadingSelectAll: carga la lista de servicios y productos","color:SkyBlue;")
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
                    //x = val.concepto;
                }else{
                    x = val.concepto + " $" + val.precio;
                    $("#cobros_serpro").append("<option value=\""+ val.id_advance +"\">" + x +"</option>");
                }
            })
            //--->
        })
        .fail(function(data,jqXHR,textStatus,errorThrown){xhrError(jqXHR, textStatus, errorThrown)})
        .always(function(data){})
        //--->
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
            */

            lialDataColegiatura("inscripcion",val.col_inscripcion ,val.dinero_inscripcion ,val.cos_inscripcion ,1)
            lialDataColegiatura("seguro"     ,val.col_seguro      ,val.dinero_seguro      ,val.cos_seguro      ,2)
            lialDataColegiatura("material"   ,val.col_material    ,val.dinero_material    ,val.cos_material    ,3)

                /*
                lialDataColegiatura("1ª de agosto",val.col_1agosto,val.dinero_1agosto,val.cos_1agosto,4)
                lialDataColegiatura("septiembre",val.col_septiembre,val.dinero_septiembre,val.cos_septiembre,5)
                lialDataColegiatura("octubre",val.col_octubre,val.dinero_octubre,val.cos_octubre,6)
                lialDataColegiatura("noviembre",val.col_noviembre,val.dinero_noviembre,val.cos_noviembre,7)
                lialDataColegiatura("diciembre",val.col_diciembre,val.dinero_diciembre,val.cos_diciembre,8)
                lialDataColegiatura("2ª de agosto",val.col_2agosto,val.dinero_2agosto,val.cos_2agosto,9)
                lialDataColegiatura("enero",val.col_enero,val.dinero_enero,val.cos_enero,10)
                lialDataColegiatura("febrero",val.col_febrero,val.dinero_febrero,val.cos_febrero,11)
                lialDataColegiatura("marzo",val.col_marzo,val.dinero_marzo,val.cos_marzo,12)
                lialDataColegiatura("abril",val.col_abril,val.dinero_abril,val.cos_abril,13)
                lialDataColegiatura("mayo",val.col_mayo,val.dinero_mayo,val.cos_mayo,14)
                lialDataColegiatura("junio",val.col_junio,val.dinero_junio,val.cos_junio,15)
                lialDataColegiatura("julio",val.col_julio,val.dinero_julio,val.cos_julio,16)
                */

        })
        $("#cobros_serpro").attr("disabled",false)
    })
    .fail(function(data,jqXHR,textStatus,errorThrown){xhrError(jqXHR, textStatus, errorThrown)})
    .always(function(data){})
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

    //imprSelec('print_div')
    let ticket_fecha           = $("#configFecha").val();
    let ticket_idUsuario       = $("#cobroIdUsuario").val();

    let ticket_idAlumno        = $("#cobroId").val();
    let ticket_idAdvanceAlumno = $("#cobroIdadvance").val();
    let ticket_nombreAlumno    = $("#cobroNombre").val();

    let ticket_concepto        = $("#cobros_serpro option:selected").html();
    let ticket_idadconcepto    = $("#cobros_serpro option:selected").val();

    let x = $("#cobros_serpro").find("option:selected").text();let y = x.split(" ");let z = y[1].split("$");
    let ticket_costo           = z[1];
    
    let resta_x = $("#text_precio_change_x").html(); resta_x = resta_x.split("$");
    let ticket_resta           = resta_x[1];
    
    var print_total_x = $("#print_total").html();
    var print_total_y = print_total_x.split("$");
    let ticket_pago   = print_total_y[1];

    
    let total_x = $("#print_total").html(); total_x = total_x.split("$");
    let ticket_total           = total_x;

    //alert(ticket_fecha + "/-----/" + ticket_idUsuario + "/-----/" + ticket_idAlumno + "/-----/" + ticket_idAdvanceAlumno + "/-----/" + ticket_nombreAlumno + "/-----/" + ticket_concepto + "/-----/" + ticket_costo + "/-----/" + ticket_resta + "/-----/" + ticket_pago + "/-----/" + ticket_total)
/*
    FICHA DE INSCRIPCION (4)
    DATOS DEL ALUMNO     (14)
    PARA ALUMNOS DE 1ER GRADO (6)
    DATOS DEL TUTOR (3)
*/
let settings = {
    "url": urlDbColegiaturasPagosU + '?type=updatedata',
    "method": "POST",
    "timeout": 0,
    "headers": {
        /*"Authorization": "Basic cm9vdDphZG1pbg==",*/
        "Content-Type": "application/x-www-form-urlencoded"
    },
    "data": {
        "save_fecha"           : ticket_fecha           ,
        "save_idUsuario"       : ticket_idUsuario       ,
        "save_idAlumno"        : ticket_idAlumno        ,
        "save_idAdvanceAlumno" : ticket_idAdvanceAlumno ,
        "save_nombreAlumno"    : ticket_nombreAlumno    ,
        "save_concepto"        : ticket_concepto        ,
        "save_idadconcepto"    : ticket_idadconcepto    ,
        "save_costo"           : ticket_costo           ,
        "save_resta"           : ticket_resta           ,
        "save_pago"            : ticket_pago            ,
        "save_total"           : ticket_total
    }
};

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
    /*

                    "col_septiembre": "1",
                    "cos_septiembre": "0",
                    dinero_septiembre": "1400",
                    
                    lialDataColegiatura(mes,col,dinero,costo)
                    lialDataColegiatura("septiembre",val.col_septiembre,val.dinero_septiembre,val.cos_septiembre)

    */
    //alert(mes+ " " +col+ " " +dinero+ " " +costo)

    if(costo == 0){

        //---------------------------------------------------------------->
        if(dinero >= $("#config_costo").val()){
            resultPagado = true;
            pago         = "Si Pagado " + mes;
            color        = "text-success"
        }else{
            resultPagado = false;
            pago         = "No Pagado " + mes;
            color        = "text-danger";                

        }

        if(mes == "inscripcion"){
            var costo_x = "780"
        }else if(mes == "meterial"){
            var costo_x = "850"
        }else if(mes == "seguro"){
            var costo_x = "180"
        }else if(mes == "material"){
            var costo_x = "850"
        }else if(mes == "1agosto"){
            var costo_x = "700"
        }else if(mes == "2agosto"){
            var costo_x = "700"
        }else{
            var costo_x = $("#config_costo").val();
        }
        
        //---------------------------------------------------------------->

    }else{
        
        //---------------------------------------------------------------->
        if(dinero <= $("#config_costo").val()){
            resultPagado = false;
            pago         = "No Pagado " + mes;
            color        = "text-danger";
        }else{
            resultPagado = true;
            pago         = "Si Pagado " + mes;
            color        = "text-success"
        }

        if(mes == "inscripcion"){
            var costo_x = "780"
        }else if(mes == "meterial"){
            var costo_x = "850"
        }else if(mes == "seguro"){
            var costo_x = "180"
        }else if(mes == "1agosto"){
            var costo_x = "700"
        }else if(mes == "2agosto"){
            var costo_x = "700"
        }else{
            var costo_x = $("#config_costo").val();
        }
        //---------------------------------------------------------------->

    }

    var x = '<li class="list-group-item">' + 
            ' ' + mes + ':     ' +
            '   <ul>'+
            '       <li><input type="text" id="historialval_m_' + mes + '"  value="'  + resultPagado + '" disabled></li>' + 
            '       <li><input type="text" id="pagodo_m_'       + mes + '"   value="' + dinero       + '" disabled></li>' + 
            '       <li><input type="text" id="costo_m_'        + mes + '"   value="' + costo_x     + '" disabled></li>' + 
            '       <li><input type="text" id="num_m_'        + num + '"   value="' + num      + '" disabled></li>' + 
            '   </ul>'+
            '</li>';
        $("#dataColegiatura").append(x)

    var y = '<li class="list-group-item d-flex justify-content-between lh-sm">' +
            '<div>' +
            '    <span  class="' + color + ' text-capitalize" id="print_fecha"> ' + pago + '</span>' +
            '</div>' +
            '</li>';
         $("#historiaAlumno").append(y);


}
/*########################################################################*/