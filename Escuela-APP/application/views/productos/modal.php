<!--Begin: FICHA DE INSCRIPCION Modal -->
<div class="modal" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">

            <!--Begin: Header -->
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalToggleLabel">Colegio AUSUBEL</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <!--End: Header -->

            <!--Begin: Body -->
            <div class="modal-body">
                <div class="container">
                    <div class="row">

                        <!--Beging: -->                   
                        <div class="col-12 p-3 bg-light">             
                            <h2 class="h2 text-uppercase text-center">Ficha de Inscripcion</h2> 
                            <div class="row">
                                <div class="col-6">
                                    <!-- Miss -->
                                    <div class="col-sm-12">
                                        <label for="firstName" class="form-label text-uppercase">Nombre de la maestra que Inscribe</label>
                                        <input type="text" class="form-control" id="ins_nombremaestra" placeholder="" value="" required="">
                                        <div class="invalid-feedback">Nombre de la maestra que Inscribe.</div>
                                    </div>
                                    <!-- -->
                                    <div class="col-sm-12">
                                        <label for="firstName" class="form-label text-uppercase">es exalumno</label>
                                        <select class="form-select" aria-label="Disabled select example" id="ins_exalumno">
                                            <option selected>selecionar</option>
                                            <option value="si" >es exalumno si</option>
                                            <option value="no" >es exalumno no</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <!-- Grado a Cursar -->
                                    <div class="col-sm-12">
                                        <label for="firstName" class="form-label text-uppercase">grado a cursar</label>
                                        <select class="form-control" id="ins_gradocursar"></select>
                                        <div class="invalid-feedback">grado a cursar.</div>
                                    </div>
                                    <!-- Metodo de pago -->
                                    <div class="col-12">
                                        <label for="firstName" class="form-label text-uppercase">metodos de pago</label>
                                        <select class="form-control" id="ins_tipopago">
                                            <option value="efectivo">
                                            <P class="text-capitalize"> efectivo </P>
                                            </option>
                                            <option value="deposito">
                                            <P class="text-capitalize"> deposito </P>
                                            </option>
                                        </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <!--End: -->

                        <!--Beging: -->
                        <div class="col-12 p-3 bg-light">
                            <h2 class="h2 text-uppercase text-center">datos del alumno</h2>
                            <div class="row">
                                <div class="col-6">

                                    <!-- nombre -->
                                    <div class="col-sm-12">
                                        <label for="firstName" class="form-label text-uppercase">nombre</label>
                                        <input type="text" class="form-control" id="ins_nombrealumno" placeholder="" value="" required="">
                                        <div class="invalid-feedback">nombre.</div>
                                    </div>
                                    <!-- apellido paterno-->
                                    <div class="col-sm-12">
                                        <label for="firstName" class="form-label text-uppercase">apellido paterno</label>
                                        <input type="text" class="form-control" id="ins_apaternoalumno" placeholder="" value="" required="">
                                        <div class="invalid-feedback">apellido paterno.</div>
                                    </div>
                                    <!-- apellido materno -->
                                    <div class="col-sm-12">
                                        <label for="firstName" class="form-label text-uppercase">apellido materno</label>
                                        <input type="text" class="form-control" id="ins_amaternoalumno" placeholder="" value="" required="">
                                        <div class="invalid-feedback">apellido materno.</div>
                                    </div>

                                </div>
                                <div class="col-6">

                                    <!-- Fecha de nacimiento -->
                                    <div class="col-sm-12">
                                        <label for="firstName" class="form-label text-uppercase">fecha de nacimiento</label>
                                        <input type="date" class="form-control" id="ins_fechanacimiento" placeholder="" value="" required="">
                                        <div class="invalid-feedback">fecha de nacimiento.</div>
                                    </div>
                                    <!-- Edad -->
                                    <div class="col-sm-12">
                                        <label for="firstName" class="form-label text-uppercase">edad</label>
                                        <input type="text" class="form-control" id="ins_edad" placeholder="" value="" required="" disabled>
                                        <div class="invalid-feedback">edad</div>
                                    </div>

                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">

                                    <!-- CURP -->
                                    <div class="col-sm-12">
                                        <label for="firstName" class="form-label text-uppercase">CURP</label>
                                        <input type="text" class="form-control" id="ins_curp" placeholder="" value="" required="" maxlength="18">
                                        <div class="invalid-feedback">CURP.</div>
                                    </div>
                                    <!-- SEXO  -->
                                    <div class="col-sm-12">
                                        <label for="firstName" class="form-label text-uppercase">Sexo</label>
                                        <select class="form-select" aria-label="Disabled select example" id="ins_sexo">
                                            <option selected>selecionar</option>
                                            <option value="femenino" >femenino</option>
                                            <option value="masculino">masculino</option>
                                        </select>
                                        <div class="invalid-feedback">Sexo.</div>
                                    </div>

                                </div>
                                <div class="col-6">

                                    <!-- ESTATURA  -->
                                    <div class="col-sm-12">
                                        <label for="firstName" class="form-label text-uppercase">Estatura</label>
                                        <input type="text" class="form-control" id="ins_estatura" placeholder="" value="" required="">
                                        <div class="invalid-feedback">Estatura.</div>
                                    </div>
                                    <!-- PESO  -->
                                    <div class="col-sm-12">
                                        <label for="firstName" class="form-label text-uppercase">Peso</label>
                                        <input type="text" class="form-control" id="ins_peso" placeholder="" value="" required="">
                                        <div class="invalid-feedback">Peso.</div>
                                    </div>
                                    <!-- TIPO SANGRE  -->
                                    <div class="col-sm-12">
                                        <label for="firstName" class="form-label text-uppercase">Tipo Sanguineo</label>
                                        <input type="text" class="form-control" id="ins_tiposanguineo" placeholder="" value="" required="">
                                        <div class="invalid-feedback">Tipo Sanguineo.</div>
                                    </div>

                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <!-- -->
                                        <div class="col-sm-12">
                                            <label for="firstName" class="form-label text-uppercase">direccion</label>
                                            <input type="text" class="form-control" id="ins_direccion" placeholder="" value="" required="">
                                            <div class="invalid-feedback">nombre de quien lo inscribe.</div>
                                        </div>
                                        <!-- -->
                                        <div class="col-sm-12">
                                            <label for="firstName" class="form-label text-uppercase">C.P.</label>
                                            <input type="text" class="form-control" id="ins_cp" placeholder="" value="" required="">
                                            <div class="invalid-feedback">nombre de quien lo inscribe.</div>
                                        </div>
                                </div>
                                <div class="col-6">
                                    <!-- -->
                                    <div class="col-sm-12">
                                        <label for="firstName" class="form-label text-uppercase">telefono</label>
                                        <input type="text" class="form-control" id="ins_telefono" placeholder="" value="" required="">
                                        <div class="invalid-feedback">nombre de quien lo inscribe.</div>
                                    </div>
                                    <!-- -->
                                    <div class="col-sm-12">
                                        <label for="firstName" class="form-label text-uppercase">telefono recados</label>
                                        <input type="text" class="form-control" id="ins_recados" placeholder="" value="" required="">
                                        <div class="invalid-feedback">nombre de quien lo inscribe.</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <!--End: -->

                        <!--Beging: -->
                        <div class="col-12 p-3 bg-light d-none" id="new">
                            <h2 class="h2 text-uppercase text-center">Para Alumnos de 1er grado</h2> 
                            <div class="row">
                                <div class="col-6">

                                    <!-- -->
                                    <div class="col-sm-12">
                                        <label for="firstName" class="form-label text-uppercase">cuantos años curso de kinder</label>
                                        <input type="text" class="form-control" id="ins_annoskinder" placeholder="" value="" required="">
                                        <div class="invalid-feedback">cuantos años curso de kinder.</div>
                                    </div>

                                    <!-- -->
                                    <div class="col-sm-12">
                                        <label for="firstName" class="form-label text-uppercase">si curso en AUSUBEL nombre de la maestra</label>
                                        <input type="text" class="form-control" id="ins_maestraausubel" placeholder="" value="" required="">
                                        <div class="invalid-feedback">Nombre de la maestra que Inscribe.</div>
                                    </div>

                                    <div class="col-sm-12">
                                        <label for="firstName" class="form-label text-uppercase">Escuela de procedencia</label>
                                        <input type="text" class="form-control" id="ins_procedencia" placeholder="" value="" required="">
                                        <div class="invalid-feedback">Nombre de la maestra que Inscribe.</div>
                                    </div>

                                </div>
                                <div class="col-6">

                                    <!-- -->
                                    <div class="col-sm-12">
                                        <label for="firstName" class="form-label">cuentas con lecto escritura</label>
                                        <select class="form-select" aria-label="Disabled select example" id="ins_lectoescritura">
                                            <option value="null" >--> opciones <--</option>
                                            <option value="si" >si</option>
                                            <option value="no" >no</option>
                                        </select>
                                    </div>
                                    <!-- -->

                                    <div class="col-sm-12">
                                        <label for="firstName" class="form-label text-uppercase">por que</label>
                                        <input type="text" class="form-control" id="ins_lectoescriturapor" placeholder="" value="" required="">
                                        <div class="invalid-feedback">por que.</div>
                                    </div>

                                    <!-- -->
                                    <div class="col-sm-12">
                                        <label for="firstName" class="form-label text-uppercase">tiene algun problema de aprendizaje o lenguaje</label>
                                        <input type="text" class="form-control" id="ins_problema" placeholder="" value="" required="">
                                        <div class="invalid-feedback">tiene algun problema de aprendizaje o lenguaje.</div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <!--End: -->




                        <!--Beging: -->
                        <div class="col-12 p-3 bg-light">
                            <h2 class="h2 text-uppercase text-center">Datos del tutor</h2>
                            <div class="row">
                                <div class="col-6">

                                    <!-- Nombre tutor  -->
                                    <div class="col-sm-12">
                                        <label for="firstName" class="form-label text-uppercase">nombre de quien lo inscribe</label>
                                        <input type="text" class="form-control" id="tutor_tutor" placeholder="" value="" required="">
                                        <div class="invalid-feedback">nombre de quien lo inscribe.</div>
                                    </div>

                                </div>
                                <div class="col-6">

                                    <!-- Parentesco -->
                                    <div class="col-sm-12">
                                        <label for="firstName" class="form-label text-uppercase">parentesco de quien lo inscribe</label>
                                        <input type="text" class="form-control" id="tutor_parentesco" placeholder="" value="" required="">
                                        <div class="invalid-feedback">parentesco de quien lo inscribe.</div>
                                    </div>
                                    <!-- CURP Tutor -->
                                    <div class="col-sm-12">
                                        <label for="firstName" class="form-label text-uppercase">curp tutor</label>
                                        <input type="text" class="form-control" id="tutor_tutocurp" placeholder="" value="" required="">
                                        <div class="invalid-feedback">curp tutor.</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <!--End: -->

                    <div>
                </div>
            </div>
            <!--End: Body -->

            <!--Begin: Footer -->
            <div class="modal-footer">
                    <button class="btn btn-primary" id="generarinscripcion">generar inscripcion</button>
            </div>
            <!--End: Footer -->

        </div>
    </div>
</div>
<!--End: FICHA DE INSCRIPCION Modal -->