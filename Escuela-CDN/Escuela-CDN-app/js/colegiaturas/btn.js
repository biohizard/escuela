/*##########################################################################
____________________________   
\______   \__    ___/\      \  
 |    |  _/ |    |   /   |   \ 
 |    |   \ |    |  /    |    \
 |______  / |____|  \____|__  /
        \/                  \/ 
##########################################################################*/
function allBtn(){
    console.log("%c Load Js BTN ","color:#FA2A00; font-size:24px")

    inputClear()
    generarCobro()
    clearCobro()
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
            let ticket_fecha           = $("#configFecha").val();
            let ticket_idUsuario       = $("#cobroIdUsuario").val();
    
            let ticket_idAlumno        = $("#cobroId").val();
            let ticket_idAdvanceAlumno = $("#cobroIdadvance").val();
            let ticket_nombreAlumno    = $("#cobroNombre").val();
    
            let ticket_concepto        = $("#cobroSerpro").val();
            let ticket_idadconcepto    = $("#cobroIdAdvanceSerpro").val();
    
            let ticket_costo           = $("#precio_costo").val();
            let ticket_resta           = $("#precio_change_x").val();
            let ticket_pago            = $("#precio_PorPagar").val()
            let ticket_total           = $("#val_precio_total").val()
    
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
/*########################################################################*/

/*##########################################################################
            ___.            __________               __  .__                     
  ________ _\_ |__          \______   \ ____  __ ___/  |_|__| ____   ___________ 
 /  ___/  |  \ __ \   ______ |       _//  _ \|  |  \   __\  |/    \_/ __ \_  __ \
 \___ \|  |  / \_\ \ /_____/ |    |   (  <_> )  |  /|  | |  |   |  \  ___/|  | \/
/____  >____/|___  /         |____|_  /\____/|____/ |__| |__|___|  /\___  >__|   
     \/          \/                 \/                           \/     \/       
##########################################################################*/
function imprSelec(nombre) {
    var ficha = document.getElementById(nombre);
    var ventimp = window.open(' ', 'popimpr');
    ventimp.document.write(ficha.innerHTML);
    ventimp.document.close();
    ventimp.print();
    ventimp.close();
}
/*########################################################################*/