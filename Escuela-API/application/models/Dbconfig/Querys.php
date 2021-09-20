<?php if (!defined('BASEPATH')) exit('No direct script access allowed');
class Querys extends CI_Model{

    //--->
    function allRead()
    {
      $this->db->select('*');        
      $this->db->from('configbase');
      $this->db->order_by('`configbase`.id', 'ASC');

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
    
    function oneUpdate(){
        /*
            save_1Agosto: "700"
            save_2Agosto: "700"
            save_colegiatura: "1400"
            save_colegiaturaEsp: "0"
            save_colegiaturades: "0"
            save_dpa: "15"
            save_inscripcion: "780"
            save_interes: "15"
            save_material: "850"
            save_seguro: "180"

            colegiatura
            colegiaturades
            1Agosto
            2Agosto
            colegiaturaEsp
            inscripcion
            seguro
            material
            interes
            dpa
        */

        
      
            $random = random_string('sha1', 20);
            $date   = date("Y-m-d H:m:s");
            $r_id   = random_string('md5', 4);

            
        $data_A  = array('value' => $_POST['save_1Agosto']);
        $this->db->where('concepto','1Agosto');
        $this->db->update('configbase',$data_A);
            
        $data_B  = array('value' => $_POST['save_2Agosto']);
        $this->db->where('concepto','2Agosto');
        $this->db->update('configbase',$data_B);
            
        $data_C  = array('value' => $_POST['save_colegiatura']);
        $this->db->where('concepto','colegiatura');
        $this->db->update('configbase',$data_C);
            
        $data_D  = array('value' => $_POST['save_colegiaturaEsp']);
        $this->db->where('concepto','colegiaturaEsp');
        $this->db->update('configbase',$data_D);
            
        $data_E  = array('value' => $_POST['save_colegiaturades']);
        $this->db->where('concepto','colegiaturades');
        $this->db->update('configbase',$data_E);

        $data_F  = array('value' => $_POST['save_dpa']);
        $this->db->where('concepto','dpa');
        $this->db->update('configbase',$data_F);
            
        $data_G  = array('value' => $_POST['save_inscripcion']);
        $this->db->where('concepto','inscripcion');
        $this->db->update('configbase',$data_G);
            
        $data_H  = array('value' => $_POST['save_interes']);
        $this->db->where('concepto','interes');
        $this->db->update('configbase',$data_H);
            
        $data_I  = array('value' => $_POST['save_material']);
        $this->db->where('concepto','material');
        $this->db->update('configbase',$data_I);
            
        $data_J  = array('value' => $_POST['save_seguro']);
        $this->db->where('concepto','seguro');
        $this->db->update('configbase',$data_J);                                
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

}