/*##########################################################################
____________________________   
\______   \__    ___/\      \  
 |    |  _/ |    |   /   |   \ 
 |    |   \ |    |  /    |    \
 |______  / |____|  \____|__  /
        \/                  \/ 
##########################################################################*/
function allBtn(){
    console.log("%c Load Js BTN ","color:#FA2A00; font-size:24px")

    inputClear()
    generarCobro()
    clearCobro()
    btnRegistrar()

    printUltima()
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
    /*CRUD*/
    function inputClear(){
        console.log("%cRun -> 1 inputClear : limpia los input","color:SkyBlue;")
        $("#firstName").on('click', function() {
            formClear()
        })
    }
    function printUltima(){
        console.log("%cRun -> print ","color:SkyBlue;")
        $("#btnPrint").on('click',function(){
            printTicket('printTicketX')
            $("#ModalPrint").modal("hide")
        })
        
    }
    function generarCobro(){
        $("#btnSaveCobro").on("click",function(){
            savePago()
        })
    }
    function clearCobro(){
        $("#btnClearCobro").on("click",function(){
            formClear()
        })
    }
    function btnRegistrar(){
        $("#btnSaveDeposito").on("click",function(){
            savePago()
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
function printTicket(nombre) {
    var ficha = document.getElementById(nombre);
    var ventimp = window.open(' ', 'popimpr');
    ventimp.document.write(ficha.innerHTML);
    ventimp.document.close();
    ventimp.print();
    ventimp.close();
}
/*########################################################################*/