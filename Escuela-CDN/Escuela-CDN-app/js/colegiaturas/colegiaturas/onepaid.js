        /**
        *   conceptoCobro
        *   conceptoCosto
        *   conceptoPago
        *   conceptoResta
        *   rangoFecha
        **/

        /**
        * Function     conceptoCobro
        * @author      biohizard
        * @description {}
        * @param       {y: select text}
        * @return      {}
        **/
        /************************************/
        function conceptoCobro(y,limpiarTxt){
            //console.log("conceptoCobro: y->" + y + " -- limpiarTxt-> " + limpiarTxt)

            if(limpiarTxt == 'false'){

                $("#textSerpro_x").html($("#cobros_serpro").find("option:selected").text())

                }else if(limpiarTxt == 'true'){

                    $("#textSerpro_x").html("Concepto Del Cobro")

                }else{}
        }
        /************************************/

        /**
        * Function     conceptoCobro
        * @author      biohizard
        * @description {}
        * @param       {y: select text}
        * @return      {}
        **/
        /************************************/
        function conceptoCosto(y,limpiarTxt,x,mes){
            if(x == true){
                console.log("costo true")
                $("#textprecio_costo").html("$" + y[1])
            }else if(x == false){
                console.log("costo false")
                $("#textprecio_costo").html("$" + y[1])
            }
        }
        /************************************/

        /**
        * Function     conceptoPago
        * @author      biohizard
        * @description {}
        * @param       {y: select text}
        * @return      {}
        **/
        /************************************/
        function conceptoPago(y,limpiarTxt){
            //console.log("conceptoPago: y->" + y + " -- limpiarTxt-> " + limpiarTxt)
            if(limpiarTxt == "false"){
            }else if(limpiarTxt == "true"){
            }
        }
        /************************************/

        /**
        * Function     conceptoResta
        * @author      biohizard
        * @description {}
        * @param       {y: select text}
        * @return      {#text_precio_change_x & #textprecio_interes}
        **/
        /************************************/
        function conceptoResta(y,limpiarTxt){
            if(y == "1ªagosto" || y == "2ªagosto"){
                var costo      = parseFloat($("#config_1agosto").val());
            }else{
                var costo      = parseFloat($("#config_costo").val());
            }

            let mesPago    = parseFloat($("#costo_m_" + y).val())

            let restaValor = (costo - mesPago);

            if($("#typoMes").val() == "interes"){
                //------------------------------>
                if($("#pagodo_m_" + y).val() == 0){
                    
                    $("#text_precio_change_x").html("$" + restaValor + ".00")
                    $("#precio_change_x").val(restaValor + ".00")
    
                    let mesPago    = parseFloat($("#precio_PorPagar").val())
                    conceptoInteres(restaValor)
                    conceptoSubTotal(restaValor)
    
                }else{
    
                    if(y == "1ªagosto" || y == "2ªagosto"){
                        var costo      = parseFloat($("#config_1agosto").val());
                    }else{
                        var costo      = parseFloat($("#config_costo").val());
                    }
    
                    let costo_m   = $("#costo_m_" + y).val()
                    let costo_m_x = costo_m.split("$")
    
                    let restaValor = parseFloat(costo) - parseFloat(costo_m_x)
                    $("#text_precio_change_x").html("$" + restaValor + ".00")
                    $("#precio_change_x").val(restaValor + ".00")
    
                    conceptoInteres(restaValor)
                    conceptoSubTotal()
                }
                //------------------------------>
            }else if($("#typoMes").val() == "normal"){
                //------------------------------>
                if($("#pagodo_m_" + y).val() == 0){
                    
                    $("#text_precio_change_x").html("$" + restaValor + ".00")
                    $("#precio_change_x").val(restaValor + ".00")
    
                    let mesPago    = parseFloat($("#precio_PorPagar").val())
                    conceptoInteres(restaValor)
                    conceptoSubTotal(restaValor)
    
                }else{
                    
                    if(y == "1ªagosto" || y == "2ªagosto"){
                        var costo      = parseFloat($("#config_1agosto").val());
                    }else{
                        var costo      = parseFloat($("#config_costo").val());
                    }
    
                    let costo_m   = $("#costo_m_" + y).val()
                    let costo_m_x = costo_m.split("$")
    
                    let restaValor = parseFloat(costo) - parseFloat(costo_m_x)
                    $("#text_precio_change_x").html("$" + restaValor + ".00")
                    $("#precio_change_x").val(restaValor + ".00")
    
                    conceptoInteres(restaValor)
                    conceptoSubTotal(restaValor)
                }
                //------------------------------>                
            }

        }
        /************************************/

        /**
        * Function     conceptoInteres
        * @author      biohizard
        * @description {}
        * @param       {y: select text}
        * @return      {#text_precio_change_x & #textprecio_interes}
        **/
        /************************************/
        function conceptoInteres(restaValor){
            console.log("Run: Interes "+ restaValor)
            //let interesHtml = (restaValor * 0.15) + restaValor
            if($("#typoMes").val() == 'interes'){
                var interesHtml = (restaValor * 0.15)
            }else if($("#typoMes").val() == 'normal'){
                var interesHtml = "00.00"
            }
            
            $("#textprecio_interes").html("$"+interesHtml)
        }
        /************************************/

        /**
        * Function     conceptoTotal
        * @author      biohizard
        * @description {}
        * @param       {y: select text}
        * @return      {#text_precio_change_x & #textprecio_interes}
        **/
        /************************************/
        function conceptoSubTotal(){
            console.log("Run: sub total")
            //text_precio_change_x +  textprecio_interes
            let costoResta   = $("#text_precio_change_x").html()
                costoResta   = costoResta.split("$")

            let costoInteres   = $("#textprecio_interes").html()
                costoInteres   = costoInteres.split("$")

            if($("#typoMes").val() == "interes"){
                var interesHtml = parseFloat(costoResta[1]) + parseFloat(costoInteres[1])
            }else if($("#typoMes").val() == "normal"){
                var interesHtml = costoResta[1]
            }

            $("#print_subtotal").html("$"+interesHtml)
            
        }
        /************************************/

        /**
        * Function     rangoFecha
        * @author      biohizard
        * @description {}
        * @param       {y: select text}
        * @return      {#text_precio_change_x & #textprecio_interes}
        **/
        /************************************/
        function rangoFecha(x){
            console.log("%cRun -> rangoFecha: ","color:Fucsia;")
            var dt   = new Date();
            if(x == "1ªagosto"){
                var numberMes = "08";
                var anno = dt.getFullYear()
                    anno = anno -1
            }else if(x == "septiembre"){
                var numberMes = "09";
                var anno = dt.getFullYear()
                    anno = anno -1
            }else if(x == "octubre"){
                var numberMes = "10";
                var anno = dt.getFullYear()
                    anno = anno -1
            }else if(x == "noviembre"){
                var numberMes = "11";
                var anno = dt.getFullYear()
                    anno = anno -1
            }else if(x == "diciembre"){
                var numberMes = "12";
                var anno = dt.getFullYear()
                    anno = anno -1
            }else if(x == "2ªagosto"){
                var numberMes = "01";
                var anno = dt.getFullYear()
            }else if(x == "enero"){
                var numberMes = "01";
                var anno = dt.getFullYear()
            }else if(x == "febrero"){
                var numberMes = "02";
                var anno = dt.getFullYear()
            }else if(x == "marzo"){
                var numberMes = "03";
                var anno = dt.getFullYear()
            }else if(x == "abril"){
                var numberMes = "04";
                var anno = dt.getFullYear()
            }else if(x == "mayo"){
                var numberMes = "05"
                var anno = dt.getFullYear()
            }else if(x == "junio"){
                var numberMes = "06";
                var anno = dt.getFullYear()
            }else if(x == "julio"){
                var numberMes = "07";
                var anno = dt.getFullYear()
            }
            var numberDia = $("#config_interes").val()
            var fechaUno = anno + "-" + numberMes + "-" + numberDia;
            var mesNow = (dt.getMonth() < 9 ? '0': '') + (dt.getMonth()+1) 
            var interesNow = dt.getFullYear() + "-" + mesNow + "-" + numberDia;

            var diaAnnoHoy    = diaAnno(Date.now(),"Fecha Hoy")
            var diaAnnoUno    = diaAnno(fechaUno,"Fecha Uno")
            var diaInteresNow = diaAnno(interesNow,"Interes Now")

            var mesSelect = $("#cobros_serpro").find("option:selected").val();

            if(
                mesSelect == "col1-usGq4VZo59EHgYX" ||
                mesSelect == "col1-BrX1QB3vSNQoGDz" ||
                mesSelect == "col1-YXSDPruZZXliUZY" ||
                mesSelect == "col1-5Ng5b6OwyOtx3f6" ||
                mesSelect == "col1-HhKGghLjrxf4I1B"
                ){
                var annoPasado = true
            }else if(
                mesSelect == "col1-yoG41KM4GW0X8U3" ||
                mesSelect == "col1-cgCaRxrB2ZW0ssG" ||
                mesSelect == "col1-eC6vDA4GrxrmKN6" ||
                mesSelect == "col1-YsnkKvISr78JL8h" ||
                mesSelect == "col1-QmnY9y2XLLa0Rln" ||
                mesSelect == "col1-s72kWk0KAd9Sf4e" ||
                mesSelect == "col1-4Q1dvhweG74YCGM" ||
                mesSelect == "col1-jTmxDUiV0vOLt7x"
            ){
                var annoPasado = false
            }

            /**
                noviembre
                dia anno hoy: 74 dia anno uno: 318 anno pasado: true
                enero
                dia anno hoy: 74 dia anno uno: 14 anno pasado: false

                marzo
                dia anno hoy: 74 dia anno uno: 73 anno pasado: false
                :74:73:false

                abril
                :74:104:false
            **/
            if(      (diaAnnoHoy <= diaAnnoUno) && annoPasado == true){
                y      = "interes mes año pasado"
                xxxMes = "interes"
            }else if((diaAnnoHoy >= diaAnnoUno) && annoPasado == false){
                y      = "interes mex"
                xxxMes = "interes"
            }else if((diaAnnoHoy <= diaAnnoUno) && annoPasado == false){
                y      = "normal"
                xxxMes = "normal"
                $("#textprecio_interes,#print_interesparcial").html("$00.00")
            }

            let typeMesVal = $("#typoMes").val('').val(xxxMes)

            if($("#typoMes").val() == "normal"){
                $("#liInteresParcial").addClass("d-none")
            }else if($("#typoMes").val() == "interes"){
                $("#liInteresParcial").removeClass("d-none")
            }

            return xxxMes
        }
        /************************************/

    /**
    * Function     {diaAnno}
    * @author      biohizard
    * @description {diaAnno("2022-01-15","Hoy") regresa el numero de dia del año }
    * @param       {fecha,Hoy}
    * @return      {numero de dia del año ejem 14}
    **/
    /************************************/
    function diaAnno(x,y){
        //diaAnno("2022-01-15","Hoy")
        let dayOfYear_1 = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
        let fecha_hoy   = dayOfYear_1(new Date(x))
            console.warn(y + ": " + fecha_hoy)
                return fecha_hoy
    }
    /************************************/