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


        if(
            $_POST['save_gradocursar'] == "k-HVEa14mhWiJcGGnGtk" OR
            $_POST['save_gradocursar'] == "k-ARTipsDYbE3zfgqvOs" OR
            $_POST['save_gradocursar'] == "k-PNe8FDY3TacrYnkZ33"
        ){
            $xr8_data = $this->Querys->alumnoCreateKinder();
        }else{
            $xr8_data = $this->Querys->alumnoCreatePrimaria();
        }
        
        $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));
    }
    //--->

    //--->
    public function readedata()
    {
        if ($_GET['type'] == "onlyone"){
            //PR O KR
            $term          = strtolower($_GET['id']);
            $x_sin_numeros = preg_split('/[0-9]+/',$term);
            
            if($x_sin_numeros[0] == "pr"){
                $xr8_data   = $this->Querys->onlyonePrimariaRead();
            }else if($x_sin_numeros[0] == "jr"){
                $xr8_data   = $this->Querys->onlyoneKinderRead();
            }else{
                $xr8_data   = "Erro 101";
            }
            
        }/*else if ($_GET['type'] == "onlyprecios"){
            $xr8_data   = $this->Querys->onlypreciosRead();
        }*/else {
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
        //PR O KR
        $term          = strtolower($_GET['id']);
        $x_sin_numeros = preg_split('/[0-9]+/',$term);
        
        if($x_sin_numeros[0] == "pr"){
            $xr8_data   = $this->Querys->alumnoPrimariaUpdate();
        }else if($x_sin_numeros[0] == "jr"){
            $xr8_data   = $this->Querys->alumnoKinderUpdate();
        }
        $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));
    }
    //--->

    //----->
}