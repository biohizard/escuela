//--------------------------------------------------------------->
//BEGIN
/*****************************************************************
 *                             BEGIN                             *
 *                         FUNCTION XHR                          *
 *****************************************************************/
console.log("%cLoad File : %ctools", "color: cyan", "color: yellow");

function allTools() {
    edadCalcVal()
    gradoChange()
}
function clsInscripcion() {
    $("#ins_noarchivo").val(" ")
    $("#ins_fechainscripcion").val(" ")
    $("#ins_nombremaestra").val(" ")
    $("#ins_annoskinder").val(" ")
    $("#ins_lectoescriturapor").val(" ")
    $("#ins_procedencia").val(" ")
    $("#ins_maestraausubel").val(" ")
    $("#ins_nombrealumno").val(" ")
    $("#ins_fechanacimiento").val(" ")
    $("#ins_edad").val(" ")
    $("#ins_curp").val(" ")
    $("#ins_gradocursar").val(" ")
    $("#ins_problema").val(" ")
    $("#ins_tutor").val(" ")
    $("#ins_parentesco").val(" ")
    $("#ins_telefono").val(" ")
}
function edadCalcVal(){
    $('#ins_fechanacimiento').change(function() {
        // Does some stuff and logs the event to the console
        let x = $(this).val()
        let fechaInput = x
            fechaInput = fechaInput.replace("-","")
            fechaInput2 = fechaInput.replace("-","")

        let dob = fechaInput2;
        let year = Number(dob.substr(0, 4));
        let month = Number(dob.substr(4, 2)) - 1;
        let day = Number(dob.substr(6, 2));
        let today = new Date();
        let age = today.getFullYear() - year;

            if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {age--;}
            $("#ins_edad").val(age)
    })

    $('#exampleModalToggleLabel,.show').on('click', function(){
        $('#new').toggleClass('d-none');
      })

    
}
function gradoChange(){
    $("#ins_gradocursar").on('change',function(){

        if($(this).val() == "p-0adhSVX0b9MNxkLxwf" || $(this).val() == "p-ie6NKuPBjG8iS8m3oj"){
            $("#new").removeClass("d-none")
        }else{
            $("#new").addClass("d-none")
        }

    })
}
/*****************************************************************
 *                              END                              *
 *                         FUNCTION XHR                          *
 *****************************************************************/
//END
//--------------------------------------------------------------->


