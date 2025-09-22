<?php
/*
 * Ce fichier définit des fonctions pour gérer les tâches de la ToDo list :
 * - récupérer toutes les tâches d’un utilisateur
 * - ajouter une tâche
 * - vérifier / mettre à jour une tâche
 * - supprimer une tâche
 *
 * このファイルはToDoリストのタスクを操作する関数集。
 * - ユーザーの全タスク取得
 * - 新しいタスク追加
 * - タスク状態の確認・更新
 * - タスク削除
 */
// Inclure la connexion à la base de données
include __DIR__."/../services/db_conn.php"; 

function getAllTasks($id)
{
    $conn = connexionDatabase();
    /* Récupération des tâches de l’utilisateur connecté（ログインユーザーのタスク取得） */
    $todos = $conn->prepare("SELECT * FROM todos WHERE userId = :id ORDER BY id DESC");
    $todos->execute(["id" => $id]);
    return $todos;
}

function addTask($title, $id)
{
    $conn = connexionDatabase();
    $stmt = $conn->prepare("INSERT INTO todos (title, userId) VALUES (?, ?)");
    $ok   = $stmt->execute([$title, $id]);
    return $ok;
}

function getTask($idTask, $idUser)
{
    $conn = connexionDatabase();
    /* Récupérer une tâche spécifique par son ID et l’utilisateur */
    /* 指定したタスクID + ユーザーIDを持つタスクを取得 */
    $todos = $conn->prepare("SELECT id, checked FROM todos WHERE id = ? AND userId = ?");
    $todos->execute([$idTask, $idUser]);
    $todo = $todos->fetch(PDO::FETCH_ASSOC);
    return $todo;
}

function checkTask($newChecked, $id)
{
    $conn = connexionDatabase();
    /* Mettre à jour l’état (checked) d’une tâche */
    /* タスクの完了状態を更新 */
    $up = $conn->prepare("UPDATE todos SET checked = ? WHERE id = ?");
    $ok = $up->execute([$newChecked, $id]);
    return $ok;
}

function deleteTask($idTask, $idUser)
{
    $conn = connexionDatabase();
    /* Supprimer une tâche (uniquement si elle appartient à l’utilisateur) */
    /* 指定タスクを削除（本人のタスクのみ） */
    $stmt = $conn->prepare("DELETE FROM todos WHERE id = ? AND userId = ?");
    $stmt->execute([$idTask, $idUser]);
    return $stmt->rowCount();
}