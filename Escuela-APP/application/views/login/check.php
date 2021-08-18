<meta http-equiv="refresh" content="0; url=<?php echo $url; ?>">
<div class="container">
    <div class="row">
        <div class="col-12 text-center">
            <i class="bi-shop" style="font-size: 5rem; color: cornflowerblue;"></i>
            <h1 class="h3 mb-3 fw-normal text-uppercase">Colegio ausubel</h1>
            <?php echo "<h5 class=\"text-uppercase\">" . $session['Firstname'] . " " . $session['Secondname'] . "</h5>"; ?>
            <p class="mt-5 mb-3 text-muted">&copy;Colegio Ausubel - 2021</p>
            <h6 class="mt-5 mb-3 text-muted d-none">
                <?php echo $sha1; ?>
            </h6>
        </div>
    </div>
</div>