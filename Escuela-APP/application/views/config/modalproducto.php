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
                            <h2 class="h2 text-uppercase text-center">Ficha de Inscripcion</h2> 
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