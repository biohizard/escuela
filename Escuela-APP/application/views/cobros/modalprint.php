<!--Begin: FICHA DE INSCRIPCION Modal -->
<div class="modal" id="ModalPrint" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">

            <!--Begin: Header -->
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalToggleLabel">Ticket AUSUBEL</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <!--End: Header -->

            <!--Begin: Body -->
            <div class="modal-body">

                <div class="container" id="printTicketX">
                    <div class="row">
                        <!-- Ticket -->
                        <div class="col-12" id="colTicketPrint">
                        <h4 class="d-flex justify-content-between align-items-center mb-3">
                            <span class="text-primary text-capitalize">ticket print</span>
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
                                <span  class="text-primary text-capitalize" id="cobrotextId_x">Id Alumno</span>
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
                                <span class="text-primary text-capitalize" id="textprecio_costo_print">$00.00</span>
                                <br>
                            </div>                
                            
                            </li>

                            <!-- costo -->
                            <li class="list-group-item d-flex justify-content-between lh-sm d-none" id="configDpaShow">
                            <div>
                                <h6 class="my-0 text-capitalize">d.p.a</h6>
                                <small class="text-muted text-capitalize">por pagar</small>
                            </div>
                            <div>
                                <span class="text-primary text-capitalize" id="text_change_dpa_print">$00.00</span>
                                <br>
                            </div>                
                            </li>
                                        

                            <!-- costo -->
                            <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6    class="my-0 text-capitalize">resta</h6>
                                <small class="text-muted text-capitalize">por pagar</small>
                            </div>
                            <div>
                                <span class="text-primary text-capitalize" id="text_precio_change_x_print">$00.00</span>
                                <br>
                            </div>     
                            
                            </li>

                            <!-- costo -->
                            <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6    class="my-0 text-capitalize">pago</h6>
                                <small class="text-muted text-capitalize">por pagar</small>
                            </div>
                            <div>
                                <span class="text-capitalize" id="print_pago_print">$00.00</span>
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
                            <strong id="print_total_print">$00.000</strong>
                            <input type="hidden"  value="resta" id="val_precio_total" disable>

                            </li>
                        </ul>
                        
                        </div>
                        <!-- Ticket -->
                    </div>
                </div>

            </div>
            <!--End: Body -->

            <!--Begin: Footer -->
            <div class="modal-footer">
                    <button class="btn btn-primary" id="btnPrint">imprimir ticket</button>
            </div>
            <!--End: Footer -->

        </div>
    </div>
</div>
<!--End: FICHA DE INSCRIPCION Modal -->

