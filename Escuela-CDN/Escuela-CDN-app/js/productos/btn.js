function btnAll(){
    /*############################################################*/
    console.log("%c Load Js BTN ","color:#FA2A00; font-size:24px")

    inputClear()
    generarCobro()
    clearCobro()
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

function inputClear(){
    console.log("%cRun -> 1 inputClear : limpia los input","color:SkyBlue;")
    $("#firstName").on('click', function() {
        formClear()
    })
}
function printUltima(){
    $("#print1").on('click',function(){
        imprSelec('exampleModalToggle')
    })
    
}
function generarCobro(){
    $("#btnSaveCobro").on("click",function(){
        //imprSelec('print_div')
        let ticket_fecha                  = $("#configFecha").val()
        let ticket_idUsuario              = $("#cobroIdUsuario").val()
        let ticket_cobroId                = $("#cobroId").val()
        let ticket_cobroIdadvance         = $("#cobroIdadvance").val()
        let ticket_cobroNombre            = $("#cobroNombre").val()
        let ticket_cobroSerpro            = $("#cobroSerpro").val()
        let ticket_cobroIdAdvanceSerpro   = $("#cobroIdAdvanceSerpro").val()
        let ticket_precio_costo           = $("#precio_costo").val()
        let ticket_val_precio_total       = $("#val_precio_total").val()

        //alert(ticket_fecha + "-----" +ticket_idUsuario + "-----" + ticket_cobroId + "-----" + ticket_cobroIdadvance + "-----" +ticket_cobroNombre + "-----" + ticket_cobroSerpro + "-----" + ticket_cobroIdAdvanceSerpro + "-----" + ticket_precio_costo + "-----" + ticket_val_precio_total)

        let settings = {
            "url": urlDbColegiaturasPagosU + '?type=updatedatados',
            "method": "POST",
            "timeout": 0,
            "headers": {
                /*"Authorization": "Basic cm9vdDphZG1pbg==",*/
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "data": {
                "save_fecha"                : ticket_fecha ,
                "save_idUsuario"            : ticket_idUsuario ,
                "save_cobroId"              : ticket_cobroId ,
                "save_cobroIdadvance"       : ticket_cobroIdadvance ,
                "save_cobroNombre"          : ticket_cobroNombre,
                "save_cobroSerpro"          : ticket_cobroSerpro,
                "save_cobroIdAdvanceSerpro" : ticket_cobroIdAdvanceSerpro,
                "save_precio_costo"         : ticket_precio_costo,
                "save_val_precio_total"     : ticket_val_precio_total
            }
        };
    
        let jqxhr1 = $.ajax(settings).done(function(response) {
                console.log("Run: Cierres")
            })
            .done(function(data) {
                //$.each(data, function(i, val) {})
                formClear()
            })
            .fail(function(data, jqXHR, textStatus, errorThrown) {
                console.info("Run: all user loading error");
                xhrError(jqXHR, textStatus, errorThrown);
            })
            .always(function(data) {
                console.info("Run: all user always");
            })
    })
}
function clearCobro(){
    $("#btnClearCobro").on("click",function(){
        formClear()
    })
}

/*##########################################################################
           | |                     | | (_)
  ___ _   _| |__    _ __ ___  _   _| |_ _ _ __   ___  ___
 / __| | | | '_ \  | '__/ _ \| | | | __| | '_ \ / _ \/ __|
 \__ \ |_| | |_) | | | | (_) | |_| | |_| | | | |  __/\__ \
 |___/\__,_|_.__/  |_|  \___/ \__,_|\__|_|_| |_|\___||___/
##########################################################################*/
function imprSelec(nombre) {
    var ficha = document.getElementById(nombre);
    var ventimp = window.open(' ', 'popimpr');
    ventimp.document.write(ficha.innerHTML);
    ventimp.document.close();
    ventimp.print();
    ventimp.close();
}