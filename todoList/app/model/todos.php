<?php
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
    $todos = $conn->prepare("SELECT id, checked FROM todos WHERE id = ? AND userId = ?");
    $todos->execute([$idTask, $idUser]);
    $todo = $todos->fetch(PDO::FETCH_ASSOC);
    return $todo;
}

function checkTask($newChecked, $id)
{
    $conn = connexionDatabase();
    $up = $conn->prepare("UPDATE todos SET checked = ? WHERE id = ?");
    $ok = $up->execute([$newChecked, $id]);
    return $ok;
}

function deleteTask($idTask, $idUser)
{
    $conn = connexionDatabase();
    $stmt = $conn->prepare("DELETE FROM todos WHERE id = ? AND userId = ?");
    $stmt->execute([$idTask, $idUser]);
    return $stmt->rowCount();
}