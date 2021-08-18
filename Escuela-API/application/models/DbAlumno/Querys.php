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
}    