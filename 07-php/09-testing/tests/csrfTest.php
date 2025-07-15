<?php
use PHPUnit\Framework\TestCase;

require_once __DIR__."/../src/csrf.php";

class csrfTest extends TestCase
{
    protected function setUp(): void
    {
        // Démarrer la session :
        if(session_status() !== PHP_SESSION_ACTIVE)
        {
            session_start();
        }
        // vider la session avant chaque test :
            // 各テストの前にセッションをクリアします:
        $_SESSION = [];
    }
    public function testSetCSRFOutputAndSession()
    {
        // Démarrer la capture de sortie (capture tout ce qui est affiché sur la page)
            // 出力キャプチャを開始します（ページに表示されるすべてをキャプチャします）
        ob_start();

        // lancer la fonction à tester // テストする関数を起動する
        setCSRF();

        // Récupère le contenu affiché sous forme de string
            // 表示されているコンテンツを文字列として取得します
        $output = ob_get_clean();

        // Vérifier que la sortie contient un input hidden et un name csrf_token
            // 出力に隠し入力と名前csrf_tokenが含まれていることを確認します
        $this->assertStringContainsString("<input type='hidden'", $output);
        $this->assertStringContainsString("name='csrf_token'", $output);

        // Vérifier que la valeur est un token hexadecimal de 32 caractères.
            // 値が 32 文字の 16 進トークンであることを確認します。
        preg_match("/value='([a-f0-9]{32})'/", $output, $matches);
        $this->assertNotEmpty($matches, "Le token CSRF n'a pas été trouvé ou est incorect.");

        $tokenFromInput = $matches[1];

        // Vérifier que le token est bien stocké en session :
            // トークンがセッションに保存されていることを確認します。
        $this->assertArrayHasKey("csrf_token", $_SESSION);
        $this->assertEquals($tokenFromInput, $_SESSION["csrf_token"]);
    }
}