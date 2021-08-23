<?php
class Dbalumno extends CI_Controller
{
    //----->

    //--->
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->default = $this->load->database('default', TRUE);
        $this->load->model('DbAlumno/Querys');
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
        $xr8_data = $this->Querys->alumnoCreate();
        $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));
    }
    //--->

    //--->
    public function readedata()
    {
        if ($_GET['type'] == "onlyone"){
            $xr8_data   = $this->Querys->onlyoneRead();
        }else if ($_GET['type'] == "onlyprecios"){
            $xr8_data   = $this->Querys->onlypreciosRead();
        }else {
            $xr8_data  = array("Error: Reade Alumno"=>101);
        }
        $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));
    }
    //--->

    //--->
    public function searchdata()
    {
        if ($_GET['type'] == "find"){
            $xr8_data   = $this->Querys->searchRead();
        }else {
            $xr8_data  = array("Error: Reade Alumno"=>101);
        }
        $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));
    }
    //--->    

    //--->
    public function update()
    { 
        $xr8_data = $this->Querys->alumnoUpdate();
        $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));
    }
    //--->

    //----->
}