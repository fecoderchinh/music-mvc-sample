<!-- view/music/list.php -->
<?php $title = 'Bài Hát Yêu Thích'
?>

<?php ob_start() ?>
	<br>
    <div style="text-align: center;"><h1><?= $title ?></h1></div>
	<br>
	<div class="table-responsive"> 
    <table class="table">
        <thead>
        <tr>
            <th>STT</th>
            <th>Tiêu đề</th>
            <th>Ca sĩ</th>
            <th>Thể loại</th>
            <th>Album</th>
            <th>Năm phát hành</th>
            <th>Chi tiết</th>
            <th>Sửa</th>
            <th>Xóa</th>
        </tr>
        </thead>
        <tbody>
        <?php foreach ($music as $row): ?>
        <tr>
            <td><?= $count+=1 ?></td>
            <td><?= $row['name'] ?></td>
            <td><?= $row['singer'] ?></td>
            <td><?= $row['category'] ?></td>
            <td><?= $row['album'] ?></td>
            <td><?= $row['year'] ?></td>
            <td><a href="/music/detail?id=<?= $row['id'] ?>" class="btn btn-success btn-xs"> Chi tiết</a></td>
            <td><a href="/music/edit?id=<?= $row['id'] ?>" class="btn btn-warning btn-xs"><span class="glyphicon glyphicon-edit"></span> Sửa</a></td>
            <td><a href="/music/delete?id=<?= $row['id']?>" onclick="return confirm('Bạn muốn xóa bài hát này?')" class="btn btn-danger btn-xs"> <span class="glyphicon glyphicon-trash"></span> Xóa</a></td>
        </tr>
        <?php endforeach ?>
        </tbody>
    </table>
	</div>
    <br>
    <a href="/music/create" class="btn btn-primary btn-sm"><span class="glyphicon glyphicon-plus"></span> Thêm mục mới</a>
<?php $isi = ob_get_clean() ?>

<?php include 'view/template.php' ?>