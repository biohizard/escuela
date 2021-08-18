<!-- All -->
<div class="container-fluid">
  <div class="row">
    <div class="col-8 offset-2">

      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2 text-capitalize">lista de alumnos</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group me-2">
            <button type="button" class="btn btn-sm btn-outline-secondary text-capitalize" id="historial">Historial</button>
          </div>
          
            <div class="btn-group" role="group">
              <button id="btnGroupDrop1" type="button" class="btn dropdown-toggle btn-sm btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16"><path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/><path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/></svg>  
                grado
              </button>
              <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <li><a class="dropdown-item filtro" href="#" id="n_primero" S>primero</a></li>
                <li><a class="dropdown-item filtro" href="#" id="n_segundo" S>segundo</a></li>
              </ul>
            </div>
          

        </div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col"><p class="text-uppercase">#      </p></th>
            <th scope="col"><p class="text-uppercase">id     </p></th>
            <th scope="col"><p class="text-uppercase">nombre </p></th>
            <th scope="col"><p class="text-uppercase">grado  </p></th>
            <th scope="col"><p class="text-uppercase">grupo  </p></th>
            <th scope="col"><p class="text-uppercase">maestra</p></th>
          </tr>
        </thead>
        <tbody id="loadAlumnos"></tbody>
      </table>
    </div>
  </div>
</div>
<!-- All -->