<?php
class Dbconfig extends CI_Controller
{
    //----->

    //--->
    public function __construct(){
        parent::__construct();
            $this->load->database();
                $this->default = $this->load->database('default', TRUE);
                    $this->load->model('Dbconfig/Querys');
    }
    //--->

    //--->
    public function index(){
    }
    //--->
    
    //--->
    public function updatedata(){
        if ($_GET['type'] == "update"){
            $xr8_data   = $this->Querys->oneUpdate();
            $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));
        }else {
            $xr8_data  = array("Error"  => 101);
            $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));
        }        
    }
    //--->

    //--->
    //dbconfig/readedata/?type=all
    public function readedata(){
        if ($_GET['type'] == "all"){
            $xr8_data   = $this->Querys->allRead();
            $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));
        }else {
            $xr8_data  = array("Error"  => 101);
            $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));
        }
    }
    //--->

    //----->
}