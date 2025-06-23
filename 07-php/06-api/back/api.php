<?php 
# --- HEADERS ---

// Autorise l'accès à l'api. "*" signifie n'importe quel site.
// APIへのアクセスを許可する。"*" は任意のサイトを意味する。
header("Access-Control-Allow-Origin: *");
// ? Mais on pourrait bloquer à tous site sauf à un site en particulier:
// ? 特定のサイト以外からのアクセスを拒否することも可能：
// header("Access-Control-Allow-Origin: https://mon-app-front.com");

// Indique que les réponses de notre api seront en JSON.
// APIのレスポンスがJSON形式であることを示す。
header("Content-Type: application/json; charset=UTF-8");

// Temps de cache pour les pré-requêtes CORS (en seconde)
// CORSプリフライトリクエストのキャッシュ時間（秒）
header("Access-Control-Max-Age: 3600");
/* 
    ? Lorsqu'un navigateur envoi une requête à une API. Une première "pré-requête" est lancé en methode "OPTIONS".
    Celle ci va permettre de vérifier si le site à tous les droits d'accès à l'API.
    Ce header permet de garder en cache le résultat de cette requête.

     ? ブラウザがAPIにリクエストを送るとき、まず "OPTIONS" メソッドでプリフライトリクエストを送信する。
    これは、リクエスト元サイトにAPIへのアクセス権限があるか確認するため。
    このヘッダーは、その結果をキャッシュするために使用される。
*/

// Autorise l'échange de cookie et d'identifiant.
// クッキーや認証情報の送信を許可する。
header("Access-Control-Allow-Credentials: true");

// Spécifie les headers authorisés dans les requêtes clients.
// クライアントリクエストで許可されるヘッダーを指定する。
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
/* 
    - Content-Type  : Permet d'envoyer du JSON (ou autre type)
    - Authorization : Permet l'envoi de token JWT ou Bearer par exemple.
    - X-Requested-With  : Fréquemment utilisé par AJAX pour indiquer une requête JS.

    - Content-Type：JSON（または他のタイプ）を送信できるようにする
    - Authorization：JWTやBearerトークンなどの送信を許可
    - X-Requested-With：AJAXがJavaScriptリクエストであることを示すためによく使われる
*/

# --- FUNCTIONS ---

// Définit une fonction personnalisée pour gérer les erreurs PHP.
// PHPエラーを処理するカスタム関数を定義する。
set_error_handler("handleErrors");

/**
 * Envoi une réponse JSON standardisée et arrête l'execution du script.
 * JSON形式の標準レスポンスを送信し、スクリプトの実行を停止する
 *
 * @param array $data 返すデータ
 * @param integer $status HTTPステータスコード
 * @param string $message メッセージ
 * @return void
 */
function sendResponse(array $data, int $status, string $message): void
{
    http_response_code($status);
    echo json_encode([
        "data"=>$data,
        "status"=>$status,
        "message"=>$message
    ]);
    exit;
}
/**
 * Ajoute une erreur à la liste des violations, ou retourne l'ensemble des erreurs.
 *  エラーをバリデーション違反リストに追加、または全体を返す
 *
 * @param boolean|string $property Nom du champ concerné 該当するフィールド名
 * @param boolean|string $message Message d'erreur  エラーメッセージ
 * @return array|void retourne la liste des erreurs si il manque un argument. 引数が不足している場合はエラー一覧を返す
 */
function setError($property = false, $message = false)
{
    static $error = [];
    // Si il manque un des paramètres, on retourne le tableau d'erreur
    // 引数が不足している場合、エラー配列を返す
    if(!$property || !$message)
    {
        return ["violations"=>$error];
    }
    // si les deux paramètres sont présent, on ajoute l'erreur au tableau :
    // 両方の引数がある場合、エラーを配列に追加する
    $error[]=[
        "propertyPath"=>$property,
        "message"=>$message
    ];
}
/**
 * Gère les erreurs PHP en les convertissant en exception
 * PHPエラーを例外に変換して処理する
 *
 * @param integer $severity Niveau de l'erreur エラーの重大度
 * @param string $message Message de l'erreur エラーメッセージ
 * @param string $file Fichier où a eu lieu l'erreur エラーが発生したファイル
 * @param integer $line Ligne de l'erreur エラーが発生した行
 * @return void
 * @throws ErrorException
 */
function handleErrors(int $severity, string $message, string $file, int $line)
{
    throw new ErrorException($message, 0, $severity, $file, $line);
}
/**
 * écrit un message d'erreur dans un fichier log
 * エラーメッセージをログファイルに書き込む
 *
 * @param string $errorMessage Message d'erreur エラーメッセージ
 * @param string $errorFile Fichier où l'erreur est détecté エラーが検出されたファイル
 * @param string $errorLine Ligne de l'erreur エラーが発生した行
 * @return void
 */
function handleLogs(string $errorMessage, string $errorFile, string $errorLine)
{
    $logDir = __DIR__."/logs"; // Dossier des logs // ログフォルダのパス
    $logFile = $logDir . "/error.log"; // fichier où sauvegarder les erreurs. // エラー保存用のファイル
    $date = date("Y-m-d H:i:s"); // date et heure de l'erreur // エラー発生時の日時
    $message = "$date - Error API : $errorMessage - Error File : $errorFile - ErrorLine : $errorLine\n"; // message à sauvegarder // 保存するメッセージ

    if(!is_dir($logDir))
    {
        mkdir($logDir, 0755, true); // Création du dossier s'il n'existe pas // フォルダが存在しない場合は作成する
    }
    error_log($message, 3, $logFile); // écriture dans le fichier log // ログファイルに書き込む
    // ? le "3" indique que l'écriture doit se faire dans le fichier en troisième paramètre.
    // ? "3" は、3番目の引数（ログファイル）に出力することを意味する
}
/* 
    mkdir permet la création de dossier, indiqué en premier paramètre.
    Le second indique les droits :
        - 0 indique que le suivant est en octale (base 8)
        - 7 indique que le propriétaire à tous les droits.
        - 5 indique que le groupe propriétaire peut juste lire ou lancer le fichier.
        - 5 indique que les autres utilisateur peuvent juste lire ou lancer le fichier.
    
    le troisième paramètre indique la récurcivité, c'est à dire si plusieurs dossiers peuvent être créé.
        - sans true : créer le dossier "fruits/banane" provoquera une erreur car le dossier "fruits" n'existe pas.
        - avec true : créer le dossier "fruits/banane" créera les deux dossiers

        mkdir関数はフォルダを作成する。
    第1引数：作成するディレクトリのパス
    第2引数：アクセス権（8進数表記）
        - 0：次の数字が8進数であることを示す
        - 7：オーナーがすべての権限を持つ
        - 5：グループが読み取りと実行のみ可能
        - 5：その他ユーザーも読み取りと実行のみ可能

    第3引数：再帰的にディレクトリを作成するかどうか
        - false：例「fruits/banana」を作成しようとすると、fruitsが存在しないためエラー
        - true：fruitsとbananaの両方を自動的に作成する
*/