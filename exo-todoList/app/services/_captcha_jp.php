<?php 
if(session_status() === PHP_SESSION_NONE)
    session_start();

// -------------------------
// Liste des caractères accepté pour le captcha
// （CAPTCHAに使う文字セットを定義）
// -------------------------
$characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789';

/**
 * Génère une chaîne aléatoire
 * （ランダム文字列を生成する関数）
 *
 * @param string $characters  Ensemble de caractères possibles（利用可能な文字セット）
 * @param integer $strength   Longueur de la chaîne（生成する文字数）
 * @return string
 */
function generateString(string $characters, int $strength = 10): string {
    $randStr = '';
    for($i = 0; $i < $strength; $i++) {
        // Choisir un caractère au hasard dans l’ensemble （文字セットからランダムに1文字選ぶ）
        $randStr .= $characters[rand(0, strlen($characters) - 1)];
    }
    return $randStr;
}

// -------------------------
// Créer une nouvelle image 200x50
// （200x50ピクセルの画像を生成）
// -------------------------
$image = imagecreatetruecolor(200, 50);
// Activer l’anti-aliasing pour améliorer la qualité
// （アンチエイリアス有効化で画質向上）
imageantialias($image, true);

// -------------------------
// Génération de couleurs aléatoires
// （ランダムな淡い色を生成）
// -------------------------
$colors = [];
$red = rand(125, 175);
$green = rand(125, 175);
$blue = rand(125, 175);

for($i = 0; $i < 5; $i++) {
    // imagecolorallocate : retourne un identifiant de couleur
    // （色IDを生成）
    $colors[] = imagecolorallocate($image, $red - 20*$i, $green - 20*$i, $blue - 20*$i);
}

// Remplir l’arrière-plan avec la couleur la plus claire
// （背景を一番明るい色で塗りつぶす）
imagefill($image, 0, 0, $colors[0]);

// Dessiner des rectangles aléatoires pour bruit visuel
// （判読を難しくするため矩形をランダム描画）
for($i = 0; $i < 10; $i++) {
    imagesetthickness($image, rand(2, 10));
    imagerectangle(
        $image, rand(-10, 190), rand(-10, 10),
        rand(-10, 190), rand(40, 60),
        $colors[rand(1, 4)]
    );
}

// -------------------------
// Définir les couleurs et polices pour le texte
// （テキスト色とフォントを準備）
// -------------------------
$textColors = [
    imagecolorallocate($image, 0, 0, 0),   // noir（黒）
    imagecolorallocate($image, 255, 255, 255) // blanc（白）
];
$fonts = [
    __DIR__.'/../../fonts/Acme-Regular.ttf',
    __DIR__.'/../../fonts/arial.ttf',
    __DIR__.'/../../fonts/typewriter.ttf'
];

// -------------------------
// Générer le texte du CAPTCHA et stocker en session
// （CAPTCHA文字列を生成し、セッションに保存）
// -------------------------
$strLength = 6;
$captchaStr = generateString($characters, $strLength);
$_SESSION['captcha'] = $captchaStr;

// Dessiner chaque caractère du CAPTCHA
// （文字列を1文字ずつ描画、角度や色はランダム）
for($i = 0; $i < $strLength; $i++) {
    $letterSpace = 170 / $strLength;
    $initial = 15;
    imagettftext(
        $image,
        24,
        rand(-15, 15),
        (int)($initial + $i * $letterSpace),
        rand(25, 45),
        $textColors[rand(0, 1)],
        $fonts[array_rand($fonts)],
        $captchaStr[$i]
    );
}

// -------------------------
// Envoyer l’image au navigateur
// （画像をブラウザに送信）
// -------------------------
header('Content-type: image/png');
imagepng($image);