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
            $this->db->from('configsp');
            $this->db->or_like('`configsp`.fecha_limite',"2022-07-31");
            
            //Agosto y septiembre
            if($mes == 8 or $mes == 9){
                $this->db->or_like('`configsp`.fecha_limite',"-08-");
                $this->db->or_like('`configsp`.fecha_limite',"-09-");
            }
            //Octubre y noviembre
            if($mes == 10 or $mes == 11){
                $this->db->or_like('`configsp`.fecha_limite',"-10-");
                $this->db->or_like('`configsp`.fecha_limite',"-11-");
            }
            //Diciembre y Enero
            if($mes == 12 or $mes == 1){
                $this->db->or_like('`configsp`.fecha_limite',"-12-");
                $this->db->or_like('`configsp`.fecha_limite',"-01-");
            }
            //Febrero
            if($mes == 2){
                $this->db->or_like('`configsp`.fecha_limite',"-02-");
            }
            //Marzo3
            if($mes == 3){
                $this->db->or_like('`configsp`.fecha_limite',"-03-");
            }
            //abril y mayo
            if($mes == 4 OR $mes == 5){
                $this->db->or_like('`configsp`.fecha_limite',"-04-");
                $this->db->or_like('`configsp`.fecha_limite',"-05-");
            }
            //junio
            if($mes == 6){
                $this->db->or_like('`configsp`.fecha_limite',"-06-");
            }
            //julio
            if($mes == 7){
                $this->db->or_like('`configsp`.fecha_limite',"-07-");
            }

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

    //--->
    function colDataRead()
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
            $this->db->from('configsp');
            $this->db->where('`configsp`.type',"colegiatura");
            /*
            $this->db->or_like('`configsp`.fecha_limite',"2022-07-31");
            
            //Agosto y septiembre
            if($mes == 8 or $mes == 9){
                $this->db->or_like('`configsp`.fecha_limite',"-08-");
                $this->db->or_like('`configsp`.fecha_limite',"-09-");
            }
            //Octubre y noviembre
            if($mes == 10 or $mes == 11){
                $this->db->or_like('`configsp`.fecha_limite',"-10-");
                $this->db->or_like('`configsp`.fecha_limite',"-11-");
            }
            //Diciembre y Enero
            if($mes == 12 or $mes == 1){
                $this->db->or_like('`configsp`.fecha_limite',"-12-");
                $this->db->or_like('`configsp`.fecha_limite',"-01-");
            }
            //Febrero
            if($mes == 2){
                $this->db->or_like('`configsp`.fecha_limite',"-02-");
            }
            //Marzo3
            if($mes == 3){
                $this->db->or_like('`configsp`.fecha_limite',"-03-");
            }
            //abril y mayo
            if($mes == 4 OR $mes == 5){
                $this->db->or_like('`configsp`.fecha_limite',"-04-");
                $this->db->or_like('`configsp`.fecha_limite',"-05-");
            }
            //junio
            if($mes == 6){
                $this->db->or_like('`configsp`.fecha_limite',"-06-");
            }
            //julio
            if($mes == 7){
                $this->db->or_like('`configsp`.fecha_limite',"-07-");
            }
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
    //--->
    function proDataRead()
    {
        $mes = date("n");
        
            $this->db->select('*');
            $this->db->from('configsp');
            
            $this->db->where('`configsp`.type','producto');
            

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

    //--->
    function proDataSave()
    {

        $random = random_string('alnum', 20);
        $date   = date("Y-m-d");
        $r_id   = random_string('md5', 4);

        /*
        producto_concepto: A
        producto_precio: E
        producto_tipo: I
                */
            $dataconfigsp = array(
                'id_advance'        => random_string('sha1', 20),
                'concepto'          => $_POST['producto_concepto'],
                'precio'            => $_POST['producto_precio'],
                'type'              => $_POST['producto_tipo']
            );
            
            $this->db->insert('configsp', $dataconfigsp);  
            //------------------------------------------>

            $status[] = array(
                "Ok"      => 101,
                "Cierres" => "Ok",
                "Saldo"   => "Ok",
                "Entregas"=> "Ok",
                "Cierres" => "Ok",
                "Pagos"   => "Ok"
            );
            
            return    $status;
    }
    //--->

    //--->
    function proDataUpdate()
    {

        $random = random_string('alnum', 20);
        $date   = date("Y-m-d");
        $r_id   = random_string('md5', 4);

        /*
        producto_concepto: A
        producto_precio: E
        producto_tipo: I
                */
                /*
            $dataconfigsp = array(
                'id_advance'        => random_string('sha1', 20),
                'concepto'          => $_POST['producto_concepto'],
                'precio'            => $_POST['producto_precio'],
                'type'              => $_POST['producto_tipo']
            );
            
            $this->db->insert('configsp', $dataconfigsp);  
            */
        $data_inscripcion = array(
            'concepto'=> $_POST['producto_concepto'],
            'precio'  => $_POST['producto_precio'],
            'type'    => $_POST['producto_tipo']
        );

        $token = $_POST['producto_id'];
        $this->db->where('id_advance',$token);
        $this->db->update('configsp',$data_inscripcion);
            //------------------------------------------>

            $status[] = array(
                "Ok"      => 101,
                "Cierres" => "Ok",
                "Saldo"   => "Ok",
                "Entregas"=> "Ok",
                "Cierres" => "Ok",
                "Pagos"   => "Ok"
            );
            
            return    $status;
    }
    //--->

    //--->
    function fechaDataRead()
    {
        $mes = date("n");

            $this->db->select('*');
            $this->db->from('configfechas');

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
    //--->
    function proFechaUpdate()
    {

        $random = random_string('alnum', 20);
        $date   = date("Y-m-d");
        $r_id   = random_string('md5', 4);
        /*
        producto_concepto: colegiatura
        producto_fecha: 2022-04-10
        producto_id: 0cBGRC8ijAkPu5rxloSy
        */
        $data_inscripcion = array(
            'fecha' =>  $_POST['producto_fecha']
        );

        $token = $_POST['producto_id'];
        $this->db->where('id_advance',$token);
        $this->db->update('configfechas',$data_inscripcion);
            //------------------------------------------>

            $status[] = array(
                "Ok"      => 101,
                "Cierres" => "Ok",
                "Saldo"   => "Ok",
                "Entregas"=> "Ok",
                "Cierres" => "Ok",
                "Pagos"   => "Ok"
            );
            
            return    $status;
    }
    //--->
    //--->
    function proFechaUpdate2()
    {

        $random = random_string('alnum', 20);
        $date   = date("Y-m-d");
        $r_id   = random_string('md5', 4);
        /*
        producto_concepto: colegiatura
        producto_fecha: 2022-04-10
        producto_id: 0cBGRC8ijAkPu5rxloSy
        */
        $data_inscripcion = array(
            'fecha2' =>  $_POST['producto_fecha']
        );

        $token = $_POST['producto_id'];
        $this->db->where('id_advance',$token);
        $this->db->update('configfechas',$data_inscripcion);
            //------------------------------------------>

            $status[] = array(
                "Ok"      => 101,
                "Cierres" => "Ok",
                "Saldo"   => "Ok",
                "Entregas"=> "Ok",
                "Cierres" => "Ok",
                "Pagos"   => "Ok"
            );
            
            return    $status;
    }
    //--->    
}    