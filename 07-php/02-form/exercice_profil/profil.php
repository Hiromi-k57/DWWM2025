<?php 

$title = "Gestionnaire de profil utilisateur";
require("../../ressources/template/_header.php");
 
$error = $target_file = $target_name = $mime_type = $oldName = "";
// ファイルをアップロードするフォルダへのパス：
$target_dir = "./upload/";
// アップロードを許可するMIMEタイプ：
$types_permis = ["image/png", "image/jpeg", "image/gif", "application/pdf"];

if($_SERVER['REQUEST_METHOD']==='POST' && isset($_POST['upload']))
{
    // echo '<pre>'.print_r($_FILES, 1).'</pre>';

    // ファイルが正しくアップロードされたかを確認
    if(!is_uploaded_file($_FILES["userImg"]["tmp_name"]))
    {
        $error = "Veuillez Sélectionner une image";
    }
    else
    {
        /* 
            basename関数はファイル名の最後の部分を取得します。
            例：
                ファイル名が "pizza/margarita.png" の場合、
                "margarita.png" のみを取得します。
        */
        $oldName = basename($_FILES["userImg"]["name"]);
        /* 
            同じ名前のファイルがすでに存在する場合、
            新しくアップロードされたファイルが既存のものを上書きしてしまいます。
            そのため、毎回一意のファイル名を生成します。
            ここでは "uniqid" 関数を使用しています。
        */
        $target_name = uniqid(time()."-", true) . "-".$oldName;
        // var_dump($target_name);

        // アップロード先のパスと新しいファイル名を連結
        $target_file = $target_dir . $target_name;

        // ファイルのMIMEタイプを取得
        $mime_type = mime_content_type($_FILES["userImg"]["tmp_name"]);

        // 同じ名前のファイルがすでに存在していないか確認
        if(file_exists($target_file))
        {
            $error = "このファイルはすでに存在しています。";
        }

        /* 
            ファイルサイズが大きすぎないかを確認
            ※注意：PHPの設定には、アップロードできるファイルサイズの上限やPOSTデータのサイズ上限があります（php.iniを参照）。
        */
        if($_FILES["userImg"]["size"] > 200000)
        {
            $error = "Fichier trop volumineux";
        }
        // ファイルのMIMEタイプが許可されたものかを確認
        if(!in_array($mime_type, $types_permis))
        {
            $error = "Type de fichier interdit";
        }

        if(empty($error))
        {
            /* 
                一時フォルダからアップロードフォルダにファイルを移動します。
                move_uploaded_file関数は成功したかどうかを示すブール値を返します。
            */
            if(move_uploaded_file($_FILES["userImg"]["tmp_name"], $target_file))
            {
                // 必要であれば、ここでファイルの情報をデータベースに保存できます。
            }else
            {
                $error = "Erreur lors du téléversement";
            }
        }
    }// ファイルの確認処理終了
}

?>
    <h1>Exercice profil upload img</h1>


    <?php if (isset($error)): ?>
        <p style="color:red"><?= htmlspecialchars($error) ?></p>
    <?php endif; ?>

    <div class="form_body">
        <form action="profil.php" method="post" enctype="multipart/form-data">
            <label for="prenom">Prénom :</label><br>
            <input type="text" id="prenom" name="prenom" required placeholder="ex : Jean" class="form-control">
            <br><br>
            <label for="bio">Bio :</label><br>
            <textarea id="bio" name="bio" rows="5" cols="33" required placeholder="ex : Développeur web junior" class="form-control"></textarea>
            <br><br>
            <label for="userImg">Choisir votre image：</label>
            <input type="file" name="userImg" id="userImg">
            <br><br>
            <input type="submit" value="Envoyer" name="upload">
            <br><br>
            <span class="error"><?= $error??"" ?></span>
        </form>
    </div>
</body>
</html>