<?php if (!defined('BASEPATH')) exit('No direct script access allowed');
class Querys extends CI_Model
{
    //--->
    function onlyoneRead()
    {
        /*
            SELECT
            alumno.id,
            alumno.id_advance,
            alumno.time,
            alumno.nombre,
            alumno.paterno,
            alumno.materno,
            alumno.fecha,
            alumno.edad,
            alumno.curp,
            alumno.sexo,
            alumno.estatura,
            alumno.peso,
            alumno.sangre,
            alumno.telefono,
            alumno.recado,
            alumno.direccion,
            alumno.cp,
            alumno.tutor,
            alumno.parentes,
            alumno.tutocurp,
            inscripcion.maestra,
            inscripcion.grado,
            inscripcion.exalumno,
            inscripcion.tipopago,
            inscripcion.annoskinder,
            inscripcion.lectoescritura,
            inscripcion.lectoescriturapor,
            inscripcion.problema,
            inscripcion.procedencia,
            configgrupos.salon,
            configgrupos.grupos,
            configgrupos.nivel,
            configniveles.nivel AS niveltxt
            FROM
            alumno
            INNER JOIN inscripcion ON alumno.id_advance = inscripcion.id_advance_alumno
            INNER JOIN configgrupos ON inscripcion.grado = configgrupos.id_advance
            INNER JOIN configniveles ON configgrupos.nivel = configniveles.id_advance
        */
          $this->db->select('
            `alumno`.id,
            `alumno`.id_advance,
            `alumno`.time,
            `alumno`.nombre,
            `alumno`.paterno,
            `alumno`.materno,
            `alumno`.fecha,
            `alumno`.edad,
            `alumno`.curp,
            `alumno`.sexo,
            `alumno`.estatura,
            `alumno`.peso,
            `alumno`.sangre,
            `alumno`.telefono,
            `alumno`.recado,
            `alumno`.direccion,
            `alumno`.cp,
            `alumno`.tutor,
            `alumno`.parentes,
            `alumno`.tutocurp,
            `inscripcion`.maestra,
            `inscripcion`.grado,
            `inscripcion`.exalumno,
            `inscripcion`.tipopago,
            `inscripcion`.annoskinder,
            `inscripcion`.lectoescritura,
            `inscripcion`.lectoescriturapor,
            `inscripcion`.problema,
            `inscripcion`.procedencia,
            `configgrupos`.salon,
            `configgrupos`.grupos,
            `configgrupos`.nivel,
            `configniveles`.nivel AS niveltxt
          ');        
          $this->db->from('alumno');
          $this->db->where('`alumno`.id_advance', $_GET['token']);
          $this->db->join('inscripcion'  , 'inscripcion.id_advance_alumno = alumno.id_advance');
          $this->db->join('configgrupos' , 'configgrupos.id_advance       = inscripcion.grado');
          $this->db->join('configniveles', 'configgrupos.nivel            = configniveles.id_advance');
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
    function searchRead()
    {
        $x = strtolower($_GET['term']);
        $this->db->select('
        `alumno`.nombre,
        `alumno`.paterno,
        `alumno`.materno,
        `alumno`.time,
        `alumno`.id,
        `inscripcion`.exalumno,
        `inscripcion`.id_advance_alumno
        ');
        $this->db->from('alumno');
        $this->db->like('alumno.id',$x,'both');
        $this->db->join('inscripcion', 'inscripcion.id_advance_alumno = alumno.id_advance');
        
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
    function alumnoCreate()
    {
        /*Array ( 
            save_nombremaestra: Emilia Mata
            save_exalumno: si
            save_gradocursar: p-0adhSVX0b9MNxkLxwf
            save_tipopago: efectivo
            save_nombrealumno: jorge francisco
            save_apaternoalumno: rodriguez
            save_amaternoalumno: garibaldo
            save_curp: curpdemo1235
            save_sexo: masculino
            save_direccion: c 26 n 84
            save_cp: 57210
            save_fechanacimiento: 1983-12-28
            save_edad: 37
            save_estatura: 170
            save_peso: 80
            save_tiposanguineo: o+
            save_telefono: (551) 506-7867
            save_recados: 55556666
            save_annoskinder: 3
            save_maestraausubel: FERNANDA
            save_procedencia: Ausubel
            save_lectoescritura: no
            save_lectoescriturapor: lee y escribe
            save_problema: no
            save_tutor: pepe pecas
            save_parentesco: papa
            save_tutocurp: curpdemo            
        )*/

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
            'parentes'          => $_POST['save_parentesco']
        );
         
        $data_inscripcion = array(
            'id_advance'        => random_string('sha1', 20),
            'time'              => $date,
            'id_advance_alumno' => $random,
            'maestra'           => $_POST['save_maestraausubel'],
            'grado'             => $_POST['save_gradocursar'],
            'exalumno'          => $_POST['save_exalumno'],
            'tipopago'          => $_POST['save_tipopago'],
            'annoskinder'       => $_POST['save_annoskinder'],
            'lectoescritura'    => $_POST['save_lectoescritura'],
            'lectoescriturapor' => $_POST['save_lectoescriturapor'],
            'problema'          => $_POST['save_problema'],
            'procedencia'       => $_POST['save_procedencia']
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

        $this->db->insert('alumno',$data_alumno);
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

}    