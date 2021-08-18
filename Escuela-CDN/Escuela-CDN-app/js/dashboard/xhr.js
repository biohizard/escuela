//--------------------------------------------------------------->
//BEGIN
/*****************************************************************
 *                             BEGIN                             *
 *                         FUNCTION XHR                          *
 *****************************************************************/
console.log("%cLoad File : %cxhr", "color: cyan", "color: yellow");

function saveDataInscripcion() {
    /*
    S.fn.init(24) [
        FICHA DE INSCRIPCION (4)
        input#ins_nombremaestra.form-control,
        input#inlineRadio1.form-check-input,
        input#inlineRadio2.form-check-input,

        DATOS DEL ALUMNO     (14)
        input#ins_nombrealumno.form-control,
        input#ins_apaternoalumno.form-control,
        input#ins_amaternoalumno.form-control,
        input#ins_fechanacimiento.form-control,
        input#ins_edad.form-control,
        input#ins_curp.form-control,

        input#ins_estatura.form-control,
        input#ins_peso.form-control,
        input#ins_tiposanguineo.form-control,
        input#ins_direccion.form-control,
        input#ins_cp.form-control,
        input#ins_telefono.form-control,
        input#ins_recados.form-control,

        PARA ALUMNOS DE 1ER GRADO (6)
        input#ins_annoskinder.form-control,
        input#ins_maestraausubel.form-control,
        input#ins_procedencia.form-control,

        input#ins_lectoescriturapor.form-control,
        input#ins_problema.form-control,

        DATOS DEL TUTOR (3)
        input#tutor_tutor.form-control,
        input#tutor_parentesco.form-control,
        input#tutor_tutocurp.form-control,

        prevObject: S.fn.init(1)]
    */



}
//
function readeDataInscripcion() {

    //--->
    console.log("%cXHR: %cmetales/detalles loadingMetalesSaldo", "color: red", "color: green");
    $("#loadingMetalesCierres").fadeIn().empty()

    let id_advance = $("#id_advance_x").val();

    let jqxhr = $.getJSON(urlSaldoR + "/?name=Saldo&type=saldo&id=" + id_advance, function(data) {})
        .done(function(data) {
            //--->
            $.each(data, function(i, val) {
                    if (val.Error) {
                        console.error("%cXHR: %cmetales/detalles Error DB saldo", "color: red", "color: yellow");
                    } else {
                        //$("#btnModalSaldo").hide()
                        //$("#btnModalCierre,#btnModalEntrega,#btnentregasMultipleModal,#btnModalEntregaUnica,#reloadCaja").show()

                        $(".saldoActual").html(val.detail_saldo_actual)

                        $("#xhrCliente").html(val.firstname + " " + val.secondname)
                        $("#xhrSaldo").html(val.detail_saldo_actual)
                        $("#xhrCliente").show()
                        $("#xhrSaldotxt").show()
                    }
                })
                //--->
        })
        .fail(function(data, jqXHR, textStatus, errorThrown) {
            //--->
            console.info("Run: all user loading error");
            xhrError(jqXHR, textStatus, errorThrown);
        })
        .always(function(data) {})
        //--->  

}
function loadingSelectAll(){
    //--->
    $("#ins_gradocursar").empty().append("<option value=\"null\"> - Nivel – Grupo – Salon -</option>")   
    let jqxhr = $.getJSON(urlDbGruposR + "?type=all", function(data) {
        })
        .done(function(data) {
            //--->
            $.each(data, function(i, val) {

                if(val.grupos == "k1"){
                    grupoDefine = "Preescolar 1"
                }else if(val.grupos == "k2"){
                    grupoDefine = "Preescolar 2"
                }else if(val.grupos == "k3"){
                    grupoDefine = "Preescolar 3"
                }else if(val.grupos == "p1"){
                    grupoDefine = "Primaria 1"
                }else if(val.grupos == "p2"){
                    grupoDefine = "Primaria 2"
                }else if(val.grupos == "p3"){
                    grupoDefine = "Primaria 3"
                }else if(val.grupos == "p4"){
                    grupoDefine = "Primaria 4"
                }else if(val.grupos == "p5"){
                    grupoDefine = "Primaria 5"
                }else if(val.grupos == "p6"){
                    grupoDefine = "Primaria 6"
                }
                
                $("#ins_gradocursar").append("<option value=\""+ val.id_advance +"\"> " + grupoDefine + " " + val.salon + "</option>");               
            })
            //--->
        })
        .fail(function(data, jqXHR, textStatus, errorThrown) {
            xhrError(jqXHR, textStatus, errorThrown);
        })
        .always(function(data) {
            changeGrado()
        })
        //--->  
}
function changeGrado(){
    $('#ins_gradocursar').on('change', function() {
        let varGradoCursar = $(this).val();
        varGradoCursar     = varGradoCursar.split("-");  
            /*
            inscripcion         colegiatura         interes
            #ins_inscripcion    #ins_colegiatura    #ins_descuento
            */
            if(
                varGradoCursar[0] == "k" ){
                $("#ins_inscripcion").val(" ").val("$450.00")
                $("#ins_colegiatura,#ins_colegiatura_print").val(" ").val("$950.00")
                $("#ins_interes").val(" ").val("15%")
                }else if(
                varGradoCursar[0] == "p"
                    ){
                    $("#ins_inscripcion").val(" ").val("$780.00")
                    $("#ins_colegiatura,#ins_colegiatura_print").val(" ").val("$1400.00")
                    $("#ins_interes").val(" ").val("15%")
                }
    })
}
function changeDpa(){
    console.log("DPA")
    $("#ins_gradocursar").on('change',function(){
        if($(this).val() == 'null'){
            $("#ins_dpp,#ins_colegiatura_print").val(" ")
            $("#ins_dpp").attr('disabled',true)
        }else{
            $("#ins_dpp").removeAttr("disabled",false)      
        }
    })

    $("#ins_dpp").on('click',function(){ 
        $(this).val(" ")
    })

    $("#ins_dpp").on('change', function() {
        
        //x
        let x = $("#ins_colegiatura").val()
            x = x.split("$")
            
        //Y
        let y = $(this).val()

        //Z
        let colegiatura = parseFloat(x[1]);
        let porcentaje  = (parseInt(y)/100);
       
        let z = colegiatura-(colegiatura*porcentaje);

        $("#ins_colegiatura_print").val(" ").val("$" + z)
    })
}

/*****************************************************************
 *                              END                              *
 *                         FUNCTION XHR                          *
 *****************************************************************/
//END
//--------------------------------------------------------------->
