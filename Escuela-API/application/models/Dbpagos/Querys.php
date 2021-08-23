<?php if (!defined('BASEPATH')) exit('No direct script access allowed');
class Querys extends CI_Model
{
    //--->
    function allDataRead()
			{
		    $this->db->select('
		    	pagos.id,
		    	pagos.id_advance,
		    	pagos.time,
		    	pagos.pago,
		    	alumno.nombre,
		    	alumno.paterno,
		    	alumno.materno,
		    	usuario.`user`,
		    	usuario.email,
		    	configsp.concepto,
		    	configsp.precio
		    ');
        $this->db->from('pagos');
				$this->db->join('alumno'  ,'alumno.id_advance   = pagos.id_advance_alumno');
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
  
}    