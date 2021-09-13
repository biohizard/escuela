/*##########################################################################
__________   __
\______   \_/  |
 |    |  _/\   __\/    \
 |    |   \ |  | |   |  \
 |______  / |__| |___|  /
        \/            \/
##########################################################################*/
function allBtn(){
    console.log("%c Load Js BTN ","color:#FA2A00; font-size:24px")
    hoy()
    mes()
    datetime()
}
/*########################################################################*/

/*##########################################################################
   __                  _   _
  / _|                | | (_)
 | |_ _   _ _ __   ___| |_ _  ___  _ __
 |  _| | | | '_ \ / __| __| |/ _ \| '_ \
 | | | |_| | | | | (__| |_| | (_) | | | |
 |_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|
##########################################################################*/
function hoy(){
    $("#hoy").click(function(){

        $("#loadProductos").empty()
        $("#loadColegiaturas").empty()

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
    
        today = yyyy + "-" + mm + "-" + dd;

        loadingKinder(today)
    })
}
function mes(){
    $("#mes").click(function(){
        
        $("#loadProductos").empty()
        $("#loadColegiaturas").empty()

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
    
        today = yyyy + "-" + mm;

        loadingKinder(today)
    })
}
function datetime(){
    $("#datetime").change(function(){
        
        $("#loadProductos").empty()
        $("#loadColegiaturas").empty()

        loadingKinder($(this).val())
        
    })
}

/*##########################################################################
           | |                     | | (_)
  ___ _   _| |__    _ __ ___  _   _| |_ _ _ __   ___  ___
 / __| | | | '_ \  | '__/ _ \| | | | __| | '_ \ / _ \/ __|
 \__ \ |_| | |_) | | | | (_) | |_| | |_| | | | |  __/\__ \
 |___/\__,_|_.__/  |_|  \___/ \__,_|\__|_|_| |_|\___||___/
##########################################################################*/