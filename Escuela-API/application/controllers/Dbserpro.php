<?php
class Dbserpro extends CI_Controller
{
    //----->

    //--->
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->default = $this->load->database('default', TRUE);
        $this->load->model('Dbserpro/Querys');
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
            if ($_GET['type']      == "save"){
                $xr8_data = $this->Querys->proDataSave();
            }else {
                $xr8_data  = array("Error: Reade Alumno"=>101);
            }
            $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));        
    }
    //--->

    //--->
    public function allreadedata()
    {
        if ($_GET['type']      == "all"){
            $xr8_data = $this->Querys->proDataRead();
        }else if($_GET['type'] == "colegiatura"){
            $xr8_data = $this->Querys->colDataRead();
        }else {
            $xr8_data  = array("Error: Reade Alumno"=>101);
        }
        $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));
    }
    //--->

    //--->
    public function updatedata()
    {
            if ($_GET['type']      == "save"){
                $xr8_data = $this->Querys->proDataUpdate();
            }else {
                $xr8_data  = array("Error: Reade Alumno"=>101);
            }
            $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));        
    }
    //--->
    //----->
}