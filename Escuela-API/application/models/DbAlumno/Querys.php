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
            `configniveles`.nivel AS niveltxt,
            `beca`.beca
          ');
        $this->db->from  ('alumnoprimaria');
        $this->db->where ('`alumnoprimaria`.id_advance',$_GET['token']);
        
          $this->db->join    ('inscripcion'  , 'inscripcion.id_advance_alumno = alumnoprimaria.id_advance');
          $this->db->join    ('configgrupos' , 'configgrupos.id_advance       = inscripcion.grado');
          $this->db->join    ('configniveles', 'configgrupos.nivel            = configniveles.id_advance');
          $this->db->join    ('beca'         , 'beca.id_advance_alumno        = alumnoprimaria.id_advance');
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
    function onlyoneKinderRead()
    {
        $this->db->select('
            `alumnokinder`.id,
            `alumnokinder`.id_advance,
            `alumnokinder`.time,
            `alumnokinder`.nombre,
            `alumnokinder`.paterno,
            `alumnokinder`.materno,
            `alumnokinder`.fecha,
            `alumnokinder`.edad,
            `alumnokinder`.curp,
            `alumnokinder`.sexo,
            `alumnokinder`.estatura,
            `alumnokinder`.peso,
            `alumnokinder`.sangre,
            `alumnokinder`.telefono,
            `alumnokinder`.recado,
            `alumnokinder`.direccion,
            `alumnokinder`.cp,
            `alumnokinder`.tutor,
            `alumnokinder`.parentes,
            `alumnokinder`.tutocurp,
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
        $this->db->from  ('alumnokinder');
        $this->db->where ('`alumnokinder`.id_advance',$_GET['token']);
        
          $this->db->join    ('inscripcion'  , 'inscripcion.id_advance_alumno = alumnokinder.id_advance');
          $this->db->join    ('configgrupos' , 'configgrupos.id_advance       = inscripcion.grado');
          $this->db->join    ('configniveles', 'configgrupos.nivel            = configniveles.id_advance');
          $this->db->order_by('`alumnokinder`.id', 'ASC');

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

        if($x_sin_numeros[0] == "jr"){

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
            'id'                => $_POST['save_id'],
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
            'update'              => true,
                        'colegiatura12_1_agosto'    => 0,
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
            'update'              => true,
                        'colegiatura12_1_agosto'    => 0,
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
        $data_colegiaturas_costo = array(
            'id_advance'               => random_string('sha1', 20),
            'time'                     => $date,
            'id_advance_alumno'        => $random,
            'cliclo'                   => 0,
            'inscripcion'              => 0,
            'seguro'                   => 0,
            'material'                 => 0,
            'update'              => true,
                        'colegiatura12_1_agosto'    => 0,
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
        $this->db->insert('colegiaturas_costo',$data_colegiaturas_dinero );

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
            'id'                => $_POST['save_id'],
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
            'update'              => true,
                        'colegiatura12_1_agosto'    => 0,
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
            'update'              => true,
                        'colegiatura12_1_agosto'    => 0,
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
        /*
        id
        id_advance
        time
        id_advance_alumno
        cliclo
        */
        $data_colegiaturas_costo = array(
            'id_advance'               => random_string('sha1', 20),
            'time'                     => $date,
            'id_advance_alumno'        => $random,
            'cliclo'                   => 0,
            'inscripcion'              => 0,
            'seguro'                   => 0,
            'material'                 => 0,
            'update'              => true,
                        'colegiatura12_1_agosto'    => 0,
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
        $this->db->insert('colegiaturas_costo',$data_colegiaturas_dinero );


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

            $data_alumno      = array(
                'id'                => $_POST['save_id'],
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
            /*
                1ª De Agosto     agosto      08 
                Septiembre       septiembre  09 
                Octubre          octubre     10
                Noviembre        noviembre   11
                Diciembre        diciembre   12
                2ª De Agosto     enero        01
                Enero            enero        01
                Febrero          febrero      02
                Marzo            marzo        03
                Abril            abril        04
                Mayo             mayo         05
                Junio            junio        06
                Julio            julio        07

            colegiatura12_1_agosto
            colegiatura_9_septiembre
            colegiatura_10_octubre
            colegiatura_11_noviembre
            colegiatura_12_diciembre
            colegiatura12_2_agosto
            colegiatura_1_enero
            colegiatura_2_febrero
            colegiatura_3_marzo
            colegiatura_4_abril
            colegiatura_5_mayo
            colegiatura_6_junio
            colegiatura_7_julio
            */
            $mes = date("m");
            switch ($mes) {
                //colegiatura12_1_agosto
                case 8:
                    $data_beca        = array(
                        'beca'                     => $_POST['save_beca'],
                        'saldoafavor'              => '175',
                        'update'              => true,
                        'colegiatura12_1_agosto'    => true
                    );
                    break;
                //colegiatura_9_septiembre
                case 9:
                    $data_beca        = array(
                        'beca'                     => $_POST['save_beca'],
                        'saldoafavor'              => '525',
                        'update'              => true,
                        'colegiatura12_1_agosto'    => true,
                        'colegiatura_9_septiembre' => true
                    );
                    break;
                //colegiatura_10_octubre
                case 10:
                    $data_beca        = array(
                        'beca'                     => $_POST['save_beca'],
                        'saldoafavor'              => '875',
                        'update'              => true,
                        'colegiatura12_1_agosto'    => true,
                        'colegiatura_9_septiembre' => true,
                        'colegiatura_10_octubre'   => true
                    );
                    break;
                //colegiatura_11_noviembre
                case 11:
                    $data_beca        = array(
                        'beca'                     => $_POST['save_beca'],
                        'saldoafavor'              => '1225',
                        'update'              => true,
                        'colegiatura12_1_agosto'    => true,
                        'colegiatura_9_septiembre' => true,
                        'colegiatura_10_octubre'   => true,
                        'colegiatura_11_noviembre' => true
                    );
                    break;
                //colegiatura_12_diciembre
                case 12:
                    $data_beca        = array(
                        'beca'                     => $_POST['save_beca'],
                        'saldoafavor'              => '1575',
                        'update'              => true,
                        'colegiatura12_1_agosto'    => true,
                        'colegiatura_9_septiembre' => true,
                        'colegiatura_10_octubre'   => true,
                        'colegiatura_11_noviembre' => true,
                        'colegiatura_12_diciembre' => true
                    );
                    break;
                //colegiatura12_2_agosto
                //colegiatura_1_enero
                case 1:
                    //saldo a favor * 7
                    $data_beca        = array(
                        'beca'                     => $_POST['save_beca'],
                        'saldoafavor'              => '2100',
                        'update'              => true,
                        'colegiatura12_1_agosto'    => true,
                        'colegiatura_9_septiembre' => true,
                        'colegiatura_10_octubre'   => true,
                        'colegiatura_11_noviembre' => true,
                        'colegiatura_12_diciembre' => true,
                        'colegiatura12_2_agosto'   => true,
                        'colegiatura_1_enero'      => true
                    );
                    break;
                //colegiatura_2_febrero
                case 2:
                    $data_beca        = array(
                        'beca'                     => $_POST['save_beca'],
                        'saldoafavor'              => '2450',
                        'update'              => true,
                        'colegiatura12_1_agosto'    => true,
                        'colegiatura_9_septiembre' => true,
                        'colegiatura_10_octubre'   => true,
                        'colegiatura_11_noviembre' => true,
                        'colegiatura_12_diciembre' => true,
                        'colegiatura12_2_agosto'   => true,
                        'colegiatura_1_enero'      => true,
                        'colegiatura_2_febrero'    => true
                    );
                    break;
                //colegiatura_3_marzo
                case 3:
                    $data_beca        = array(
                        'beca'                     => $_POST['save_beca'],
                        'saldoafavor'              => '2800',
                        'update'              => true,
                        'colegiatura12_1_agosto'    => true,
                        'colegiatura_9_septiembre' => true,
                        'colegiatura_10_octubre'   => true,
                        'colegiatura_11_noviembre' => true,
                        'colegiatura_12_diciembre' => true,
                        'colegiatura12_2_agosto'   => true,
                        'colegiatura_1_enero'      => true,
                        'colegiatura_2_febrero'    => true,
                        'colegiatura_3_marzo'      => true
                    );
                    break;
                //colegiatura_4_abril
                case 4:
                    $data_beca        = array(
                        'beca'                     => $_POST['save_beca'],
                        'saldoafavor'              => '3150',
                        'update'              => true,
                        'colegiatura12_1_agosto'    => true,
                        'colegiatura_9_septiembre' => true,
                        'colegiatura_10_octubre'   => true,
                        'colegiatura_11_noviembre' => true,
                        'colegiatura_12_diciembre' => true,
                        'colegiatura12_2_agosto'   => true,
                        'colegiatura_1_enero'      => true,
                        'colegiatura_2_febrero'    => true,
                        'colegiatura_3_marzo'      => true,
                        'colegiatura_4_abril'      => true
                    );
                    break;
                //colegiatura_5_mayo
                case 5:
                    $data_beca        = array(
                        'beca'                     => $_POST['save_beca'],
                        'saldoafavor'              => '3500',
                        'update'              => true,
                        'colegiatura12_1_agosto'    => true,
                        'colegiatura_9_septiembre' => true,
                        'colegiatura_10_octubre'   => true,
                        'colegiatura_11_noviembre' => true,
                        'colegiatura_12_diciembre' => true,
                        'colegiatura12_2_agosto'   => true,
                        'colegiatura_1_enero'      => true,
                        'colegiatura_2_febrero'    => true,
                        'colegiatura_3_marzo'      => true,
                        'colegiatura_4_abril'      => true,
                        'colegiatura_5_mayo'       => true
                    );
                    break;
                //colegiatura_6_junio
                case 6:
                    $data_beca        = array(
                        'beca'                     => $_POST['save_beca'],
                        'saldoafavor'              => '3850',
                        'update'              => true,
                        'colegiatura12_1_agosto'    => true,
                        'colegiatura_9_septiembre' => true,
                        'colegiatura_10_octubre'   => true,
                        'colegiatura_11_noviembre' => true,
                        'colegiatura_12_diciembre' => true,
                        'colegiatura12_2_agosto'   => true,
                        'colegiatura_1_enero'      => true,
                        'colegiatura_2_febrero'    => true,
                        'colegiatura_3_marzo'      => true,
                        'colegiatura_4_abril'      => true,
                        'colegiatura_5_mayo'       => true,
                        'colegiatura_6_junio'      => true
                    );
                    break;
                //colegiatura_7_julio
                case 7:
                    $data_beca        = array(
                        'beca'                     => $_POST['save_beca'],
                        'saldoafavor'              => '4200',
                        'update'              => true,
                        'colegiatura12_1_agosto'    => true,
                        'colegiatura_9_septiembre' => true,
                        'colegiatura_10_octubre'   => true,
                        'colegiatura_11_noviembre' => true,
                        'colegiatura_12_diciembre' => true,
                        'colegiatura12_2_agosto'   => true,
                        'colegiatura_1_enero'      => true,
                        'colegiatura_2_febrero'    => true,
                        'colegiatura_3_marzo'      => true,
                        'colegiatura_4_abril'      => true,
                        'colegiatura_5_mayo'       => true,
                        'colegiatura_6_junio'      => true,
                        'colegiatura_7_julio'      => true
                    );
                    break;
            }


            $token = $_POST['save_token'];

                $this->db->where('id_advance',$token);
                $this->db->update('alumnoprimaria',$data_alumno);

                $this->db->where('id_advance_alumno',$token);
                $this->db->update('beca',$data_beca);

                $this->db->where('id_advance_alumno',$token);
                $this->db->insert('inscripcion',$data_inscripcion);

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
    function alumnoKinderUpdate()
    {
      
        $random = random_string('sha1', 20);
        $date   = date("Y-m-d H:m:s");
        $r_id   = random_string('md5', 4);

        $data_alumno = array(
            'id'                => $_POST['save_id'],
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
            'maestra'           => $_POST['save_nombremaestra'],
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

        $data_beca = array(
            'beca'           => $_POST['save_beca']
            
        );        

        $token = $_POST['save_token'];
        $this->db->where('id_advance',$token);
        $this->db->update('alumnokinder',$data_alumno);

        $this->db->where('id_advance_alumno',$token);
        $this->db->update('inscripcion',$data_inscripcion);

        $this->db->where('id_advance_alumno',$token);
        $this->db->update('beca',$data_beca);

        $status = [
            "category"    => "Request",
            "description" => "Update Alumno Kinder",
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