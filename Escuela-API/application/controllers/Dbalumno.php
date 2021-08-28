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
        /*
        save_nombremaestra: Maribel Atienza Ins
        save_exalumno: si
        save_gradocursar: p-0adhSVX0b9MNxkLxwf
        save_tipopago: efectivo
        save_nombrealumno: jorge francisco
        save_apaternoalumno: rodriguez
        save_amaternoalumno: garibaldo
        save_curp: curpdemo
        save_sexo: masculino
        save_direccion: c 26 n 84
        save_cp: 57210
        save_fechanacimiento: 1983-12-28
        save_edad: 37
        save_estatura: 170
        save_peso: 80
        save_tiposanguineo: o+
        save_telefono: (551) 506-7867
        save_recados: 55556666
        save_annoskinder: 3
        save_maestraausubel: FERNANDA
        save_procedencia: Ausubel
        save_lectoescritura: no
        save_lectoescriturapor: lee y escribe
        save_problema: no
        save_tutor: 
        save_parentesco: papa
        save_tutocurp: curpdemo
        
        <option value="null"> - Nivel – Grupo – Salon -</option>
        <option value="k-HVEa14mhWiJcGGnGtk"> Preescolar 1 a</option>
        <option value="k-ARTipsDYbE3zfgqvOs"> Preescolar 2 a</option>
        <option value="k-PNe8FDY3TacrYnkZ33"> Preescolar 3 a</option>
        */

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