<?php
/*
 * Ce fichier définit des fonctions pour gérer les utilisateurs :
 * - récupérer un utilisateur par son nom d’utilisateur
 * - ajouter un nouvel utilisateur (mot de passe déjà haché)
 * - supprimer un utilisateur par son ID
 *
 * このファイルはユーザー情報を操作する関数集。
 * - ユーザー名で検索
 * - 新規ユーザー追加（ハッシュ済パスワード）
 * - ユーザー削除
 */
include __DIR__."/../services/db_conn.php";

function getUserByName($uname)
{
    $conn = connexionDatabase();
    /* Récupérer un utilisateur par son nom d’utilisateur */
    /* 指定したユーザー名を検索 */
    $stmt = $conn->prepare("SELECT * FROM users WHERE user_name = ?");
    $stmt->execute([$uname]);
    return $stmt->fetch(); // 結果1件（配列）を返す
}

function addUser($uname, $hashed, $name)
{
    $conn = connexionDatabase();
    /* Ajouter un nouvel utilisateur (mot de passe déjà haché) */
    /* 新しいユーザーを追加（パスワードはハッシュ済みを保存） */
    $stmt = $conn->prepare("INSERT INTO users (user_name, password, name) VALUES (?, ?, ?)");
    $ok = $stmt->execute([$uname, $hashed, $name]); 
    if($ok)
    {
        return $conn->lastInsertId(); // Inscription réussie登録成功 → 新しいユーザーIDを返す
    }
    else
    {
        return 0;
    }
}

function deleteUser($id)
{
    $conn = connexionDatabase();
    /* Supprimer un utilisateur par son ID */
    /* 指定IDのユーザーを削除 */
    $stmt = $conn->prepare("DELETE FROM users WHERE id = ?");
    $stmt->execute([$id]);
}