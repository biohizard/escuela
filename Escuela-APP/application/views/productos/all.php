<!-- All -->
<div class="container">
  <div class="row">

    <div class="col-12">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2 text-uppercase">cobros productos</h1></div>
    </div>
  
  <!-- Begin: 3 COL -->
    <!-- Buscar -->
    <div class="col-6">
      <h4 class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-primary text-capitalize">buscar</span>
      </h4>
      <div class="col-sm-12 my-4">
        <input type="text"   class="form-control" id="firstName" placeholder="ID Alumno" value="" required="">
        <div class="invalid-feedback">Valid first name is required.</div>
      </div>

              <div class="col-sm-12"><label for="firstName" class="form-label text-uppercase">producto</label>
                <select class="form-control" id="cobros_serpro" disabled>
                  <option value="null">- seleccionar -</option>
                </select>
                <div class="invalid-feedback">Valid first name is required.</div>
              </div>

              <ul class="nav nav-tabs  cole-hidden d-none" id="myTab" role="tablist">
                <li class="nav-item" role="presentation"><button class="nav-link" id="dos-tab" data-bs-toggle="tab" data-bs-target="#dos" type="button" role="tab" aria-controls="dos" aria-selected="false">Servicios</button></li>
                <li class="nav-item" role="presentation"><button class="nav-link" id="tres-tab" data-bs-toggle="tab" data-bs-target="#tres" type="button" role="tab" aria-controls="tres" aria-selected="false">Colegiaturas</button></li>
              </ul>     

              <div class="col-sm-12 my-4">
                <button class="w-100 btn btn-warning btn-lg text-uppercase" type="submit" id="btnClearCobro">limpiar cobro</button>  
              </div>
              
              <hr class="my-4">
    </div>
    <!-- Buscar -->

    <!-- Ticket -->
    <div class="col-6" id="print_div">
      <h4 class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-primary text-capitalize">ticket</span>
      </h4>

      <ul class="list-group mb-3">

        <li class="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6    class="my-0 text-capitalize">fecha</h6>
            <small class="text-muted text-capitalize">fecha de la generacion del cobro</small>
          </div>
          <div>
            <span  class="text-primary text-capitalize" id="print_fecha"><?php echo $tiempo; ?></span>
            <br>
            <input type="hidden" value="<?php echo $tiempo; ?>" placeholder="0000-00-00" id="configFecha" class="input_x" disabled>
          </div>
        </li>

        <li class="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6    class="my-0 text-capitalize">usuario</h6>
            <small class="text-muted text-capitalize" id="print_usuario">personal quien realizó el cobro</small>
          </div>
          
          <div>
            <span  class="text-primary text-capitalize"><?php echo $Firstname . " " . $Secondname; ?></span>
            <br>
            <input type="hidden" value="<?php echo $_SESSION['IDadvance']?>" placeholder="Usuario Nombre Apellido" id="cobroIdUsuario" class="input_x" disabled>
          </div>

        </li>

        <li class="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6    class="my-0 text-capitalize">ID alumno </h6>
            <small class="text-muted text-capitalize" id="print_usuario">ID quien realizó el cobro</small>
          </div>
          <div>
            <span  class="text-primary text-capitalize" id="cobrotextId">Id Alumno</span>
            <br>
          </div>
        </li>

        <li class="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6    class="my-0 text-capitalize">alumno</h6>
            <span  class="text-muted text-capitalize" id="print_usuario">alumno a quien realizó el cobro</small>
          </div>
          <div>
            <br>
              <span class="text-primary text-capitalize" id="print_alumno">alumno a quien realizó el cobro</span>
              <ul class="d-none input_x">
                <li><input type="hidden" value="id alumno"                       placeholder="Id Alumno"         id="cobroId"        class="input_x" disabled></li>
                <li><input type="hidden" value="id advance alumno"               placeholder="Id Alumno Advance" id="cobroIdadvance" class="input_x" disabled></li>
                <li><input type="hidden" value="alumno a quien realizó el cobro" placeholder="Nombre Alumno"     id="cobroNombre"    class="input_x" disabled></li>
              </ul>                  
          </div>                

        </li>

        <li class="list-group-item d-flex justify-content-between lh-sm d-none">
          
          <div>
            <h6    class="my-0 text-capitalize">historial de pagos</h6>
            <small class="text-muted text-capitalize" id="printAlumnoColegiatura"></small>
          </div>

          <div>
            <span class="text-primary text-capitalize" id="print_alumno">historial de pagos alumno</span>
            <ul class="d-none">Historial
              <li></li>
            </ul>
          </div>

        </li>
        
        <!-- concepto -->
        <li class="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 class="my-0 text-capitalize">concepto</h6>
            <small class="text-muted text-capitalize">concepto del cobro</small>
          </div>
          <div>
            <span class="text-primary text-capitalize" id="textSerpro">servicio o producto</span>
            <br>
            <input type="hidden"     id="cobroSerpro"          value="Servicio o Producto"                       disabled>
            <input type="hidden"     id="cobroIdAdvanceSerpro" value="Id advance Servicio o Producto"                       disabled>
          </div>
        </li>
        
        <!-- resta -->
        <li class="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6    class="my-0 text-capitalize">costo</h6>
            <small class="text-muted text-capitalize">por pagar</small>
          </div>
          <div>
            <span class="text-primary text-capitalize" id="textprecio_costo">$00.00</span>
            <br>
            <input type="hidden" value="costo" id="precio_costo" disabled>
          </div>                
          
        </li>

        <!-- costo -->
        <li class="list-group-item d-flex justify-content-between lh-sm d-none" id="configDpaShow">
          <div>
            <h6 class="my-0 text-capitalize">d.p.a</h6>
            <small class="text-muted text-capitalize">por pagar</small>
          </div>
          <div>
            <span class="text-primary text-capitalize" id="text_change_dpa">$00.00</span>
            <br>
            <input type="hidden"                         id="precio_change_dpa" disabled>
          </div>                
        </li>
                      

          
        <!-- total -->
        <li class="list-group-item d-flex justify-content-between">
          <div>
            <h6    class="my-0 text-capitalize">totaL</h6>
            <small class="text-muted text-capitalize">Por pagar</small>
          </div>
          <strong id="print_total">$00.000</strong>
          <input type="hidden"  value="resta" id="val_precio_total" disable>

        </li>
      </ul>

      <button class="w-100 btn btn-primary btn-lg text-uppercase" type="submit" id="btnSaveCobro">generar cobro</button>
    </div>
    <!-- Ticket -->
  <!-- End: 3 COL -->

  </div>
</div>
<!-- All -->

<style>
  .ui-helper-hidden-accessible {
    display: none
  }

  .ui-front {
    background-color: #fff;
    width: 250px;
    align-content: left;
  }

  .ui-menu-item {
    list-style-type: none;
  }

  .ul.ui-autocomplete.ui-menu {
    z-index: 10000;
    position: relative;
  }

  #ui-id-1 {
    z-index: 10000;
    text-transform: capitalize;
  }
</style>