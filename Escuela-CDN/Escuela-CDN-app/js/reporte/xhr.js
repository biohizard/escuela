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
    loadingKinder()
    
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
function loadingKinder(){
    console.log("%cXhr: Run-> loadingSelectAll carga la lista de servicios y productos","color:SkyBlue;")
    //--->
    let jqxhr = $.getJSON(urlDbReporteR + "?type=kinder", function(data) {
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
                    let xhrColA =    '<tr class=\"\">' +
                                    '    <th scope=\"row\"></th>' +
                                    '    <td >' + val.id       +'</td>' +
                                    '    <td >' + val.time     +'</td>' +
                                    '    <td >' + val.nombre   +' ' + val.paterno + ' ' + val.materno + '</td>' +
                                    '    <td >' + val.concepto +'</td>' +
                                    '    <td >$'+ val.pago    +'</td>' +
                                    '</tr>';

                        $("#loadColegiaturas").append(xhrColA);
                }else{
                    let xhrColB  =    '<tr class=\"\">' +
                                        '    <th scope=\"row\"></th>' +
                                        '    <td >' + val.id       +'</td>' +
                                        '    <td >' + val.time     +'</td>' +
                                        '    <td >' + val.nombre   +' ' + val.paterno + ' ' + val.materno + '</td>' +
                                        '    <td >' + val.concepto +'</td>' +
                                        '    <td >$'+ val.pago     +'</td>' +
                                        '</tr>';
                        $("#loadProductos").append(xhrColB);
                }
                
            //--->
            })
            
            loadingPrimaria()

        })
        .fail(function(data,jqXHR,textStatus,errorThrown){xhrError(jqXHR,textStatus,errorThrown)})
        .always(function(data){})
        //--->  
}
function loadingPrimaria(){
    console.log("%cXhr: Run-> loadingSelectAll carga la lista de servicios y productos","color:SkyBlue;")
    //--->
    let jqxhr = $.getJSON(urlDbReporteR + "?type=primaria", function(data) {
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
                    let xhrColA =    '<tr class=\"\">' +
                                    '    <th scope=\"row\"></th>' +
                                    '    <td >' + val.id       +'</td>' +
                                    '    <td >' + val.time     +'</td>' +
                                    '    <td >' + val.nombre   +' ' + val.paterno + ' ' + val.materno + '</td>' +
                                    '    <td >' + val.concepto +'</td>' +
                                    '    <td >$'+ val.pago     +'</td>' +
                                    '</tr>';
                        $("#loadColegiaturas").append(xhrColA);
                }else{
                    let xhrColB  =    '<tr class=\"\">' +
                                        '    <th scope=\"row\"></th>' +
                                        '    <td >' + val.id       +'</td>' +
                                        '    <td >' + val.time     +'</td>' +
                                        '    <td >' + val.nombre   +' ' + val.paterno + ' ' + val.materno + '</td>' +
                                        '    <td >' + val.concepto +'</td>' +
                                        '    <td >$'+ val.pago     +'</td>' +
                                        '</tr>';
                        $("#loadProductos").append(xhrColB);
                }
                
            //--->
            })
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