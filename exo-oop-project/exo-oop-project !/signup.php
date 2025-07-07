<?php 
include "./Utils/Validation.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet"
          type="text/css"
          href="Assets/css/style.css">
    <title>Sign Up</title>
</head>
<body>
    <div class="wrapper">
        <div class="form-holder">
            <h2>Create New Account</h2>
            <?php 
                if (isset($_GET['error'])) { ?>
                    <p class="error"><?=Validation::clean($_GET['error'])?></p>
            <?php } ?>

            <form class="form"
                  action="Action/signup.php" 
                  method="POST">
                <div class="form-group">
                    <input type="text"
                            name="fullname"
                            placeholder="Full name">
                </div>
                <div class="form-group">
                    <input type="text"
                            name="username"
                            placeholder="User name">
                </div>
                <div class="form-group">
                    <input type="text"
                            name="email"
                            placeholder="Email">
                </div>
                <div class="form-group">
                    <input type="password"
                            name="password"
                            placeholder="Password">
                </div>
                <div class="form-group">
                    <input type="password"
                            name="re_password"
                            placeholder="Confirm Password">
                </div>
                <div class="form-group">
                    <button type="submit">Sign Up</button>  
                </div>
                <div class="form-group">
                   <a href="login.php">Sign in</a>              
                </div>
            </form>
        </div>
    </div>
</body>
</html>