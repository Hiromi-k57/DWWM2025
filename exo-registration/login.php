<?php 
// セッション開始, DB接続
session_start(); 
include "db_conn.php";

// ユーザー名（uname）とパスワード（password）が送信されているか確認
if (isset($_POST['uname']) && isset($_POST['password'])) {

	// この validate関数はユーザーから送信されたデータを安全に処理するため
	function validate($data){
       $data = trim($data); //文字列の先頭と末尾の空白を削除
	   $data = stripslashes($data); //バックスラッシュ（\）を削除します。フォーム送信時に自動で追加される場合があります
	   $data = htmlspecialchars($data); //特殊文字（例：< や >）をHTMLエンティティに変換、XSS（クロスサイトスクリプティング）対策
	   return $data; //加工したデータを返します
	}

	$uname = validate($_POST['uname']);
	$pass = validate($_POST['password']);

	// ユーザー名が空なら、エラーメッセージ（User Name is required）付きでログイン画面に戻す
	if (empty($uname)) {
		header("Location: index.php?error=User Name is required");
	    exit();
	// パスワードが空なら、エラーメッセージ（Password is required）付きでログイン画面に戻す
	}else if(empty($pass)){
        header("Location: index.php?error=Password is required");
	    exit();
	}else{
		// md5 = 文字列をハッシュ化 脆弱性が確認, 要変更
        $pass = md5($pass);

        
		$sql = "SELECT * FROM users WHERE user_name='$uname' AND password='$pass'";

		$result = mysqli_query($conn, $sql);

		// データベースから取得したユーザー情報を使ってログイン認証を行う処理
		// *検索結果が1件だけなら（ユーザー名とパスワードが一致するユーザーがいる場合）
		if (mysqli_num_rows($result) === 1) {
			// そのユーザー情報を取得
			$row = mysqli_fetch_assoc($result);
			// 取得したユーザー名とパスワードが、送信されたものと一致するか再確認
			//*一致すればセッションにユーザー情報を保存し、home.php（ログイン後のページ）へ移動
            if ($row['user_name'] === $uname && $row['password'] === $pass) {
            	$_SESSION['user_name'] = $row['user_name'];
            	$_SESSION['name'] = $row['name'];
            	$_SESSION['id'] = $row['id'];
            	header("Location: home.php");
		        exit();
			//*一致しなければエラーメッセージ付きでログイン画面に戻す
            }else{
				header("Location: index.php?error=Incorect User name or password");
		        exit();
			}
		// 検索結果が0件なら同じくエラーメッセージ付きでログイン画面に戻す
		}else{
			header("Location: index.php?error=Incorect User name or password");
	        exit();
		}
	}

//ログインページに直接アクセスした場合（POSTでデータが送信されていない場合）に、ログイン画面（index.php）へ強制的に戻す処理
}else{
	header("Location: index.php");
	exit();
}