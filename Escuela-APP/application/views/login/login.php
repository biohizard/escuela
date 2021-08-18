<form class="form-signin text-center" action="<?php echo INDEX_PAGE; ?>user/check/?TOKEN=login" method="POST" enctype="application/x-www-form-urlencoded">
    <i class="bi-shop" style="font-size: 5rem; color: cornflowerblue;"></i>
    <h1 class="h3 mb-3 fw-normal text-uppercase">Colegio ausubel</h1>
    <label for="inputEmail" class="sr-only">Usuario</label>
    <input name="LSf47vWou0wNVEsEuT1i" type="text" id="inputEmail" class="form-control" placeholder="USUARIO" required autofocus>
    <label for="inputPassword" class="sr-only">Password</label>
    <input name="PHt0gjv8TbmLTQCWVB81" type="password" id="inputPassword" class="form-control" placeholder="PASSWORD" required>
    <button class="btn btn-lg btn-primary btn-block" type="submit">CONTINUAR</button>
    <p class="mt-5 mb-3 text-muted">&copy;Colegio Ausubel - 2021</p>
    <h6 class="mt-5 mb-3 text-muted d-none">
        <?php echo $sha1; ?>
    </h6>
</form>