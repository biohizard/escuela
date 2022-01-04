<!-- All -->
<div class="container-fluid">
    <div class="row">
        <div class="col-10 offset-1">

            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2 text-capitalize">historial alumno</h1>
                
                <button data-bs-toggle="modal" href="#modalUpdate" aria-current="page" id="modificarAlumno" type="button" class="btn btn-warning text-capitalize">modificar</button>
            </div>                      
                <div class="row">

                    <div class="col-4">
                        <div class="row">

                            <p class="fs-4 text text-uppercase">datos generales</p>
                            <input type="hidden" id="token" value="<?php echo $_GET['token'];?>">
                            <input type="hidden" id="id"    value="<?php echo $_GET['id'];?>">

                            <ul class="list-group list-group-flush">
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                    <div class="fw-bold">ID</div>
                                    <span class="text-uppercase text-primary" id="data_id">ID alumno</span>
                                    </div>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                    <div class="fw-bold">Nombre Del Alumno</div>
                                    <span class="text-uppercase text-primary" id="data_nombre">nombre alumno</span>
                                    </div>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                    <div class="fw-bold">Fecha De Nacimiento</div>
                                    <span class="text-uppercase text-primary" id="data_fecha">fecha de nacimiento</span>
                                    </div>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                    <div class="fw-bold">Curp Del Alumno</div>
                                    <span class="text-uppercase text-primary" id="data_curpalumno">curp alumno</span>
                                    </div>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                    <div class="fw-bold">Sexo Del Alumno</div>
                                    <span class="text-uppercase text-primary" id="data_sexo">sexo alumno</span>
                                    </div>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                    <div class="fw-bold">Edad Del Alumno</div>
                                    <span class="text-uppercase text-primary" id="data_edad">edad del alumno</span>
                                    </div>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                    <div class="fw-bold">Estatura Del Alumno</div>
                                    <span class="text-uppercase text-primary" id="data_estatura">estatura alumno</span>
                                    </div>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                    <div class="fw-bold">Tipo De Sangre</div>
                                    <span class="text-uppercase text-primary" id="data_sangre">tipo de sangre alumno</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="row">
                            <p class="fs-4 text text-uppercase">datos tutor</p>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                    <div class="fw-bold">tutor</div>
                                    <span class="text-uppercase text-primary" id="data_tutor">tutor</span>
                                    </div>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                    <div class="fw-bold">parentesco</div>
                                    <span class="text-uppercase text-primary" id="data_parentesco">parentesco</span>
                                    </div>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                    <div class="fw-bold">curp tutor</div>
                                    <span class="text-uppercase text-primary" id="data_curptutor">curp tutor</span>
                                    </div>
                                </li>

                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                    <div class="fw-bold">Telefono De Contacto</div>
                                    <span class="text-uppercase text-primary" id="data_tel1">telefono alumno</span>
                                    </div>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                    <div class="fw-bold">Telefono Secundario Del Alumno</div>
                                    <span class="text-uppercase text-primary" id="data_tel2">telefono secundario del alumno</span>
                                    </div>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                    <div class="fw-bold">Direccion Del Alumno</div>
                                    <span class="text-uppercase text-primary" id="data_direccion">direccion alumno</span>
                                    </div>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                    <div class="fw-bold">CP Del Alumno</div>
                                    <span class="text-uppercase text-primary" id="data_cp">CP alumno</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="row">
                            <ul class="nav nav-tabs col-12" id="myTab" role="tablist">

                                <li class="nav-item" role="presentation">
                                    <button class="nav-link        text-capitalize" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">datos del grupo</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active text-capitalize" id="homeprincipal-tab" data-bs-toggle="tab" data-bs-target="#homeprincipal" type="button" role="tab" aria-controls="profile" aria-selected="false">datos de la beca</button>
                                </li>
                            </ul>

                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="homeprincipal"    role="tabpanel" aria-labelledby="homeprincipal-tab">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <label for="firstName" class="form-label text-secondary text-capitalize">beca</label>
                                            <p class="fs-6 text text-uppercase text-primary" id="data_beca">beca</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <label for="firstName" class="form-label text-secondary text-capitalize">nivel</label>
                                            <p class="fs-6 text text-uppercase text-primary" id="data_nivel">nivel</p>
                                        </li>
                                        <li class="list-group-item">
                                            <label for="firstName" class="form-label text-secondary text-capitalize">grupo</label>
                                            <p class="fs-6 text text-uppercase text-primary" id="data_grupo">grupo</p>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="col-6">

                        <ul class="nav nav-tabs col-12" id="myTab2" role="tablist">
                            <li class="nav-item" role="presentation">
                            <button class="nav-link active text-capitalize" id="home-tab" data-bs-toggle="tab" data-bs-target="#home2" type="button" role="tab" aria-controls="home" aria-selected="true">colegiaturas</button>
                            </li>
                        </ul>

                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home2" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Mes</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Pago</th>
                                                </tr>
                                            </thead>
                                            <tbody id="historiaAlumno"></tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="tab-pane fade"             id="profile2" role="tabpanel" aria-labelledby="profile-tab">
                                    <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">ID</th>
                                                        <th scope="col">Mes</th>
                                                        <th scope="col">Pago</th>
                                                    </tr>
                                                </thead>
                                                <tbody></tbody>
                                            </table>
                                    </div>
                                </div>
                            </div>

                    </div>
                    <div class="col-6">
                        <h2 class="h2 text-capitalize">historial de pagos</h2>
                        <table class="table table-success table-striped">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Concepto</th>
                                <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody id="loadPagos"></tbody>
                        </table>
                    </div>

                </div>
        </div>
    </div>
</div>
<!-- All -->