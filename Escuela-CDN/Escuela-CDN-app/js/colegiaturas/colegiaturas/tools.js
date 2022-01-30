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
        console.log("%c Load Js TOOLS ","color:#FA2A00; font-size:24px")
        
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
            /*
            text_precio_change_x
            precio_change_x
            if(limpiarTxt == "false"){

                if(y[1]== 'agosto'){
                    
                    let z = y[1].split("$")
                    let costo = $("#textprecio_costo").html()
                        costo_x = costo.split("$")
                    
                    if(parseInt($("#pagodo_m_" + y[0] + y[1]).val()) == 0){
                        console.log("%%%agosto: 1")
                        xxx = parseFloat($("#costo_m_" + y[0] + y[1]).val())
                    }else{
                        console.log("%%%agosto: 2")
                        xxx = parseInt($("#pagodo_m_" + y[0] + y[1]).val()) - parseInt(costo_x[1])
                    }

                }else{

                    let z = y[1].split("$")
                    let costo = $("#textprecio_costo").html()
                        costo_x = costo.split("$")
                    let pagado_x = $("#pagodo_m_" + y[0]).val()

                    if(parseInt($("#pagodo_m_" + y[0]).val()) == 0){
                        xxx = parseFloat($("#costo_m_" + y[0]).val())
                    }else{
                        xxx = parseInt(costo_x[1]) - parseInt($("#pagodo_m_" + y[0]).val())
                    }
                }

                $("#text_precio_change_x").html("$" + xxx)
                $("#precio_change_x").val(xxx)
                
            //interes(xxx)
            }else if(limpiarTxt == "true"){
                $("#text_precio_change_x").html("$00.00")
                $("#precio_change_x").val("00.00")
                
            //interes(xxx)
            }
            */
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
        $("#precio_PorPagar").attr("disabled",false)

        let resta   = $("#text_precio_change_x").html()
            resta   = resta.split("$")
            resta_y = resta[1]

        let pago_y =  $("#precio_PorPagar").val();
            pagoresta = parseInt(resta_y) - parseInt(pago_y)
        console.log("###" + " --- "+ resta_y + "---" + pagoresta)
        if(pagoresta < 0){
            $("#precio_PorPagar").val("0")
            $("#print_pago").html("$00.00")
        }else{
            $("#print_pago" ).html("$" + $("#precio_PorPagar").val())
            $("#print_total").html("$" + $("#precio_PorPagar").val())
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
    function interes(resta){

        $("#precio_change_x").on("input",function(){        })
            
            let fecha_hoy          = diaAnno($("#config_fechahoy").val()    ,"Hoy")
            let fecha_mes          = diaAnno($("#config_mes").val()         ,"Inicio del mes")
            let fecha_dpa          = diaAnno($("#config_fechadpa").val()    ,"DPA")
            let fecha_interes      = diaAnno($("#config_fechainteres").val(),"DPA")
            
                let x = $("#cobros_serpro").find("option:selected").text();
                let y = x.split(" ");

            if(y.length == 2){
                let z = y[1].split("$");
                 selectMes   = y[0]
            }else if(y.length == 5){
                let z = y[4].split("$");
                 selectMes   = y[0]+y[3]
            }else{}

            //diaAnno("2022-02-15","Hoy")
            /*
            if(selectMes == "1ªagosto"){
                let fecha_seleccionada = diaAnno(2022-08-15,"fecha seleccionada")
            }else if(selectMes =="septiembre"){
                let fecha_seleccionada = diaAnno(2022-09-15,"fecha seleccionada")
            }else if(selectMes =="octubre"){
                let fecha_seleccionada = diaAnno(2022-10-15,"fecha seleccionada")
            }else if(selectMes =="noviembre"){
                let fecha_seleccionada = diaAnno(2022-11-15,"fecha seleccionada")
            }else if(selectMes =="diciembre"){
                let fecha_seleccionada = diaAnno(2022-12-15,"fecha seleccionada")
            }else if(selectMes =="2ªagosto"){
                let fecha_seleccionada = diaAnno(2022-01-15,"fecha seleccionada")
            }else if(selectMes =="enero"){
                let fecha_seleccionada = diaAnno(2022-01-15,"fecha seleccionada")
            }else if(selectMes =="febrero"){
                let fecha_seleccionada = diaAnno(2022-02-15,"fecha seleccionada")
            }else if(selectMes =="marzo"){
                let fecha_seleccionada = diaAnno(2022-03-15,"fecha seleccionada")
            }else if(selectMes =="abril"){
                let fecha_seleccionada = diaAnno(2022-04-15,"fecha seleccionada")
            }else if(selectMes =="mayo"){
                let fecha_seleccionada = diaAnno(2022-05-15,"fecha seleccionada")
            }else if(selectMes =="junio"){
                let fecha_seleccionada = diaAnno(2022-06-15,"fecha seleccionada")
            }else if(selectMes =="julio"){
                let fecha_seleccionada = diaAnno(2022-07-15,"fecha seleccionada")
            }


            if(fecha_hoy == fecha_seleccionada){
                x = "normal"
            }else{
                x = "interes"
            }
            */
            /*###################################################################################
            #                                                                                   #
            # Determina el restante  de la colegiatura  dependiendo del dpa , normal o interes  #
            #                                                                                   #
            ####################################################################################*/
            //------------------------>
            /*
            console.log(x)
            if(rangoFecha_A == "dpa"){
                //------------------------>
                console.log("Run rango fecha DPA")

                //------------------------>
            }else if(rangoFecha_A == "normal"){
                //------------------------>
                console.log("Run rango fecha NORMAL")

                //------------------------>
            }else if(rangoFecha_A == "interes"){
                //------------------------>
                console.log("Run rango fecha INTERES")
                let interes = $("#config_interes").val()
                    interes = "1." + interes
                let resta   = $("#precio_change_x").val()

                let  interesTotal = parseFloat(resta * interes).toFixed(2);
                $("#textprecio_interes").html("$" + interesTotal)

            }
            */
            /*###################################################################################
            #                                                                                   #
            ####################################################################################*/

    }
    /************************************/





/*########################################################################*/

/*####################################P######################################
            ___.            __________               __  .__                     
  ________ _\_ |__          \______   \ ____  __ ___/  |_|__| ____   ___________ 
 /  ___/  |  \ __ \   ______ |       _//  _ \|  |  \   __\  |/    \_/ __ \_  __ \
 \___ \|  |  / \_\ \ /_____/ |    |   (  <_> )  |  /|  | |  |   |  \  ___/|  | \/
/____  >____/|___  /         |____|_  /\____/|____/ |__| |__|___|  /\___  >__|   
     \/          \/                 \/                           \/     \/       
##########################################################################*/
function rangoFecha(){
    console.log("%cRun -> rangoFecha: ","color:Fucsia;")
    let fecha_hoy          = diaAnno($("#config_fechahoy").val()    ,"Hoy")
    let fecha_mes          = diaAnno($("#config_mes").val()         ,"Inicio del mes")
    let fecha_dpa          = diaAnno($("#config_fechadpa").val()    ,"DPA")
    let fecha_interes      = diaAnno($("#config_fechainteres").val(),"DPA")
    
    if(fecha_hoy <= fecha_dpa ){
        x = "dpa"
    }else if(fecha_hoy > fecha_dpa && fecha_hoy <= fecha_interes){

    if(fecha_hoy < fecha_interes){
        x = "normal"
    }else{
        x = "interes"
    }
    
    }
    return x;
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
        console.log("%cRun -> 1 inputClear : limpia los input","color:SkyBlue;")
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