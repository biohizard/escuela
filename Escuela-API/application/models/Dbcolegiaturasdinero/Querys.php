<?php if (!defined('BASEPATH')) exit('No direct script access allowed');
class Querys extends CI_Model{

    function coldineroUpdate()
    {
        $random = random_string('sha1', 20);
        $date   = date("Y-m-d H:m:s");
        $r_id   = random_string('md5', 4);

        

        //---------->
        #
        #   DB colegiaturas
        #
        /*
        save_concepto: marzo
        save_idadconcepto: col1-YsnkKvISr78JL8h
        save_costo: 1400.00         -> select
        save_resta: 1400            -> Resta Por Pagar
        save_pago: 999              -> TotaL Por Pagar
        save_total: 999             -> TotaL Por Pagar
        save_restafavorResto: 00.00 -> saldo a favor

        save_costo: 1400.00
        save_resta: 1610
        save_pago: 999
        save_total: 999
        save_restafavorResto: 00.00
        save_interes: true

        save_resta
        */
        $xxx = $_POST['save_resta'] - $_POST['save_total'];
        $pago_save_total = $_POST["save_total"];

        if($_POST['save_interes'] == true){

            if($xxx == 0){
                $pago             = $_POST["save_resta"];
                //una sola exhibición
                //echo "1111";
                //----------> DB colegiaturas$$$
                    // db tale dinero pagado
                    if($_POST['save_idadconcepto'] == 'col1-usGq4VZo59EHgYX'){
                        $this->db->set('colegiatura12_1_agosto',"colegiatura12_1_agosto + $pago", FALSE);
                    }else if($_POST['save_idadconcepto'] == 'col1-yoG41KM4GW0X8U3'){
                        $this->db->set('colegiatura12_2_agosto',"colegiatura12_2_agosto + $pago", FALSE);
                    }else if($_POST['save_idadconcepto'] == 'ins-g2Bk6N3ykoUvNLcz'){
                        $this->db->set('inscripcion',"inscripcion + $pago", FALSE);
                    }else if($_POST['save_idadconcepto'] == 'mat-IW9v0HkFnl8iT3Zn'){
                        $this->db->set('seguro',"seguro + $pago", FALSE);
                    }else if($_POST['save_idadconcepto'] == 'seg-sAcaE6YjPyGtFaMP'){
                        $this->db->set('material',"material + $pago", FALSE);
                    }else if($_POST['save_concepto'] == 'septiembre'){
                        $this->db->set('colegiatura_9_septiembre',"colegiatura_9_septiembre + $pago", FALSE);
                    }else if($_POST['save_concepto'] == 'octubre'){
                        $this->db->set('colegiatura_10_octubre',"colegiatura_10_octubre + $pago", FALSE);
                    }else if($_POST['save_concepto'] == 'noviembre'){
                        $this->db->set('colegiatura_11_noviembre',"colegiatura_11_noviembre + $pago", FALSE);
                    }else if($_POST['save_concepto'] == 'diciembre'){
                        $this->db->set('colegiatura_12_diciembre',"colegiatura_12_diciembre + $pago", FALSE);
                    }else if($_POST['save_concepto'] == 'enero'){
                        $this->db->set('colegiatura_1_enero',"colegiatura_1_enero + $pago", FALSE);
                    }else if($_POST['save_concepto'] == 'febrero'){
                        $this->db->set('colegiatura_2_febrero',"colegiatura_2_febrero + $pago", FALSE);
                    }else if($_POST['save_concepto'] == 'marzo'){
                        $this->db->set('colegiatura_3_marzo',"colegiatura_3_marzo + $pago", FALSE);
                    }else if($_POST['save_concepto'] == 'abril'){
                        $this->db->set('colegiatura_4_abril',"colegiatura_4_abril + $pago", FALSE);
                    }else if($_POST['save_concepto'] == 'mayo'){
                        $this->db->set('colegiatura_5_mayo',"colegiatura_5_mayo + $pago", FALSE);
                    }else if($_POST['save_concepto'] == 'junio'){
                        $this->db->set('colegiatura_6_junio',"colegiatura_6_junio + $pago", FALSE);
                    }else if($_POST['save_concepto'] == 'julio'){
                        $this->db->set('colegiatura_7_julio',"colegiatura_7_julio + $pago", FALSE);
                    }

                    $this->db->where('id_advance_alumno', $_POST['save_idAdvanceAlumno']);
                    $this->db->update('colegiaturas');

                //----------> DB colegiaturas$$$

                //----------> DB colegiaturas_dinero  $$$
                    // db tale dinero pagado
                    
                    if($_POST['save_idadconcepto'] == 'col1-usGq4VZo59EHgYX'){
                        $this->db->set('colegiatura12_1_agosto',"colegiatura12_1_agosto + $pago", FALSE);
                    }else if($_POST['save_idadconcepto'] == 'col1-yoG41KM4GW0X8U3'){
                        $this->db->set('colegiatura12_2_agosto',"colegiatura12_2_agosto + $pago", FALSE);
                    }else if($_POST['save_idadconcepto'] == 'ins-g2Bk6N3ykoUvNLcz'){
                        $this->db->set('inscripcion',"inscripcion + $pago", FALSE);
                    }else if($_POST['save_idadconcepto'] == 'mat-IW9v0HkFnl8iT3Zn'){
                        $this->db->set('seguro',"seguro + $pago", FALSE);
                    }else if($_POST['save_idadconcepto'] == 'seg-sAcaE6YjPyGtFaMP'){
                        $this->db->set('material',"material + $pago", FALSE);
                    }else if($_POST['save_concepto'] == 'septiembre'){
                        $this->db->set('colegiatura_9_septiembre',"colegiatura_9_septiembre + $pago", FALSE);
                    }else if($_POST['save_concepto'] == 'octubre'){
                        $this->db->set('colegiatura_10_octubre',"colegiatura_10_octubre + $pago", FALSE);
                    }else if($_POST['save_concepto'] == 'noviembre'){
                        $this->db->set('colegiatura_11_noviembre',"colegiatura_11_noviembre + $pago", FALSE);
                    }else if($_POST['save_concepto'] == 'diciembre'){
                        $this->db->set('colegiatura_12_diciembre',"colegiatura_12_diciembre + $pago", FALSE);
                    }else if($_POST['save_concepto'] == 'enero'){
                        $this->db->set('colegiatura_1_enero',"colegiatura_1_enero + $pago", FALSE);
                    }else if($_POST['save_concepto'] == 'febrero'){
                        $this->db->set('colegiatura_2_febrero',"colegiatura_2_febrero + $pago", FALSE);
                    }else if($_POST['save_concepto'] == 'marzo'){
                        $this->db->set('colegiatura_3_marzo',"colegiatura_3_marzo + $pago", FALSE);
                    }else if($_POST['save_concepto'] == 'abril'){
                        $this->db->set('colegiatura_4_abril',"colegiatura_4_abril + $pago", FALSE);
                    }else if($_POST['save_concepto'] == 'mayo'){
                        $this->db->set('colegiatura_5_mayo',"colegiatura_5_mayo + $pago", FALSE);
                    }else if($_POST['save_concepto'] == 'junio'){
                        $this->db->set('colegiatura_6_junio',"colegiatura_6_junio + $pago", FALSE);
                    }else if($_POST['save_concepto'] == 'julio'){
                        $this->db->set('colegiatura_7_julio',"colegiatura_7_julio + $pago", FALSE);
                    }

                    $this->db->where('id_advance_alumno', $_POST['save_idAdvanceAlumno']);
                    $this->db->update('colegiaturas_dinero');

                //----------> DB colegiaturas_dinero  $$$

                //----------> DB pagos $$$
                    $x      = random_string('alnum',18);
                    $random = 'C-'.$x;
                    $date   = date("Y-m-d H:m:s");
                    $r_id   = random_string('md5', 4);

                    $data_pagos = array(
                    'id_advance'           => $random,
                    'time'                 => $date,
                    'id_advance_usuario'   => $_POST['save_idUsuario'],
                    'id_advance_alumno'    => $_POST['save_idAdvanceAlumno'],
                    'id_advance_programas' => $_POST['save_idadconcepto'],
                    'pago'                 => $_POST['save_pago']
                    );

                    $this->db->insert('pagos',$data_pagos);
                //----------> DB pagos $$$
            }else if($xxx > 0){
                $pago             = $_POST["save_resta"];
                //echo "2222";
                //----------> DB colegiaturas$$$
                    // db tale dinero pagado
                    if($_POST['save_idadconcepto'] == 'col1-usGq4VZo59EHgYX'){
                        $this->db->set('colegiatura12_1_agosto',$pago, FALSE);
                    }else if($_POST['save_idadconcepto'] == 'col1-yoG41KM4GW0X8U3'){
                        $this->db->set('colegiatura12_2_agosto',$pago, FALSE);
                    }else if($_POST['save_idadconcepto'] == 'ins-g2Bk6N3ykoUvNLcz'){
                        $this->db->set('inscripcion',$pago, FALSE);
                    }else if($_POST['save_idadconcepto'] == 'mat-IW9v0HkFnl8iT3Zn'){
                        $this->db->set('seguro',$pago, FALSE);
                    }else if($_POST['save_idadconcepto'] == 'seg-sAcaE6YjPyGtFaMP'){
                        $this->db->set('material',$pago, FALSE);
                    }else if($_POST['save_concepto'] == 'septiembre'){
                        $this->db->set('colegiatura_9_septiembre',$pago, FALSE);
                    }else if($_POST['save_concepto'] == 'octubre'){
                        $this->db->set('colegiatura_10_octubre',$pago, FALSE);
                    }else if($_POST['save_concepto'] == 'noviembre'){
                        $this->db->set('colegiatura_11_noviembre',$pago, FALSE);
                    }else if($_POST['save_concepto'] == 'diciembre'){
                        $this->db->set('colegiatura_12_diciembre',$pago, FALSE);
                    }else if($_POST['save_concepto'] == 'enero'){
                        $this->db->set('colegiatura_1_enero',$pago, FALSE);
                    }else if($_POST['save_concepto'] == 'febrero'){
                        $this->db->set('colegiatura_2_febrero',$pago, FALSE);
                    }else if($_POST['save_concepto'] == 'marzo'){
                        $this->db->set('colegiatura_3_marzo',$pago, FALSE);
                    }else if($_POST['save_concepto'] == 'abril'){
                        $this->db->set('colegiatura_4_abril',$pago, FALSE);
                    }else if($_POST['save_concepto'] == 'mayo'){
                        $this->db->set('colegiatura_5_mayo',$pago, FALSE);
                    }else if($_POST['save_concepto'] == 'junio'){
                        $this->db->set('colegiatura_6_junio',$pago, FALSE);
                    }else if($_POST['save_concepto'] == 'julio'){
                        $this->db->set('colegiatura_7_julio',$pago, FALSE);
                    }

                    $this->db->where('id_advance_alumno', $_POST['save_idAdvanceAlumno']);
                    $this->db->update('colegiaturas');
                //----------> DB colegiaturas$$$

                //----------> DB colegiaturas_dinero $$$
                    // db tale dinero pagado
                    if($_POST['save_idadconcepto'] == 'col1-usGq4VZo59EHgYX'){

                        $this->db->set('colegiatura12_1_agosto',"colegiatura12_1_agosto + $pago_save_total", FALSE);

                    }else if($_POST['save_idadconcepto'] == 'col1-yoG41KM4GW0X8U3'){
                        
                        $this->db->set('colegiatura12_2_agosto',"colegiatura12_2_agosto + $pago_save_total", FALSE);

                    }else if($_POST['save_idadconcepto'] == 'ins-g2Bk6N3ykoUvNLcz'){

                        $this->db->set('inscripcion',"inscripcion + $pago_save_total", FALSE);

                    }else if($_POST['save_idadconcepto'] == 'mat-IW9v0HkFnl8iT3Zn'){

                        //seguro
                        $this->db->set('seguro',"seguro + $pago_save_total", FALSE);

                    }else if($_POST['save_idadconcepto'] == 'seg-sAcaE6YjPyGtFaMP'){
                        
                        //material
                        $this->db->set('material',"material + $pago_save_total", FALSE);

                    }else if($_POST['save_concepto'] == 'septiembre'){
                        $this->db->set('colegiatura_9_septiembre',"colegiatura_9_septiembre + $pago_save_total", FALSE);
                    }else if($_POST['save_concepto'] == 'octubre'){
                        $this->db->set('colegiatura_10_octubre',"colegiatura_10_octubre + $pago_save_total", FALSE);
                    }else if($_POST['save_concepto'] == 'noviembre'){
                        $this->db->set('colegiatura_11_noviembre',"colegiatura_11_noviembre + $pago_save_total", FALSE);
                    }else if($_POST['save_concepto'] == 'diciembre'){
                        $this->db->set('colegiatura_12_diciembre',"colegiatura_12_diciembre + $pago_save_total", FALSE);
                    }else if($_POST['save_concepto'] == 'enero'){
                        $this->db->set('colegiatura_1_enero',"colegiatura_1_enero + $pago_save_total", FALSE);
                    }else if($_POST['save_concepto'] == 'febrero'){
                        $this->db->set('colegiatura_2_febrero',"colegiatura_2_febrero + $pago_save_total", FALSE);
                    }else if($_POST['save_concepto'] == 'marzo'){
                        $this->db->set('colegiatura_3_marzo',"colegiatura_3_marzo + $pago_save_total", FALSE);
                    }else if($_POST['save_concepto'] == 'abril'){
                        $this->db->set('colegiatura_4_abril',"colegiatura_4_abril + $pago_save_total", FALSE);
                    }else if($_POST['save_concepto'] == 'mayo'){
                        $this->db->set('colegiatura_5_mayo',"colegiatura_5_mayo + $pago_save_total", FALSE);
                    }else if($_POST['save_concepto'] == 'junio'){
                        $this->db->set('colegiatura_6_junio',"colegiatura_6_junio + $pago_save_total", FALSE);
                    }else if($_POST['save_concepto'] == 'julio'){
                        $this->db->set('colegiatura_7_julio',"colegiatura_7_julio + $pago_save_total", FALSE);
                    }

                    $this->db->where('id_advance_alumno', $_POST['save_idAdvanceAlumno']);
                    $this->db->update('colegiaturas_dinero');

                //----------> DB colegiaturas_dinero $$$

                //----------> DB pagos $$$

                    $x      = random_string('alnum',18);
                    $random = 'C-'.$x;
                    $date   = date("Y-m-d H:m:s");
                    $r_id   = random_string('md5', 4);

                    $data_pagos = array(
                    'id_advance'           => $random,
                    'time'                 => $date,
                    'id_advance_usuario'   => $_POST['save_idUsuario'],
                    'id_advance_alumno'    => $_POST['save_idAdvanceAlumno'],
                    'id_advance_programas' => $_POST['save_idadconcepto'],
                    'pago'                 => $_POST['save_pago']
                    );

                    $this->db->insert('pagos',$data_pagos);

                //----------> DB pagos $$$                
            }

        }else if($_POST['save_interes'] == false){}else{}

        //---------->

            $status = [
                "category"    => "Request",
                "description" => "Update Caja",
                "id advance"  => $random,
                "date"        => $date,
                "http_code"   => 404,
                "code"        => 1001,
                "request"     => true,
                "request_id"  => $r_id
            ];
            
            return    $status;

    }

