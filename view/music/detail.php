<!-- view/music/detail.php -->
<?php $title = 'Chi tiết bài hát' ?>

<?php ob_start() ?>
    <h1><?= $music['name'] ?></h1>

    <dl>
        <dt>Tên bài hát : </dt>
        <dd><?= $music['name'] ?></dd>
        <dt>Ca sĩ : </dt>
        <dd><?= $music['singer'] ?></dd>
        <dt>Thể loại : </dt>
        <dd><?= $music['category'] ?></dd>
        <dt>Album : </dt>
        <dd><?= $music['album'] ?></dd>
		<dt>Năm phát hành : </dt>
        <dd><?= $music['year'] ?></dd>
    </dl>
<?php $isi = ob_get_clean() ?>

<?php include 'view/template.php' ?>