<?php if (!defined('BASEPATH')) exit('No direct script access allowed');
    class Querys extends CI_Model{
        //--->
        function allDataRead(){
            /*
                    SELECT
                `       colegiaturas`.id_advance_alumno,
                `       colegiaturas`.id_advance,            
                `       colegiaturas`.colegiatura_7_julio,
                `       colegiaturas`.colegiatura_6_junio,
                `       colegiaturas`.colegiatura_5_mayo,
                `       colegiaturas`.colegiatura_4_abril,
                `       colegiaturas`.colegiatura_3_marzo,
                `       colegiaturas`.colegiatura_2_febrero,
                `       colegiaturas`.colegiatura_1_enero,
                `       colegiaturas`.colegiatura12_2_agosto,
                `       colegiaturas`.colegiatura_12_diciembre,
                `       colegiaturas`.colegiatura_11_noviembre,
                `       colegiaturas`.colegiatura_10_octubre,
                `       colegiaturas`.colegiatura_9_septiembre,
                `       colegiaturas`.colegiatura12_1_agosto,
                `       colegiaturas`.material,
                `       colegiaturas`.seguro,
                `       colegiaturas`.inscripcion,


                    ` colegiaturas_costo`.inscripcion,
                    ` colegiaturas_costo`.seguro,
                    ` colegiaturas_costo`.material,
                    ` colegiaturas_costo`.colegiatura12_1_agosto,
                    ` colegiaturas_costo`.colegiatura_9_septiembre,
                    ` colegiaturas_costo`.colegiatura_10_octubre,
                    ` colegiaturas_costo`.colegiatura_11_noviembre,
                    ` colegiaturas_costo`.colegiatura_12_diciembre,
                    ` colegiaturas_costo`.colegiatura12_2_agosto,
                    ` colegiaturas_costo`.colegiatura_1_enero,
                    ` colegiaturas_costo`.colegiatura_2_febrero,
                    ` colegiaturas_costo`.colegiatura_3_marzo,
                    ` colegiaturas_costo`.colegiatura_4_abril,
                    ` colegiaturas_costo`.colegiatura_5_mayo,
                    ` colegiaturas_costo`.colegiatura_6_junio,
                    ` colegiaturas_costo`.colegiatura_7_julio,

                        `colegiaturas_dinero`.inscripcion,
                        `colegiaturas_dinero`.seguro,
                        `colegiaturas_dinero`.material,
                        `colegiaturas_dinero`.colegiatura12_1_agosto,
                        `colegiaturas_dinero`.colegiatura_9_septiembre,
                        `colegiaturas_dinero`.colegiatura_10_octubre,
                        `colegiaturas_dinero`.colegiatura_11_noviembre,
                        `colegiaturas_dinero`.colegiatura_12_diciembre,
                        `colegiaturas_dinero`.colegiatura12_2_agosto,
                        `colegiaturas_dinero`.colegiatura_1_enero,
                        `colegiaturas_dinero`.colegiatura_2_febrero,
                        `colegiaturas_dinero`.colegiatura_3_marzo,
                        `colegiaturas_dinero`.colegiatura_4_abril,
                        `colegiaturas_dinero`.colegiatura_5_mayo,
                        `colegiaturas_dinero`.colegiatura_6_junio,
                        `colegiaturas_dinero`.colegiatura_7_julio
                        FROM
                        colegiaturas
                        INNER JOIN colegiaturas_costo ON colegiaturas.id_advance_alumno = colegiaturas_costo.id_advance_alumno
                        INNER JOIN colegiaturas_dinero ON colegiaturas.id_advance_alumno = colegiaturas_dinero.id_advance_alumno
                        WHERE
                        colegiaturas.id_advance_alumno = 'ebb22ab34bc23dba132a'

            */
            $this->db->select('
                `colegiaturas`.id_advance               AS col_id_advance,
                `colegiaturas`.id_advance_alumno        AS col_id_advance_alumno,

                `colegiaturas`.material                 AS col_material,
                `colegiaturas`.seguro                   AS col_seguro,
                `colegiaturas`.inscripcion              AS col_inscripcion,
                `colegiaturas`.colegiatura12_1_agosto   AS col_1agosto,
                `colegiaturas`.colegiatura_9_septiembre AS col_septiembre,
                `colegiaturas`.colegiatura_10_octubre   AS col_octubre,
                `colegiaturas`.colegiatura_11_noviembre AS col_noviembre,
                `colegiaturas`.colegiatura_12_diciembre AS col_diciembre,
                `colegiaturas`.colegiatura12_2_agosto   AS col_2agosto,
                `colegiaturas`.colegiatura_1_enero      AS col_enero,
                `colegiaturas`.colegiatura_2_febrero    AS col_febrero,
                `colegiaturas`.colegiatura_3_marzo      AS col_marzo,
                `colegiaturas`.colegiatura_4_abril      AS col_abril,
                `colegiaturas`.colegiatura_5_mayo       AS col_mayo,
                `colegiaturas`.colegiatura_6_junio      AS col_junio,
                `colegiaturas`.colegiatura_7_julio      AS col_julio,

                `colegiaturas_costo`.material                   AS cos_material,
                `colegiaturas_costo`.seguro                     AS cos_seguro,
                `colegiaturas_costo`.inscripcion                AS cos_inscripcion,
                `colegiaturas_costo`.colegiatura12_1_agosto     AS cos_1agosto,
                `colegiaturas_costo`.colegiatura_9_septiembre   AS cos_septiembre,
                `colegiaturas_costo`.colegiatura_10_octubre     AS cos_octubre,
                `colegiaturas_costo`.colegiatura_11_noviembre   AS cos_noviembre,
                `colegiaturas_costo`.colegiatura_12_diciembre   AS cos_diciembre,
                `colegiaturas_costo`.colegiatura12_2_agosto     AS cos_2agosto,
                `colegiaturas_costo`.colegiatura_1_enero        AS cos_enero,
                `colegiaturas_costo`.colegiatura_2_febrero      AS cos_febrero,
                `colegiaturas_costo`.colegiatura_3_marzo        AS cos_marzo,
                `colegiaturas_costo`.colegiatura_4_abril        AS cos_abril,
                `colegiaturas_costo`.colegiatura_5_mayo         AS cos_mayo,
                `colegiaturas_costo`.colegiatura_6_junio        AS cos_junio,
                `colegiaturas_costo`.colegiatura_7_julio        AS cos_julio,

                `colegiaturas_dinero`.material                 AS dinero_material,
                `colegiaturas_dinero`.seguro                   AS dinero_seguro,
                `colegiaturas_dinero`.inscripcion              AS dinero_inscripcion,
                `colegiaturas_dinero`.colegiatura12_1_agosto   AS dinero_1agosto,
                `colegiaturas_dinero`.colegiatura12_2_agosto   AS dinero_2agosto,
                `colegiaturas_dinero`.colegiatura_9_septiembre AS dinero_septiembre,
                `colegiaturas_dinero`.colegiatura_10_octubre   AS dinero_octubre,
                `colegiaturas_dinero`.colegiatura_11_noviembre AS dinero_noviembre,
                `colegiaturas_dinero`.colegiatura_12_diciembre AS dinero_diciembre,
                `colegiaturas_dinero`.colegiatura12_2_agosto   AS dinero_agosto,
                `colegiaturas_dinero`.colegiatura_1_enero      AS dinero_enero,
                `colegiaturas_dinero`.colegiatura_2_febrero    AS dinero_febrero,
                `colegiaturas_dinero`.colegiatura_3_marzo      AS dinero_marzo,
                `colegiaturas_dinero`.colegiatura_4_abril      AS dinero_abril,
                `colegiaturas_dinero`.colegiatura_5_mayo       AS dinero_mayo,
                `colegiaturas_dinero`.colegiatura_6_junio      AS dinero_junio,
                `colegiaturas_dinero`.colegiatura_7_julio      AS dinero_julio,
                `beca`.`update`                               AS beca_update,
                `beca`.`cliclo`                               AS beca_ciclo,
                `beca`.`beca`                                 AS beca_beca,
                `beca`.`saldoafavor`                          AS beca_saldoafavor
            ');
            $this->db->from ('colegiaturas');
            $this->db->where('`colegiaturas`.id_advance_alumno',$_GET['token']);
            $this->db->join ('colegiaturas_dinero','colegiaturas.id_advance_alumno = colegiaturas_dinero.id_advance_alumno');
            $this->db->join ('colegiaturas_costo' ,'colegiaturas.id_advance_alumno = colegiaturas_costo.id_advance_alumno');
            $this->db->join ('beca'               ,'colegiaturas.id_advance_alumno = beca.id_advance_alumno');


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