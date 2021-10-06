<!--Begin: Modal -->
<div class="modal" id="ModalProductoNuevo" aria-hidden="true" aria-labelledby="ModalProductoNuevo" tabindex="-1">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">

            <!--Begin: Header -->
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalToggleLabel">Producto Nuevo</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <!--End: Header -->

            <!--Begin: Body -->
            <div class="modal-body">
                <div class="col-12 p-3 bg-light">             
                            <div class="row">

                                <div class="col-6">
                                    <label for="firstName" class="form-label text-uppercase">Concepto</label>
                                    <input type="text" class="form-control" id="producto_concepto" placeholder="" value="" required="">
                                    <div class="invalid-feedback">Concepto.</div>
                                </div>
                                <div class="col-12"></div>
                                <div class="col-6">
                                    <label for="firstName" class="form-label text-uppercase">Precio</label>
                                    <input type="text" class="form-control" id="producto_precio" placeholder="" value="" required="">
                                    <div class="invalid-feedback">Precio.</div>
                                </div>
                                <div class="col-12"></div>
                                <div class="col-6">
                                    <label for="firstName" class="form-label text-uppercase">Tipo</label>
                                    <input type="text" class="form-control" id="producto_tipo" placeholder="" value="" required="">
                                    <div class="invalid-feedback">Tipo.</div>
                                </div>
                            </div>

            </div>
            </div>
            <!--End: Body -->

            <!--Begin: Footer -->
            <div class="modal-footer">
                    <button class="btn btn-primary" id="btnProductoNuevo">guardarproducto nuevo</button>
            </div>
            <!--End: Footer -->

        </div>
    </div>
</div>
<!--End: Modal -->


<!--Begin: Modal -->
<div class="modal" id="ModalProductoActualizar" aria-hidden="true" aria-labelledby="ModalProductoActualizar" tabindex="-1">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">

            <!--Begin: Header -->
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalToggleLabel">Producto Nuevo</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <!--End: Header -->

            <!--Begin: Body -->
            <div class="modal-body">
                <div class="col-12 p-3 bg-light">             
                            
                            <div class="row">

                                <div class="col-6">
                                    <label for="firstName" class="form-label text-uppercase">Concepto</label>
                                    <input type="text" class="form-control" id="producto_concepto_act" placeholder="" value="" required="">
                                    <div class="invalid-feedback">Concepto.</div>
                                </div>
                                <div class="col-12"></div>
                                <div class="col-6">
                                    <label for="firstName" class="form-label text-uppercase">Precio</label>
                                    <input type="text" class="form-control" id="producto_precio_act" placeholder="" value="" required="">
                                    <div class="invalid-feedback">Precio.</div>
                                </div>
                                <div class="col-12"></div>
                                <div class="col-6">
                                    <label for="firstName" class="form-label text-uppercase">Tipo</label>
                                    <input type="text" class="form-control" id="producto_tipo_act" placeholder="" value="" required="">
                                    <div class="invalid-feedback">Tipo.</div>
                                </div>
                            </div>

            </div>
            </div>
            <!--End: Body -->

            <!--Begin: Footer -->
            <div class="modal-footer">
                    <button class="btn btn-primary" id="btnProductoActualizar">actualizar producto</button>
            </div>
            <!--End: Footer -->

        </div>
    </div>
</div>
<!--End: Modal -->

<!-- FECHAS -->

    <!--Begin: Modal -->
    <div class="modal" id="ModalFechasActualizar" aria-hidden="true" aria-labelledby="ModalFechasActualizar" tabindex="-1">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">

                <!--Begin: Header -->
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalToggleLabel">Fecha Actualizar</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <!--End: Header -->

                <!--Begin: Body -->
                <div class="modal-body">
                    <div class="col-12 p-3 bg-light">             
                                <div class="row">

                                    <div class="col-6">
                                        <label for="firstName" class="form-label text-uppercase">Concepto</label>
                                        <input type="text" class="form-control" id="fecha_concepto" placeholder="" value="colegiatura" required="" disabled>
                                        <div class="invalid-feedback">Concepto.</div>
                                    </div>
                                    <div class="col-12"></div>

                                    <div class="col-6">
                                        <label for="firstName" class="form-label text-uppercase">Fecha</label>
                                        <input type="date" class="form-control" id="fecha_fecha" placeholder="" value="" required="">
                                        <div class="invalid-feedback">Fecha.</div>
                                    </div>
                                </div>

                </div>
                </div>
                <!--End: Body -->

                <!--Begin: Footer -->
                <div class="modal-footer"><button class="btn btn-primary" id="btnFechaActualizar">actualizar fecha</button></div>
                <!--End: Footer -->

            </div>
        </div>
    </div>
    <!--End: Modal -->