<!DOCTYPE html>
<html lang="fr">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet"  href="style.css">
	<title>SIGN UP</title>
</head>
<body>
     <form action="signup-check.php" method="post">
     	<h2>SIGN UP</h2>
          <!-- URLのクエリパラメータにerrorがあれば、その内容をエラーメッセージとして表示。同様に、成功メッセージも表示 -->
     	<?php 
          if (isset($_GET['error'])) { ?>
     		<p class="error"><?php echo htmlspecialchars($_GET['error'])?></p>
     	<?php } ?>

          <?php if (isset($_GET['success'])) { ?>
               <p class="success"><?php echo htmlspecialchars($_GET['success'])?></p>
          <?php } ?>

          <label>Name</label>
          <!-- 「name」パラメータが設定されているか確認。設定されていれば、その値をvalue属性に入れて、入力欄に表示。設定されていなければ、空の入力欄を表示。 -->
          <?php if (isset($_GET['name'])) { ?>
               <input type="text" 
                      name="name" 
                      placeholder="Name"
                      value="<?php echo $_GET['name']; ?>"><br>
          <?php }else{ ?>
               <input type="text" 
                      name="name" 
                      placeholder="Name"><br>
          <?php }?>

          <label>User Name</label>
          <?php if (isset($_GET['uname'])) { ?>
               <input type="text" 
                      name="uname" 
                      placeholder="User Name"
                      value="<?php echo $_GET['uname']; ?>"><br>
          <?php }else{ ?>
               <input type="text" 
                      name="uname" 
                      placeholder="User Name"><br>
          <?php }?>


     	<label>Password</label>
     	<input type="password" 
                 name="password" 
                 placeholder="Password"><br>

          <label>Re Password</label>
          <input type="password" 
                 name="re_password" 
                 placeholder="Re_Password"><br>

     	<button type="submit">Sign Up</button>
          <a href="index.php" class="ca">Already have an account?</a>
     </form>
</body>
</html>

