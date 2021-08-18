function generarInscripcion() {
    $("#generarinscripcion").on('click', function() {
        console.info("Run: Click Btn cierre modal generar inscripcion")
        saveDataInscripcion()
    })
}
function alumnosHistorial() {
    $("#historial").on('click', function() {
        
            let x = $('input[type="checkbox"]:checked').attr("id")
            window.location.href= url_base + "historial/?token=" + x;
        
    })
}
function alumnoFiltro(){
    console.log("run filtro")
    $(".filtro").on('click', function() {
        
        let x = $(this).attr('id')

        $(".alumnos_lista").hide()

        
        if(x == "n_primero"){
            a = "primero"
        }else if(x == "n_segundo"){
            a = "segundo"
        }else{
            a = "alumnos_lista"
        }
        $("." + a).show()
        

    })
}