/*##########################################################################
____  ______ _____________ 
\   \/  /   |   \______   \
 \     /    ~    \       _/
 /     \    Y    /    |   \
/___/\  \___|_  /|____|_  /
      \_/     \/        \/ 
##########################################################################*/
function allXhr(){
    console.log("%c Load Js XHR","color:#FA2A00; font-size:24px")
    //let timeVar = new Date().toISOString().slice(0, 10);
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm;
    loadingKinder(today)
    
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
function loadingKinder(timeVar){
    console.log("%cXhr: Run-> loadingSelectAll carga la lista de servicios y productos","color:SkyBlue;")
    //--->
    $("#totalColegiatura,#totalProductos,#totalCP,#loadColegiaturas,#loadProductos").empty()
    let jqxhr = $.getJSON(urlDbReporteR + "?type=kinder&time=" + timeVar, function(data) {
        })
        .done(function(data) {
            
            $.each(data, function(i, val) {
            //--->
                if(
                    val.concepto == 'inscripcion' ||
                    val.concepto == 'seguro' ||
                    val.concepto == 'material' ||
                    val.concepto == '1ª ½ de agosto' ||
                    val.concepto == 'septiembre' ||
                    
                    val.concepto == 'octubre' ||
                    val.concepto == 'mica media carta' ||
                    val.concepto == 'noviembre' ||
                    val.concepto == 'diciembre' ||
                    val.concepto == '2ª ½ de agosto' ||

                    val.concepto == 'enero' ||
                    val.concepto == 'febrero' ||
                    val.concepto == 'marzo' ||
                    val.concepto == 'abril' ||
                    val.concepto == 'mayo' ||

                    val.concepto == 'junio' ||
                    val.concepto == 'julio'
                ){
                    //----------->
                    if(val.id == "user"){
                        xhrColA =    '<tr class=\"\">' +
                            '    <th scope=\"row\"></th>' +
                            '    <td ></td>' +
                            '    <td ></td>' +
                            '    <td ></td>' +
                            '    <td ></td>' +
                            '    <td ></td>' +
                            '</tr>';
                        }else{
                            xhrColA =    '<tr class=\"\">' +
                                '    <th scope=\"row\"></th>' +
                                '    <td >' + val.id       +'</td>' +
                                '    <td >' + val.time     +'</td>' +
                                '    <td >' + val.nombre   +' ' + val.paterno + ' ' + val.materno + '</td>' +
                                '    <td >' + val.concepto +'</td>' +
                                '    <td>$'+ val.pago     +'<input type="hidden" value="' + val.pago  +'" class=\"pagoAK\"></td>' +
                                '</tr>';
                    
                            }
                        $("#loadColegiaturas").append(xhrColA);
                    //----------->
                }else{
                    //----------->
                    if(val.id == "user"){
                        xhrColB =   '<tr class=\" \">' +
                                        '    <th scope=\"row\"></th>' +
                                        '    <td ></td>' +
                                        '    <td ></td>' +
                                        '    <td ></td>' +
                                        '    <td ></td>' +
                                        '    <td ></td>' +
                                        '</tr>';
                        }else{
                            xhrColB =   '<tr class=\"\">' +
                                            '    <th scope=\"row\"></th>' +
                                            '    <td >' + val.id       +'</td>' +
                                            '    <td >' + val.time     +'</td>' +
                                            '    <td >' + val.nombre   +' ' + val.paterno + ' ' + val.materno + '</td>' +
                                            '    <td >' + val.concepto +'</td>' +
                                            '    <td>$'+ val.pago     +'<input type="hidden" value="' + val.pago  +'" class=\"pagoBK\"></td>' +
                                            '</tr>';
                            }
                            $("#loadProductos").append(xhrColB);
                    //----------->
                }
                
            //--->
            })
            
            loadingPrimaria(timeVar)

        })
        .fail(function(data,jqXHR,textStatus,errorThrown){xhrError(jqXHR,textStatus,errorThrown)})
        .always(function(data){})
        //--->  
}
function loadingPrimaria(timeVar){
    console.log("%cXhr: Run-> loadingSelectAll carga la lista de servicios y productos","color:SkyBlue;")
    //--->
    let jqxhr = $.getJSON(urlDbReporteR + "?type=primaria&time=" + timeVar, function(data) {
        })
        .done(function(data) {
            $.each(data, function(i, val) {
                //--->
                    if(
                        val.concepto == 'inscripcion' ||
                        val.concepto == 'seguro' ||
                        val.concepto == 'material' ||
                        val.concepto == '1ª ½ de agosto' ||
                        val.concepto == 'septiembre' ||
                        
                        val.concepto == 'octubre' ||
                        val.concepto == 'mica media carta' ||
                        val.concepto == 'noviembre' ||
                        val.concepto == 'diciembre' ||
                        val.concepto == '2ª ½ de agosto' ||
    
                        val.concepto == 'enero' ||
                        val.concepto == 'febrero' ||
                        val.concepto == 'marzo' ||
                        val.concepto == 'abril' ||
                        val.concepto == 'mayo' ||
    
                        val.concepto == 'junio' ||
                        val.concepto == 'julio'
                    ){
                        //----------->
                        if(val.id == "user"){
                            xhrColA =    '<tr class=\"\">' +
                                '    <th scope=\"row\"></th>' +
                                '    <td ></td>' +
                                '    <td ></td>' +
                                '    <td ></td>' +
                                '    <td ></td>' +
                                '    <td ></td>' +
                                '</tr>';
                            }else{
                                xhrColA =    '<tr class=\"\">' +
                                    '    <th scope=\"row\"></th>' +
                                    '    <td >' + val.id       +'</td>' +
                                    '    <td >' + val.time     +'</td>' +
                                    '    <td >' + val.nombre   +' ' + val.paterno + ' ' + val.materno + '</td>' +
                                    '    <td >' + val.concepto +'</td>' +
                                    '    <td>$'+ val.pago     +'<input type="hidden" value="' + val.pago  +'" class=\"pagoAP\"></td>' +
                                    '</tr>';
                        
                                }
                            $("#loadColegiaturas").append(xhrColA);
                        //----------->
                    }else{
                        //----------->
                        if(val.id == "user"){
                            xhrColB =   '<tr class=\" \">' +
                                            '    <th scope=\"row\"></th>' +
                                            '    <td ></td>' +
                                            '    <td ></td>' +
                                            '    <td ></td>' +
                                            '    <td ></td>' +
                                            '    <td ></td>' +
                                            '</tr>';
                            }else{
                                xhrColB =   '<tr class=\"\">' +
                                                '    <th scope=\"row\"></th>' +
                                                '    <td >' + val.id       +'</td>' +
                                                '    <td >' + val.time     +'</td>' +
                                                '    <td >' + val.nombre   +' ' + val.paterno + ' ' + val.materno + '</td>' +
                                                '    <td >' + val.concepto +'</td>' +
                                                '    <td>$'+ val.pago     +'<input type="hidden" value="' + val.pago  +'" class=\"pagoBP\"></td>' +
                                                '</tr>';
                                }
                                $("#loadProductos").append(xhrColB);
                        //----------->
                    }
                    
                //--->
                })

                var sumA1 = 0;
                $(".pagoAK").each(function(){
                    sumA1 += +$(this).val();
                });

                var sumA2 = 0;
                    $(".pagoAP").each(function(){
                        sumA2 += +$(this).val();
                    });
                    sumA = sumA1 + sumA2;
                    
                    $("#totalColegiatura").html("$" + sumA)


                    var sumB1 = 0;
                    $(".pagoBK").each(function(){
                        sumB1 += +$(this).val();
                    });
    
                    var sumB2 = 0;
                        $(".pagoBP").each(function(){
                            sumB2 += +$(this).val();
                        });
                        sumB = sumB1 + sumB2;
                        
                        sumTotal = sumA + sumB;

                        $("#totalProductos").html("$" + sumB)                    

                        $("#totalCP").html("$" + sumTotal)
                
        })
        .fail(function(data,jqXHR,textStatus,errorThrown){xhrError(jqXHR,textStatus,errorThrown)})
        .always(function(data){})
        //--->  
}
/*########################################################################*/

/*##########################################################################
           | |                     | | (_)
  ___ _   _| |__    _ __ ___  _   _| |_ _ _ __   ___  ___
 / __| | | | '_ \  | '__/ _ \| | | | __| | '_ \ / _ \/ __|
 \__ \ |_| | |_) | | | | (_) | |_| | |_| | | | |  __/\__ \
 |___/\__,_|_.__/  |_|  \___/ \__,_|\__|_|_| |_|\___||___/
##########################################################################*/

/*########################################################################*/