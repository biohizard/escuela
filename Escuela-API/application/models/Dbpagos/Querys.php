<?php if (!defined('BASEPATH')) exit('No direct script access allowed');
class Querys extends CI_Model
{
    //--->
    function allDataRead(){
		    $this->db->select('
		    	pagos.id,
		    	pagos.id_advance,
		    	pagos.time,
		    	pagos.pago,
		    	alumnoprimaria.nombre,
		    	alumnoprimaria.paterno,
		    	alumnoprimaria.materno,
		    	usuario.`user`,
		    	usuario.email,
		    	configsp.concepto,
		    	configsp.precio
		    ');
        $this->db->from('pagos');
				$this->db->join('alumnoprimaria'  ,'alumnoprimaria.id_advance   = pagos.id_advance_alumno');
				$this->db->join('usuario' ,'usuario.id_advance  = pagos.id_advance_usuario');
				$this->db->join('configsp','configsp.id_advance = pagos.id_advance_programas');
				$this->db->where('pagos.id_advance_alumno',$_GET['token']);
				$this->db->group_by('`pagos`.id');
				$this->db->order_by('`pagos`.id', 'ASC');

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
    function nowDataRead(){
    	/*
			SELECT
			pagos.id,
			pagos.id_advance,
			pagos.time,
			pagos.id_advance_usuario,
			pagos.id_advance_alumno,
			pagos.id_advance_programas,
			pagos.pago,
			configsp.concepto,
			configsp.type,
			configsp.descripcion,
			configsp.precio,
			configsp.fecha_limite
			FROM
			pagos
			INNER JOIN configsp ON pagos.id_advance_programas = configsp.id_advance
			INNER JOIN alumno ON pagos.id_advance_alumno = alumno.id_advance
			WHERE
			pagos.time LIKE "%2021-08%" AND
			configsp.type = 'colegiatura'
    	*/
		    $this->db->select('
					pagos.id,
					pagos.id_advance,
					pagos.time,
					pagos.id_advance_usuario,
					pagos.id_advance_alumno,
					pagos.id_advance_programas,
					pagos.pago,
					configsp.concepto,
					configsp.type,
					configsp.descripcion,
					configsp.precio,
					configsp.fecha_limite,
					alumno.nombre,
					alumno.paterno,
					alumno.materno,
					inscripcion.grado,
					configgrupos.nivel,
					configgrupos.grupos					
		    	');
        $this->db->from('pagos');
        $this->db->join('configsp',    'configsp.id_advance           = pagos.id_advance_programas');
        $this->db->join('alumno'  ,    'alumno.id_advance             = pagos.id_advance_alumno');
        $this->db->join('inscripcion', 'inscripcion.id_advance_alumno = pagos.id_advance_alumno');
        $this->db->join('configgrupos','configgrupos.id_advance       = inscripcion.grado');
				$this->db->where("configsp.`type`","colegiatura");
				$this->db->like("pagos.`time`",date("y-m"));
				

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