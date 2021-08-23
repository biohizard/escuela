/*==============================================
                API URLS                  
==============================================*/
//url_base
if (location.host == "localhost") { var local = true; } else { var local = false; }

if (local == true) {
    var txtServe = "on the server localhost";
    var hostlocal = "localhost/server/DevOps/";
    url_base = "//" + hostlocal + "escuela/Escuela-APP/index.php/";
    url_api = "//" + hostlocal + "escuela/Escuela-API/index.php/";
    url_cdn = "//" + hostlocal + "escuela/Escuela-APP/";
} else {
    var txtServe = "on the server web";
    var hostweb = "//escuela.labs26.com/";
    url_base = hostweb + "Escuela-APP/";
    url_api  = hostweb + "Escuela-API/";
    url_cdn  = hostweb + "Escuela-CDN/Escuela-CDN-app/";
}
console.log("%c Run JS: " + txtServe, "color:green; text-decoration: underline");
//--->
function apiConecction() {
    //---->
    let settings = {
        async: true,
        crossDomain: true,
        timeout: 0,
        method: "POST",
        url: url_api,
        headers: {
            /*"Authorization": "Basic cm9vdDphZG1pbg==",*/
            "xr8-api-key": "ewf45r4435trge",
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache"
        },
        data: {}
    }
    let jqxhr1 = $.ajax(settings).done(function(data) {
            console.log("%c            Api Connection            ", "color: red; text-transform: uppercase,text-decoration: underline");
            console.log("%cApi Connection : %cSuccess", "color: red; text-transform: uppercase", "color: green; text-transform: lowercase");
            console.log("%cAPI Token      : %c" + data['Api Connection'], "color: red; text-transform: uppercase", "color: green; text-transform: lowercase");
            console.log("%cAPI Time       : %c" + data['Api Time'], "color: red; text-transform: uppercase", "color: green; text-transform: lowercase");
            $.each(data, function(i, val) {})
        }).fail(function(data, jqXHR, textStatus, errorThrown) {
            console.info("Run: all user loading error");
            xhrError(jqXHR, textStatus, errorThrown);
        }).always(function(data) {})
        //---->
}
//--->  
console.log("%c Run APP: " + txtServe + " ", "color:green; text-decoration: underline");
//*********************************************************************************//
//                                                                                 //
//                                      REAL                                       //
//                                                                                 //
//*********************************************************************************//  

//-------------------------------------------------------------->
//A.- ENTREGAS
//-------------------------------------------------------------->
urlDbInscripcionC = url_api + "dbinscripcion/createdata";
urlDbInscripcionR = url_api + "dbinscripcion/readedata";
urlDbInscripcionU = url_api;
urlDbInscripcionD = url_api;

//-------------------------------------------------------------->
//B.- GRUPOS
//-------------------------------------------------------------->
urlDbGruposC = url_api + "configgrupos/createdata";
urlDbGruposR = url_api + "configgrupos/readedata";
urlDbGruposU = url_api;
urlDbGruposD = url_api;

//-------------------------------------------------------------->
//C.- ALUMNO
//-------------------------------------------------------------->
urlDbAlumnoC = url_api + "dbalumno/createdata";
urlDbAlumnoR = url_api + "dbalumno/readedata";
urlDbAlumnoU = url_api + "dbalumno/update";
urlDbAlumnoD = url_api;

urlDbAlumnoS = url_api + "dbalumno/searchdata";
//-------------------------------------------------------------->
//D.- 
//-------------------------------------------------------------->
urlDbSerproC = url_api + "dbserpro/createdata";
urlDbSerproR = url_api + "dbserpro/readedata";
urlDbSerproU = url_api;
urlDbSerproD = url_api;

urlDbSerproA = url_api + "dbserpro/allreadedata";

//-------------------------------------------------------------->
//E.- 
//-------------------------------------------------------------->
urlDbConfigfechasC = url_api + "dbconfigfechas/createdata";
urlDbConfigfechasR = url_api + "dbconfigfechas/readedata";
urlDbConfigfechasU = url_api;
urlDbConfigfechasD = url_api;

urlDbConfigfechasA = url_api + "dbconfigfechas/allreadedata";

//F.- 
//-------------------------------------------------------------->
urlDbColegiaturasC = url_api + "dbcolegiaturas/createdata";
urlDbColegiaturasR = url_api + "dbcolegiaturas/readedata";
urlDbColegiaturasU = url_api;
urlDbColegiaturasD = url_api;

urlDbColegiaturasA = url_api + "dbcolegiaturas/allreadedata";

//F.- Dbcofigcol
//-------------------------------------------------------------->
urlDbConfigC = url_api + "Dbcofigcol/createdata";
urlDbConfigR = url_api + "Dbcofigcol/readedata";
urlDbConfigU = url_api;
urlDbConfigD = url_api;

urlDbConfigA = url_api + "Dbcofigcol/allreadedata";

//-------------------------------------------------------------->
urlDbPagosR             = url_api + "dbpagos/allreadedata";

urlDbColegiaturasPagosU = url_api + "dbcolegiaturasdinero/updatedata";

urlDbColegiaturasR      = url_api + "dbcolegiaturas/allreadedata";

