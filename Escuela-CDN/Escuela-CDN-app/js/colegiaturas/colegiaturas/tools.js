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
        saldoaFavor()
        checarBorrar()
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

        $("#cobros_serpro").change(function(){

            let x = $(this).find("option:selected").text();
            let y = x.split(" ");

            $("#precio_PorPagar").attr("disabled",false)
            console.log("%%%%%%" + y.length)

            if(y.length == 2){
                let z = y[1].split("$");

                    let selectMes   = y[0]
                    let mesHisorial = $("#print_fecha" + selectMes).html()
                        mesHisorial = mesHisorial.split(" ")
                    
                        console.log(mesHisorial[1] + " *-- *" + selectMes)

                        if(mesHisorial[1] == "Si"){
                            alert("El mes de " + y[0] + " Ya fue pagado")
                            $('#cobros_serpro option[value=null]').prop('selected', 'selected').change();
                            var limpiarTxt = "true";
                        }else if(mesHisorial[1] == "No"){
                            var limpiarTxt = "false";
                        }else{
                            var limpiarTxt = "false";
                        }
                        
                        conceptoCobro(y,limpiarTxt)
                        conceptoCosto(y,limpiarTxt)
                        conceptoPago (y,limpiarTxt)
                        conceptoResta(y,limpiarTxt)

            }else if(y.length == 5){
                let z = y[4].split("$");

                    let selectMes   = y[0]+y[3]
                    let mesHisorial = $("#print_fecha" + selectMes).html()
                        mesHisorial = mesHisorial.split(" ")

                        if(mesHisorial[1] == "Si"){
                            alert("El mes de " + y[0] + " Ya fue pagado")
                            $('#cobros_serpro option[value=null]').prop('selected', 'selected').change();
                            var limpiarTxt = "true";
                        }else if(mesHisorial[1] == "No"){
                            var limpiarTxt = "false";
                        }else{
                            var limpiarTxt = "false";
                        }
                        let x =  [y[3],y[4]]
                        if(x[0] == "agosto"){
                            let x_agosto =  [y[0],y[3],y[4]]
                            conceptoResta(x_agosto,limpiarTxt)
                        }else{
                            conceptoResta(x,limpiarTxt)
                        }
                        conceptoCobro(x,limpiarTxt)
                        conceptoCosto(x,limpiarTxt)
                        conceptoPago (x,limpiarTxt)
                        
            }


            console.log("&&&" + y + " --- " + limpiarTxt)


            /************************************/

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

/*########################################################################*/

/*##########################################################################
            ___.            __________               __  .__                     
  ________ _\_ |__          \______   \ ____  __ ___/  |_|__| ____   ___________ 
 /  ___/  |  \ __ \   ______ |       _//  _ \|  |  \   __\  |/    \_/ __ \_  __ \
 \___ \|  |  / \_\ \ /_____/ |    |   (  <_> )  |  /|  | |  |   |  \  ___/|  | \/
/____  >____/|___  /         |____|_  /\____/|____/ |__| |__|___|  /\___  >__|   
     \/          \/                 \/                           \/     \/       
##########################################################################*/


function checarBorrar(){


    /*
    precio_PorPagar

    $("#aplicarsaldoafavor").is(':checked');

        text_precio_change_x  - precio_PorPagar
    */
    //pago - <input>
    $("#precio_PorPagar").on("input",function(){


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
    /***********************************************/



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
    * Function     conceptoCobro
    * @author      biohizard
    * @description {}
    * @param       {y: select text}
    * @return      {}
    **/
    /************************************/
    function conceptoCobro(y,limpiarTxt){
        console.log(y + " -- " + limpiarTxt)
        if(limpiarTxt == "false"){
            $("#textSerpro_x").html(y[0] + " $" + $("#pagodo_m_" + y[0] ).val())
        }else if(limpiarTxt == "true"){
            $("#textSerpro_x").html("$00.00")
        }
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
        if(limpiarTxt == "false"){
            let z = y[1].split("$");
            $("#textprecio_costo").html("$" + z[1])
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

        }else if(limpiarTxt == "true"){
            $("#text_precio_change_x").html("$00.00")
        }
    }
    /************************************/

/*########################################################################*/