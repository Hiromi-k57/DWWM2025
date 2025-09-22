<?php
# Ce fichier gère le routage, la sécurité (CSRF, validation), et fournit des fonctions utilitaires
# ルーティング処理・CSRF対策・入力サニタイズ・リダイレクト・フラッシュメッセージ用関数
# router.php = ルールの書き方を定義（get, post等）し、routes.php = 実際のルールを記述する。（/signup → signup.php）
session_start();

function get($route, $path_to_include)
{
	if ($_SERVER['REQUEST_METHOD'] == 'GET') {
		route($route, $path_to_include);
	}
}
function post($route, $path_to_include)
{
	if ($_SERVER['REQUEST_METHOD'] == 'POST') {
		route($route, $path_to_include);
	}
}
function put($route, $path_to_include)
{
	if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
		route($route, $path_to_include);
	}
}
function patch($route, $path_to_include)
{
	if ($_SERVER['REQUEST_METHOD'] == 'PATCH') {
		route($route, $path_to_include);
	}
}
function delete($route, $path_to_include)
{
	if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
		route($route, $path_to_include);
	}
}
function any($route, $path_to_include)
{
	route($route, $path_to_include);
}
function route($route, $path_to_include)
{
	$callback = $path_to_include;
	//このアプリでは常にファイルパスが入る。関数を渡すことも可能だが未使用

	if (!is_callable($callback)) {
		// 関数でなければファイル扱い。拡張子.phpが無ければ自動で補う
		if (!strpos($path_to_include, '.php')) {
			$path_to_include .= '.php';
		}
	}
	if ($route == "/404") {
		include_once __DIR__ . "/$path_to_include";
		exit();
	}
	// Nettoyer l’URL → diviser par “/” → comparer avec la route → inclure le fichier si correspondance
	//URL整形(末尾の/を削除,? 以降を削除) → /で分割 → ルートとURLを一つずつ比較 → $付きなら変数にする → 一致すればファイル/関数を実行
	$request_url = filter_var($_SERVER['REQUEST_URI'], FILTER_SANITIZE_URL);
	$request_url = rtrim($request_url, '/');
	$request_url = strtok($request_url, '?');
	$route_parts = explode('/', $route); //routes.phpで定義したもの）と
	$request_url_parts = explode('/', $request_url); //（実際にアクセスされたもの）をスラッシュ区切りの配列にする
	array_shift($route_parts); //先頭の空文字 "" を削除
	array_shift($request_url_parts);
	//URLが/(トップページ)のときだけここに入る
	if ($route_parts[0] == '' && count($request_url_parts) == 0) {
		//$callback が「関数」だったらその関数を実行だけどこのアプリは$callback=ファイルパスなので、ここは使わない
		if (is_callable($callback)) {
			call_user_func_array($callback, []);
			exit();
		}
		include_once __DIR__ . "/$path_to_include"; //指定されたファイルを読み込む
		exit();
	}
	if (count($route_parts) != count($request_url_parts)) {
		return;
	}
	$parameters = [];
	//ルートを / で分割した配列を、最初から最後まで順番にチェックする
	for ($__i__ = 0; $__i__ < count($route_parts); $__i__++) {
		$route_part = $route_parts[$__i__];
		if (preg_match("/^[$]/", $route_part)) {
			$route_part = ltrim($route_part, '$'); //Leftから指定した'$'を取る
			array_push($parameters, $request_url_parts[$__i__]); // 値を配列に追加
			$$route_part = $request_url_parts[$__i__]; // 動的に変数を作る
		} else if ($route_parts[$__i__] != $request_url_parts[$__i__]) {
			return;
		}
	}
	// Callback function $callback が関数なら → 関数を実行（引数に $parameters を渡せる）
	if (is_callable($callback)) {
		call_user_func_array($callback, $parameters);
		exit();
	}
	include_once __DIR__ . "/$path_to_include";
	exit();
}
//Utilitaires d’affichage sûr (XSS) et de protection CSRF pour les formulaires
//XSS安全表示＋フォーム用CSRF対策のユーティリティ

// Affiche du texte échappé (XSS safe)
// $textを例えば<script>…と入力されてもエスケープして&lt;script&gt;に変換して安全に表示（XSS防止）
function out($text)
{
	echo htmlspecialchars($text);
}
// Génère une clé CSRF de session et l’injecte en champ caché
// セッションにCSRFトークンが無ければ bin2hex(random_bytes(50)) で作成＋hidden入力を出力
function set_csrf()
{
	if (!isset($_SESSION["csrf"])) {
		$_SESSION["csrf"] = bin2hex(random_bytes(50));
	}
	echo '<input type="hidden" name="csrf" value="' . $_SESSION["csrf"] . '">';
}
// Retourne le token CSRF stocké en session
// セッション上のCSRFトークン取得
function get_csrf()
{
	return $_SESSION["csrf"]??"";
}
// Vérifie que le token CSRF du POST correspond à celui en session
// POSTのCSRFがセッション値と一致か検証
function is_csrf_valid()
{
	if (!isset($_SESSION['csrf']) || !isset($_POST['csrf'])) {
		return false;
	}
	if ($_SESSION['csrf'] != $_POST['csrf']) {
		return false;
	}
	return true;
}
// Fonction simple de nettoyage des données
// （基本のサニタイズ,安全な文字列として扱うために）
function validate($data) {
	$data = trim($data); //supprime les espaces au début et à la fin
	$data = stripslashes($data); //supprime les antislashs
	return htmlspecialchars($data, ENT_QUOTES, 'UTF-8'); //échappe les caractères spéciaux (protection XSS)
}

//指定したページにリダイレクトしつつ、必要ならメッセージをセッションに保存
function redirectTo($path, $type = "", $message = "")
{
    if(!empty($message)) $_SESSION["message"][$type] = $message;
    header("Location: $path");
    exit();
}
// displayFlashMessage : affiche et supprime les messages flash stockés en session
//セッションに保存したメッセージを 1回だけ 画面に表示し、その後削除
function displayFlashMessage()
{
	$message = $_SESSION["message"]??[];
	unset($_SESSION["message"]);
	if(!empty($message))
	{
		foreach($message as $category=>$text)
		{
			$text = htmlspecialchars($text);
			echo "<p class='$category'>$text</p>";
		}
	}
}