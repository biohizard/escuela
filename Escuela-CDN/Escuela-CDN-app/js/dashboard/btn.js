//--------------------------------------------------------------->
//BEGIN
/*****************************************************************
 *                             BEGIN                             *
 *                         FUNCTION BTN                          *
 *****************************************************************/
console.log("%cLoad File : %cbtn", "color: cyan", "color: yellow");
//---> Delete User
function allBtn() {
    generarInscripcion()
}
function generarInscripcion() {
    $("#generarinscripcion").on('click', function() {
        console.info("Run: Click Btn cierre modal generar inscripcion")
        saveDataInscripcion()
    })
}
//---> Delete User
/*****************************************************************
 *                              END                              *
 *                         FUNCTION XHR                          *
 *****************************************************************/
//END
//--------------------------------------------------------------->