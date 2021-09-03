<?php if (!defined('BASEPATH')) exit('No direct script access allowed');
class Querys extends CI_Model
{

    //--->
    function cierreCreate()
    {   
        /*
      Array
      (
          [save_ins_nombremaestra] => Fernanda
          [save_ins_exalumno] => si
          [save_ins_gradocursar] => p-0adhSVX0b9MNxkLxwf
          [save_ins_tipopago] => efectivo

          [save_alumno_nombrealumno] => jorge francisco
          [save_alumno_apaternoalumno] => rodriguez
          [save_alumno_amaternoalumno] => garibaldo
          [save_alumno_curp] => curpdemo1235
          [save_alumno_sexo] => masculino
          [save_alumno_direccion] => c 26 n 84
          [save_alumno_cp] => 57210
          [save_alumno_fechanacimiento] => 1983-12-28
          [save_alumno_edad] => 37
          [save_alumno_estatura] => 170
          [save_alumno_peso] => 80
          [save_alumno_tiposanguineo] => 0+
          [save_alumno_telefono] => (551) 506-7867
          [save_alumno_recados] => 55555
          [save_ins_annoskinder] => 2

          [save_ins_maestraausube] => pepita
          [save_ins_procedencia] => kinder garden patria
          let ins_lectoescritura    = $("ins_lectoescritura").val()
          [save_ins_lectoescriturapor] => lee y escribe
          [save_ins_problema] => no

          [save_tutor_tutor] => pepe pecas
          [save_tutor_parentesco] => papa
          [save_tutor_tutocurp] => curpdemo
      )
        */
          $random = random_string('alnum', 20);
          $date   = date("Y-m-d H:m:s");

          $data = array(
            'id_advance' => $random,
            'nombre' 	   => $_POST['save_alumno_nombrealumno'],
            'paterno' 	 => $_POST['save_alumno_apaternoalumno'],
            'materno' 	 => $_POST['save_alumno_amaternoalumno'],

            'fecha' 	   => $_POST['save_alumno_fechanacimiento'],
            'edad' 	     => $_POST['save_alumno_edad'],
            'curp' 	     => $_POST['save_alumno_curp'],
            'sexo' 	     => $_POST['save_alumno_sexo'],

            'estatura'   => $_POST['save_alumno_estatura'],
            'peso' 	     => $_POST['save_alumno_peso'],
            'sangre' 	   => $_POST['save_alumno_tiposanguineo'],
            'telefono'   => $_POST['save_alumno_telefono'],

            'recado' 	   => $_POST['save_alumno_recados'],
            'direccion'  => $_POST['save_alumno_direccion'],
            'cp'         => $_POST['save_alumno_cp'],
            'tutor' 	   => $_POST['save_tutor_tutor'],

            'parentes'   => $_POST['save_tutor_parentesco'],
            'tutocurp'   => $_POST['save_tutor_tutocurp']
          );
          /*
            id_advance
            id_advance_alumno
            time
            maestra
            grado
            exalumno
            inscripcion
            tipopago
            annoskinder
            lectoescritura
            lectoescriturapor
            problema
            procedencia
          */
          $data2 = array(
            'id_advance'        => random_string('alnum', 20),
            'id_advance_alumno' => $random,
            'maestra'           => $_POST['save_ins_nombremaestra'],
            'grado'             => $_POST['save_ins_gradocursar'],
            'exalumno'          => $_POST['save_ins_exalumno'],
            'tipopago'          => $_POST['save_ins_tipopago'],
            'annoskinder'       => $_POST['save_ins_annoskinder'],
            'lectoescritura'    => $_POST['save_ins_lectoescritura'],
            'lectoescriturapor' => $_POST['save_ins_lectoescriturapor'],
            'problema'          => $_POST['save_ins_problema'],
            'procedencia'       => $_POST['save_ins_procedencia']
          );
          
          $this->db->insert('alumno', $data);
          $this->db->insert('inscripcion', $data2);

        $status = [
              "category"    => "Request",
              "description" => "Create Alumno New",
              "id advance"  => $random,
              "date"        => $date,
              "http_code"   => 404,
              "code"        => 1001,
              "request"     => true
        ];
                    
        return $status;
      }
    //--->

    //--->
    function primariaRead()
    {
      $this->db->select('
      `alumnoprimaria`.id,
      `alumnoprimaria`.id_advance,
      `alumnoprimaria`.nombre,
      `alumnoprimaria`.paterno,
      `alumnoprimaria`.materno,
      `inscripcion`.maestra,
      `configgrupos`.grupos,
      `configgrupos`.salon
      ');        
      $this->db->from('alumnoprimaria');
      $this->db->join('inscripcion',  'inscripcion.id_advance_alumno = alumnoprimaria.id_advance');
      $this->db->join('configgrupos', 'inscripcion.grado = configgrupos.id_advance');
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
    function kinderRead()
    {
      $this->db->select('
      `alumnokinder`.id,
      `alumnokinder`.id_advance,
      `alumnokinder`.nombre,
      `alumnokinder`.paterno,
      `alumnokinder`.materno,
      `inscripcion`.maestra,
      `configgrupos`.grupos,
      `configgrupos`.salon
      ');        
      $this->db->from('alumnokinder');
      $this->db->join('inscripcion',  'inscripcion.id_advance_alumno = alumnokinder.id_advance');
      $this->db->join('configgrupos', 'inscripcion.grado = configgrupos.id_advance');
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

}    