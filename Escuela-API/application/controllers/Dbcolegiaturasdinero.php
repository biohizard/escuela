<?php
class Dbcolegiaturasdinero extends CI_Controller
{
    //----->

    //--->
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->default = $this->load->database('default', TRUE);
        $this->load->model('Dbcolegiaturasdinero/Querys');
    }
    //--->updatedata

    //--->
    public function index()
    {
        echo "Model Dbcolegiaturasdinero";
    }
    //--->
    
    //--->
    public function createdata()
    {  
    }
    //--->

    //--->
    public function readedata()
    {
    }
    //---> 

    //--->
    public function updatedata()
    {   
        if($_GET['type'] == "updatedata"){
            $xr8_data = $this->Querys->coldineroUpdate();    
        }else if($_GET['type'] == "updatedatados"){
            
            $xr8_data = $this->Querys->coldineroUpdatedos();    
        }
        
        
        $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));        
    }
    //--->  

    //--->
    public function deletedata()
    {
    }
    //---> 

    //----->
}