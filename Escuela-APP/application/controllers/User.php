<?php
class User extends CI_Controller
{
//----->
    //--->
    public function __construct()
    {
        parent::__construct();
        // Your own constructor code
        $this->load->database();
        $this->default = $this->load->database('default', TRUE);
        $this->load->model('log/Querys');
    }
    //--->
    public function index()
    {
        $sha1                    = random_string('sha1', 16);
        $data['sha1']            = $sha1;
        $data['page_title']      = "";
        $data['sub_page_title']  = 'User';
        $data['sub_page_title2'] = 'Login';
        $data['css']             = 'user';
        $data['js']              = 'user/user';

            $this->load->view('loop/header', $data);
            //$this->load->view('login/user', $data);
            $this->load->view('loop/footer', $data);
    }
    //--->
    public function login()
    {
        $sha1  = random_string('sha1', 16);
        $data['sha1']            = $sha1;
        $data['page_title']      = "";
        $data['sub_page_title']  = 'User';
        $data['sub_page_title2'] = 'Login';
        $data['css']             = 'login';
        $data['js']              = 'user/login/login';

        $this->load->view('loop/header', $data);
            $this->load->view('login/login', $data);
        $this->load->view('loop/footer', $data);
    }
    //--->
    public function logout()
    {
        $sha1  = random_string('sha1', 16);
        $data['sha1']            = $sha1;
        $data['page_title']      = "";
        $data['sub_page_title']  = 'User';
        $data['sub_page_title2'] = 'Logout';
        $data['css']             = 'logout';
        $data['js']              = 'logout';

        $this->load->view('loop/header', $data);
        $this->load->view('login/logout', $data);
        $this->load->view('loop/footer', $data);

        session_start();
        session_destroy();

        $url = INDEX_PAGE . "user/login?error=102&since=" . $since . "&sha1=" . $sha1;
        header("Location: $url");
    }
    //--->
    public function check()
    {
        $sha1                   = random_string('sha1', 16);
        $data['sha1']           = $sha1;
        $data['page_title']     = "";
        $data['sub_page_title'] = 'Reg&iacute;strate';
        $data['css']            = 'login';
        $data['js']             = 'login';

        //email
        $LSf47vWou0wNVEsEuT1i = $_POST['LSf47vWou0wNVEsEuT1i'];
        //passwword
        $PHt0gjv8TbmLTQCWVB81 = $_POST['PHt0gjv8TbmLTQCWVB81'];
        //remember

        //$Mbv2GRxrFw8vMe1P5Pgo = $_POST['Mbv2GRxrFw8vMe1P5Pgo'];
        if (!isset($_POST['Mbv2GRxrFw8vMe1P5Pgo'])) { // <= false
            // No está vacía (true)
            $rememberme = True;
        } else {
            // Está vacía (false)
            $rememberme = False;
        }
        $data['data_user'] = $this->Querys->checkDatauser($LSf47vWou0wNVEsEuT1i, $PHt0gjv8TbmLTQCWVB81, $rememberme);
        //                                       EMAIL                                   PASSWORD
        if ($data['data_user'][0]->user == $LSf47vWou0wNVEsEuT1i and password_verify($PHt0gjv8TbmLTQCWVB81, $data['data_user'][0]->password)) {
            session_start();
            session_destroy();
            
            session_start();
            $_SESSION['ID']            = $data['data_user'][0]->id;
            $_SESSION['IDadvance']     = $data['data_user'][0]->id_advance;
            $_SESSION['User']          = $data['data_user'][0]->user;
            $_SESSION['Permissions']   = $data['data_user'][0]->permissions;
            $_SESSION['Email']         = $data['data_user'][0]->email;
            $_SESSION['Firstname']     = $data['data_user'][0]->firstname;
            $_SESSION['Secondname']    = $data['data_user'][0]->secondname;
            $_SESSION['Message']       = $data['data_user'][0]->Message;
            $_SESSION['Time']          = date("Y-m-d H:m:s");

            $data['url'] = INDEX_PAGE . "dashboard/admin/?since=origin#";
            
            $data['session'] = $_SESSION;

            $this->load->view('loop/header', $data);
            $this->load->view('login/check', $data);
            $this->load->view('loop/footer', $data);
        } else {
            $x = INDEX_PAGE . "user/login?error=102&since=" . $since . "&sha1=" . $sha1;
            header('Location: '.$x);
        }
    }    
    //--->
    public function password()
    {
        $sha1  = random_string('sha1', 16);
        $data['sha1']            = $sha1;
        $data['page_title']      = "";
        $data['sub_page_title']  = 'User';
        $data['sub_page_title2'] = 'Login';
        $data['css']             = 'login';
        $data['js']              = 'login';

        $this->load->view('loop/header', $data);
            $this->load->view('login/lost', $data);
        $this->load->view('loop/footer', $data);
    }
    //--->
//----->
}