/* 
    この演習の目標は、モジュールにインポートできる適応型スライダーを作成することです。

    0. モジュールへのペイント（オプション）
    オプションで、ペイント アプリケーション コードを分割してモジュールを使用することもできます。

    1. エクスポートされた関数
    このスライダーには少なくとも 2 つの機能があります。
    最初のものは、画像へのパスを含む文字列の配列をパラメータとして受け取ります。スライダーを含む HTML 要素を返します。
    2番目はスライダーを起動します。最初の画像を表示し、イベント リスナーを追加します。

    スライダーは、テーブルに含まれる画像の数に合わせて調整できる必要があります。
    両方の関数をエクスポートします。そのうちの 1 つはデフォルトです。

    2. イベントとボタン
    このスライダーには、少なくとも 1 つの前へボタンと次へボタンが含まれている必要があります。
    最後の画像に到達したら、次へボタンを押すと最初の画像に戻り、その逆も同様です。
    また、画像ごとにボタンが含まれ、クリックすると、該当する画像が表示されます。
    画像に対応するボタンは、表示されると色が変わります。

    3. インポート
    ウィンドウ (またはボタン) がクリックされたときにのみスライダーをインポートします。
    作成関数に画像へのパスの配列を指定して、ページに追加します。
    スライダー イベントを開始します。
    スライダーを追加したクリック イベントを削除します。

    4. ボーナス
    1. 画像のスクロールアニメーションを作成します。
    2. スライダーはレスポンシブである必要があります。
    3. 自動スクロールを追加します。
    4. 画像を選択するときにスクロールを一時停止します。
    5. 「次」または「前」をクリックするとスクロールを再開します。
    6. スライダーを作成するときにスクロール速度を選択できるようにします。
*/
import { slider, startSlider } from "./slider.js";
const imgs = ["./img/candy-1.jpg","./img/candy-2.jpg","./img/candy-3.jpg","./img/candy-4.jpg",];

console.log(imgs);

// code...
const sliderElement = slider(imgs); 
const btns = document.querySelectorAll(".btns");
btns[0].after(sliderElement)
// document.body.append(sliderElement); 
// sliderJS.default(); 
// code..
startSlider();