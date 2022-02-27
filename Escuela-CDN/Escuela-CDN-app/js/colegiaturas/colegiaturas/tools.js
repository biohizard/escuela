/*##########################################################################
___________________   ________  .____
\__    ___/\_____  \  \_____  \ |    |
  |    |    /   |   \  /   |   \|    |
  |    |   /    |    \/    |    \    |___
  |____|   \_______  /\_______  /_______ \
                   \/         \/        \/
##########################################################################*/

    /**
    * Function     inputSelectPago
    * @author      biohizard
    * @description {}
    * @param       {}
    * @return      {}
    **/
    function colegiaturasTool(){
        console.log("%c Load Js TOOLS ","color:magenta; font-size:24px")
        inputAutoComplete()
        inputSelectPago()
        inputPago()
        saldoaFavor()
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

    /**
    * Function     inputSelectPago
    * @author      biohizard
    * @description {}
    * @param       {}
    * @return      {}
    **/
    /************************************/   
    function inputAutoComplete(){
        autoComplete()
    }
    /************************************/

    /**
    * Function     inputSelectPago
    * @author      biohizard
    * @description {}
    * @param       {}
    * @return      {}
    **/
    /************************************/
    function inputSelectPago(){
        // select #cobros_serpro
        $("#cobros_serpro").change(function(){
            //alert("change col")
            
            let x = $(this).find("option:selected").text();
            let y = x.split(" ");
        
            $("#precio_PorPagar").attr("disabled",false)
            


            if(y.length == 2){
                var z = y[1].split("$");

                    var selectMes   = y[0]
                    let mesHisorial = $("#print_fecha" + selectMes).html()
                        mesHisorial = mesHisorial.split(" ")

                        console.log(selectMes)
            }else if(y.length == 5){
                var z = y[4].split("$");

                    var selectMes   = y[0]+y[3]
                    let mesHisorial = $("#print_fecha" + selectMes).html()
                        mesHisorial = mesHisorial.split(" ")

                        console.log(selectMes)
            }

            let mesPagadoResult = mesPagado(selectMes);

            if(mesPagadoResult  == "false"){
            
                if( mesPagadoResult == "true"){
                
                }else if( mesPagadoResult == "false"){
                    
                    var limpiarTxt = "false";
    
                    conceptoCobro(selectMes,limpiarTxt)
                    conceptoCosto(z[1],limpiarTxt)
                    conceptoPago(selectMes,limpiarTxt)
                    conceptoResta(selectMes,limpiarTxt)
                    
                    rangoFecha(selectMes)

                    //interes(z[1])

                }else{console.error("Error: Mes pagado")}

            }else{}
        })
    }
    /************************************/

        /**
        * Function     conceptoCobro
        * @author      biohizard
        * @description {}
        * @param       {y: select text}
        * @return      {}
        **/
        /************************************/
        function conceptoCobro(y,limpiarTxt){
            console.log("conceptoCobro: y->" + y + " -- limpiarTxt-> " + limpiarTxt)

            if(limpiarTxt == 'false'){

                $("#textSerpro_x").html($("#cobros_serpro").find("option:selected").text())

                }else if(limpiarTxt == 'true'){

                    $("#textSerpro_x").html("Concepto Del Cobro")

                }else{}
        }
        /************************************/

        /**
        * Function     conceptoCobro
        * @author      biohizard
        * @description {}
        * @param       {y: select text}
        * @return      {}
        **/
        /************************************/
        function conceptoCosto(y,limpiarTxt){
            console.log("conceptoCosto: y->" + y + " -- limpiarTxt-> " + limpiarTxt)
            //conceptoCosto: y->1ªagosto -- limpiarTxt-> false

            if(limpiarTxt == "false"){
                $("#textprecio_costo").html("$" + y)
            }else if(limpiarTxt == "true"){
                $("#textprecio_costo").html("$00.00")
            }
        }
        /************************************/

        /**
        * Function     conceptoPago
        * @author      biohizard
        * @description {}
        * @param       {y: select text}
        * @return      {}
        **/
        /************************************/
        function conceptoPago(y,limpiarTxt){
            console.log("conceptoPago: y->" + y + " -- limpiarTxt-> " + limpiarTxt)
            if(limpiarTxt == "false"){
            }else if(limpiarTxt == "true"){
            }
        }
        /************************************/

        /**
        * Function     conceptoResta
        * @author      biohizard
        * @description {}
        * @param       {y: select text}
        * @return      {}
        **/
        /************************************/
        function conceptoResta(y,limpiarTxt){
            console.log("cconceptoResta: y->" + y + " -- limpiarTxt-> " + limpiarTxt)

            let costo = $("#textprecio_costo").html()
            costo_x = costo.split("$")
            
            
            xxx = parseInt(costo_x[1]) -  parseInt($("#pagodo_m_" + y).val())
            
            $("#text_precio_change_x").html("$" + xxx)
            $("#precio_change_x").val(xxx)

            let interesHtml = (xxx*0.15) + parseInt($("#precio_change_x").val())
            $("#textprecio_interes").html("$"+interesHtml+".00")

        }
        /************************************/

/**
* Function     {inputPago}
* @author      biohizard
* @description {}
* @param       {}
* @return      {}
**/
/************************************/
function inputPago(){
    
    $("#precio_PorPagar").on("input",function(){
        console.log("cinputPago")
        if($("#typoMes").val() == "normal"){


            $("#precio_PorPagar").attr("disabled",false)

            let resta   = $("#text_precio_change_x").html()
                resta   = resta.split("$")
                resta_y = resta[1]
    
            let pago_y =  $("#precio_PorPagar").val();
                pagoresta = parseInt(resta_y) - parseInt(pago_y)
            
            if(pagoresta < 0){
                $("#precio_PorPagar").val("0")
                $("#print_pago").html("$00.00")
            }else{
                $("#print_pago" ).html("$" + $("#precio_PorPagar").val())
                $("#print_total").html("$" + $("#precio_PorPagar").val())
            }
            
            

        }else{
            let resta   = $("#textprecio_interes").html()
                resta   = resta.split("$")
                resta_y = resta[1]
    
                let pago_y =  $("#precio_PorPagar").val();
                pagoresta = parseInt(resta_y) - parseInt(pago_y)

                if(pagoresta < 0){
                    $("#precio_PorPagar").val("0")
                    $("#print_pago").html("$00.00")
                }else{
                    $("#print_pago" ).html("$" + $("#precio_PorPagar").val())
                    $("#print_total").html("$" + $("#precio_PorPagar").val())
                }
            
                
        }


    //$("#print_pago").html("$" + pagoresta)
    //----->
    /*
    // hay que agregar lo ya pagado
    $("#print_pago").html("$" + $(this).val())

    //pagol
    let pago = $(this).val()

    //textp
    recio_costo
    let costo = $("#textprecio_costo").html()
    costo_x = costo.split("$")

    //print_pago
    let xxx = parseInt(costo_x[1]) - parseInt(pago);
    $("#text_precio_change_x").html("$" + xxx)
    */

    })    
}
/************************************/

    /**
    * Function     inputSelectPago
    * @author      biohizard
    * @description {}
    * @param       {}
    * @return      {}
    **/
    /************************************/
    function saldoaFavor(){
        $("#aplicarsaldoafavor").on("input",function(){

            if($("#aplicarsaldoafavor").is(':checked') == true){
                
                $("#print_pago" ).html("$00.00")
                $("#print_total").html("$00.00")
                
                $("#precio_PorPagar").val(0).attr("disabled",true)

                    let x = $("#cobros_serpro").find("option:selected").text();
                    let y = x.split(" ");

                    if(y.length == 2){
                        var z = y[1].split("$");
                    }else{
                        var z = y[4].split("$");
                    }

                    let resta   = $("#text_precio_change_x").html()
                    resta   = resta.split("$")
                    resta_y = resta[1]

                    let saldoafavor = $("#textprecio_saldoafavor").html()
                    saldoafavor   = saldoafavor.split("$")
                    saldoafavor_y = saldoafavor[1]

                    //-------------------------------------------------------------------------->
                    if(parseFloat(saldoafavor_y) > parseFloat(resta_y)){

                        let total_y      =  parseFloat(saldoafavor_y) - parseFloat(resta_y);
                        let totalResta_y =  -1 * (parseFloat(resta_y) - parseFloat(saldoafavor_y));
                        
                        $("#saldoafavorResto").html("$" + totalResta_y)

                        $("#saldoAFavorRestate" ).val(total_y)
                        $("#print_pago" ).html("$" + resta_y)
                        $("#print_total").html("$" + resta_y)

                    //-------------------------------------------------------------------------->
                    }else{
                    //-------------------------------------------------------------------------->
                    /*
                    text_precio_change_x
                    */
                        // saldo a favor
                        let total_y      =  parseFloat(saldoafavor_y) - parseFloat(resta_y);
                        
                        if(total_y <= 0 ){
                            totalResta_y_bug = 0;
                            let textprecio_saldoafavor   = $("#textprecio_saldoafavor").html();
                                textprecio_saldoafavor   = textprecio_saldoafavor.split("$");
                                resta_y_bug = textprecio_saldoafavor[1];
                        }else{}

                        $("#saldoafavorResto").html("$" + totalResta_y_bug)

                        $("#print_pago" ).html("$" + resta_y_bug)
                        $("#print_total").html("$" + resta_y_bug)
                    //-------------------------------------------------------------------------->
                    }
                    

                
            
            }else if($("#aplicarsaldoafavor").is(':checked') == false){
                $("#precio_PorPagar").val(0).attr("disabled",false)
                location.reload()
            }
            
        })
    }
    /************************************/

    /**
    * Function     {name}
    * @author      biohizard
    * @description {}
    * @param       {}
    * @return      {}
    **/
    /************************************/
    function interes(x){
        
        console.log("interes: " + x)

        var porcentaje    = "1." + $("#config_interes").val()

        var interesResult = parseFloat(x) * parseFloat(porcentaje)
        alert(interesResult.toFixed(2))

    }
    /************************************/

/*########################################################################*/

/*##########################################################################
            ___.            __________               __  .__
  ________ _\_ |__          \______   \ ____  __ ___/  |_|__| ____   ___________
 /  ___/  |  \ __ \   ______ |       _//  _ \|  |  \   __\  |/    \_/ __ \_  __ \
 \___ \|  |  / \_\ \ /_____/ |    |   (  <_> )  |  /|  | |  |   |  \  ___/|  | \/
/____  >____/|___  /         |____|_  /\____/|____/ |__| |__|___|  /\___  >__|
     \/          \/                 \/                           \/     \/
##########################################################################*/
function rangoFecha(x){
    console.log("%cRun -> rangoFecha: ","color:Fucsia;")

    var dt   = new Date();

    if(x == "1ªagosto"){
        var numberMes = "08";
        var anno = dt.getFullYear()
            anno = anno -1
    }else if(x == "septiembre"){
        var numberMes = "09";
        var anno = dt.getFullYear()
            anno = anno -1
    }else if(x == "octubre"){
        var numberMes = "10";
        var anno = dt.getFullYear()
            anno = anno -1
    }else if(x == "noviembre"){
        var numberMes = "11";
        var anno = dt.getFullYear()
            anno = anno -1
    }else if(x == "diciembre"){
        var numberMes = "12";
        var anno = dt.getFullYear()
            anno = anno -1
    }else if(x == "2ªagosto"){
        var numberMes = "01";
        var anno = dt.getFullYear()
    }else if(x == "enero"){
        var numberMes = "01";
        var anno = dt.getFullYear()
    }else if(x == "febrero"){
        var numberMes = "02";
        var anno = dt.getFullYear()
    }else if(x == "marzo"){
        var numberMes = "03";
        var anno = dt.getFullYear()
    }else if(x == "abril"){
        var numberMes = "04";
        var anno = dt.getFullYear()
    }else if(x == "mayo"){
        var numberMes = "05"
        var anno = dt.getFullYear()
    }else if(x == "junio"){
        var numberMes = "06";
        var anno = dt.getFullYear()
    }else if(x == "julio"){
        var numberMes = "07";
        var anno = dt.getFullYear()
    }
    var numberDia = $("#config_interes").val()
    var fechaUno = anno + "-" + numberMes + "-" + numberDia;
    var mesNow = (dt.getMonth() < 9 ? '0': '') + (dt.getMonth()+1) 
    var interesNow = dt.getFullYear() + "-" + mesNow + "-" + numberDia;
    

    var diaAnnoHoy    = diaAnno(Date.now(),"Fecha Hoy")
    var diaAnnoUno    = diaAnno(fechaUno,"Fecha Uno")
    var diaInteresNow = diaAnno(interesNow,"Interes Now")

    var mesSelect = $("#cobros_serpro").find("option:selected").val();

    /*
    <select class="form-control" id="cobros_serpro">
        <option value="null">- seleccionar -</option>
        <option value="col1-usGq4VZo59EHgYX">1ª ½ de agosto $700.00</option>
        <option value="col1-BrX1QB3vSNQoGDz">septiembre $1400.00</option>
        <option value="col1-YXSDPruZZXliUZY">octubre $1400.00</option>
        <option value="col1-5Ng5b6OwyOtx3f6">noviembre $1400.00</option>
        <option value="col1-HhKGghLjrxf4I1B">diciembre $1400.00</option>

        <option value="col1-yoG41KM4GW0X8U3">2ª ½ de agosto $700.00</option>
        <option value="col1-cgCaRxrB2ZW0ssG">enero $1400.00</option>
        <option value="col1-eC6vDA4GrxrmKN6">febrero $1400.00</option>
        <option value="col1-YsnkKvISr78JL8h">marzo $1400.00</option>
        <option value="col1-QmnY9y2XLLa0Rln">abril $1400.00</option>
        <option value="col1-s72kWk0KAd9Sf4e">mayo $1400.00</option>
        <option value="col1-4Q1dvhweG74YCGM">junio $1400.00</option>
        <option value="col1-jTmxDUiV0vOLt7x">julio $1400.00</option>
        </select>
    */

    if(
        mesSelect == "col1-usGq4VZo59EHgYX" ||
        mesSelect == "col1-BrX1QB3vSNQoGDz" ||
        mesSelect == "col1-YXSDPruZZXliUZY" ||
        mesSelect == "col1-5Ng5b6OwyOtx3f6" ||
        mesSelect == "col1-HhKGghLjrxf4I1B"
        ){
        var annoPasado = true
    }else if(
        mesSelect == "col1-yoG41KM4GW0X8U3" ||
        mesSelect == "col1-cgCaRxrB2ZW0ssG" ||
        mesSelect == "col1-eC6vDA4GrxrmKN6" ||
        mesSelect == "col1-YsnkKvISr78JL8h" ||
        mesSelect == "col1-QmnY9y2XLLa0Rln" ||
        mesSelect == "col1-s72kWk0KAd9Sf4e" ||
        mesSelect == "col1-4Q1dvhweG74YCGM" ||
        mesSelect == "col1-jTmxDUiV0vOLt7x"
    ){
        var annoPasado = false
    }

    if(diaAnnoHoy <  diaAnnoUno && annoPasado == true){
        y = "interes mes año pasado"
        x = "interes"
    }else if(diaAnnoHoy > diaAnnoUno && annoPasado == false){
        y = "interes mex"
        x = "interes"
    }else if(diaAnnoHoy < diaAnnoUno){
        y = "normal"
        x = "normal"
        $("#textprecio_interes").html("$00.00")
    }
    $("#typoMes").val('').val(x)
    //alert(y + " -----" + diaAnnoHoy + "----" + diaAnnoUno + "-------" + diaInteresNow)
    /*
    let fecha_hoy          = diaAnno($("#config_fechahoy").val()    ,"Hoy")
    let fecha_mes          = diaAnno($("#config_mes").val()         ,"Inicio del mes")
    let fecha_dpa          = diaAnno($("#config_fechadpa").val()    ,"DPA")
    let fecha_interes      = diaAnno($("#config_fechainteres").val(),"DPA")
    


    }
    return x;
    */

}
function rangoFechaB(){
    console.log("%cRun -> rangoFecha: ","color:Fucsia;")
    let fecha_hoy          = diaAnno($("#config_fechahoy").val()    ,"Hoy")
    let fecha_mes          = diaAnno($("#config_depo_mesB").val()         ,"Inicio del mes")
    let fecha_dpa          = diaAnno($("#config_depo_fechadpaB").val()    ,"DPA")
    let fecha_interes      = diaAnno($("#config_depo_fechainteresB").val(),"DPA")

    if(fecha_hoy <= fecha_dpa ){
        x = "dpa"
    }else if(fecha_hoy > fecha_dpa && fecha_hoy <= fecha_interes){
        x = "normal"
    }else{
        x = "interes"
    }
    return x;
}

    /**
    * Function     inputClear
    * @author      biohizard
    * @description {}
    * @param       {}
    * @return      {}
    **/
    /************************************/
    function inputClear(){
        console.log("%cRun -> 1 inputClear : limpia los input","color:green;")
        $("#firstName").on('click', function() {
            $(this).val("")
            location.reload()
        })
    }
    /************************************/

    /**
    * Function     {diaAnno}
    * @author      biohizard
    * @description {diaAnno("2022-01-15","Hoy") regresa el numero de dia del año }
    * @param       {fecha,Hoy}
    * @return      {numero de dia del año ejem 14}
    **/
    /************************************/
    function diaAnno(x,y){
        //diaAnno("2022-01-15","Hoy")
        let dayOfYear_1 = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
        let fecha_hoy   = dayOfYear_1(new Date(x))
            console.warn(y + ": " + fecha_hoy)
                return fecha_hoy
    }
    /************************************/

    /**
    * Function     {mesPagado}
    * @author      biohizard
    * @description {}
    * @param       {}
    * @return      {}
    **/
    /************************************/
    function mesPagado(selectMes){

        let inputMesPagado = $("#historialval_m_" + selectMes).val()

        if(inputMesPagado == "true"){
            alert("El mes de " + selectMes + " Ya fue pagado")
            $('#cobros_serpro option[value=null]').prop('selected', 'selected').change();
            var limpiarTxt = "true";
            }else if(inputMesPagado == "false"){
                var limpiarTxt = "false";
                }else{var limpiarTxt = "error";}

            return limpiarTxt;
    }
    /************************************/

/*########################################################################*/