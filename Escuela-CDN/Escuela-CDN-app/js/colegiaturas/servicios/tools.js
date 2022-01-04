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

    $("#cobros_serpro").change(function(){
        $("#precio_PorPagar").attr("disabled",false)
            let x = $(this).find("option:selected").text();
            let y = x.split(" ");
            let z = y[1].split("$");

            $("#textSerpro_x").html(x)
            //pago - precio_PorPagar
            $("#precio_PorPagar").val(z[1])

            //Costo Por Pagar - textprecio_costo
            $("#textprecio_costo").html("$" + z[1])

            //Pago Por Pagar - print_pago
            // hay que agregar lo ya pagado
            $("#print_pago").html("$" + z[1])

            //print_total
            $("#print_total").html("$" + z[1])
    })

    $("#precio_PorPagar").on("input",function(){
        // hay que agregar lo ya pagado
        $("#print_pago").html("$" + $(this).val())

        //pagol
        let pago = $(this).val()

        //textprecio_costo
        let costo = $("#textprecio_costo").html()
        costo_x = costo.split("$")

        //print_pago
        let xxx = parseInt(costo_x[1]) - parseInt(pago);
        $("#text_precio_change_x").html("$" + xxx)


    })

    
    $("#precio_PorPagar").on("input",function(){
        //pagol
        let pago = $(this).val()

        //textprecio_costo
        let costo = $("#textprecio_costo").html()
        costo_x = costo.split("$")

        //print_pago
        let xxx = parseInt(costo_x[1]) - parseInt(pago);
        $("#text_precio_change_x").html("$" + xxx)

        //print_total
        $("#print_total").html("$" + $(this).val())
    })

}
/*########################################################################*/