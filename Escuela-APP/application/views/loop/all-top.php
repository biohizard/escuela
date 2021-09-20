<div class="container">
  <div class="row">
    <main>
      <header class="p-3 mb-3 border-bottom">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="<?php echo INDEX_PAGE; ?>dashboard/admin/?since=origin#" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
              <i class="bi-shop" style="font-size: 2rem; color: cornflowerblue;"></i>
            </a>

            <ul class="nav nav-pills col-12 col-lg-auto me-lg-auto mb-2 justify-content-center text-capitalize mb-md-0">
              <li>                 <a href="<?php echo INDEX_PAGE; ?>alumno/?since=origin#top" class="nav-link px-2 link-secondary">alumnos</a></li>
              <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">cobros</a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="<?php echo INDEX_PAGE; ?>cobros/colegiatura/?since=origin#top">colegiaturas</a></li>
                    <li><a class="dropdown-item" href="<?php echo INDEX_PAGE; ?>cobros/productos/?since=origin#top">productos</a></li>
                  </ul>
              </li>
              <li>                 <a href="<?php echo INDEX_PAGE; ?>dashboard/admin/?since=origin#top" class="nav-link px-2 link-dark">reporte</a></li>            
            </ul>

            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input type="search" class="form-control text-capitalize" placeholder="buscar alumno..." aria-label="Search">
            </form>

            <div class="dropdown text-end">
              <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
              </a>
              <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item text-capitalize" href="<?php echo INDEX_PAGE; ?>config/?since=origin#top">configuacion</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item text-capitalize" href="<?php echo INDEX_PAGE; ?>user/logout">salir</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </main>
  </div>
</div>
