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