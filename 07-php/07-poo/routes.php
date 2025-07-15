<?php
/* 
    Les controllers perdent le ".php" et gagnent une majuscule.
    les fonctions prennent des noms plus simple.
        コントローラーの名前は「.php」から大文字に変わります。
        関数の名前はよりシンプルになります。
*/
const ROUTES = [
    "07-poo"=>[
        "controller"=>"Controller\UserController", 
        "fonction"=>"read"
    ],
    "07-poo/inscription"=>[
        "controller"=>"Controller\UserController", 
        "fonction"=>"create"
    ],
    "07-poo/user/update"=>[
        "controller"=>"Controller\UserController", 
        "fonction"=>"update"
    ],
    "07-poo/user/delete"=>[
        "controller"=>"Controller\UserController", 
        "fonction"=>"delete"
    ],
];
?>