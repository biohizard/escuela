/*##########################################################################
___________________   ________  .____
\__    ___/\_____  \  \_____  \ |    |
  |    |    /   |   \  /   |   \|    |
  |    |   /    |    \/    |    \    |___
  |____|   \_______  /\_______  /_______ \
                   \/         \/        \/
##########################################################################*/
function allTool(){
    console.log("%c Load Js TOOLS ","color:#FA2A00; font-size:24px")
    $("#cobros_serpro").attr("disabled",true)
    rangoFecha_A = rangoFecha()
    rangoFecha_B = rangoFechaB()
    inputColegiatura()
    pago()
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

    /*Begin: Efectivo*/
    /*efectivo 2 cobros_serpro*/
    function inputColegiatura(){
        console.log("%ctools: Run->inputColegiatura: ","color:SkyBlue;")
        
        $("#cobros_serpro").on('input',function() {
        //----------------------------------------->
            /*
                Costo Por Pagar
                Resta Por Pagar
                Pago Por Pagar
                TotaL Por Pagar
            */
                a = $(this).val();
                b = $("#cobros_serpro option:selected").html()
                c = b.split(" ");
                if(c.length == 1){
                    d=b;
                }else{
                    d=c[0];
                }
                $("#cobroIdAdvanceSerpro").val(a)
                //alert(a +" /-----/ " +b+" /-----/ " +c+"  /-----/ " +d+"  /-----/ ")
                //col1-BrX1QB3vSNQoGDz /-----/ septiembre /-----/ septiembre  /-----/ septiembre  /-----/ 
                b_array = b.split(" ")
                if(
                    b == "septiembre" || 
                    b == "octubre"    || 
                    b == "noviembre"  || 
                    b == "diciembre"  || 
                    b == "enero"      || 
                    b == "febrero"    || 
                    b == "marzo"      || 
                    b == "abril"      || 
                    b == "mayo"       || 
                    b == "junio"      || 
                    b == "julio"
                ){

                    costoPorPagar(b)

                }else if(b == "1ª ½ de agosto $700.00"){
                    
                    
                    //b_array[0]
                    costoPorPagar2()

                }else if(b == "2ª ½ de agosto $700.00"){
                    
                    //b_array[0]
                    costoPorPagar3()
                }else if(b == "inscripcion $780.00"){
                    //b_array[0]
                    costoPorPagar4()
                }else if(b == "seguro $180.00"){
                    
                    costoPorPagar5()

                }else if(b == "material $850.00"){

                    costoPorPagar6()
                    
                }else{}                    
        //----------------------------------------->
        })
            

        //--------->
    }
    /*efectivo 3 precio_PorPagar*/
    function pago(){
        console.log("%ctools: Run-> pago ","color:SkyBlue;")
        //--------->
        $("#precio_PorPagar").on('input',function() {
            if($(this).val() >= parseInt($("#precio_change_x").val())+1){
                alert("El pago no pude ser mayor al restante del")
                $(this).val("")
            }else{
        
                /*###################################################################################
                #                                                                                   #
                # Determina el restante  de la colegiatura  dependiendo del dpa , normal o interes  #
                #                                                                                   #
                ####################################################################################*/
                //------------------------>
                //run toolsAll() -> rangoFecha_A
                if(rangoFecha_A == "dpa"){
                    //------------------------>
                    console.log("Run rango fecha DPA")
                    total_now = parseInt($("#precio_change_x").val()) - parseInt($("#precio_PorPagar").val());
                    if(isNaN(total_now)){
                        total_now = 0
                    }else{
                        total_now
                    }
        
                    $("#print_pago").html("$" + $(this).val())
                    $("#print_total").html("$ " + total_now)
                    $("#val_precio_total").val(total_now)
                    //------------------------>
                }else if(rangoFecha_A == "normal"){
                    //------------------------>
                    console.log("Run rango fecha NORMAL")
                    total_now = parseInt($("#precio_change_x").val()) - parseInt($("#precio_PorPagar").val());
                    if(isNaN(total_now)){
                        total_now = 0
                    }else{
                        total_now
                    }
        
                    $("#print_pago").html("$" + $(this).val())
                    $("#print_total").html("$ " + total_now)
                    $("#val_precio_total").val(total_now)
                    //------------------------>
                }else if(rangoFecha_A == "interes"){
                    //------------------------>
                    let x = parseInt($("#precio_PorPagar").val()) + (parseInt($("#precio_PorPagar").val())*0.15)
                    total_now = parseInt($("#precio_change_x").val()) - parseInt($("#precio_PorPagar").val());
        
                    if(isNaN(total_now)){
                        total_now = 0
                        x  = 0
                    }
                    $("#print_pago").html("$" + parseInt($("#precio_PorPagar").val()))
                    $("#print_total").html("$ " +total_now)
                    $("#val_precio_total").val(total_now)
                    console.log("Run rango fecha INTERES")
                    //------------------------>
                }else{console.error("Error: Rango de fecha")}
                //------------------------>
                /*###################################################################################
                #                                                                                   #
                ####################################################################################*/
        
            }
        })
        //--------->
    }
    /*End: Efectivo*/

    /*Begin: Deposito*/
    function deposito(){
        console.log("%ctools: Run-> pago " + rangoFecha_B,"color:SkyBlue;")
        //--------->
        /*###################################################################################
        #                                                                                   #
        # Determina el restante  de la colegiatura  dependiendo del dpa , normal o interes  #
        #                                                                                   #
        ####################################################################################*/
        //------------------------>
        //run toolsAll() -> rangoFecha_A
        
        if(rangoFecha_B == "dpa"){
            //------------------------>
            console.log("Run rango fecha DPA")

            $("#text_precio_change_x").html("$1400")
            $("#precio_change_x").val(1400)

            $("#print_pago").html("$1400")

            /*
            $("#text_precio_change_x").html("$1190")
            $("#precio_change_x").val(1190)

            $("#print_pago").html("$1190")
            */
            $("#print_total").html("$00.00")
            $("#val_precio_total").val(0)

            //total_now = parseInt($("#precio_change_x").val()) - parseInt($("#precio_PorPagar").val());
            //alert(total_now)
            /*
            if(isNaN(total_now)){
                total_now = 0
            }else{
                total_now
            }
            //Pago - Por Pagar
            $("#print_pago").html("$" + $(this).val())
            //TotaL - Por Pagar text
            $("#print_total").html("$ " + total_now)
            //TotaL - Por Pagar input
            $("#val_precio_total").val(total_now)
            */
            //------------------------>
        }else if(rangoFecha_B == "normal"){
            //------------------------>
            console.log("Run rango fecha NORMAL")
            total_now = parseInt($("#precio_change_x").val()) - parseInt($("#precio_PorPagar").val());
            if(isNaN(total_now)){
                total_now = 0
            }else{
                total_now
            }

            $("#print_pago").html("$" + $(this).val())
            $("#print_total").html("$ " + total_now)
            $("#val_precio_total").val(total_now)
            //------------------------>
        }else if(rangoFecha_B == "interes"){
            //------------------------>
            let x = parseInt($("#precio_PorPagar").val()) + (parseInt($("#precio_PorPagar").val())*0.15)
            total_now = parseInt($("#precio_change_x").val()) - parseInt($("#precio_PorPagar").val());

            if(isNaN(total_now)){
                total_now = 0
                x  = 0
            }
            $("#print_pago").html("$" + parseInt($("#precio_PorPagar").val()))
            $("#print_total").html("$ " +total_now)
            $("#val_precio_total").val(total_now)
            console.log("Run rango fecha INTERES")
            //------------------------>
        }else{console.error("Error: Rango de fecha")}
    
        //------------------------>
        /*###################################################################################
        #                                                                                   #
        ####################################################################################*/
        //--------->
    }    
    function datosTicket(){
        /*Costo - Por Pagar*/
        $("#textprecio_costo").html("$" + $("#config_costo").val())
        $("#precio_costo").val($("#config_costo").val()) 
        
        deposito()
        
        $("#datosTicket").on('click',function(){$(this).val(" ")})
    }
    /*End  : Deposito*/

/*########################################################################*/

/*##########################################################################
            ___.            __________               __  .__                     
  ________ _\_ |__          \______   \ ____  __ ___/  |_|__| ____   ___________ 
 /  ___/  |  \ __ \   ______ |       _//  _ \|  |  \   __\  |/    \_/ __ \_  __ \
 \___ \|  |  / \_\ \ /_____/ |    |   (  <_> )  |  /|  | |  |   |  \  ___/|  | \/
/____  >____/|___  /         |____|_  /\____/|____/ |__| |__|___|  /\___  >__|   
     \/          \/                 \/                           \/     \/       
##########################################################################*/
function costoPorPagar(b){

    /*Concepto Concepto Del Cobro Servicio O Producto*/
    $("#textSerpro").html("Colegiatura del mes de " + b)
    $("#cobroSerpro").val(b)

    /*Costo Por Pagar */
    if($("#config_costo").val() == $("#costo_m_" + b).val()){

        $("#textprecio_costo").html("$" + $("#config_costo").val())
        $("#precio_costo").val($("#config_costo").val())


    }else if($("#config_costo").val() > $("#costo_m_" + b).val()){

        $("#textprecio_costo").html("$" + $("#costo_m_" + b).val())
        $("#precio_costo").val($("#costo_m_" + b).val())

    }else{}

    /*Resta Por Pagar*/
    let resta = $("#costo_m_" +b ).val() - $("#pagodo_m_" + b).val();
    $("#text_precio_change_x").html("$" + resta)
    $("#precio_change_x").val(resta)
    
    $("#precio_PorPagar").attr("disabled",false)
    
}
function costoPorPagar2(){

    /*Concepto Concepto Del Cobro Servicio O Producto*/
    $("#textSerpro").html("Colegiatura del mes de 1° 1/2  de Agosto")
    $("#cobroSerpro").val("1agosto")

    /*Costo Por Pagar */
    if($("#config_1agosto").val() == $("#costo_m_1agosto").val()){ 

        $("#textprecio_costo").html("$" + $("#config_1agosto").val())
        $("#precio_costo").val($("#config_1agosto").val())


    }else if($("#config_1agosto").val() > $("#costo_m_1agosto").val()){

        $("#textprecio_costo").html("$" + $("#costo_m_1agosto").val())
        $("#precio_costo").val($("#costo_m_1agosto").val())

    }else{}

    /*Resta Por Pagar*/
    let resta = $("#costo_m_1agosto").val() - $("#pagodo_m_1agosto").val();
    $("#text_precio_change_x").html("$" + resta)
    $("#precio_change_x").val(resta)
    
    $("#precio_PorPagar").attr("disabled",false)
    
}
function costoPorPagar3(){

    /*Concepto Concepto Del Cobro Servicio O Producto*/
    $("#textSerpro").html("Colegiatura del mes de 2° 1/2  de Agosto")
    $("#cobroSerpro").val("2agosto")

    /*Costo Por Pagar */
    if($("#config_2agosto").val() == $("#costo_m_2agosto").val()){ 

        $("#textprecio_costo").html("$" + $("#config_2agosto").val())
        $("#precio_costo").val($("#config_2agosto").val())


    }else if($("#config_2agosto").val() > $("#costo_m_2agosto").val()){

        $("#textprecio_costo").html("$" + $("#costo_m_2agosto").val())
        $("#precio_costo").val($("#costo_m_2agosto").val())

    }else{}

    /*Resta Por Pagar*/
    let resta = $("#costo_m_2agosto").val() - $("#pagodo_m_2agosto").val();
    $("#text_precio_change_x").html("$" + resta)
    $("#precio_change_x").val(resta)
    
    $("#precio_PorPagar").attr("disabled",false)
    
}
function costoPorPagar4(){

    /*Concepto Concepto Del Cobro Servicio O Producto*/
    $("#textSerpro").html("Inscripcion")
    $("#cobroSerpro").val("inscripcion")

    /*Costo Por Pagar */
    if($("#config_inscripcion").val() == $("#costo_m_inscripcion").val()){ 

        $("#textprecio_costo").html("$" + $("#config_inscripcion").val())
        $("#precio_costo").val($("#config_inscripcion").val())


    }else if($("#config_inscripcion").val() > $("#costo_m_inscripcion").val()){

        $("#textprecio_costo").html("$" + $("#costo_m_inscripcion").val())
        $("#precio_costo").val($("#costo_m_inscripcion").val())

    }else{}

    /*Resta Por Pagar*/
    let resta = $("#costo_m_inscripcion").val() - $("#pagodo_m_inscripcion").val();
    $("#text_precio_change_x").html("$" + resta)
    $("#precio_change_x").val(resta)
    
    $("#precio_PorPagar").attr("disabled",false)
    
}
function costoPorPagar5(){

    /*Concepto Concepto Del Cobro Servicio O Producto*/
    $("#textSerpro").html("Seguro")
    $("#cobroSerpro").val("seguro")

    /*Costo Por Pagar */
    if($("#config_seguro").val() == $("#costo_m_seguro").val()){ 

        $("#textprecio_costo").html("$" + $("#config_seguro").val())
        $("#precio_costo").val($("#config_seguro").val())


    }else if($("#config_seguro").val() > $("#costo_m_seguro").val()){

        $("#textprecio_costo").html("$" + $("#costo_m_seguro").val())
        $("#precio_costo").val($("#costo_m_seguro").val())

    }else{}

    /*Resta Por Pagar*/
    let resta = $("#costo_m_seguro").val() - $("#pagodo_m_seguro").val();
    $("#text_precio_change_x").html("$" + resta)
    $("#precio_change_x").val(resta)
    
    $("#precio_PorPagar").attr("disabled",false)
    
}
function costoPorPagar6(){

    /*Concepto Concepto Del Cobro Servicio O Producto*/
    $("#textSerpro").html("Material")
    $("#cobroSerpro").val("material")

    /*Costo Por Pagar */
    if($("#config_material").val() == $("#costo_m_material").val()){ 

        $("#textprecio_costo").html("$" + $("#config_material").val())
        $("#precio_costo").val($("#config_seguro").val())


    }else if($("#config_material").val() > $("#costo_m_material").val()){

        $("#textprecio_costo").html("$" + $("#costo_m_material").val())
        $("#precio_costo").val($("#costo_m_material").val())

    }else{}

    /*Resta Por Pagar*/
    let resta = $("#costo_m_material").val() - $("#pagodo_m_material").val();
    $("#text_precio_change_x").html("$" + resta)
    $("#precio_change_x").val(resta)
    
    $("#precio_PorPagar").attr("disabled",false)
    
}









function precioChange(){
    $("#precio_change_x").on('change',function() {
        totalCalc()

        
    })
}
function totalCalc(){
    /*
    precio_change_x
    print_descuento 
    print_interes
    */

    //----------------------------------------->    
    //x
    /*
    let x = $("#print_precio").html()
    x = x.split("$")
    let  colegiatura_x = parseFloat(x[1]);
    console.log("colegiatura: "+ colegiatura_x)
    */
    let x = $("#precio_change_x").val()
    let  colegiatura_x = parseFloat(x);
    console.log("colegiatura: "+ colegiatura_x)   
    //----------------------------------------->


    //----------------------------------------->
    //Y-
    let y = $("#print_descuento").html()
    y = y.split("%")
    let descuento_x = parseInt(y[0]) / 100
    let dpa  = (descuento_x * colegiatura_x);
    console.log("descuento: "+ dpa)
    //----------------------------------------->

    //----------------------------------------->
    //z+
    let z = $("#print_interes").html()
    z = z.split("%")
    let interes_x = parseInt(z[0]) / 100
    let interes  = (interes_x * colegiatura_x);
    console.log("iNTERES: "+interes)
    //----------------------------------------->    

    console.log(colegiatura_x + " " + dpa + " " +interes)

    let total_x = (colegiatura_x - dpa) + interes

    $("#print_total").html("$" + total_x)
    $("#val_precio_total").val(total_now)
    $("#btnSaveCobro").attr("disabled",false)
          
}
function costoColegiatura(x){
    console.log("%cRun -> 2 costoColegiatura: ","color:SkyBlue;")
    //1400-(1400*0.15)
    let config_colegiatura = x
    let fecha_hoy          = diaAnno($("#config_fechahoy").val(),"Hoy")
    let fecha_mes          = diaAnno($("#config_mes").val(),"Inicio del mes")
    let fecha_dpa          = diaAnno($("#config_fechadpa").val(),"DPA")
    let fecha_interes      = diaAnno($("#config_fechainteres").val(),"DPA")
    
    //alert(config_colegiatura + "/-----/" * fecha_hoy + "/-----/" * fecha_mes + "/-----/" * fecha_dpa + "/-----/" * fecha_interes)
    //01 & 10
    if(fecha_hoy >= fecha_mes && fecha_hoy <= fecha_dpa){
        
        config_colegiatura = parseInt(config_colegiatura)-(parseInt(config_colegiatura)*0.15)
    //11 & 15
    }else if(fecha_hoy > fecha_dpa && fecha_hoy <= fecha_interes){
        
        config_colegiatura = parseInt(config_colegiatura)
    }else{
        
        //config_colegiatura = parseInt(config_colegiatura)-(parseInt(config_colegiatura)*0.15)
    }
    
    $("#config_colegiatura").val(config_colegiatura)
    
    $("#precio_change_dpa").val(config_colegiatura)
    $("#text_change_dpa").html("$" + config_colegiatura)
}
function rangoFecha(){
    console.log("%cRun -> rangoFecha: ","color:Fucsia;")

    let fecha_hoy          = diaAnno($("#config_fechahoy").val()    ,"Hoy")
    let fecha_mes          = diaAnno($("#config_mes").val()         ,"Inicio del mes")
    let fecha_dpa          = diaAnno($("#config_fechadpa").val()    ,"DPA")
    let fecha_interes      = diaAnno($("#config_fechainteres").val(),"DPA")
    //227-----212-----257-----272
    //alert(fecha_hoy +  "-----" +fecha_mes +  "-----" +fecha_dpa +  "-----" +fecha_interes)
    if(fecha_hoy <= fecha_dpa ){
        x = "dpa"
    }else if(fecha_hoy > fecha_dpa && fecha_hoy <= fecha_interes){
        x = "normal"
    }else{
        x = "interes"
    }
    return x;
}
function rangoFechaB(){
    console.log("%cRun -> rangoFecha: ","color:Fucsia;")

    let fecha_hoy          = diaAnno($("#config_fechahoy").val()    ,"Hoy")
    let fecha_mes          = diaAnno($("#config_depo_mesB").val()         ,"Inicio del mes")
    let fecha_dpa          = diaAnno($("#config_depo_fechadpaB").val()    ,"DPA")
    let fecha_interes      = diaAnno($("#config_depo_fechainteresB").val(),"DPA")
    
    //227-----212-----257-----272
    //alert(fecha_hoy +  "-----" +fecha_mes +  "-----" +fecha_dpa +  "-----" +fecha_interes)
    if(fecha_hoy <= fecha_dpa ){
        x = "dpa"
    }else if(fecha_hoy > fecha_dpa && fecha_hoy <= fecha_interes){
        x = "normal"
    }else{
        x = "interes"
    }
    return x;
}
function formClear(){
    console.log("%cRun : formClear","color:SkyBlue;")
$("#tipodeposito,#tipoefectivo,#colHistorial,#colTicket").addClass("d-none")
$("#dataColegiatura").empty()
/*COBRO*/
$("#firstName").val("")
$('#cobros_serpro option:eq(0)').prop('selected', true)
$('#cobros_serpro').attr("disabled",true)
$("#precio_PorPagar").val(" ").attr("disabled",true)

/*Recibo*/
$("#cobrotextId").html("Id Alumno")
$("#cobroUsuario").val("Id Alumno")

$("#print_alumno").html('alumno a quien realizó el cobro')
$("cobroId").val("")
$("cobroIdadvance").val("")
$("cobroNombre").val("")

$("#textSerpro").html('servicio o producto')
$("#cobroSerpro").val("")

$("#textprecio_costo").html('$00.00')
$("#precio_costo").val("precio_costo")
/*
$("#").html('')
$("#").val("")
*/
$("#text_change_dpa").html('$00.00')
$("#precio_change_dpa").val("")

$("#text_precio_change_x").html('$00.00')
$("#precio_change_x").val("")

$("#print_pago").html('$00.00')
$("#precio_PorPagar").val("")


$("#print_pago").html('$00.00')
$("#precio_PorPagar").val("")

$("#print_total").html('$00.00')
$("#val_precio_total").val(0)
$("#val_precio_total").val("")

$("#historiaAlumno").empty()
$("#historiaAlumno").html("<li class=\"list-group-item d-flex justify-content-between lh-sm\"><h6 class=\"my-0 text-capitalize\">historial</h6><small class=\"text-muted text-capitalize\">colegiaturas</small></li>")
}

    /*Begin: Efectivo*/
    function colegiaturaNow(b){
        /*Concepto - Concepto Del Cobro*/
        col_actual = $("#"+b).val()
        $("#textSerpro").html("Colegiatura del mes de " + b)
        $("#cobroSerpro").val(b)
        
        /*Costo - Por Pagar*/
        $("#textprecio_costo").html("$" + $("#config_costo").val())
        $("#precio_costo").val($("#config_costo").val())        
    
        /*Resta - Por Pagar*/
        descuentoInteres(b)
    }
    function colegiaturaNow2(c){

        /*Concepto - Concepto Del Cobro*/
        x = c[4]
        x = x.replace("$","")
        $("#textSerpro").html("Colegiatura del mes de Agosto" + x)
        $("#cobroSerpro").val(c[0] + c[3])
        
        /*Costo - Por Pagar*/
        
        $("#textprecio_costo").html("$" + x)
        $("#precio_costo").val(x)        
        
    
        /*Resta - Por Pagar*/
        descuentoInteres2(c)
    }
    function interesPago(){
        console.log("%ctools: Run-> sub routines-> costoColegiatura: ","color:SkyBlue;")
        //-------->
        let x             = $("#precio_change_x").val()
        let fecha_hoy     = diaAnno($("#config_fecha").val(),"Hoy")
        let fecha_mes     = diaAnno($("#config_mes").val(),"Inicio del mes")
        let fecha_dpa     = diaAnno($("#config_fechadpa").val(),"DPA")
        let fecha_interes = diaAnno($("#config_fechainteres").val(),"INTERES")
    
        if(fecha_hoy >= fecha_mes && fecha_hoy <= fecha_dpa){
            console.log("descueto interes 1")
            $("#configDpaShow").removeClass('d-none')
        }else if(fecha_hoy > fecha_dpa && fecha_hoy <= fecha_interes){
            console.log("descueto interes 2")
            $("#configDpaShow").addClass('d-none')
        }else{
            $("#configDpaShow").addClass('d-none')
            console.log("descueto interes 3")
            config_colegiatura =(parseInt(x)*0.15)
        }
    
        //-------->
        
    }
    function descuentoInteres(mes){
        console.log("%ctools: Run-> sub routines-> descuentoInteres : carga el descuento y el interes","color:SkyBlue;")
            
        var costo      = $("#precio_costo").val()
        var col_actual = $("#val_m_" + mes).val()
            
            //alert(rangoFecha_A)
            //alert(costo  + "----" +col_actual + "----" +resta_actual)
            /*###################################################################################
            #                                                                                   #
            # Determina el restante  de la colegiatura  dependiendo del dpa , normal o interes  #
            #                                                                                   #
            ####################################################################################*/
            //------------------------>
            //run toolsAll() -> rangoFecha_A
            if(rangoFecha_A == "dpa"){
                //------------------------>
                console.log("Run rango fecha DPA")
                /*AQUI SE TOMA  EL PRECIO DE LA COLEGIATURA  */
                //col_now = costo  - (costo  *0.15)
                col_now = $("#precio_costo").val()
                nuevocosto = col_now - col_actual
                var x = nuevocosto 
                var y = nuevocosto 
    
                //------------------------>
            }else if(rangoFecha_A == "normal"){
                //------------------------>
                console.log("Run rango fecha NORMAL")
    
                col_now = costo
                nuevocosto = col_now - col_actual
                var x = nuevocosto 
                var y = nuevocosto          
                //------------------------>
            }else if(rangoFecha_A == "interes"){
                //------------------------>
                console.log("Run rango fecha INTERES")
    
                col_now = costo  + (costo  *0.15)
                nuevocosto = col_now - col_actual
                var x = nuevocosto 
                var y = nuevocosto 
                //------------------------>
            }else{console.error("Error: Rango de fecha")}
            //------------------------>
    
            $("#text_precio_change_x").html(x)
            $("#precio_change_x").val(y)
            /*###################################################################################
            #                                                                                   #
            ####################################################################################*/    
    }
    function descuentoInteres2(mes){
        console.log("%ctools: Run-> sub routines-> descuentoInteres : carga el descuento y el interes","color:SkyBlue;")
        x = mes[4]
        x = x.replace("$","")
    
        if("#historialval_m_" + mes[0] + "agosto" == "#historialval_m_1ªagosto"){
            var col_actual = $("#val_m_1agosto").val()
        }
        if("#historialval_m_" + mes[0] + "agosto" == "#historialval_m_2ªagosto"){
            var col_actual = $("#val_m_2agosto").val()
        }
        resta_actual =  x - col_actual;
            
            /*###################################################################################
            #                                                                                   #
            # Determina el restante  de la colegiatura  dependiendo del dpa , normal o interes  #
            #                                                                                   #
            ####################################################################################*/
            //------------------------>
            //run toolsAll() -> rangoFecha_A
            /*
            if(rangoFecha_A == "dpa"){
                //------------------------>
                console.log("Run rango fecha DPA")
                
                col_now = resta_actual - (resta_actual *0.15)           
                var x = col_now
                var y = col_now
                //------------------------>
            }else if(rangoFecha_A == "normal"){
                //------------------------>
                console.log("Run rango fecha NORMAL")
    
                col_now = resta_actual
                var x = col_now
                var y = col_now            
                //------------------------>
            }else if(rangoFecha_A == "interes"){
                //------------------------>
                console.log("Run rango fecha INTERES")
    
                col_now = resta_actual + (resta_actual *0.15)
                var x = col_now
                var y = col_now
                //------------------------>
            }else{console.error("Error: Rango de fecha")}
            */
           col_now = resta_actual
            var x = col_now
            var y = col_now
            //------------------------>
            /*
            $("#text_precio_change_x").html(x)
            $("#precio_change_x").val(y)
            */
            $("#text_precio_change_x").html("$1400")
            $("#precio_change_x").val(1400)
            /*###################################################################################
            #                                                                                   #
            ####################################################################################*/    
    }
    /*End: Efectivo*/

    /*Begin: Deposito*/

    /*End  : Deposito*/
/*########################################################################*/