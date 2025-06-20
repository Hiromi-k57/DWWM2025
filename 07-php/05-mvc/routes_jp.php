<?php 
/*  **Router クラスは、渡されたリクエストと定義されたルートに従い、どのコントローラが読み込まれるかを決定します
    **ユーザーがブラウザで特定のURLを入力したときに、どの処理（コントローラーのアクション）を実行するかを定義する仕組みのことを指し
    これにより、URLとコントローラーのアクションが結びつけられ、ユーザーのリクエストに応じた適切なレスポンスを返すことが可能になります。

    1つのコントローラーファイルで複数のページを管理しています。
    そのため、読み込むファイルだけでなく、呼び出す関数も指定できるようにルーティングシステムを改良しています。
*/
const ROUTES = [
    "05-mvc"=>[
        "controller"=>"userController.php",
        "fonction"=>"readUsers"
    ],
    "05-mvc/inscription"=>[
        "controller"=>"userController.php",
        "fonction"=>"createUser"
    ],
    "05-mvc/profil"=>[
        "controller"=>"userController.php",
        "fonction"=>"updateUser"
    ],
    "05-mvc/profil/supprimer"=>[
        "controller"=>"userController.php",
        "fonction"=>"deleteUser"
    ],
    // 演習：
];
