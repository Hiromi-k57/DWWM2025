<?php 
session_start(); 
include "../../db_conn.php";

// ----------------------------
// ログイン試行回数の初期化
// ----------------------------
if (!isset($_SESSION['login_attempts'])) {
    $_SESSION['login_attempts'] = 0;
}
if (!isset($_SESSION['last_attempt_time'])) {
    $_SESSION['last_attempt_time'] = time();
}

// ----------------------------
// 1. ロックアウト判定
// ----------------------------
// 3回失敗したら30秒ロック
$lockout_time = 30; // 秒
$max_attempts = 3;

if ($_SESSION['login_attempts'] >= $max_attempts) {
    if (time() - $_SESSION['last_attempt_time'] < $lockout_time) {
        header("Location: login.php?error=Trop de tentatives. Réessayez dans 30 secondes.");
        exit();
    } else {
        // ロック解除
        $_SESSION['login_attempts'] = 0;
    }
}

// ----------------------------
// 2. フォーム入力の確認
// ----------------------------
if (isset($_POST['uname']) && isset($_POST['password'])) {

	function validate($data){
       $data = trim($data);
	   $data = stripslashes($data);
	   $data = htmlspecialchars($data);
	   return $data;
	}

	$uname = validate($_POST['uname']);
	$pass = trim($_POST['password']);

	if (empty($uname)) {
		header("Location: login.php?error=Nom d'utilisateur requis");
	    exit();
	}else if(empty($pass)){
        header("Location: login.php?error=Mot de passe requis");
	    exit();
	}else{
		$sql = "SELECT * FROM users WHERE user_name=?";
		$sql = $conn->prepare($sql);
		$sql->execute([$uname]);

		if ($sql->rowCount() === 1) {
			$row = $sql->fetch();
			if (password_verify($pass, $row["password"])) {
            	$_SESSION['user_name'] = $row['user_name'];
            	$_SESSION['name'] = $row['name'];
            	$_SESSION['id'] = $row['id'];

                // 成功したら試行回数をリセット
                $_SESSION['login_attempts'] = 0;

            	header("Location: home.php");
		        exit();
			}else{
                // パスワード間違い → 試行回数を増加
                $_SESSION['login_attempts']++;
                $_SESSION['last_attempt_time'] = time();
				header("Location: login.php?error=Nom d'utilisateur ou mot de passe incorrect");
		        exit();
			}
		}else{
            // ユーザー名が存在しない → 試行回数を増加
            $_SESSION['login_attempts']++;
            $_SESSION['last_attempt_time'] = time();
			header("Location: login.php?error=Nom d'utilisateur ou mot de passe incorrect");
	        exit();
		}
	}
}else{
	header("Location: index.php");
	exit();
}
