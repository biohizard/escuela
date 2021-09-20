<!-- All -->
<div class="container">
  <div class="row">

    <div class="col-12">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2 text-uppercase">cobros colgiatura</h1></div>
    </div>
  
  <!-- Begin: 3 COL -->
    <!-- Buscar -->
    <div class="col-4" id="colBuscar">
      <h4 class="d-flex justify-content-between align-items-center mb-3"><span class="text-primary text-capitalize">buscar</span></h4>

      <div class="col-sm-12">  
        <input type="text"   class="form-control" id="firstName" placeholder="ID Alumno" value="" required="">
        <div class="invalid-feedback">Valid first name is required.</div>
      </div>

      <!-- Tipo Efectivo -->
      <div class="col-sm-12 mt-4 d-none" id="tipoefectivo">
        <h5 class="d-flex justify-content-between align-items-center mb-3"><span class="text-primary text-capitalize">efectivo</span></h5>


              <ul class="nav nav-tabs  cole-hidden d-none" id="myTab" role="tablist">
                <li class="nav-item" role="presentation"><button class="nav-link" id="dos-tab" data-bs-toggle="tab" data-bs-target="#dos" type="button" role="tab" aria-controls="dos" aria-selected="false">Servicios</button></li>
                <li class="nav-item" role="presentation"><button class="nav-link" id="tres-tab" data-bs-toggle="tab" data-bs-target="#tres" type="button" role="tab" aria-controls="tres" aria-selected="false">Colegiaturas</button></li>
              </ul>

              

              <div class="tab-content cole-hidden d-none" id="myTabContent">
                <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="dos-tab">
                  <!-- A -->
                  <div class="row">
                    <div class="table-responsive table-striped">
                      <table class="table">
                        <tr>
                          <th scope="col">seguro</th>
                          <td>material</th>
                          <td>inscripcion</th>
                        </tr>
                        <tr>
                          <th scope="row" id="name_seguro">pagado / no pagado</th>
                          <td id="name_material">pagado / no pagado</td>
                          <td id="name_inscripcion">pagado / no pagado</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <!-- A -->
                </div>
                <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="tres-tab">

                  <div class="table-responsive table-striped">
                    <table class="table">
                      <tr>
                        <th scope="row" id="txt_col_1"> 1ª ½ DE AGOSTO</th>
                        <td id="txt_col_2"> SEPTIEMBRE </th>
                        <td id="txt_col_3"> OCTUBRE </th>
                        <td id="txt_col_4"> NOVIEMBRE </th>
                        <td id="txt_col_5"> DICIEMBRE </th>
                        <td id="txt_col_6"> 2ª ½ DE AGOSTO</th>
                        <td id="txt_col_7"> ENERO </th>
                        <td id="txt_col_8"> FEBRERO </th>
                        <td id="txt_col_9"> MARZO </th>
                        <td id="txt_col_10">ABRIL  </th>
                        <td id="txt_col_11">MAYO </th>
                        <td id="txt_col_12">JUNIO </th>
                        <td id="txt_col_13">JULIO </th>
                      </tr>
                      <tr>
                        <th scope="row" id="name_col_1">pagado / no pagado</th>
                        <td id="name_col_2">pagado / no pagado</td>
                        <td id="name_col_3">pagado / no pagado</td>
                        <td id="name_col_4">pagado / no pagado</td>
                        <td id="name_col_5">pagado / no pagado</td>
                        <td id="name_col_6">pagado / no pagado</td>
                        <td id="name_col_7">pagado / no pagado</td>
                        <td id="name_col_8">pagado / no pagado</td>
                        <td id="name_col_9">pagado / no pagado</td>
                        <td id="name_col_10">pagado / no pagado</td>
                        <td id="name_col_11">pagado / no pagado</td>
                        <td id="name_col_12">pagado / no pagado</td>
                        <td id="name_col_13">pagado / no pagado</td>
                      </tr>
                    </table>
                  </div>

                </div>
              </div>
              


      </div>
      <!-- Tipo Efectivo -->

      <!-- Tipo Deposito -->
      <div class="col-sm-12 mt-4 d-none" id="tipodeposito">
        
        <h5 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-primary text-capitalize">deposito bancario</span>
        </h5>

        <textarea name="textarea" rows="10" id="datosTicket" class="col-sm-12 form-control"  placeholder="Datos del ticket del deposito" value="" ></textarea>

      </div>
      <!-- Tipo Deposito -->

      <div class="col-sm-12 mt-4">
      
        <div class="col-sm-12"><label for="firstName" class="form-label text-uppercase">colegiatura</label>
                  <select class="form-control" id="cobros_serpro" disabled>
                    <option value="null">- seleccionar -</option>
                  </select>
                  <div class="invalid-feedback">Valid first name is required.</div>
                </div>
        </div>
        <div class="col-sm-12 my-4"><label for="firstName" class="form-label text-uppercase">pago</label>
          <input type="text" class="form-control" id="precio_PorPagar"  placeholder="" value="" required="" disabled> 
          <div class="invalid-feedback">Valid first name is required.</div>
        </div>
        <div class="col-sm-12 my-4">
            <button class="w-100 btn btn-warning btn-lg text-uppercase" type="submit" id="btnClearCobro">limpiar cobro</button>  
        </div>
      </div>
      

    <!-- Buscar -->

    <!-- Historial -->
    <div class="col-4 d-none" id="colHistorial">
      <h4 class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-primary text-capitalize">historial</span>
      </h4>
      <!-- x -->
      <ul class="list-group mb-3" id="historiaAlumno">
        <li class="list-group-item d-flex justify-content-between lh-sm">
          <h6 class="my-0 text-capitalize">historial</h6>
          <small class="text-muted text-capitalize">colegiaturas</small>
        </li>
      </ul>
      <!--  x -->
    </div>
    <!-- Historial -->

    <!-- Ticket -->
    <div class="col-4 d-none" id="colTicket">
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
                      

        <!-- costo -->
        <li class="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6    class="my-0 text-capitalize">resta</h6>
            <small class="text-muted text-capitalize">por pagar</small>
          </div>
          <div>
            <span class="text-primary text-capitalize" id="text_precio_change_x">$00.00</span>
            <br>
            <input type="hidden"  value="resta" id="precio_change_x" disable>
          </div>     
          
        </li>

        <!-- costo -->
        <li class="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6    class="my-0 text-capitalize">pago</h6>
            <small class="text-muted text-capitalize">por pagar</small>
          </div>
          <div>
            <span class="text-capitalize" id="print_pago">$00.00</span>
          </div>
        </li>

        <li class="list-group-item d-flex justify-content-between bg-light d-none">
          <div class="text-success">
            <h6 class="my-0">Descuentos</h6>
            <small>Descuento por aplicar</small>
          </div>
          <div>
            <span class="text-success" id="print_descuento">0%</span></br>
            <span class="text-success" id="print_descuento_money">$00.00</span>
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between bg-light d-none">
          <div class="text-danger">
            <h6 class="my-0">Intereses</h6>
            <small>interés por aplicar</small>
          </div>
          <div>
            <span class="text-danger" id="print_interes">0%</span></br>
            <span class="text-danger" id="print_interes_money">$00.00</span>
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

      <button class="w-100 btn btn-primary btn-lg text-uppercase d-none" type="submit" id="btnSaveCobro"   >generar cobro</button>
      <button class="w-100 btn btn-primary btn-lg text-uppercase d-none" type="submit" id="btnSaveDeposito">registrar deposito</button>
    </div>
    <!-- Ticket -->
  <!-- End: 3 COL -->

  </div>
