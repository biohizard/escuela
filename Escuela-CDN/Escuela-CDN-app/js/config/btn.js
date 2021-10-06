/*##########################################################################
__________   __          
\______   \_/  |_  ____  
 |    |  _/\   __\/    \ 
 |    |   \ |  | |   |  \
 |______  / |__| |___|  /
        \/            \/ 
##########################################################################*/
function allBtn(){
     btnModificar()
     btnGuardar()

     btnProductoNuevo()
     btnProductoNuevoSave()
     
     btnProductoActualizar()
      btnProductoActualizarSave()
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
function btnModificar(){
     $("#btnModificar").on('click',function(){
          
          $(".show_txt").hide()
          $(".show_val").show()
     })
}
function btnGuardar(){
     $("#btnGuardar").on('click',function(){
          
          $(".show_txt").show()
          $(".show_val").hide()
          saveConfig()
     })
}
function btnProductoNuevo(){
     $("#btnNuevoProductos").on('click',function(){
          $("#ModalProductoNuevo").modal('show')
     })
     
}
function btnProductoNuevoSave(){
     $("#btnProductoNuevo").on('click',function(){
          saveDataProductos()
     })
}

function btnProductoActualizar(){
     $("#btnActualizarProductos").on('click',function(){
         
          $("#ModalProductoActualizar").modal('show')
          let x = $("input[type='checkbox']:checked").val();
            
         
          $("#producto_concepto_act").val($("."+ x +".actualizarConcepto").html())
          $("#producto_precio_act").val($("."+ x +".actualizarPrecio").html())
          $("#producto_tipo_act").val($("."+ x +".actualizarType").html())
          
     })
     
}
function btnProductoActualizarSave(){
     $("#btnProductoActualizar").on('click',function(){
          updateDataProductos()
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

/*########################################################################*/