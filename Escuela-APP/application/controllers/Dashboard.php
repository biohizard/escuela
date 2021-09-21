<?php
class Dashboard extends CI_Controller
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
        echo "ssx";
        echo "all";
        print_r($_SESSION);
    }
    //--->

    //--->
    public function admin()
    {
        //--->
        $sha1                    = random_string('sha1', 16);
        $data['sha1']            = $sha1;
        $data['page_title']      = "";
        $data['sub_page_title']  = 'Dashboard';
        $data['sub_page_title2'] = 'admin';
        $data['css']             = 'dashboard';
        $data['js']              = 'dashboard/dashboard,dashboard/btn,dashboard/xhr,dashboard/tools';
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

        $this->load->view('loop/header', $data);
        $this->load->view('loop/admin-top', $data);
        //$this->load->view('loop/all-top', $data);
        
            $this->load->view('dashboard/all', $data);
        
        
        $this->load->view('loop/admin-foot', $data);
        $this->load->view('loop/footer', $data);

        $this->load->view('dashboard/modal', $data);
    }
    //--->

    //----->
}