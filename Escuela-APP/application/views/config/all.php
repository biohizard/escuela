<div class="container-fluid">
    <div class="row">
        <div class="col-8 offset-2">
            <h1 class="display-4 fw-normal">Configuracion</h1>
            <p class="fs-5 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan pulvinar nulla, eu tincidunt lectus rhoncus vel. Etiam quis dictum sapien. Donec eget neque ex..</p>
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="nav-home-tab"      data-bs-toggle="tab" data-bs-target="#nav-home"      type="button" role="tab" aria-controls="nav-home"      aria-selected="true">Niveles         </button>
                    <button class="nav-link"        id="nav-productos-tab" data-bs-toggle="tab" data-bs-target="#nav-productos" type="button" role="tab" aria-controls="nav-productos" aria-selected="true">Productos       </button>
                    <button class="nav-link"        id="nav-fechas-tab"    data-bs-toggle="tab" data-bs-target="#nav-fechas"    type="button" role="tab" aria-controls="nav-fechas"    aria-selected="true">Fechas Efectivo </button>
                    <button class="nav-link"        id="nav-fechas2-tab"    data-bs-toggle="tab" data-bs-target="#nav-fechas2"  type="button" role="tab" aria-controls="nav-fechas2"   aria-selected="true">Fechas Deposito </button>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade active show " id="nav-home"      role="tabpanel" aria-labelledby="nav-home-tab">
                
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h3 class="h3">Niveles</h3>
                        <div class="btn-toolbar mb-2 mb-md-0">
                            <div class="btn-group me-2">
                                <button type="button" id="btnModificar" class="show_txt btn btn-sm btn-outline-secondary">Modificar</button>
                                <button type="button" id="btnGuardar"   class="show_val btn btn-sm btn-outline-secondary">Guardar</button>
                            </div>
                        </div>
                    </div>

                    <ul class="list-group mb-3">

                        <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div class="col-6">
                                <h6    class="my-0">Colegiatura</h6>
                                <small class="text-muted">Colegiatura descripcion</small>
                            </div>
                            <span  id="txt_colegiatura" class="show_txt text-muted">$00.00</span>
                            <input id="val_colegiatura" class="show_val form-control" type="text" placeholder="" value="00.00" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </li>
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div class="col-6">
                                <h6    class="my-0">Colegiatura con descuento</h6>
                                <small class="text-muted">Colegiatura con descuento descripcion</small>
                            </div>
                            <span  id="txt_colegiaturades" class="show_txt text-muted">$00.00</span>
                            <input id="val_colegiaturades" class="show_val form-control" type="text" placeholder="" value="00.00" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </li>
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div class="col-6">
                                <h6    class="my-0">1ra Colegiatura de Agosto</h6>
                                <small class="text-muted">1ra Colegiatura de Agosto descripcion</small>
                            </div>
                            <span  id="txt_1Agosto" class="show_txt text-muted">$00.00</span>
                            <input id="val_1Agosto" class="show_val form-control" type="text" placeholder="" value="00.00" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </li>
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div class="col-6">
                                <h6    class="my-0">2ra Colegiatura de Agosto</h6>
                                <small class="text-muted">2ra Colegiatura de Agosto descripcion</small>
                            </div>
                            <span  id="txt_2Agosto" class="show_txt text-muted">$00.00</span>
                            <input id="val_2Agosto" class="show_val form-control" type="text" placeholder="" value="00.00" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </li>
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div class="col-6">
                                <h6    class="my-0">Colegiatura especial</h6>
                                <small class="text-muted">Colegiatura especial descripcion</small>
                            </div>
                            <span  id="txt_colegiaturaEsp" class="show_txt text-muted">$00.00</span>
                            <input id="val_colegiaturaEsp" class="show_val form-control" type="text" placeholder="" value="00.00" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </li>                                                                                                

                        <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div class="col-6">
                                <h6    class="my-0">Inscripcion</h6>
                                <small class="text-muted">Inscripcion descripcion</small>
                            </div>
                            <span  id="txt_inscripcion" class="show_txt text-muted">$00.00</span>
                            <input id="val_inscripcion" class="show_val form-control" type="text" placeholder="" value="00.00" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </li>
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div class="col-6">
                                <h6    class="my-0">Seguro</h6>
                                <small class="text-muted">Seguro descripcion</small>
                            </div>
                            <span  id="txt_seguro" class="show_txt text-muted">$00.00</span>
                            <input id="val_seguro" class="show_val form-control" type="text" placeholder="" value="00.00" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </li>
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div class="col-6">
                                <h6    class="my-0">Material</h6>
                                <small class="text-muted">Material descripcion</small>
                            </div>
                            <span  id="txt_material" class="show_txt text-muted">$00.00</span>
                            <input id="val_material" class="show_val form-control" type="text" placeholder="" value="00.00" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </li>
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div class="col-6">
                                <h6    class="my-0">Interes</h6>
                                <small class="text-muted">Interes descripcion</small>
                            </div>
                            <span  id="txt_interes" class="show_txt text-muted">00%</span>
                            <input id="val_interes" class="show_val form-control" type="text" placeholder="" value="00" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </li>
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div class="col-6">
                                <h6    class="my-0">Descuento Pago Anticipado</h6>
                                <small class="text-muted">Descuento Pago Anticipado descripcion</small>
                            </div>
                            <span  id="txt_dpa" class="show_txt text-muted">00%</span>
                            <input id="val_dpa" class="show_val form-control" type="text" placeholder="" value="00" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </li>

                    </ul>

                </div>

                <div class="tab-pane fade"             id="nav-productos" role="tabpanel" aria-labelledby="nav-productos-tab">

                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h3 class="h3">Productos</h3>
                        <div class="btn-toolbar mb-2 mb-md-0">
                            <div class="btn-group me-2">
                                <button type="button" id="btnNuevoProductos" class="show_txt btn btn-sm btn-outline-secondary">Nuevo</button>
                                <button type="button" id="btnActualizarProductos" class="show_txt btn btn-sm btn-outline-secondary">Actualizar</button>
                                
                            </div>
                        </div>
                    </div>

                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Concepto</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Tipo</th>
                            </tr>
                        </thead>
                        <tbody id="productosInfo"></tbody>
                    </table>
                </div>

                <div class="tab-pane fade"             id="nav-fechas" role="tabpanel" aria-labelledby="nav-fechas-tab">

                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h3 class="h3">Fechas Efectivo</h3>
                        <div class="btn-toolbar mb-2 mb-md-0">
                            <div class="btn-group me-2">
                                <button type="button" id="btnActualizarFechas" class="show_txt btn btn-sm btn-outline-secondary">Actualizar</button>
                            </div>
                        </div>
                    </div>

                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Concepto</th>
                            <th scope="col">Mes</th>
                            <th scope="col">Fecha</th>
                            </tr>
                        </thead>
                        <tbody id="fechasInfo"></tbody>
                    </table>
                </div>

                <div class="tab-pane fade"             id="nav-fechas2" role="tabpanel" aria-labelledby="nav-fechas2-tab">

                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h3 class="h3">Fechas Deposito</h3>
                        <div class="btn-toolbar mb-2 mb-md-0">
                            <div class="btn-group me-2">
                                <button type="button" id="btnActualizarFechas2" class="show_txt btn btn-sm btn-outline-secondary">Actualizar</button>
                            </div>
                        </div>
                    </div>

                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Concepto</th>
                            <th scope="col">Mes</th>
                            <th scope="col">Fecha</th>
                            </tr>
                        </thead>
                        <tbody id="fechasInfo2"></tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>