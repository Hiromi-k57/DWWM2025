<?php 
session_start(); 
include "../../db_conn.php";

// POSTデータの存在確認,データ送信されているか
if (isset($_POST['uname']) && isset($_POST['password'])
    && isset($_POST['name']) && isset($_POST['re_password'])) {

	//function validat = 入力されたデータの前後の空白を取り除き、特殊文字をエスケープし、安全に処理できるように
	function validate($data){
       $data = trim($data);
	   $data = stripslashes($data);
	   $data = htmlspecialchars($data);
	   return $data;
	}
	// ユーザーから送信された値をvalidate()で処理し、それぞれの変数に格納
	$uname = validate($_POST['uname']);
	$pass = trim($_POST['password']);

	$re_pass = trim($_POST['re_password']);
	$name = validate($_POST['name']);
	$captcha = trim($_POST["captcha"]);

	$user_data = 'uname='. $uname. '&name='. $name;

	//各入力項目が空でないかを確認し、空の場合はエラーメッセージとともにsignup.phpにリダイレクト
	if (empty($uname)) {
		header("Location: signup.php?error=User Name is required&$user_data");
	    exit();
	}else if(empty($pass)){
        header("Location: signup.php?error=Password is required&$user_data");
	    exit();
	}
	else if(empty($re_pass)){
        header("Location: signup.php?error=Re Password is required&$user_data");
	    exit();
	}

	else if(empty($name)){
        header("Location: signup.php?error=Name is required&$user_data");
	    exit();
	}

	else if($pass !== $re_pass){
        header("Location: signup.php?error=The confirmation password  does not match&$user_data");
	    exit();
	}
	else if($captcha !== $_SESSION["captcha"]){
        header("Location: signup.php?error=The captcha doesn't match");
	    exit();
	}

	else{

		//要変更
        $pass = password_hash($pass, PASSWORD_DEFAULT);

		// 直接変数$unameをSQL文に埋め込むと、SQLインジェクションのリスクが高まるため、プレースホルダやエスケープ処理に要変更
	    $sql = "SELECT * FROM users WHERE user_name=? ";
		// $result = mysqli_query($conn, $sql);
		$result = $conn->prepare($sql);
		$result->execute([$uname]);

		// if (mysqli_num_rows($result) > 0) {
		if ($result->rowCount() > 0) {
			//データベース内に同じユーザ名が既に存在するかを調べ、重複していればエラー
			header("Location: signup.php?error=The username is taken try another&$user_data");
	        exit();
		}else {
			//重複がなければ、ユーザ名、ハッシュ化したパスワード、名前をデータベースに挿入
           $sql2 = "INSERT INTO users(user_name, password, name) VALUES(?,?,?)";
        //    $result2 = mysqli_query($conn, $sql2);
			$stmt = $conn->prepare($sql2);
			$result2 = $stmt->execute([$uname, $pass, $name]);

		   //登録が成功した場合は成功メッセージとともにリダイレクトし、失敗した場合はエラーメッセージとともにリダイレクト
           if ($result2) {

			$_SESSION['user_name'] = $uname;
			$_SESSION['name'] = $name;
			$_SESSION['id'] = $conn->lastInsertId();
           	 header("Location: home.php?success=Your account has been created successfully");
	         exit();
           }else {
	           	header("Location: signup.php?error=unknown error occurred&$user_data");
		        exit();
           }
		}
	}
	
}else{
	header("Location: signup.php");
	exit();
}