/*##########################################################################
___________________   ________  .____
\__    ___/\_____  \  \_____  \ |    |
  |    |    /   |   \  /   |   \|    |
  |    |   /    |    \/    |    \    |___
  |____|   \_______  /\_______  /_______ \
                   \/         \/        \/
##########################################################################*/
function colegiaturasTool(){
    console.log("%c Load Js TOOLS ","color:#FA2A00; font-size:24px")
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
function inputClear(){
    console.log("%cRun -> 1 inputClear : limpia los input","color:SkyBlue;")
    $("#firstName").on('click', function() {
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
function checarBorrar(){
    
    /*
    *
    *   Select change COLEGIATURA #cobros_serpro
    *   Input         PAGO        #precio_PorPagar
    *
    * 
    */
    $("#cobros_serpro").change(function(){

        let x = $(this).find("option:selected").text();
        let y = x.split(" ");

        /************************************
        **                                 **
        **   PAGO                          **
        **                                 **
        *************************************/
        $("#precio_PorPagar").attr("disabled",false)
        if(y.length == 2){
            let z = y[1].split("$");
                //$("#precio_PorPagar").val(z[1])
        }else{
            let z = y[4].split("$");
                //$("#precio_PorPagar").val(z[1])
        }
        /************************************/

        /************************************
        **                                 **
        **   Concepto                      **
        **   Concepto Del Cobro            **
        **                                 **
        *************************************/
        if(y.length == 2){
            $("#textSerpro_x").html(x)
        }else{
            $("#textSerpro_x").html(x)
        }
        /************************************/

        /************************************
        **                                 **
        **  Costo                          **
        **  Por Pagar                      **
        **                                 **
        *************************************/
        if(y.length == 2){
            let z = y[1].split("$");
            $("#textprecio_costo").html("$" + z[1])
        }else{
            let z = y[4].split("$");
            $("#textprecio_costo").html("$" + z[1])
        }
        /************************************/

        /************************************
        **                                 **
        **          Pago                   **
        **      Por Pagar                  **
        **                                 **
        *************************************/
        if(y.length == 2){
            let z = y[1].split("$");
            //$("#print_pago").html("$" + z[1])
        }else{
            let z = y[4].split("$");
            //$("#print_pago").html("$" + z[1])
        }
        /************************************/

        /************************************
        **                                 **
        **              Resta              **
        **          Por Pagar              **
        **                                 **
        *************************************/
            if(y.length == 2){

                let z = y[1].split("$");

                let costo = $("#textprecio_costo").html()
                    costo_x = costo.split("$");

                let pagado_x = $("#pagodo_m_" + y[0]).val();

                let xxx = parseInt(costo_x[1]) - parseInt(pagado_x);

                $("#text_precio_change_x").html("$" + xxx)
                //alert(1)

            }else{
                
                let z = y[4].split("$");
                

                let costo = $("#textprecio_costo").html()
                    costo_x = costo.split("$");

                let pagado_x = $("#pagodo_m_" + y[0]+ y[1]+ y[2]+ y[3]).val();

                let xxx = parseInt(costo_x[1]) - parseInt(pagado_x);

                $("#text_precio_change_x").html("$" + z[1])
                //alert(2)
            }
        /************************************/
    })

    /*
    precio_PorPagar

    $("#aplicarsaldoafavor").is(':checked');

        text_precio_change_x  - precio_PorPagar
    */
    $("#precio_PorPagar").on("input",function(){


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


        /************************************
        **                                 **
        **              saldo              **
        **          saldo a favor          **
        **                                 **
        *************************************/
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
                    
                    if(total_y < 0 ){
                        totalResta_y_bug = 0;
                        let textprecio_saldoafavor   = $("#textprecio_saldoafavor").html();
                            textprecio_saldoafavor   = textprecio_saldoafavor.split("$");
                            resta_y_bug = textprecio_saldoafavor[1];
                    }
                    
                    $("#saldoafavorResto").html("$" + totalResta_y_bug)


                    $("#print_pago" ).html("$" + resta_y_bug)
                    $("#print_total").html("$" + resta_y_bug)
                //-------------------------------------------------------------------------->
                }
                

            
        
        }else if($("#aplicarsaldoafavor").is(':checked') == false){
        
            $("#precio_PorPagar").val(0).attr("disabled",false)
            location.reload();
            //alert("saldo por pagar: false")
        
        }
    })


}
/*########################################################################*/