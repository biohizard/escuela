/*##########################################################################
___________________   ________  .____
\__    ___/\_____  \  \_____  \ |    |
  |    |    /   |   \  /   |   \|    |
  |    |   /    |    \/    |    \    |___
  |____|   \_______  /\_______  /_______ \
                   \/         \/        \/
##########################################################################*/
function efectivoTool(){
    console.log("%c Load Js TOOLS ","color:#FA2A00; font-size:24px")
    $("#cobros_serpro").attr("disabled",true)
    inputColegiatura()

    rangoFecha_A = rangoFecha()
    rangoFecha_B = rangoFechaB()

    //$("#cobros_serpro").on('click',function() {limpiarResult() })

    $("#firstName").on('click',function(){
        limpiarResult()
        $("#firstName").val("")
    })
    
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
function inputColegiatura(){
    console.log("%ctools: Run->inputColegiatura: ","color:SkyBlue;")
    
    $("#cobros_serpro").on("input",function() {
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
            b_array = b.split(" ")
            
            $("#textprecio_costo,#textprecio_costo_print").html("$00.00")

            if(d == 'inscripcion'){

                $("#btnSaveCobro").attr("disabled",false)
            }

            //----->
            if(b == "septiembre" || b == "octubre"    || b == "noviembre"  || b == "diciembre"  || b == "enero"      || b == "febrero"    || b == "marzo"      || b == "abril"      || b == "mayo"       || b == "junio"      || b == "julio"){
                
                switch (b) {
                    case "enero":
                        costoPorPagar(b="enero")
                        porPagar(x="enero")
                        break;
                    case "febrero":
                        costoPorPagar(b="febrero")
                        porPagar(x="febrero")
                        break;
                    case "marzo":
                        costoPorPagar(b="marzo")
                        porPagar(x="marzo")
                        break;
                    case "abril":
                        costoPorPagar(b="abril")
                        porPagar(x="abril")
                        break;
                    case "mayo":
                        costoPorPagar(b="mayo")
                        porPagar(x="mayo")
                        break;
                    case "junio":
                        costoPorPagar(b="junio")
                        porPagar(x="junio")
                        break;
                    case "julio":
                        costoPorPagar(b="julio")
                        porPagar(x="julio")
                        break;
                    case "agosto":
                        costoPorPagar(b="agosto")
                        porPagar(x="agosto")
                        break;    
                    case "septiembre":
                        costoPorPagar(b="septiembre")
                        porPagar(x="septiembre")
                        break;
                    case "octubre":
                        costoPorPagar(b="octubre")
                        porPagar(x="octubre")
                        break;
                    case "noviembre":
                        costoPorPagar(b="noviembre")
                        porPagar(x="noviembre")
                        break;
                    case "diciembre":
                        costoPorPagar(b="diciembre")
                        porPagar(x="diciembre")
                        break;                                                                      
                    default:
                      console.log('default');
                  }


            }else if(b == "1ª ½ de agosto $700.00"){
                
                costoPorPagar2()
                porPagar(x="1agosto")

            }else if(b == "2ª ½ de agosto $700.00"){
                
                costoPorPagar3()
                porPagar(x="2agosto")

            }else if(b == "inscripcion $780.00"   ){
                
                costoPorPagar4()
                porPagar(x="inscripcion")

            }else if(b == "seguro $180.00"        ){
                
                costoPorPagar5()
                porPagar(x="seguro")

            }else if(b == "material $850.00"      ){
            
                costoPorPagar6()
                porPagar(x="material")

            }else{}
            //----->

            
            interes()
            
            mesAticipadoNo('seguro','inscripcion')
            mesAticipadoNo('material','seguro')
            mesAticipadoNo('1agosto','material')
            mesAticipadoNo('septiembre','1agosto')
            mesAticipadoNo('octubre','septiembre')

            mesAticipadoNo('noviembre','octubre')
            mesAticipadoNo('diciembre','noviembre')
            mesAticipadoNo('2agosto','diciembre')
            mesAticipadoNo('enero','2agosto')
            mesAticipadoNo('febrero','enero')

            mesAticipadoNo('marzo','febrero')
            mesAticipadoNo('abril','marzo')
            mesAticipadoNo('mayo','abril')
            mesAticipadoNo('junio','mayo')
            mesAticipadoNo('julio','junio')

    //----------------------------------------->
    })

    procesarPago()

//--------->
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
function costoPorPagar(b){
    $("#textprecio_costo,#textprecio_costo_print").html("$" + $("#costo_m_" + b).val())
}
function costoPorPagar2(){
    console.log("%c Run-> costoPorPagar2 v2.0","color:#FA2A00; font-size:10px")
    $("#textprecio_costo,#textprecio_costo_print").html("$" + $("#config_1agosto").val())
}
function costoPorPagar3(){
    console.log("%c Run-> costoPorPagar3 v2.0","color:#FA2A00; font-size:10px")
    $("#textprecio_costo,#textprecio_costo_print").html("$" + $("#config_2agosto").val())
}
function costoPorPagar4(){
    console.log("%c Run-> costoPorPagar4 v2.0","color:#FA2A00; font-size:10px")
    $("#textprecio_costo,#textprecio_costo_print").html("$" + $("#config_inscripcion").val())
}
function costoPorPagar5(){
    console.log("%c Run-> seguro v2.0","color:#FA2A00; font-size:10px")
    x =  $("#cobros_serpro option:selected").html();  y = x.split(" ");

    $("#textprecio_costo").html(y[1])

}
function costoPorPagar6(){
    console.log("%c Run-> costoPorPagar6 v2.0","color:#FA2A00; font-size:10px")
    $("#textprecio_costo,#textprecio_costo_print").html("$" + $("#config_material").val())
}

function mesAticipadoNo(mes,antemes){
    console.log('NO SE PUEDE AGAR EL MES SIN ANTES PAGAR EL MES PREVIO')
    if(d == mes){
        
        //----->historialval_m_septiembre
        if($("#historialval_m_"+antemes).val() == "true"){

            $("#btnSaveCobro").attr("disabled",false)
                
        }else{

            alert("No se puede pagar el mes seleccionado sin antes liquidar los pagos previos.")
            limpiarResult()

        }
        //----->

    }
}

function porPagar(x){
    console.log("%c Run-> por pagar v2.0","color:#FA2A00; font-size:10px")
    let resta = $("#costo_m_" + x).val() - $("#pagodo_m_" + x).val();
    $("#text_precio_change_x").html("$" + resta)
    $("#precio_PorPagar").attr("disabled",false)
}
function interes(){
//interes

                    //mes actual
                    if(rangoFecha() == "normal"){
                        $("#print_interes").html("0%")
                    }else if(rangoFecha() == "interes"){
                        $("#print_interes").html($("#config_interes").val() + "%")
                    }else{
                        alert("xxx")
                    }    
}
function limpiarResult(){
    
    $('#cobros_serpro option:eq(0)').prop('selected', true)

    $("#textprecio_costo").html("$00.00")
    $("#text_precio_change_x").html("$00.00")
    $("#print_pago").html("$00.00")
    $("#print_interes").html("0%")
    $("#print_total").html("$00.00")
    $("#print_interes_money").html("$00.00")
}

function procesarPago(){

    $("#precio_PorPagar").on("input",function() {

        cash = $(this).val()
        $("#print_pago").html("$" + cash)
        
        let precio_PorPagar = $(this).val()
            precio_PorPagar = precio_PorPagar.split("$")
        
        let textprecio_costo  = $("#textprecio_costo").html()
            textprecio_costo  = textprecio_costo.split("$")

        let text_precio_change_x  = $("#text_precio_change_x").html()
            text_precio_change_x  = text_precio_change_x .split("$")

        let print_pago = $("#print_pago").html()
            print_pago = print_pago .split("$")

        let print_interes = $("#print_interes").html()
            print_interes = print_interes.split("%")
            
        let print_total = $("#print_total").html()
            print_total = print_total.split("$")
        
        let interesMoney = parseInt(print_pago[1]) * parseInt(print_interes) / 100;

        $("#print_interes_money").html("$" + interesMoney)
        
        $("#print_total").html("$" + (parseInt(print_pago[1]) + parseInt(interesMoney)) )
        
     })
     pago()
}

function pago(){
    console.log("%ctools: Run-> pago ","color:SkyBlue;")
    //--------->
    $("#precio_PorPagar").on('input',function() {
        
        if($(this).val() >= parseInt($("#precio_change_x").val())+1){
            alert("El pago no pude ser mayor al restante del")
            $(this).val("")
            limpiarResult()
            
        }else{}
        
    })
    //--------->
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
function diaAnno(x,y){
    
    /*
    Date.prototype.dayOfYear= function(){
        var j1= new Date(this);
        j1.setMonth(0, 0);
        return Math.round((this-j1)/8.64e7);
    }
    
    alert(new Date().dayOfYear())
    */    
    let dayOfYear_1 = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    let fecha_hoy   = dayOfYear_1(new Date(x))
        console.warn(y + ": " + fecha_hoy)
            return fecha_hoy
}
function formClear(){
    console.log("%cRun : formClear","color:SkyBlue;")
$("#tipodeposito,#tipoefectivo,#colHistorial,#colTicket").addClass("d-none")
$("#dataColegiatura").empty()
/*COBRO*/
$("#a").val("")
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



/*########################################################################*/