<?php if (!defined('BASEPATH')) exit('No direct script access allowed');
class Querys extends CI_Model
{
    //--->
    function onlyonePrimariaRead()
    {     
        $this->db->select('
            `alumnoprimaria`.id,
            `alumnoprimaria`.id_advance,
            `alumnoprimaria`.time,
            `alumnoprimaria`.nombre,
            `alumnoprimaria`.paterno,
            `alumnoprimaria`.materno,
            `alumnoprimaria`.fecha,
            `alumnoprimaria`.edad,
            `alumnoprimaria`.curp,
            `alumnoprimaria`.sexo,
            `alumnoprimaria`.estatura,
            `alumnoprimaria`.peso,
            `alumnoprimaria`.sangre,
            `alumnoprimaria`.telefono,
            `alumnoprimaria`.recado,
            `alumnoprimaria`.direccion,
            `alumnoprimaria`.cp,
            `alumnoprimaria`.tutor,
            `alumnoprimaria`.parentes,
            `alumnoprimaria`.tutocurp,
            `inscripcion`.maestra,
            `inscripcion`.grado,
            `inscripcion`.exalumno,
            `inscripcion`.tipopago,
            `inscripcion`.annoskinder,
            `inscripcion`.lectoescritura,
            `inscripcion`.lectoescriturapor,
            `inscripcion`.problema,
            `inscripcion`.procedencia,
            `inscripcion`.maestraausubel,
            `configgrupos`.salon,
            `configgrupos`.grupos,
            `configgrupos`.nivel,
            `configniveles`.nivel AS niveltxt
          ');
        $this->db->from  ('alumnoprimaria');
        $this->db->where ('`alumnoprimaria`.id_advance',$_GET['token']);
        
          $this->db->join    ('inscripcion'  , 'inscripcion.id_advance_alumno = alumnoprimaria.id_advance');
          $this->db->join    ('configgrupos' , 'configgrupos.id_advance       = inscripcion.grado');
          $this->db->join    ('configniveles', 'configgrupos.nivel            = configniveles.id_advance');
          $this->db->order_by('`alumnoprimaria`.id', 'ASC');

        $query = $this->db->get();
        $row = $query->row_array();

        //---A)
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $data[] = $row;
            }
        } else {
            $date   = date("Y-m-d H:m:s");
            $data[] = array(
                "Time"       => $date,
                "Message"    => "Error Alumno",
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
    function searchRead()
    {

        $term          = strtolower($_GET['term']);
        $x_sin_numeros = preg_split('/[0-9]+/',$term);
        $x_sin_letras  = preg_split('/[A-Za-z]+/',$term);

        if($x_sin_numeros[0] == "kr"){

            $this->db->select('
            `alumnokinder`.nombre,
            `alumnokinder`.paterno,
            `alumnokinder`.materno,
            `alumnokinder`.time,
            `alumnokinder`.id,
            `inscripcion`.exalumno,
            `inscripcion`.id_advance_alumno,
            `inscripcion`.tipopago
            ');            
            $this->db->from('alumnokinder');
            $this->db->like('alumnokinder.id',$x_sin_letras[1]);
            $this->db->join('inscripcion', 'inscripcion.id_advance_alumno = alumnokinder.id_advance');            

        }else if($x_sin_numeros[0] == "pr"){
            
            $this->db->select('
            `alumnoprimaria`.nombre,
            `alumnoprimaria`.paterno,
            `alumnoprimaria`.materno,
            `alumnoprimaria`.time,
            `alumnoprimaria`.id,
            `inscripcion`.exalumno,
            `inscripcion`.id_advance_alumno,
            `inscripcion`.tipopago
            ');            
            $this->db->from('alumnoprimaria');
            $this->db->like('alumnoprimaria.id',$x_sin_letras[1]);
            $this->db->join('inscripcion', 'inscripcion.id_advance_alumno = alumnoprimaria.id_advance');

        }

            $query = $this->db->get();
            $row = $query->row_array();

            //---A)
            if ($query->num_rows() > 0) {
                foreach ($query->result() as $row) {$data[] = $row;}
            } else {
                $date   = date("Y-m-d H:m:s");
                $data[] = array(
                    "Time"       => $date,
                    "Message"    => "Error Alumno",
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
    function onlypreciosRead()
    {
      $this->db->select('
      `alumno`.id,
      `alumno`.id_advance,
      `alumno`.nombre,
      `alumno`.paterno
      ');        
      $this->db->from('alumno');
      $this->db->where('`alumno`.id_advance', $_GET['token']);
      $this->db->join('inscripcion', 'inscripcion.id_advance_alumno = alumno.id_advance');
      $this->db->join('configgrupos', 'inscripcion.grado = configgrupos.id_advance');
      $this->db->order_by('`alumno`.id', 'ASC');

        $query = $this->db->get();
        $row = $query->row_array();

        //---A)
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $data[] = $row;
            }
        } else {
            $date   = date("Y-m-d H:m:s");
            $data[] = array(
                "Time"       => $date,
                "Message"    => "Error Alumno",
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
    function alumnoCreateKinder()
    {
        /*
            FICHA DE INSCRIPCION 
                save_nombremaestra: Emilia Mata INS
                save_exalumno: si
                save_gradocursar: p-0adhSVX0b9MNxkLxwf
                save_tipopago: efectivo            
            DATOS DEL ALUMNO 
                save_nombrealumno: jorge francisco
                save_apaternoalumno: rodriguez
                save_amaternoalumno: garibaldo
                save_curp: curpdemo
                save_sexo: masculino
                save_direccion: c 26 n 84
                save_cp: 57210

                save_fechanacimiento: 2015-01-31
                save_edad: 6
                save_estatura: 135
                save_peso: 35
                save_tiposanguineo: o+
                save_telefono: (551) 506-7867
                save_recados: 00000000
            PARA ALUMNOS DE 1ER GRADO
                save_annoskinder: 3
                save_maestraausubel: Driss Villa curso
                save_procedencia: Ausubel
                save_lectoescritura: no
                save_lectoescriturapor: lee y escribe
                save_problema: no             
            DATOS DEL TUTOR
                save_tutor: pepe pecas
                save_parentesco: papa
                save_tutocurp: curpdemo
        */

        $random = random_string('sha1', 20);
        $date   = date("Y-m-d H:m:s");
        $r_id   = random_string('md5', 4);

        $data_alumno = array(
            'id_advance'        => $random,
            'time'              => $date,
            'nombre'            => $_POST['save_nombrealumno'],
            'paterno'           => $_POST['save_apaternoalumno'],
            'materno'           => $_POST['save_amaternoalumno'],
            'fecha'             => $_POST['save_fechanacimiento'],
            'edad'              => $_POST['save_edad'],
            'curp'              => $_POST['save_curp'],
            'sexo'              => $_POST['save_sexo'],
            'estatura'          => $_POST['save_estatura'],
            'peso'              => $_POST['save_peso'],
            'sangre'            => $_POST['save_tiposanguineo'],
            'telefono'          => $_POST['save_telefono'],
            'recado'            => $_POST['save_recados'],
            'direccion'         => $_POST['save_direccion'],
            'cp'                => $_POST['save_cp'],
            'tutor'             => $_POST['save_tutor'],
            'parentes'          => $_POST['save_parentesco'],
            'tutocurp'          => $_POST['save_tutocurp']
        );
         
        $data_inscripcion = array(
            'id_advance'        => random_string('sha1', 20),
            'time'              => $date,
            'id_advance_alumno' => $random,
            /*FICHA DE INSCRIPCION*/
            //maestra inscribe
            'maestra'           => $_POST['save_maestraausubel'],
            'exalumno'          => $_POST['save_exalumno'],
            'grado'             => $_POST['save_gradocursar'],
            'tipopago'          => $_POST['save_tipopago'],

            /*PARA ALUMNOS DE 1ER GRADO*/
            'annoskinder'       => $_POST['save_annoskinder'],
            //SI CURSO EN AUSUBEL NOMBRE DE LA MAESTRA
            'maestraausubel'    => $_POST['save_maestraausubel'],
            'procedencia'       => $_POST['save_procedencia'],
            'lectoescritura'    => $_POST['save_lectoescritura'],
            'lectoescriturapor' => $_POST['save_lectoescriturapor'],
            'problema'          => $_POST['save_problema']
        );
        /*colegiaturas_dinero*/
        $data_colegiaturas = array(
            'id_advance'               => random_string('sha1', 20),
            'time'                     => $date,
            'id_advance_alumno'        => $random,
            'cliclo'                   => 0,
            'inscripcion'              => 0,
            'seguro'                   => 0,
            'material'                 => 0,
            'colegiatura12_1_agosto'   => 0,
            'colegiatura_9_septiembre' => 0,
            'colegiatura_10_octubre'   => 0,
            'colegiatura_11_noviembre' => 0,
            'colegiatura_12_diciembre' => 0,
            'colegiatura12_2_agosto'   => 0,
            'colegiatura_1_enero'      => 0,
            'colegiatura_2_febrero'    => 0,
            'colegiatura_3_marzo'      => 0,
            'colegiatura_4_abril'      => 0,
            'colegiatura_5_mayo'       => 0,
            'colegiatura_6_junio'      => 0,
            'colegiatura_7_julio'      => 0
        );
        /*colegiaturas*/
        $data_colegiaturas_dinero = array(
            'id_advance'               => random_string('sha1', 20),
            'time'                     => $date,
            'id_advance_alumno'        => $random,
            'cliclo'                   => 0,
            'inscripcion'              => 0,
            'seguro'                   => 0,
            'material'                 => 0,
            'colegiatura12_1_agosto'   => 0,
            'colegiatura_9_septiembre' => 0,
            'colegiatura_10_octubre'   => 0,
            'colegiatura_11_noviembre' => 0,
            'colegiatura_12_diciembre' => 0,
            'colegiatura12_2_agosto'   => 0,
            'colegiatura_1_enero'      => 0,
            'colegiatura_2_febrero'    => 0,
            'colegiatura_3_marzo'      => 0,
            'colegiatura_4_abril'      => 0,
            'colegiatura_5_mayo'       => 0,
            'colegiatura_6_junio'      => 0,
            'colegiatura_7_julio'      => 0
        );

        $this->db->insert('alumnokinder',$data_alumno);
        $this->db->insert('inscripcion',$data_inscripcion);
        $this->db->insert('colegiaturas',$data_colegiaturas);
        $this->db->insert('colegiaturas_dinero',$data_colegiaturas_dinero);

        $status = [
            "category"    => "Request",
            "description" => "Create Alumno New",
            "id advance"  => $random,
            "date"        => $date,
            "http_code"   => 404,
            "code"        => 1001,
            "request"     => true,
            "request_id"  => $r_id
        ];

        return    $status;  
    }
    //--->

    //--->
    function alumnoCreatePrimaria()
    {
        /*
            FICHA DE INSCRIPCION 
                save_nombremaestra: Emilia Mata INS
                save_exalumno: si
                save_gradocursar: p-0adhSVX0b9MNxkLxwf
                save_tipopago: efectivo            
            DATOS DEL ALUMNO 
                save_nombrealumno: jorge francisco
                save_apaternoalumno: rodriguez
                save_amaternoalumno: garibaldo
                save_curp: curpdemo
                save_sexo: masculino
                save_direccion: c 26 n 84
                save_cp: 57210

                save_fechanacimiento: 2015-01-31
                save_edad: 6
                save_estatura: 135
                save_peso: 35
                save_tiposanguineo: o+
                save_telefono: (551) 506-7867
                save_recados: 00000000
            PARA ALUMNOS DE 1ER GRADO
                save_annoskinder: 3
                save_maestraausubel: Driss Villa curso
                save_procedencia: Ausubel
                save_lectoescritura: no
                save_lectoescriturapor: lee y escribe
                save_problema: no             
            DATOS DEL TUTOR
                save_tutor: pepe pecas
                save_parentesco: papa
                save_tutocurp: curpdemo
        */

        $random = random_string('sha1', 20);
        $date   = date("Y-m-d H:m:s");
        $r_id   = random_string('md5', 4);

        $data_alumno = array(
            'id_advance'        => $random,
            'time'              => $date,
            'nombre'            => $_POST['save_nombrealumno'],
            'paterno'           => $_POST['save_apaternoalumno'],
            'materno'           => $_POST['save_amaternoalumno'],
            'fecha'             => $_POST['save_fechanacimiento'],
            'edad'              => $_POST['save_edad'],
            'curp'              => $_POST['save_curp'],
            'sexo'              => $_POST['save_sexo'],
            'estatura'          => $_POST['save_estatura'],
            'peso'              => $_POST['save_peso'],
            'sangre'            => $_POST['save_tiposanguineo'],
            'telefono'          => $_POST['save_telefono'],
            'recado'            => $_POST['save_recados'],
            'direccion'         => $_POST['save_direccion'],
            'cp'                => $_POST['save_cp'],
            'tutor'             => $_POST['save_tutor'],
            'parentes'          => $_POST['save_parentesco'],
            'tutocurp'          => $_POST['save_tutocurp']
        );
         
        $data_inscripcion = array(
            'id_advance'        => random_string('sha1', 20),
            'time'              => $date,
            'id_advance_alumno' => $random,
            /*FICHA DE INSCRIPCION*/
            //maestra inscribe
            'maestra'           => $_POST['save_maestraausubel'],
            'exalumno'          => $_POST['save_exalumno'],
            'grado'             => $_POST['save_gradocursar'],
            'tipopago'          => $_POST['save_tipopago'],

            /*PARA ALUMNOS DE 1ER GRADO*/
            'annoskinder'       => $_POST['save_annoskinder'],
            //SI CURSO EN AUSUBEL NOMBRE DE LA MAESTRA
            'maestraausubel'    => $_POST['save_maestraausubel'],
            'procedencia'       => $_POST['save_procedencia'],
            'lectoescritura'    => $_POST['save_lectoescritura'],
            'lectoescriturapor' => $_POST['save_lectoescriturapor'],
            'problema'          => $_POST['save_problema']
        );
        /*colegiaturas_dinero*/
        $data_colegiaturas = array(
            'id_advance'               => random_string('sha1', 20),
            'time'                     => $date,
            'id_advance_alumno'        => $random,
            'cliclo'                   => 0,
            'inscripcion'              => 0,
            'seguro'                   => 0,
            'material'                 => 0,
            'colegiatura12_1_agosto'   => 0,
            'colegiatura_9_septiembre' => 0,
            'colegiatura_10_octubre'   => 0,
            'colegiatura_11_noviembre' => 0,
            'colegiatura_12_diciembre' => 0,
            'colegiatura12_2_agosto'   => 0,
            'colegiatura_1_enero'      => 0,
            'colegiatura_2_febrero'    => 0,
            'colegiatura_3_marzo'      => 0,
            'colegiatura_4_abril'      => 0,
            'colegiatura_5_mayo'       => 0,
            'colegiatura_6_junio'      => 0,
            'colegiatura_7_julio'      => 0
        );
        /*colegiaturas*/
        $data_colegiaturas_dinero = array(
            'id_advance'               => random_string('sha1', 20),
            'time'                     => $date,
            'id_advance_alumno'        => $random,
            'cliclo'                   => 0,
            'inscripcion'              => 0,
            'seguro'                   => 0,
            'material'                 => 0,
            'colegiatura12_1_agosto'   => 0,
            'colegiatura_9_septiembre' => 0,
            'colegiatura_10_octubre'   => 0,
            'colegiatura_11_noviembre' => 0,
            'colegiatura_12_diciembre' => 0,
            'colegiatura12_2_agosto'   => 0,
            'colegiatura_1_enero'      => 0,
            'colegiatura_2_febrero'    => 0,
            'colegiatura_3_marzo'      => 0,
            'colegiatura_4_abril'      => 0,
            'colegiatura_5_mayo'       => 0,
            'colegiatura_6_junio'      => 0,
            'colegiatura_7_julio'      => 0
        );

        $this->db->insert('alumnoprimaria',$data_alumno);
        $this->db->insert('inscripcion',$data_inscripcion);
        $this->db->insert('colegiaturas',$data_colegiaturas);
        $this->db->insert('colegiaturas_dinero',$data_colegiaturas_dinero);

        $status = [
            "category"    => "Request",
            "description" => "Create Alumno New",
            "id advance"  => $random,
            "date"        => $date,
            "http_code"   => 404,
            "code"        => 1001,
            "request"     => true,
            "request_id"  => $r_id
        ];

        return    $status;  
    }
    //---> 
    
    
    //--->
    function alumnoPrimariaUpdate()
    {
      
        $random = random_string('sha1', 20);
        $date   = date("Y-m-d H:m:s");
        $r_id   = random_string('md5', 4);

        $data_alumno = array(
            'time'              => $date,
            'nombre'            => $_POST['save_nombrealumno'],
            'paterno'           => $_POST['save_apaternoalumno'],
            'materno'           => $_POST['save_amaternoalumno'],
            'fecha'             => $_POST['save_fechanacimiento'],
            'edad'              => $_POST['save_edad'],
            'curp'              => $_POST['save_curp'],
            'sexo'              => $_POST['save_sexo'],
            'estatura'          => $_POST['save_estatura'],
            'peso'              => $_POST['save_peso'],
            'sangre'            => $_POST['save_tiposanguineo'],
            'telefono'          => $_POST['save_telefono'],
            'recado'            => $_POST['save_recados'],
            'direccion'         => $_POST['save_direccion'],
            'cp'                => $_POST['save_cp'],
            'tutor'             => $_POST['save_tutor'],
            'parentes'          => $_POST['save_parentesco'],
            'tutocurp'          => $_POST['save_tutocurp']
        );         
        $data_inscripcion = array(
            'time'              => $date,
            /*FICHA DE INSCRIPCION*/
            //maestra inscribe
            'maestra'           => $_POST['save_maestraausubel'],
            'exalumno'          => $_POST['save_exalumno'],
            'grado'             => $_POST['save_gradocursar'],
            'tipopago'          => $_POST['save_tipopago'],

            /*PARA ALUMNOS DE 1ER GRADO*/
            'annoskinder'       => $_POST['save_annoskinder'],
            //SI CURSO EN AUSUBEL NOMBRE DE LA MAESTRA
            'maestraausubel'    => $_POST['save_maestraausubel'],
            'procedencia'       => $_POST['save_procedencia'],
            'lectoescritura'    => $_POST['save_lectoescritura'],
            'lectoescriturapor' => $_POST['save_lectoescriturapor'],
            'problema'          => $_POST['save_problema']
        );

        $token = $_POST['save_token'];
        $this->db->where('id_advance',$token);
        $this->db->update('alumnoprimaria',$data_alumno);
        /*
        $this->db->insert('alumno',$data_alumno);
        $this->db->insert('inscripcion',$data_inscripcion);
        */


        $status = [
            "category"    => "Request",
            "description" => "Create Alumno New",
            "id advance"  => $random,
            "date"        => $date,
            "http_code"   => 404,
            "code"        => 1001,
            "request"     => true,
            "request_id"  => $r_id
        ];

        return    $status;  
    }
    //---> 
}    