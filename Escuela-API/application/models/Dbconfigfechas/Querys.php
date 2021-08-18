<?php if (!defined('BASEPATH')) exit('No direct script access allowed');
    class Querys extends CI_Model{
        //--->
        function allDataRead(){

            $this->db->select('*');        
            $this->db->from('configfechas');
            $this->db->like('`configfechas`.fecha',date("Y-m-"));
            $this->db->where('`configfechas`.concepto','colegiatura');
            $this->db->order_by('`configfechas`.id', 'ASC');

                $query = $this->db->get();
                $row = $query->row_array();

                //---A)
                if ($query->num_rows() > 0) {
                    foreach ($query->result() as $row) {
                        $row->hoy = date("Y-m-d");
                        $data[]   = $row;
                    }
                } else {
                    $data[] = array(
                        "Time"       => date("Y-m-d H:m:s"),
                        "Message"    => "Error Fecha",
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