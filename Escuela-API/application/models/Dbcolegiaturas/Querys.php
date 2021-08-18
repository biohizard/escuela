<?php if (!defined('BASEPATH')) exit('No direct script access allowed');
    class Querys extends CI_Model{
        //--->
        function allDataRead(){
            /*

            */
            $this->db->select('
            `colegiaturas`.id,
            `colegiaturas`.id_advance,
            `colegiaturas`.time,
            `colegiaturas`.id_advance_alumno,
            `colegiaturas`.cliclo,
            `colegiaturas`.inscripcion,
            `colegiaturas_dinero`.inscripcion AS inscripcion_m,
            `colegiaturas`.seguro,
            `colegiaturas_dinero`.seguro AS seguro_m,
            `colegiaturas`.material,
            `colegiaturas_dinero`.material AS material_m,
            `colegiaturas`.colegiatura12_1_agosto,
            `colegiaturas_dinero`.colegiatura12_1_agosto AS colegiatura12_1_agosto_m,
            `colegiaturas`.colegiatura_9_septiembre,
            `colegiaturas_dinero`.colegiatura_9_septiembre AS colegiatura_9_septiembre_m,
            `colegiaturas`.colegiatura_10_octubre,
            `colegiaturas_dinero`.colegiatura_10_octubre AS colegiatura_10_octubre_m,
            `colegiaturas`.colegiatura_11_noviembre,
            `colegiaturas_dinero`.colegiatura_11_noviembre AS colegiatura_11_noviembre_m,
            `colegiaturas`.colegiatura_12_diciembre,
            `colegiaturas_dinero`.colegiatura_12_diciembre AS colegiatura_12_diciembre_m,
            `colegiaturas`.colegiatura12_2_agosto,
            `colegiaturas_dinero`.colegiatura12_2_agosto AS colegiatura12_2_agosto_m,
            `colegiaturas`.colegiatura_1_enero,
            `colegiaturas_dinero`.colegiatura_1_enero AS colegiatura_1_enero_m,
            `colegiaturas`.colegiatura_2_febrero,
            `colegiaturas_dinero`.colegiatura_2_febrero AS colegiatura_2_febrero_m,
            `colegiaturas`.colegiatura_3_marzo,
            `colegiaturas_dinero`.colegiatura_3_marzo AS colegiatura_3_marzo_m,
            `colegiaturas`.colegiatura_4_abril,
            `colegiaturas_dinero`.colegiatura_4_abril AS colegiatura_4_abril_m,
            `colegiaturas`.colegiatura_5_mayo,
            `colegiaturas_dinero`.colegiatura_5_mayo AS colegiatura_5_mayo_m,
            `colegiaturas`.colegiatura_6_junio,
            `colegiaturas_dinero`.colegiatura_6_junio AS colegiatura_6_junio_m,
            `colegiaturas`.colegiatura_7_julio,
            `colegiaturas_dinero`.colegiatura_7_julio AS colegiatura_7_julio_m
            ');
            $this->db->from ('colegiaturas');
            $this->db->where('`colegiaturas`.id_advance_alumno',$_GET['token']);
            $this->db->join ('colegiaturas_dinero','colegiaturas.id_advance_alumno = colegiaturas_dinero.id_advance_alumno');

                $query = $this->db->get();
                $row = $query->row_array();

                //---A)
                if ($query->num_rows() > 0) {
                    foreach ($query->result() as $row) {
                        $data[]   = $row;
                    }
                } else {
                    $data[] = array(
                        "Time"       => date("Y-m-d H:m:s"),
                        "Message"    => "Error Fecha",
                        "Code"       => 104,
                        "Contorller" => "DbTabsCierre",
                        "class"      => "DbTabsCierre",
                        "fuction"    => "DbTabsCierreRead",
                        "id"         => "user"
                    );
                }

                return  $data;
        }
        //--->

    //--->
    function colegiaturasUpdate()
    {
        /*
        Array ( 
            [save_fecha] => 2021/07/26 11:02:33 
            [save_user] => ZmGhf5sPsiSoMnXwFBpp 
            [save_alumno] => zw6ZVP3ofIRJbNY9jaXy 
            [save_concepto] => colegiatura SEPTIEMBRE 
            [save_precio] => $ 1400.00 
            [save_descuento] => 10% 
            [save_interes] => 0% 
            [save_total] => $1260 

        1ª ½ AGOSTO	
        SEPTIEMBRE	
        OCTUBRE	
        NOVIEMBRE	
        DICIEMBRE	
        2ª ½ DE AGOSTO	
        ENERO	
        FEBRERO	
        MARZO	
        ABRIL	
        MAYO            
        )        
        */
        $concepto = explode(" ",$_POST['save_concepto']);
        
        $random  = random_string('alnum', 20);
        $date    = date("Y-m-d");
        $r_id    = random_string('md5', 4);

        $concepto = explode(" ",$_POST['save_concepto']);
        
        if($concepto[2] == "SEPTIEMBRE"){$this->db->set('colegiatura_9',true,TRUE);}
        if($concepto[2] == "OCTUBRE")   {$this->db->set('colegiatura_10',true,TRUE);}
        if($concepto[2] == "NOVIEMBRE") {$this->db->set('colegiatura_11',true,TRUE);}
        if($concepto[2] == "DICIEMBRE") {$this->db->set('colegiatura_12',true,TRUE);}

        if($concepto[2] == "ENERO")   {$this->db->set('colegiatura_1',true,TRUE);}
        if($concepto[2] == "FEBRERO") {$this->db->set('colegiatura_2',true,TRUE);}
        if($concepto[2] == "MARZO")   {$this->db->set('colegiatura_3',true,TRUE);}
        if($concepto[2] == "ABRIL")   {$this->db->set('colegiatura_4',true,TRUE);}
        if($concepto[2] == "MAYO")    {$this->db->set('colegiatura_5',true,TRUE);}        
        
        if($_POST['save_concepto'] == "seguro")    {$this->db->set('seguro',true,TRUE);}
        if($_POST['save_concepto'] == "material")  {$this->db->set('material',true,TRUE);}

        
        $this->db->where('`colegiaturas`.id_advance_alumno',$_POST['save_alumno']);
        $this->db->update('colegiaturas');        

            $status[] = array(
                "Ok"      => 101,
                "Cierres" => "Ok",
                "Saldo"   => "Ok",
                "Entregas"=> "Ok",
                "Cierres" => "Ok",
                "Pagos"   => "Ok",
                "demo"    => ""
            );
            
            return    $status;

    }
    //--->        
    }