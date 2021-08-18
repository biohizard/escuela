<?php 

foreach($codebar as $item){
        
    $x = "http://luxza.com/barcode.php?codetype=Code128&size=60&text=".$item->codebar."&print=true\"\"&translate-esc=on";
    echo "<img src=\"$x\">";
    
}