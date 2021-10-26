/*##########################################################################
____  ______ _____________ 
\   \/  /   |   \______   \
 \     /    ~    \       _/
 /     \    Y    /    |   \
/___/\  \___|_  /|____|_  /
      \_/     \/        \/ 
##########################################################################*/
function allXhr(){
    loadingconfig()
    loadingProductos()
    loadingFechas()
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
    //urlDbconfigR
    function loadingconfig(){
        $.getJSON(urlDbconfigR + "?type=all")
        .done(function(data) {
            $.each(data, function(i, val) {

               if(val.concepto == "colegiatura"   ){printConfig(val.value,"txt_colegiatura","val_colegiatura","$")}
               if(val.concepto == "colegiaturades"){printConfig(val.value,"txt_colegiaturades","val_colegiaturades","$")}
               if(val.concepto == "1Agosto"       ){printConfig(val.value,"txt_1Agosto","val_1Agosto","$")}
               if(val.concepto == "2Agosto"       ){printConfig(val.value,"txt_2Agosto","val_2Agosto","$")}
               if(val.concepto == "colegiaturaEsp"){printConfig(val.value,"txt_colegiaturaEsp","val_colegiaturaEsp","$")}

               if(val.concepto == "inscripcion"   ){printConfig(val.value,"txt_inscripcion","val_inscripcion","$")}
               if(val.concepto == "seguro"        ){printConfig(val.value,"txt_seguro","val_seguro","$")}
               if(val.concepto == "material"      ){printConfig(val.value,"txt_material","val_material","$")}
               if(val.concepto == "interes"       ){printConfig(val.value,"txt_interes","val_interes","%")}
               if(val.concepto == "dpa"           ){printConfig(val.value,"txt_dpa","val_dpa","%")}               
            })
        })
        .fail(function(data, jqXHR, textStatus, errorThrown){xhrError(jqXHR, textStatus, errorThrown)})
        .always(function(data){})
    }
    function saveConfig(){
    console.log("let save form")

    let config_colegiatura     = $("#val_colegiatura").val()
    let config_colegiaturades  = $("#val_colegiaturades").val()
    let config_1Agosto         = $("#val_1Agosto").val()
    let config_2Agosto         = $("#val_2Agosto").val()
    let config_colegiaturaEsp  = $("#val_colegiaturaEsp").val()

    let config_inscripcion     = $("#val_inscripcion").val()
    let config_seguro          = $("#val_seguro").val()
    let config_material        = $("#val_material").val()
    let config_interes         = $("#val_interes").val()
    let config_dpa             = $("#val_dpa").val()

    let settings = {
        "url": urlDbconfigU + "?type=update",
        "method": "POST",
        "timeout": 0,
        "headers": {
            /*"Authorization": "Basic cm9vdDphZG1pbg==",*/
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "data":{
            'save_colegiatura'   : config_colegiatura     ,
            'save_colegiaturades': config_colegiaturades  ,
            'save_1Agosto'       : config_1Agosto         ,
            'save_2Agosto'       : config_2Agosto         ,
            'save_colegiaturaEsp': config_colegiaturaEsp  ,
            'save_inscripcion'   : config_inscripcion     ,
            'save_seguro'        : config_seguro          ,
            'save_material'      : config_material        ,
            'save_interes'       : config_interes         ,
            'save_dpa'           : config_dpa
            }
    }

    let jqxhr1 = $.ajax(settings)
        .done(function(data) {
            //$.each(data, function(i, val) {})
        })
        .fail(function(data, jqXHR, textStatus, errorThrown) {
            console.info("Run: all user loading error");
            xhrError(jqXHR, textStatus, errorThrown);})
        .always(function(data) {
            loadingconfig();
            console.info("Run: all user always");
        })

    }

function loadingProductos(){
    $("#productosInfo").empty()
    /*
{
    "id": "88",
    "id_advance": "brdDtaeySH3Mh31TuUR6",
    "time": "2021-08-03 02:09:44",
    "concepto": "mica media carta ",
    "precio": "14.00",
    "descripcion": "mica media carta ",
    "type": "producto",
    "grado": null,
    "fecha_limite": "2022-07-31"
  },    
    */
    $.getJSON(urlDbSerproA  + "?type=all")
    .done(function(data) {
        $.each(data, function(i, val) {

            let productosLoad = '<tr>' +
                    '    <th scope=\"row\"><input type=\"checkbox\" class=\"productoId\" value=\"' + val.id_advance + '\" name="proact"></th>' +
                    '    <td class=\"'+ val.id_advance + ' actualizarConcepto \">' + val.concepto +'</td>' +
                    '    <td class=\"'+ val.id_advance + ' actualizarPrecio   \">'+ val.precio +'</td>' +
                    '    <td class=\"'+ val.id_advance + ' actualizarType     \">'+ val.type +'</td>' +
                    '</tr>';

            $("#productosInfo").append(productosLoad);
        })
    })
    .fail(function(data,jqXHR,textStatus,errorThrown){xhrError(jqXHR, textStatus, errorThrown)})
    .always(function(data){})
}
function saveDataProductos(){
    console.log("let save form")
    let producto_concepto  = $("#producto_concepto").val()
    let producto_precio    = $("#producto_precio").val()
    let producto_tipo      = $("#producto_tipo").val()

    let settings = {
        "url": urlDbSerproC + '?type=save',
        "method": "POST",
        "timeout": 0,
        "headers": {
            /*"Authorization": "Basic cm9vdDphZG1pbg==",*/
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "data":{
            'producto_concepto' : producto_concepto,
            'producto_precio' : producto_precio,
            'producto_tipo' : producto_tipo
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
            loadingProductos()
            $("#ModalProductoNuevo").modal('hide')
        })
    
}    

function updateDataProductos(){
    
    console.log("let save form")
    let producto_concepto  = $("#producto_concepto_act").val()
    let producto_precio    = $("#producto_precio_act").val()
    let producto_tipo      = $("#producto_tipo_act").val()
    let producto_id = $("input[type='checkbox']:checked").val()
    
    let settings = {
        "url": urlDbSerproU + '?type=save',
        "method": "POST",
        "timeout": 0,
        "headers": {
            /*"Authorization": "Basic cm9vdDphZG1pbg==",*/
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "data":{
            'producto_id'      : producto_id,
            'producto_concepto' : producto_concepto,
            'producto_precio' : producto_precio,
            'producto_tipo' : producto_tipo
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
            loadingProductos()
            
            $("#ModalProductoActualizar").modal('hide')
        })
    
}    

function loadingFechas(){
    $("#fechasInfo,#fechasInfo2").empty()

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

            let fechasLoad = '<tr>' +
                    '    <th scope=\"row\"><input type=\"checkbox\" class=\"productoId\" value=\"' + val.id_advance + '\" name="proact"></th>' +
                    '    <td class=\"'+ val.id_advance + ' actualizarFechaConcepto \">' + val.concepto + '</td>' +
                    '    <td class=\"'+ val.id_advance + ' actualizarFechaMes      \">' + mesConfig    + '</td>' +
                    '    <td class=\"'+ val.id_advance + ' actualizarFechaFecha    \">' + val.fecha    + '</td>' +
                    '</tr>';

            

            let fechasLoad2 = '<tr>' +
                    '    <th scope=\"row\"><input type=\"checkbox\" class=\"productoId\" value=\"' + val.id_advance + '\" name="proact"></th>' +
                    '    <td class=\"'+ val.id_advance + ' actualizarFechaConcepto2 \">' + val.concepto + '</td>' +
                    '    <td class=\"'+ val.id_advance + ' actualizarFechaMes2      \">' + mesConfig    + '</td>' +
                    '    <td class=\"'+ val.id_advance + ' actualizarFechaFecha2    \">' + val.fecha2    + '</td>' +
                    '</tr>';
            
                $("#fechasInfo").append(fechasLoad)
                $("#fechasInfo2").append(fechasLoad2)
        })
    })
    .fail(function(data,jqXHR,textStatus,errorThrown){xhrError(jqXHR, textStatus, errorThrown)})
    .always(function(data){})
}
function saveDataFechas(){
    console.log("let save form")
    let producto_concepto  = $("#fecha_concepto").val()
    let producto_fecha     = $("#fecha_fecha").val()
    let producto_id        = $("input[type='checkbox']:checked").val()

    //alert(producto_id + " " + producto_concepto + " " + producto_fecha)
    
    let settings = {
        "url": urlDbSerproU + '?type=fecha',
        "method": "POST",
        "timeout": 0,
        "headers": {"Content-Type": "application/x-www-form-urlencoded"},
        "data":{
            'producto_concepto' : producto_concepto,
            'producto_fecha'    : producto_fecha,
            'producto_id'       : producto_id
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
            loadingFechas()
            $("#ModalFechasActualizar").modal('hide')
        })
    
}
function saveDataFechas2(){
    console.log("let save form")
    let producto_concepto  = $("#fecha_concepto").val()
    let producto_fecha     = $("#fecha_fecha2").val()
    let producto_id        = $("input[type='checkbox']:checked").val()

    //alert(producto_id + " " + producto_concepto + " " + producto_fecha)
    
    let settings = {
        "url": urlDbSerproU + '?type=fecha2',
        "method": "POST",
        "timeout": 0,
        "headers": {"Content-Type": "application/x-www-form-urlencoded"},
        "data":{
            'producto_concepto' : producto_concepto,
            'producto_fecha'    : producto_fecha,
            'producto_id'       : producto_id
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
            loadingFechas()
            $("#ModalFechas2Actualizar").modal('hide')
        })
    
}     
/*########################################################################*/
    function printConfig(a,b,c,d){
        $("#" + c).val(a)
        
        if(d == "$"){
            $("#" + b).html(d + " " + a)
        }else if(d == "%"){
            $("#" + b).html(a + " " + d)
        }
    }
/*##########################################################################
            ___.            __________               __  .__                     
  ________ _\_ |__          \______   \ ____  __ ___/  |_|__| ____   ___________ 
 /  ___/  |  \ __ \   ______ |       _//  _ \|  |  \   __\  |/    \_/ __ \_  __ \
 \___ \|  |  / \_\ \ /_____/ |    |   (  <_> )  |  /|  | |  |   |  \  ___/|  | \/
/____  >____/|___  /         |____|_  /\____/|____/ |__| |__|___|  /\___  >__|   
     \/          \/                 \/                           \/     \/       
##########################################################################*/

/*########################################################################*/     