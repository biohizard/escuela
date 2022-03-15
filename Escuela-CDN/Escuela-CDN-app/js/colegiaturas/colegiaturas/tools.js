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
        //------------------------------>1

            //------------------------------>
            let selectMesForm      = $(this).find("option:selected").text();
            let selectMesArray = selectMesForm.split(" ");
                $("#precio_PorPagar").attr("disabled",false)
                //All
                let selectMes = allSelectMesOption(selectMesArray)
                //selectMes[,1400.00,octubre, No Pagado octubre]
            //------------------------------>
            //All
            let mesPagadoResult = allMesPagado(selectMes[1]);
            //aqui falta mes con interes o sin interes

                if( mesPagadoResult == "false"){

                    if(rangoFecha(selectMes[1]) == "normal"){
                        //------------------------------>normal
                        htmlClear()
                        var limpiarTxt = "false";
                        //One
                        //Concepto - Concepto Del Cobro
                        conceptoCobro(selectMes,limpiarTxt)

                        if($("#pagodo_m_" + selectMes[1]).val() == "0.00"){
                            //One
                            //Costo - Por Pagar
                            conceptoCosto(selectMes[0],limpiarTxt,true,selectMes[2])
                        }else{
                            //One
                            //Costo - Por Pagar
                            conceptoCosto(selectMes[0],limpiarTxt,false,selectMes[2])
                        }
                        //One
                        //Resta - Por Pagar
                        conceptoResta(selectMes[1],limpiarTxt)
                            //One
                            //conceptoInteres(restaValor)
                            //conceptoTotal(restaValor)

                        //------------------------------>normal
                    }else if(rangoFecha(selectMes[1]) == "interes"){
                        //------------------------------> interes
                            htmlClear()
                            var limpiarTxt = "false";
                            //One
                            conceptoCobro(selectMes,limpiarTxt)
                            if($("#pagodo_m_" + selectMes[1]).val() == "0.00"){
                                //One
                                conceptoCosto(selectMes[0],limpiarTxt,true,selectMes[2])
                            }else{
                                //One
                                conceptoCosto(selectMes[0],limpiarTxt,false,selectMes[2])
                            }
                                //One
                                conceptoResta(selectMes[1],limpiarTxt)
                                    //One
                                    //conceptoInteres(restaValor)
                                    //conceptoTotal(restaValor)                            
                                //One
                                //rangoFecha(selectMes[1])
                                //One
                                //conceptoPago(selectMes[1],limpiarTxt)

                        //------------------------------> interes
                    }

                }else{console.error("Error: Mes pagado")}

        //------------------------------>1
        })
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
        $("#precio_PorPagar").on("click",function(){
            $(this).val("")
            $("#print_interesparcial").html("$00.00")
            $("#print_total").html("$00.00")
        })

        $("#precio_PorPagar").on("input",function(){

            if($("#typoMes").val() == "normal"){

                let resta   = $("#text_precio_change_x").html()
                    resta   = resta.split("$")
                    resta_y = resta[1]

                    let pago_y =  $(this).val();
                    pagoresta = parseFloat(resta_y) - parseFloat(pago_y)

                    if(pagoresta < 0){
                    $(this).val("0")
                    $("#print_pago").html("$00.00")

                    }else{
                        let pagoInput = $(this).val()
                        //let pagoInteresParcial = parseFloat(pagoInput) * 0.15;
                        let pagoInteresParcial = "00.00";
                        let pagoTotal          = parseFloat(pagoInput) * 1;

                            $("#print_interesparcial").html("$" + pagoInteresParcial)
                            $("#print_total").html("$" + pagoTotal.toFixed(2))
                    }
                
            }else{
            //------------------------------>2 no normal
                //textprecio_interes
                //print_subtotal
                let resta   = $("#text_precio_change_x").html()
                    resta   = resta.split("$")
                    resta_y = resta[1]

                    let pago_y =  $(this).val();
                    pagoresta = parseFloat(resta_y) - parseFloat(pago_y)

                    if(pagoresta < 0){
                    $(this).val("0")
                    $("#print_pago").html("$00.00")

                    }else{
                        let pagoInput = $(this).val()
                        let pagoInteresParcial = parseFloat(pagoInput) * 0.15;
                        let pagoTotal          = parseFloat(pagoInput) * 1.15;

                            $("#print_interesparcial").html("$" + pagoInteresParcial.toFixed(2))
                            $("#print_total").html("$" + pagoTotal.toFixed(2))
                    }
            //------------------------------>2 no normal
            }
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
            //-------------------------------------------------------------------------->

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

            //-------------------------------------------------------------------------->
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

    /**
    * Function     {mesPagado}
    * @author      biohizard
    * @description {}
    * @param       {selectOption=selectMes[,1400.00,octubre]}
    * @return      {[mesPrecioResult,selectMes,mesHisorial]}
    **/
    /************************************/
    function allSelectMesOption(selectOption){

        if(selectOption.length == 2){
            //------------------------------>2
                var mesPrecioResult = selectOption[1].split("$");
                    var selectMes   = selectOption[0]
                    var mesHisorial = $("#print_fecha" + selectMes).html()
                        console.log(selectMes)
            //------------------------------>2
            }else if(selectOption.length == 5){
            //------------------------------>3
                var mesPrecioResult = selectOption[4].split("$");
                    var selectMes   = selectOption[0]+selectOption[3]
                    var mesHisorial = $("#print_fecha" + selectMes).html()
                        console.log(selectMes)
            //------------------------------>3
            }

            let selectMesResult = [mesPrecioResult,selectMes,mesHisorial]

            //[1400.00,septiembre, No Pagado septiembre]
            return selectMesResult
    }
    /************************************/
    /**
    * Function     {mesPagado}
    * @author      biohizard
    * @description {}
    * @param       {selectMes=selectMes[1]}
    * @return      {limpiarTxt = true,false,error}
    **/
    /************************************/
    function allMesPagado(selectMes){
        //selectMes[,1400.00,octubre, No Pagado octubre]
        let inputMesPagado = $("#historialval_m_" + selectMes).val()

        if(inputMesPagado == "true"){

            alert("El mes de " + selectMes + " Ya fue pagado")
            $('#cobros_serpro option[value=null]').prop('selected', 'selected').change();
            var limpiarTxt = "true";

        }else if(inputMesPagado == "false"){

            var limpiarTxt = "false";

        }else{

            var limpiarTxt = "error";
        }

            return limpiarTxt;
    }
    /************************************/

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
    * Function     htmlClear
    * @author      biohizard
    * @description {}
    * @param       {}
    * @return      {}
    **/
    /************************************/
    function htmlClear(){
        $("#textSerpro_x").html("servicio o producto")
        $("#textprecio_costo").html("$00.00")
        $("#text_precio_change_x").html("$00.00")
        $("#textprecio_interes").html("$00.00")
        $("#print_subtotal").html("$00.00")
        $("#print_total").html("$00.00")

        $("#pprint_interesparcial").html("$00.00")
        $("#print_total").html("$00.00")
    }
    /************************************/



/*########################################################################*/