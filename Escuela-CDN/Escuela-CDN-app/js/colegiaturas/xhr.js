/*##########################################################################
____  ______ _____________ 
\   \/  /   |   \______   \
 \     /    ~    \       _/
 /     \    Y    /    |   \
/___/\  \___|_  /|____|_  /
      \_/     \/        \/ 
##########################################################################*/
function allXhr(){
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
    /*CRUD*/
    function loadingConfigCol(){
        console.log("%cXhr: Run-> loadingSelectAll carga la lista de servicios y productos","color:SkyBlue;")
        //--->
        let jqxhr = $.getJSON(urlDbConfigA + "?type=all", function(data) {
            })
            .done(function(data) {
                $.each(data, function(i, val) {
                //--->
                //alert(val.precio)
                    if(val.descripcion == 'colegiatura'){
                        let x = val.precio
                        costoColegiatura(x)
                    }else  if(val.descripcion == 'colegiatura especial'){
                        $("#config_colegiatura_especial").val(val.precio)
                    }else if(val.descripcion == 'dpa'){
                        $("#config_dpa").val(val.precio)   
                    }else if(val.descripcion == 'interes'){
                        $("#config_interes").val(val.precio)   
                    }
                //--->
                })
            })
            .fail(function(data,jqXHR,textStatus,errorThrown){xhrError(jqXHR,textStatus,errorThrown)})
            .always(function(data){})
            //--->  
    }
    /*efectivo 1 firstName*/
    function loadingSelectAll(){
        console.log("%cXhr: Run-> loadingSelectAll: carga la lista de servicios y productos","color:SkyBlue;")
        //--->
        let jqxhr = $.getJSON(urlDbSerproA + "?type=colegiatura", function(data) {
            })
            .done(function(data) {
                //--->
                $.each(data, function(i, val) {
                    /*
                    instcripcion
                    colegiatura
                    colegiatura ex alumno
                    colegiatura con beca
                    */
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
                        val.concepto == "julio"
                    ){
                        x = val.concepto;
                    }else{
                        x = val.concepto + " $" + val.precio;
                    }
                    $("#cobros_serpro").append("<option value=\""+ val.id_advance +"\">" + x +"</option>");
                })
                //--->
            })
            .fail(function(data, jqXHR, textStatus, errorThrown){xhrError(jqXHR, textStatus, errorThrown)})
            .always(function(data){})
            //--->  
    }
    /*
    uscador autocomplete pr o jr 
        inputClear()
        loadingcolegiaturas()
        tipo(ui.item.tipopago)    
    */
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
        /*lialDataColegiatura*/
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

                    lialDataColegiatura("inscripcion",val.col_inscripcion,val.dinero_inscripcion,val.cos_inscripcion)
                    lialDataColegiatura("seguro",val.col_seguro,val.dinero_seguro,val.cos_seguro)
                    lialDataColegiatura("material",val.col_material,val.dinero_material,val.cos_material)
                    lialDataColegiatura("1agosto",val.col_1agosto,val.dinero_1agosto,val.cos_1agosto)
                    lialDataColegiatura("2agosto",val.col_2agosto,val.dinero_2agosto,val.cos_2agosto)


                        lialDataColegiatura("septiembre",val.col_septiembre,val.dinero_septiembre,val.cos_septiembre)
                        lialDataColegiatura("octubre",val.col_octubre,val.dinero_octubre,val.cos_octubre)
                        lialDataColegiatura("noviembre",val.col_noviembre,val.dinero_noviembre,val.cos_noviembre)
                        lialDataColegiatura("diciembre",val.col_diciembre,val.dinero_diciembre,val.cos_diciembre)
                        lialDataColegiatura("enero",val.col_enero,val.dinero_enero,val.cos_enero)
                        lialDataColegiatura("febrero",val.col_febrero,val.dinero_febrero,val.cos_febrero)
                        lialDataColegiatura("marzo",val.col_marzo,val.dinero_marzo,val.cos_marzo)
                        lialDataColegiatura("abril",val.col_abril,val.dinero_abril,val.cos_abril)
                        lialDataColegiatura("mayo",val.col_mayo,val.dinero_mayo,val.cos_mayo)
                        lialDataColegiatura("junio",val.col_junio,val.dinero_junio,val.cos_junio)
                        lialDataColegiatura("julio",val.col_julio,val.dinero_julio,val.cos_julio)

                })
                $("#cobros_serpro").attr("disabled",false)
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
    //urlDbconfigR
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
        })
        .fail(function(data, jqXHR, textStatus, errorThrown){xhrError(jqXHR, textStatus, errorThrown)})
        .always(function(data){})
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
    function lialDataColegiatura(mes,col,dinero,costo){
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

        //alert( resultPagado + " " +dinero  + " " +costo_x)

        var x = '<li class="list-group-item">' + 
                ' ' + mes + ':     ' +
                '   <ul>'+
                '       <li><input type="text" id="historialval_m_' + mes + '"  value="'  + resultPagado + '" disabled></li>' + 
                '       <li><input type="text" id="pagodo_m_'       + mes + '"   value="' + dinero       + '" disabled></li>' + 
                '       <li><input type="text" id="costo_m_'        + mes + '"   value="' + costo_x      + '" disabled></li>' + 
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

    function pagadoSM(x,y,z,a,b){
        /*
        pagadoSM(x,y,z,a,b)
        x = db
        y = val del html
        z = txt del html
        a = input
        b = val input
        */    
        //alert(x+ "/------/" +y+ "/------/" +z+ "/------/" +a+ "/------/" +b)
        
        if(b == 0){
            pago         = "No Pagado " + z;
            color        = "text-danger"
            resultPagado = false;
        }else{
            pago         = "Si Pagado " + z;
            color        = "text-success"
            resultPagado = true;
        }
        
        //alert("#" + a + x)
        $("#"+a).val(x)

        x = '<li class="list-group-item d-flex justify-content-between lh-sm">' +
        '<div>' +
        '<input type=\"text\" id=\"historial' + a +'\" value=\"' + resultPagado + '\" disabled>'+
        '    <h6    class="my-0 text-capitalize">' + z + '</h6>' +
        '    <small class="text-mute text-capitalize">2021-2022</small>' +
        '</div>' +
        '<div>' +
        '    <span  class="' + color + ' text-capitalize" id="print_fecha"> ' + pago + '</span>' +
        '</div>' +
        '</li>';
        
    $("#historiaAlumno").append(x)
    }
    function pagosCol(x,y,z,a,b){
        $("#" + x).html(y)

        if(a == 0){
            txt_pagado= "no pagado"
        }else{
            txt_pagado= "si pagado"
        }
        $("#" + z).html(txt_pagado)
        $("#col_actual").val(b)
    }
    function diaAnno(x,y){
        let dayOfYear_1 = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
        let fecha_hoy   = dayOfYear_1(new Date(x))
            console.warn(y + ": " + fecha_hoy)
                return fecha_hoy
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
    function printConfig(a,b,c,d){
        $("#" + c).val(a)
        
        if(d == "$"){
            $("#" + b).html(d + " " + a)
        }else if(d == "%"){
            $("#" + b).html(a + " " + d)
        }
    }    
/*########################################################################*/