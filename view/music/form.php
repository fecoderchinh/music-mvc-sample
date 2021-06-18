<!-- view/music/form.php -->
<?php
$request = preg_replace("|/*(.+?)/*$|", "\\1", $_SERVER['PATH_INFO']);
$uri = explode('/', $request);

// Set form action
if ($uri[1] === 'edit') {
    $title = 'Sửa';
    $form_action = "/music/edit?id=" . $_GET['id'];
} else {
    $title = 'Thêm';
    $form_action = "/music/create";
}

$valName = isset($music['name']) ? $music['name'] : '';
$valSinger = isset($music['singer']) ? $music['singer'] : '';
$valCategory = isset($music['category']) ? $music['category'] : '';
$valAlbum = isset($music['album']) ? $music['album'] : '';
$valYear = isset($music['year']) ? $music['year'] : '';
$valId = isset($music['id']) ? $music['id'] : '';
?>

<?php ob_start() ?>
    <h1><?= $title ?></h1>

    <form action="<?= $form_action ?>" method="post">
        <?php if ($valId): ?>
            <input type="hidden" name="id" value="<?= $valId ?>">
        <?php endif ?>

        <div class="form-group">
            <label for="name">Tên bài hát</label>
            <input name="name" type="text" value="<?= $valName ?>" class="form-control" id="name" placeholder="Nhập tên bài hát">
        </div>

        <div class="form-group">
            <label for="singer">Ca sĩ</label>
            <input name="singer" type="text" value="<?= $valSinger ?>" class="form-control" id="singer" placeholder="Nhập tên ca sĩ">
        </div>

        <div class="form-group">
            <label for="category">Thể loại</label>
            <input name="category" type="text" value="<?= $valCategory ?>" class="form-control" id="category" placeholder="Nhập thể loại">
        </div>

        <div class="form-group">
            <label for="album">Album</label>
            <input name="album" type="text" value="<?= $valAlbum ?>" class="form-control" id="album" placeholder="Album">
        </div>

        <div class="form-group">
            <label for="year">Năm phát hành</label>
            <input name="year" type="text" value="<?= $valYear ?>" class="form-control" id="year" placeholder="Năm phát hành, vd: 2021">
        </div>

        <button class="btn btn-primary" type="submit"><?= $title ?></button>
    </form>
<?php $isi = ob_get_clean() ?>

<?php include 'view/template.php' ?>