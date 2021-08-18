<?php if (!defined('BASEPATH')) exit('No direct script access allowed');
class Querys extends CI_Model
{
    //--->
    function allDataRead()
    {
		/*
		SELECT
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
		FROM  pagos
		JOIN  alumno   ON pagos.id_advance_alumno = alumno.id_advance
		JOIN  usuario  ON pagos.id_advance_usuario = usuario.id_advance
		JOIN  configsp ON pagos.id_advance_programas = configsp.id_advance
		WHERE pagos.id_advance_alumno = 'Aqt8CkbGXTBrEU9ayQoM'

		*/        
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
		$this->db->where('pagos.id_advance_alumno','Aqt8CkbGXTBrEU9ayQoM');

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
                      "Time"       => $date.$mes,
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