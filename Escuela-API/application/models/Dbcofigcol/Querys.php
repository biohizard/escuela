<?php if (!defined('BASEPATH')) exit('No direct script access allowed');
class Querys extends CI_Model
{
    //--->
    function allDataRead()
    {
        /*
            SELECT
            configsp.id,
            configsp.id_advance,
            configsp.time,
            configsp.concepto,
            configsp.precio,
            configsp.descripcion,
            configsp.type,
            configsp.grado,
            configsp.fecha_limite
            FROM
            configsp
            WHERE
            configsp.fecha_limite = '2022-07-31' OR
            configsp.fecha_limite = '2021-09-14' OR
            configsp.fecha_limite = '2021-09-30'


        */  $mes = date("n");
        
            $this->db->select('*');
            $this->db->from('configcol');
            
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