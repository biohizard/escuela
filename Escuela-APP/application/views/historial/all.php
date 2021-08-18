<!-- All -->
<div class="container-fluid">
    <div class="row">
        <div class="col-8 offset-2">

            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2 text-capitalize">historial alumno</h1>
            </div>                      
                <div class="row">
                    <div class="col-12">
                        <div class="row">
                            <p class="fs-4 text text-uppercase">datos generales del alumno</p>
                            <input type="hidden" id="token" value="<?php echo $_GET['token'];?>">
                            <div class="col-12">
                                <label for="firstName" class="form-label text-secondary text-capitalize">Nombre del alumno </label>
                                <p class="fs-6 text text-uppercase text-primary" id="data_nombre">nombre alumno</p>
                            </div>
                            <div class="col-6">
                                <label for="firstName" class="form-label text-secondary text-capitalize">fecha de nacimiento</label>
                                <p class="fs-6 text text-uppercase text-primary" id="data_fecha">fecha de nacimiento</p>
                            </div>
                            <div class="col-6">
                                <label for="firstName" class="form-label text-secondary text-capitalize">edad del alumno</label>
                                <p class="fs-6 text text-uppercase text-primary" id="data_edad">edad del alumno</p>
                            </div>                        
                            <div class="col-3">
                                <label for="firstName" class="form-label text-secondary text-capitalize">curp del alumno </label>
                                <p class="fs-6 text text-uppercase text-primary" id="data_curpalumno">curp alumno</p>
                            </div>
                            <div class="col-3">
                                <label for="firstName" class="form-label text-secondary text-capitalize">sexo del alumno </label>
                                <p class="fs-6 text text-uppercase text-primary" id="data_sexo">sexo alumno</p>
                            </div>
                            <div class="col-3">
                                <label for="firstName" class="form-label text-secondary text-capitalize">estatura del alumno </label>
                                <p class="fs-6 text text-uppercase text-primary" id="data_estatura">estatura alumno</p>
                            </div> 
                            <div class="col-3">
                                <label for="firstName" class="form-label text-secondary text-capitalize">tipo de sangre</label>
                                <p class="fs-6 text text-uppercase text-primary" id="data_sangre">tipo de sangre alumno</p>
                            </div>
                            <div class="col-6">
                            <label for="firstName" class="form-label text-secondary text-capitalize">telefono de contacto</label>
                            <p class="fs-6 text text-uppercase text-primary" id="data_tel1">telefono alumno</p>
                            </div>
                            <div class="col-6">
                            <label for="firstName" class="form-label text-secondary text-capitalize">telefono secundario del alumno </label>
                            <p class="fs-6 text text-uppercase text-primary" id="data_tel2">telefono secundario del alumno</p>
                            </div> 
                            <div class="col-10">
                            <label for="firstName" class="form-label text-secondary text-capitalize">direccion del alumno </label>
                            <p class="fs-6 text text-uppercase text-primary" id="data_direccion">direccion alumno</p>
                            </div>
                            <div class="col-2">
                            <label for="firstName" class="form-label text-secondary text-capitalize">CP del alumno </label>
                            <p class="fs-6 text text-uppercase text-primary" id="data_cp">CP alumno</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="row">
                            <ul class="nav nav-tabs col-12" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                <button class="nav-link active text-capitalize" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">datos de pago</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                <button class="nav-link        text-capitalize" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">datos del grupo</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                <button class="nav-link        text-capitalize" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">datos del tutor</button>
                                </li>
                            </ul>

                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
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
                                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <label for="firstName" class="form-label text-black-50 text-capitalize">tutor</label>
                                            <p class="fs-6 text text-uppercase text-primary" id="data_tutor">tutor</p>      
                                        </li>
                                        <li class="list-group-item">
                                            <label for="firstName" class="form-label text-black-50 text-capitalize">parentesco</label>
                                            <p class="fs-6 text text-uppercase text-primary" id="data_parentesco">parentesco</p>      
                                        </li>
                                        <li class="list-group-item">
                                            <label for="firstName" class="form-label text-black-50 text-capitalize">curp tutor</label>
                                            <p class="fs-6 text text-uppercase text-primary" id="data_curptutor">curp tutor</p>      
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
                            <li class="nav-item" role="presentation">
                            <button class="nav-link        text-capitalize" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile2" type="button" role="tab" aria-controls="profile" aria-selected="false">datos del grupo</button>
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