    function coldineroUpdatedos()
    {   
        /*
        save_fecha: 2021/08/16 12:50:56
        save_idUsuario: AfN9M25VoJmSU8Ps9w2
        save_cobroId: 111
        save_cobroIdadvance: Aqt8CkbGXTBrEU9ayQoM
        save_cobroNombre: jorge francisco rodriguez garibaldo
        save_cobroSerpro: mica media carta  $14.00
        save_cobroIdAdvanceSerpro: brdDtaeySH3Mh31TuUR6
        save_precio_costo: $14.00
        save_val_precio_total: $14.00
        */
            $random = random_string('sha1', 20);
            $date   = date("Y-m-d H:m:s");
            $r_id   = random_string('md5', 4);        
            $x = str_replace("$","",$_POST['save_val_precio_total']);

        $data_pagos = array(
          'id_advance'           => $random,
          'time'                 => $date,
          'id_advance_usuario'   => $_POST['save_idUsuario'],
          'id_advance_alumno'    => $_POST['save_cobroIdadvance'],
          'id_advance_programas' => $_POST['save_cobroIdAdvanceSerpro'],
          'pago'                 => $x
        );

        $this->db->insert('pagos',$data_pagos);   

            $status = [
                "category"    => "Request",
                "description" => "Update Caja",
                "id advance"  => $random,
                "date"        => $date,
                "http_code"   => 404,
                "code"        => 1001,
                "request"     => true,
                "request_id"  => $r_id
            ];
            
            return    $status;
    }

}