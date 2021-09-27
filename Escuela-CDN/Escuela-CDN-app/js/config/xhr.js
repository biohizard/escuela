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
   
    /*
    val_colegiatura
    val_colegiaturades
    val_1Agosto
    val_2Agosto
    val_colegiaturaEsp

    val_inscripcion
    val_seguro
    val_material
    val_interes
    val_dpa
    */
   
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
                    '    <th scope=\"row\"><input type=\"checkbox\" class=\"productoId\" value=\"' + val.id_advance + '\"></th>' +
                    '    <td>' + val.concepto +'</td>' +
                    '    <td>'+ val.precio +'</td>' +
                    '    <td>'+ val.type +'</td>' +
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