</div>
<!-- All -->

<div class="row d-none">
  <div class="col-4">
    <ul class="list-group">
      
      <li class="list-group-item">Colegiatura base:     <input type="text" id="config_costo"                  value="0"       disabled></li>  
      <li class="list-group-item">Colegiatura:          <input type="text" id="config_colegiatura"            value="0"          disabled></li>
      
      <li class="list-group-item">1 Agosto:             <input type="text" id="config_1agosto"                value="0"       disabled></li>  
      <li class="list-group-item">2 Agosto:             <input type="text" id="config_2agosto"                value="0"       disabled></li>  

      <li class="list-group-item">Colegiatura especial: <input type="text" id="config_colegiatura_especial"   value="0"          disabled></li>

      <li class="list-group-item">inscripcion:          <input type="text" id="config_inscripcion"            value="0"          disabled></li>
      <li class="list-group-item">seguro:               <input type="text" id="config_seguro"                 value="0"          disabled></li>
      <li class="list-group-item">material:             <input type="text" id="config_material"               value="0"          disabled></li>
       
      <li class="list-group-item">Interes:              <input type="text" id="config_interes"                value="0"          disabled></li>
      <li class="list-group-item">DPA:                  <input type="text" id="config_dpa"                    value="0"          disabled></li>

      <li class="list-group-item">Fecha hoy:            <input type="text" id="config_fechahoy"               value="<?php echo Date("Y-m-d"); ?>" disabled></li>
    </ul>

    <ul class="list-group">
      <li class="list-group-item">fecha efectivo </li>
      <li class="list-group-item">Fecha mes:            <input type="text" id="config_mes"                  value="2021-08-01" disabled></li>
      <li class="list-group-item">Fecha DPA:            <input type="text" id="config_fechadpa"             value="2021-09-15" disabled></li>
      <li class="list-group-item">Fecha Interes:        <input type="text" id="config_fechainteres"         value="2021-09-30" disabled></li>
    </ul>

    <ul class="list-group">
      <li class="list-group-item">fecha deposito </li>
      <li class="list-group-item">Fecha mes:            <input type="text" id="config_depo_mesB"             value="2021-08-01" disabled></li>
      <li class="list-group-item">Fecha DPA:            <input type="text" id="config_depo_fechadpaB"        value="2021-09-01" disabled></li>
      <li class="list-group-item">Fecha Interes:        <input type="text" id="config_depo_fechainteresB"    value="2021-09-10" disabled></li>
    </ul>      
  </div>

  <div class="col-4">
    <ul class="list-group" id="dataColegiatura">

    </ul>
  </div>

  <div class="col-4">
    <ul class="list-group">
      <li class="list-group-item">Ex alumno:          <input type="text" id="exalumno"   value="no" disabled></li>
      <li class="list-group-item">mes:                <input type="text" id="mes_actual" value="<?php echo Date("n"); ?>" disabled></li>
      <li class="list-group-item">colegiatura actual: <input type="text" id="col_actual" value="00.00" disabled></li>
    </ul>
  </div>  
</div>

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