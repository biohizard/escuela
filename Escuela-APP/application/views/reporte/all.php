<div class="container">
    <div class="row">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2 text-capitalize">reportes de pagos y ventas  <span id="totalCP">$ 00.00</span></h1>
            <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group me-2">
                    <button type="button" class="btn btn-sm btn-outline-secondary" id="hoy">Hoy</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary" id="mes">Mes</button>
                </div>
                <input type="date" name="date" id="datetime">
            </div>
      </div>
    </div>
    <div class="row">
        <div class="col-6">

            <h3>colegiaturas</h3>
            <p>Reporte pagos de coelgiaturas.</p>
            
            <div class="table-responsive">
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col"><p class="text-uppercase">#        </p></th>
                        <th scope="col"><p class="text-uppercase">id       </p></th>
                        <th scope="col"><p class="text-uppercase">fecha    </p></th>
                        <th scope="col"><p class="text-uppercase">nombre   </p></th>
                        <th scope="col"><p class="text-uppercase">concepto </p></th>
                        <th scope="col"><p class="text-uppercase">pago     </p></th>
                    </tr>
                    </thead>
                    <tbody id="loadColegiaturas"></table>
                    <P>Total de colegiaturas: <span id="totalColegiatura">$00.00</span></p>
            </div>
        </div>

        <div class="col-6">
            <h3>productos</h3>
            <p>Reporte pagos de productos.</p>
            <table class="table">
                <thead>
                <tr>
                    <th scope="col"><p class="text-uppercase">#        </p></th>
                    <th scope="col"><p class="text-uppercase">id       </p></th>
                    <th scope="col"><p class="text-uppercase">fecha    </p></th>
                    <th scope="col"><p class="text-uppercase">nombre   </p></th>
                    <th scope="col"><p class="text-uppercase">concepto </p></th>
                    <th scope="col"><p class="text-uppercase">pago     </p></th>
                </tr>
                </thead>
                <tbody id="loadProductos"></tbody>
            </table>
            <P>Total de productos: <span id="totalProductos">$00.00</span></p>
        </div>
    </div>

  </div>
</div>