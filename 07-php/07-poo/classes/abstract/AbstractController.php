<?php
// Pour le fonctionnement de mon autoloader, je met un namespace correspondant à mes dossiers
//オートローダーが機能するために、フォルダーに対応する名前空間を設定しました
namespace Classes\Abstract;

require __DIR__."/../../../ressources/service/_shouldBeLogged.php";
require __DIR__."/../../../ressources/service/_csrf.php";
/** 
 *    Une classe abstraite ne peut être instancié.
 *   le rôle de celle ci, sera d'être hérité à tous les controllers afin de leur apporter des fonctions en commun.
 * 抽象クラスはインスタンス化できません。
 * その役割は、すべてのコントローラーに継承され、共通の機能を提供することです。
*/
abstract class AbstractController
{
    /**
     * Affiche les messages flash
     * フラッシュメッセージを表示する
     *
     * @return void
     */
    protected function getFlash():void
    {
        if(isset($_SESSION["flash"]))
        {
            echo "<div class='flash'>{$_SESSION['flash']}</div>";
            unset($_SESSION["flash"]);
        }
    }
    /**
     * Enregistre un message flash.
     * フラッシュメッセージを記録します。
     *
     * @param string $message
     * @return void
     */
    protected function setFlash(string $message): void
    {
        $_SESSION["flash"] = $message;
    }
    /**
     * Affiche la vue demandée. 要求されたビューを表示します。
     * 
     * En options, on peut passer un tableau associatif avec les variables à envoyer à la vue.
     * オプションとして、ビューに送信する変数を含む連想配列を渡すこともできます。
     *
     * @param string $view Chemin de la vue depuis le dossier "view" //$view は「view」フォルダからのビューへのパスです
     * @param array $variables données à envoyer à la vue //@param 配列 $variables はビューに送信するデータです
     * @return void
     */
    protected function render(string $view, array $variables = []):void
    {
        foreach($variables as $name => $value)
        {
            /* 
                Exemple :
                Si on envoi le tableau suivant : ["users"=>$users]
                Ici il produira une variable $users qui contiendra la liste des utilisateurs
                $$ permet de créer un nom de variable dynamique.
                    例:
                    次の配列を送信した場合: ["users"=>$users]
                    この場合、ユーザーのリストを格納する変数 $users が生成されます。
                    $$ を使用すると、動的な変数名を作成できます。
            */
            $$name = $value;
        }
        // Notre fonction intègre automatiquement le header et le footer autour de nos vues.
        // この関数はビューの周囲にヘッダーとフッターを自動的に統合します。
        require __DIR__."/../../../ressources/template/_header.php";
        require __DIR__."/../../view/$view";
        require __DIR__."/../../../ressources/template/_footer.php";
    }
    /**
     * Vérifie si l'utilisateur à accès à la page ou non selon si il est connecté
     * ユーザーがログインしているかどうかに応じて、ページにアクセスできるかどうかを確認します。
     * 
     * Si le boolean est à "true", bloque l'accès aux utilisateurs non connectés
     * ブール値が true の場合、オフライン ユーザーのアクセスをブロックします。
     * 
     * Si le boolean est à "false", bloque l'accès aux utilisateurs connectés
     * ブール値が false の場合、ログイン ユーザーのアクセスをブロックします。
     *
     * @param boolean $bool Doit être connecté ou non //$bool 接続されているかどうか
     * @param string $redirect chemin de redirection //$redirect リダイレクトパス
     * @return void
     */
    protected function shouldBeLogged(bool $bool = true, string $redirect = "/"):void
    {
        shouldBeLogged($bool, $redirect);
    }
    /**
     * Paramètre un token en session et ajoute un input:hidden contenant le token
     * セッションにトークンを設定し、トークンを含む input:hidden を追加します
     * 
     * Optionnellement ajoute un temps de vie au jeton
     * オプションでトークンに有効期間を追加する
     *
     * @param integer $time temps de vie du jeton //$timeトークンの有効期間
     * @return void
     */
    protected function setCSRF(int $time = 0): void
    {
        setCSRF($time);
    }
    /**
     * Vérifie si le jeton CSRF est valide.
     * CSRF トークンが有効かどうかを確認します。
     *
     * @return boolean true si valide. 有効な場合は true。
     */
    protected function isCSRFValid():bool
    {
        return isCSRFValid();
    }
}