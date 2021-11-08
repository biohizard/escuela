<?php
class Cobros extends CI_Controller
{
    //----->

    //--->
    public function __construct()
    {
        parent::__construct();
        session_check();
    }
    //--->

    //--->
    public function index()
    {
    }
    //--->

    //--->
    /*
    Pasos
    Colegiatua efectivo
    1: Buscar alumno  - PR49
    2: load historial
    3: Seleccionamos el mes a pagar
    4: pago
    5: generar cobro e imprimir 
    */
    public function colegiatura()
    {
        //--->
        $sha1                    = random_string('sha1', 16);
        $data['sha1']            = $sha1;
        $data['page_title']      = "";
        $data['sub_page_title']  = 'Dashboard';
        $data['sub_page_title2'] = 'admin';
        $data['css']             = 'cobros';
        $data['js']              = 'colegiaturas/colegiaturas,colegiaturas/btn,colegiaturas/xhr,colegiaturas/tools,colegiaturas/efectivo/efectivo,colegiaturas/efectivo/btn,colegiaturas/efectivo/xhr,colegiaturas/efectivo/tools';
        $data['singout']         = INDEX_PAGE . "user/logout?error=102&since=" . $_GET['since'] . "&sha1=" . $sha1;

        $data['ID']              = $_SESSION['ID'];
        $data['IDadvance']       = $_SESSION['IDadvance'];
        $data['User']            = $_SESSION['User'];
        $data['Permissions']     = $_SESSION['Permissions'];
        $data['Email']           = $_SESSION['Email'];
        $data['Firstname']       = $_SESSION['Firstname'];
        $data['Secondname']      = $_SESSION['Secondname'];
        $data['Message']         = $_SESSION['Message'];
        $data['Time']            = $_SESSION['Time'];
        //--->
        $data['tiempo']          = date("Y/m/d H:i:s");


        //--->
        $this->load->view('loop/header', $data);
        if($_SESSION['Permissions'] == "admin"){
            $this->load->view('loop/admin-top', $data);
        }else if($_SESSION['Permissions'] == "user"){
            $this->load->view('loop/admin-user', $data);
        }
        //--->

            $this->load->view('cobros/all', $data);
            $this->load->view('cobros/modalprint', $data);

        //--->
        $this->load->view('loop/admin-foot', $data);
        $this->load->view('loop/footer', $data);
        //--->
    }
    //--->

    //--->
    public function productos()
    {
      //--->
      $sha1                    = random_string('sha1', 16);
      $data['sha1']            = $sha1;
      $data['page_title']      = "";
      $data['sub_page_title']  = 'Dashboard';
      $data['sub_page_title2'] = 'admin';
      $data['css']             = 'cobros';
      $data['js']              = 'productos/productos,productos/btn,productos/xhr,productos/tools';
      $data['singout']         = INDEX_PAGE . "user/logout?error=102&since=" . $_GET['since'] . "&sha1=" . $sha1;

      $data['ID']              = $_SESSION['ID'];
      $data['IDadvance']       = $_SESSION['IDadvance'];
      $data['User']            = $_SESSION['User'];
      $data['Permissions']     = $_SESSION['Permissions'];
      $data['Email']           = $_SESSION['Email'];
      $data['Firstname']       = $_SESSION['Firstname'];
      $data['Secondname']      = $_SESSION['Secondname'];
      $data['Message']         = $_SESSION['Message'];
      $data['Time']            = $_SESSION['Time'];
      //--->
      $data['tiempo']          = date("Y/m/d H:i:s");

        //--->
        $this->load->view('loop/header', $data);
        if($_SESSION['Permissions'] == "admin"){
            $this->load->view('loop/admin-top', $data);
        }else if($_SESSION['Permissions'] == "user"){
            $this->load->view('loop/admin-user', $data);
        }
        //--->

          $this->load->view('productos/all', $data);

        //--->
        $this->load->view('loop/admin-foot', $data);
        $this->load->view('loop/footer', $data);
        //--->
    }
    //--->
    //----->
}