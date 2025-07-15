<?php
/*
    Qu'est ce que le CRUD ?
    Le "CRUD" est un accronyme signifiant 
        Create Read Update Delete.
    Cela représente ce que la majorité des tables d'une BDD a besoin.
        Create : Créer de nouvelles lignes dans notre table.
        Read : Lire et afficher les données de notre table. 
        Update : Mettre à jour les données de notre table. 
        Delete : Supprimer les données de notre table. 

    CRUDとは？
    「CRUD」とは、Create（作成）、Read（読み取り）、Update（更新）、Delete（削除）の頭文字をとったものです。
    これは、データベース内のほとんどのテーブルに必要な機能です。
        作成：テーブルに新しい行を作成します。
        読み取り：テーブル内のデータを読み込んで表示します。
        更新：テーブル内のデータを更新します。
        削除：テーブル内のデータを削除します。

    Généralement pour chaque table que l'on crée, on aura besoin d'un 
    "CRUD" complet pour l'accompagner. Bien sûr il y a quelques exceptions
    par exemple sur twitter on peut créer de nouveau message, 
    lire les messages, les supprimer mais on ne peut pas les mettre à jour.
        一般的に、作成するテーブルごとに、それに対応する完全なCRUDが必要になります。もちろん、いくつか例外もあります。例えばTwitterでは、新しい投稿の作成、投稿の読み取り、削除はできますが、更新はできません。

    Mais avant de commencer notre CRUD, on va devoir créer une BDD 
    et avoir la capacité de s'y connecter.
        しかし、CRUDを始める前に、データベースを作成し、それに接続できる必要があります。

    Pour cet exemple, partons sur un classique, on va appeler 
    notre BDD "blog" et on va créer une table "users". 
    Notre table "users" va recevoir les colonnes suivantes :
            この例では、まず典型的な例から始めましょう。データベース名を「blog」とし、「users」というテーブルを作成します。
            「users」テーブルには、以下の列が含まれます。
        idUser int AI PK;
        username varchar(25);
        email varchar(255) UQ;
        password text;
        createdAt datetime DEFAULT timestamp; 
        (voir ressources/MCD/MCD-Blog-01.png)
    Rendez vous donc dans le dossier "ressources" avec les fichiers 
    "config/_blogConfig.php" puis "service/_blogPDO.php".
        「resources」フォルダ内の「config/_blogConfig.php」と「service/_blogPDO.php」ファイルを開きます。

    Ensuite on va vérifier si on est connecté, et bien oui, un utilisateur connecté n'a rien à faire sur la page d'inscription.
        次に、ログインしているかどうかを確認します。ログインしているユーザーは登録ページにアクセスできません。
*/
require "../ressources/service/_shouldBeLogged.php";
shouldBeLogged(false, "/04-router/blog");
/* 
    Une fois cela fait, attaquons nous à la construction de notre 
    formulaire. 
    On est dans la partie "Create" pour "User", donc créer un nouvel
    utilisateur, on est sur un formulaire d'inscription.

    Le formulaire construit, nous allons attaquer son traitement.

        準備ができたら、フォームの作成を始めましょう。
        「ユーザー」の「作成」セクションで、新しいユーザーを作成します。登録フォームです。
        フォームが完成したら、処理を開始します。
*/
$username = $email = $password = "";
$error = [];
// Une variable contenant la regex qui servira au mot de passe.
$regexPass = 
"/^(?=.*[!?@#$%^&*+-])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{6,}$/";
if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["inscription"]))
{
    // On inclu notre service de connexion.
    // パスワードに使用される正規表現を含む変数。
    require("../ressources/service/_pdo.php");
    require("../ressources/service/_csrf.php");
    // On se connecte à notre BDD
    // データベースに接続します
    $pdo = connexionPDO();
    // traitement username
    // ユーザー名の処理
    if(empty($_POST["username"])){
        $error["username"] = "Veuillez saisir un nom d'utilisateur";
    }else{
        $username = cleanData($_POST["username"]);
        /*
            En PHP on utilisera "preg_match" pour tester si un string 
            correspond à une "REGEX"

            PHPでは、「preg_match」を使って文字列が「正規表現」に一致するかどうかをテストします。
        */
        if(!preg_match("/^[a-zA-Z' -]{2,25}$/", $username)){
            $error["username"] = "Veuillez saisir un nom d'utilisateur Valide";
        }
    }
    // Traitement email // メール処理
    if(empty($_POST["email"])){
        $error["email"] = "Veuillez saisir un email";
    }else{
        $email = cleanData($_POST["email"]);
        if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            $error["email"] = "Veuillez saisir un email valide";
        }
        /* 
            On souhaite que nos utilisateurs puissent n'avoir qu'un 
            seul compte par email, on va donc selectionner dans notre BDD tout utilisateur ayant cet email.

            Ici on a ce qu'on appelle une requête préparé.
            On détaillera la raison de son utilisation dans 
            le chapitre sécurité. 

            Pour l'instant retenons qu'on prend notre 
            instance de "PDO" et qu'on appelle 
            sa méthode "prepare" ($pdo->prepare())

            Dans celle ci on met sous forme de string notre
            requête SQL. avec un placeholder représenté par ":"
            ici ":em"
            le tout rangé dans une nouvelle variable.

                ユーザーはメールアドレスごとに1つのアカウントのみを持つようにしたいので、データベースからそのメールアドレスを持つユーザーを選択します。

                ここでは、準備済みクエリと呼ばれるものを使用します。

                このクエリを使用する理由については、セキュリティの章で詳しく説明します。

                今は、「PDO」のインスタンスを取得し、その「prepare」メソッド ($pdo->prepare()) を呼び出していることを覚えておきましょう。

                この例では、SQLクエリを文字列形式で入力し、「:」で表されたプレースホルダー (ここでは「:em」) を新しい変数に格納しています。
        */
        $sql = $pdo->prepare("SELECT * FROM users WHERE email=:em");
        /*
            Puis on demande l'execution de la requête 
            à laquelle on donne un tableau associatif où
            chaque clef est le placeholder sans les ":". 
            On indique donc à de remplacer ":em" par l'email.
                次に、クエリの実行を要求します。クエリには連想配列が与えられ、各キーは「:」を除いたプレースホルダーです。
                そこで、「:em」を「ema」に置き換えるように指示します。
        */
        $sql->execute(["em" => $email]);
        
        /* 
            Enfin on utilise fetch() pour aller chercher
            l'information récupéré par la requête.
            最後に、fetch() を使用して、クエリによって取得された情報を取得します。
        */
        $resultat = $sql->fetch();
        /*
            Si on obtient un résultat, c'est que l'email existe déjà en 
            bdd, on enverra donc une erreur, sinon tout va bien.
            結果が得られた場合は、そのメールがすでにデータベースに存在することを意味するため、エラー メッセージを送信します。それ以外の場合は、すべて正常です。
        */
        if($resultat){
            $error["email"] = "Cet email est déjà enregistré.";
        }
    }
    // Traitement password
    if(empty($_POST["password"])){
        $error["password"] = "Veuillez saisir un mot de passe";
    }else{
        $password = trim($_POST["password"]);
        // on utilise la regex défini plus haut.
        // 上記で定義した正規表現を使用します。
        if(!preg_match($regexPass, $password)){
            $error["password"] = "Veuillez saisir un mot de passe valide";
        }else{
            /* 
                Si le mot de passe est valide, alors on le hash
                パスワードが有効な場合はハッシュ化します
            */
            $password = password_hash($password, PASSWORD_BCRYPT);
        }
    }
    // vérification du mot de passe. // パスワード検証。
    if(empty($_POST["passwordBis"])){
        $error["passwordBis"] = "Veuillez saisir à nouveau votre mot de passe";
    }else{
        /* 
            On vérifie si l'utilisateur a mit des mots de passes 
            différent, dans ce cas on affiche un message d'erreur. 
            ユーザーが異なるパスワードを入力したかどうかを確認します。この場合、エラーメッセージが表示されます。
        */
        if($_POST["password"] != $_POST["passwordBis"]){
            $error["passwordBis"] = "Veuillez saisir le même mot de passe";
        }
    }
    /* 
        Pour simplifier le cours, il manque deux éléments à ce formulaire, 
        lesquels sont-ils?
        レッスンを簡素化するため、このフォームには2つの要素が欠けています。それらは何でしょうか？

            - CSRF
            - Captcha
    */
    // envoi des données.
    if(empty($error)){
        /* 
            Les requêtes préparés peuvent aussi avoir à la place 
            des placeholder des "?", dans ce cas là, la façon
            dont on donnera les variables changera légèrement.
        */
        $sql = $pdo->prepare(
            "INSERT INTO users(username, email, password) 
            VALUES(?, ?, ?)"
        );
        /* 
            Si on a préféré utiliser des "?" plutôt que les placeholder
            nommé, alors il faudra non plus donné un tableau associatif
            à execute mais un tableau classique dont les éléments 
            devront être placé dans l'ordre exacte attendu par la requête.
            (ici on a dit dans la requête "username, email, password"
            alors l'execute doit avoir "username, email, password" dans
            le même ordre.)

            L'utilisation de l'une ou l'autre des façons n'est qu'une question de préférence.

                名前付きプレースホルダではなく「?」を使用する場合、execute に連想配列を渡す必要はなくなり、クエリが期待する順序通りに要素を配置する必要がある従来の配列を渡せば済みます。(ここではクエリで「ユーザー名、メールアドレス、パスワード」と指定したため、execute にも「ユーザー名、メールアドレス、パスワード」が同じ順序で含まれている必要があります。)

                どちらを使用するかは、単に好みの問題です。
        */
        $sql->execute([$username,$email,$password ]);
        /* 
            Puis une fois inscrit, on redirige notre utilisateur 
            vers une autre page. souvent une page de connexion.
            登録が完了すると、ユーザーは別のページ（多くの場合、ログインページ）にリダイレクトされます。
        */
        header("Location: /04-router/connexion");
		exit;
    }
}
$title = " CRUD - Create ";
require("../ressources/template/_header.php");
?>
<form action="/04-router/inscription" method="post">
    <!-- username -->
    <label for="username">Nom d'Utilisateur :</label>
    <input type="text" name="username" id="username" required>
    <span class="erreur"><?php echo $error["username"]??""; ?></span>
    <br>
    <!-- Email -->
    <label for="email">Adresse Email :</label>
    <input type="email" name="email" id="email" required>
    <span class="erreur"><?php echo $error["email"]??""; ?></span> 
    <br>
    <!-- Password -->
    <label for="password">Mot de passe :</label>
    <input type="password" name="password" id="password" required>
    <span class="erreur"><?php echo $error["password"]??""; ?></span> 
    <br>
    <!-- password verify -->
    <label for="passwordBis">Confirmation du mot de passe :</label>
    <input type="password" name="passwordBis" id="passwordBis" required>
    <span class="erreur"><?php echo $error["passwordBis"]??""; ?></span> 
    <br>

    <input type="submit" value="Inscription" name="inscription">
</form>
<?php 
/* 
    Pour des raisons de simplicité du cours, on n'a pas mit de securité
    sur ce formulaire, mais pensez à en ajouter sur vos projets.
    (csrf, captcha, confirmation du mail...)
        簡潔にするため、このフォームにはセキュリティ機能は含まれていませんが、プロジェクトに追加することを検討してください。
        (CSRF、CAPTCHA、メール確認など)
*/
require("../ressources/template/_footer.php");
?>