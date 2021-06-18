<?php
$request = preg_replace("|/*(.+?)/*$|", "\\1", $_SERVER['PATH_INFO']);
$uri = explode('/', $request);
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= $title ?></title>
    <link href="/asset/css/bootstrap.min.css" rel="stylesheet">
      <?php
        if($uri[1] === null) :
      ?>
            <link rel="stylesheet" type="text/css" href="/asset/DataTables/datatables.min.css"/>
      <?php endif; ?>
  </head>
  <body>
    <div class="container">
        <?= $isi ?>
    </div>
    <script src="/asset/js/jquery-360.min.js"></script>
    <script src="/asset/js/bootstrap.min.js"></script>
    <?php
    if($uri[1] === null) :
        ?>
        <script type="text/javascript" src="/asset/DataTables/datatables.min.js"></script>
        <script>
            $(document).ready(function() {
                $('.table').DataTable();
            } );
        </script>
    <?php endif; ?>
  </body>
</html>