<?php
class Dbcolegiaturas extends CI_Controller
{
    //----->

    //--->
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->default = $this->load->database('default', TRUE);
        $this->load->model('Dbcolegiaturas/Querys');
    }
    //--->updatedata

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
    public function updatedata()
    {  
        if (is_null($_POST)){
            //----->
                $xr8_data   = "Error: 1001";
            //----->
            } else {
            //----->
            
                    $xr8_data   = $this->Querys->colegiaturasUpdate();
                    $xr8_data  = [
                        "time" => Date("Y-m-d H:m:s") , 
                        "category"    => "does not exist",
                        "http_code"   => 200,
                        "code"        => 1001,
                        "request"     => true
                    ];
                //----->
                }
    
        
            $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));
    
    }
    //--->  

    //--->
    public function allreadedata()
    {
        if ($_GET['type'] == "one"){
            $xr8_data = $this->Querys->allDataRead();
        }else {
            $xr8_data  = array("Error: Reade Alumno"=>101);
        }
        $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));
    }
    //--->

    //----->
}