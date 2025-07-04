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
  <?php include('./header.php') ?>
  <div class="submitImage">
    <!-- issetは変数が宣言されていて、かつ中身が空(null)じゃないことを確認 -->
    <?php if(isset($_GET['id'])){?>
      <form action="../updateImage.php?id=<?php echo($_GET['id']); ?>" method="post" enctype="multipart/form-data">
    <?php } else { ?>
    <!-- 送信ボタンを押したタイミングでpostImage.phpが読み込まれ実行されるアクション -->
      <form action="../postImage.php" method="post" enctype="multipart/form-data">
    <?php } ?>
        <img id="preview">
        <input type="file" name="file" onchange="previewFile(this);">
        <button type="submit" name="submit">Envoyer</button>
      </form>
    <button onclick="location.href='./index.php';" class="backButton">Retour</button>
  </div>
</body>
</html>

<script>
  function previewFile(event){
    var fileData = new FileReader();
    fileData.onload = (function() {
      document.getElementById('preview').src = fileData.result;
    });
    fileData.readAsDataURL(event.files[0]);
  }
  </script>
