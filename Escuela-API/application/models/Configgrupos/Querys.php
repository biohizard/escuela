<?php if (!defined('BASEPATH')) exit('No direct script access allowed');
class Querys extends CI_Model
{

    //--->
    function cierreCreate()
    {   
        /*
        Array
        (
            [save_alumno_nombrealumno] => jorge francisco
            [save_alumno_apaternoalumno] => rodriguez
            [save_alumno_amaternoalumno] => garibaldo
            [save_alumno_fechanacimiento] => 1983-12-28
            [save_alumno_edad] => 37
            [save_alumno_curp] => curpdemo1235
            [save_alumno_sexo] => M
            [save_alumno_estatura] => 170
            [save_alumno_peso] => 80
            [save_alumno_tiposanguineo] => O+
            [save_alumno_telefono] => 5515067867
            [save_alumno_recados] => (551) 506-7867
            [save_alumno_direccion] => c 26 n 84
            [save_alumno_cp] => 57210

            [save_ins_nombremaestra] => Fernanda
            [save_ins_gradocursar] => 1ro
            [save_ins_annoskinder] => 2
            [save_ins_lectoescritura] => si
            [save_ins_lectoescriturapor] => lee y escribe
            [save_ins_problema] => no
            [save_ins_procedencia] => benito juarez

            [save_tutor_tutor] => pepe pecas
            [save_tutor_parentesco] => papa
            [save_tutor_tutocurp] => curpdemo123
        )
        */
          $random = random_string('alnum', 20);
          $date   = date("Y-m-d H:m:s");
        

          $data = array(
            'id_advance' => $random,
            'nombre' 	 => $_POST['save_alumno_nombrealumno'],
            'paterno' 	 => $_POST['save_alumno_apaternoalumno'],
            'materno' 	 => $_POST['save_alumno_amaternoalumno'],
            'fecha' 	 => $_POST['save_alumno_fechanacimiento'],
            'edad' 	     => $_POST['save_alumno_edad'],
            'curp' 	     => $_POST['save_alumno_curp'],
            'sexo' 	     => $_POST['save_alumno_sexo'],
            'estatura'   => $_POST['save_alumno_estatura'],
            'peso' 	     => $_POST['save_alumno_peso'],
            'sangre' 	 => $_POST['save_alumno_tiposanguineo'],
            'telefono'   => $_POST['save_alumno_telefono'],
            'recado' 	 => $_POST['save_alumno_recados'],
            'direccion'  => $_POST['save_alumno_direccion'],
            'cp'         => $_POST['save_alumno_cp'],
            'tutor' 	 => $_POST['save_tutor_tutor'],
            'parentes'   => $_POST['save_tutor_parentesco'],
            'tutocurp'   => $_POST['save_tutor_tutocurp']
          );
          
          $data2 = array(
            'id_advance'        => random_string('alnum', 20),
            'id_advance_alumno' => $random,
            'maestra'           => $_POST['save_ins_nombremaestra'],
            'grado'             => $_POST['save_ins_gradocursar'],
            'annoskinder'       => $_POST['save_ins_annoskinder'],
            'lectoescritura'    => $_POST['save_ins_lectoescritura'],
            'lectoescriturapor' => $_POST['save_ins_lectoescriturapor'],
            'problema'          => $_POST['save_ins_problema'],
            'procedencia'       => $_POST['save_ins_procedencia']
          );
          /*
        save_ins_nombremaestra: Fernanda
        save_ins_gradocursar: 1ro
        save_ins_annoskinder: 2
        save_ins_lectoescritura: si
        save_ins_lectoescriturapor: lee y escribe
        save_ins_problema: no
        save_ins_procedencia: benito juarez
          */
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
          
            return    $status;
      }
    //--->

    //--->
    function allRead()
    {
        /*
            SELECT
            alumno.id,
            alumno.id_advance,
            alumno.nombre,
            alumno.paterno,
            alumno.materno,
            inscripcion.grado,
            inscripcion.maestra,
            inscripcion.id_advance_alumno,
            configgrupos.id_advance,
            configgrupos.nivel,
            configgrupos.grupos,
            configgrupos.salon
            FROM
            alumno
            JOIN inscripcion  ON inscripcion.id_advance_alumno = alumno.id_advance 
            JOIN configgrupos ON configgrupos.id_advance = inscripcion.grado
        */        

        /*
        SELECT
        configgrupos.id,
        configgrupos.id_advance,
        configgrupos.time,
        configgrupos.nivel,
        configgrupos.grupos,
        configgrupos.salon,
        configniveles.nivel,
        configniveles.id_advance
        FROM
        configgrupos
        INNER JOIN configniveles ON configgrupos.nivel = configniveles.id_advance     
        */
        $this->db->select('
        configgrupos.id,
        configgrupos.id_advance,
        configgrupos.time,
        configgrupos.nivel,
        configgrupos.grupos,
        configgrupos.salon,
        configniveles.nivel,
        configniveles.id_advance AS id_advance_niveles
        ');
        $this->db->from('configgrupos');
        $this->db->join('configniveles', 'configgrupos.nivel = configniveles.id_advance ');
        $this->db->order_by('`configgrupos`.id', 'ASC');
        /*
        $this->db->select('
        `alumno`.id,
        `alumno`.id_advance,
        `alumno`.nombre,
        `alumno`.paterno,
        `alumno`.materno,
        `inscripcion`.maestra,
        `configgrupos`.grupos,
        `configgrupos`.salon
        ');        
        $this->db->from('alumno');
        $this->db->join('inscripcion', 'inscripcion.id_advance_alumno = alumno.id_advance');
        $this->db->join('configgrupos', 'inscripcion.grado = configgrupos.id_advance');
        $this->db->order_by('`alumno`.id', 'ASC');
        */
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

    function codebarRead()
    {

        $this->db->select('*');        
        $this->db->from('inventario');

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