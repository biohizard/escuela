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
            $xr8_data=$this->Querys->allDataRead();
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