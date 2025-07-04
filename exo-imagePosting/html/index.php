<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../style.css">
  <title>Aperçu des projets</title>
</head>
<body>
  <?php include('../dbConfig.php')?>
  <?php include('../getDatas.php')?>
  <?php include('./header.php') ?>
  <div class="imageList">
    <?php foreach ($data as $image){ ?>
      <!-- imagesテーブルからSELECT文で取ってきたデータが$dataに入っていて、$imageは1レコード分データが入っているということ -->
      <!-- <img src~ 投稿された全画像は同じフォルダ「../images/」にあるから共通でその先は$imageに入ってる個々の名前を['file_name']カラムを呼び出す -->
      <!-- ?id=<?php echo $image['id']; ?>部分の意味は、?パラメータ変数名=値 "> -->
      <!-- 意味は、URL末尾にidを付けたいからパラメータ変数(?)の名前はidとし、値の呼び方は画像名と同じ"> -->

      <a href="./imageDetail.php?id=<?php echo $image['id']; ?>"><img src="../images/<?php echo $image['file_name']; ?>" alt="photo"></a>
    <?php }; ?>
    
</div>
</body>
</html>