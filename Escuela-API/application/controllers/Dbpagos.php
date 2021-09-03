<?php
class Dbpagos extends CI_Controller
{
//----->

    //--->
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->default = $this->load->database('default', TRUE);
        $this->load->model('Dbpagos/Querys');
    }
    //--->

    //--->
    public function index()
    {
    }
    //--->
    
    //--->
    public function createdata()
    {  
    }
    //--->

    //--->
    public function allreadedata()
    {
        if ($_GET['type']=="all"){
                        //PR O KR
                        $term          = strtolower($_GET['id']);
                        $x_sin_numeros = preg_split('/[0-9]+/',$term);
                        
                        if($x_sin_numeros[0] == "pr"){
                            $xr8_data=$this->Querys->allDataPrimariaRead();
                        }else if($x_sin_numeros[0] == "jr"){
                        $xr8_data=$this->Querys->allDataKinderRead();
                        }
            
        }else if ($_GET['type']=="now"){
            $xr8_data=$this->Querys->nowDataRead();
        }else {
            $xr8_data=array("Error: Reade Alumno"=>101);
        }
        
            $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));
    }
    //--->

//----->
}