<?php

require_once __DIR__.'/router.php';

# USER
// Inscription
get("/signup", "/view/users/signup.php");
post("/signup", "/controller/users/signup-check.php");

// Delete
get("/delete-account", "/controller/users/delete-account.php");
post("/delete-account", "/controller/users/delete-account.php");

// login
get("/login", "/view/users/login.php");
post("/login", "/controller/users/login-check.php");

// logout
get("/logout", "/controller/users/logout.php");

// home
get("/home", "/view/users/home.php");

# TODO
// list
get("/", "/controller/todos/list.php");

// add
post("/add", "/controller/todos/add.php");

// check
post("/check", "/controller/todos/check.php");

// delete todos
post("/remove", "/controller/todos/remove.php");

# Others
// captcha
get("/captcha", "/services/_captcha_jp.php");

any('/404','view/404.php');