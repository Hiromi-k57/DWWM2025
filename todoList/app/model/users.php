<?php
include __DIR__."/../services/db_conn.php";

function getUserByName($uname)
{
    $conn = connexionDatabase();
    $stmt = $conn->prepare("SELECT * FROM users WHERE user_name = ?");
    $stmt->execute([$uname]);
    return $stmt->fetch();
}

function addUser($uname, $hashed, $name)
{
    $conn = connexionDatabase();
    $stmt = $conn->prepare("INSERT INTO users (user_name, password, name) VALUES (?, ?, ?)");
    $ok = $stmt->execute([$uname, $hashed, $name]);
    if($ok)
    {
        return $conn->lastInsertId();
    }
    else
    {
        return 0;
    }
}

function deleteUser($id)
{
    $conn = connexionDatabase();
    $stmt = $conn->prepare("DELETE FROM users WHERE id = ?");
    $stmt->execute([$id]);
}