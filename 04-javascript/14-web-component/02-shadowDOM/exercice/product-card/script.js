/* 
     課題 2：Shadow DOM + Custom Element — <product-card>
     目的：スタイルとロジックをカプセル化したコンポーネントを作成する。

    ユーザー説明：
    画像、タイトル、説明、価格、「カートに追加」ボタンを備えた製品コンポーネントを作成してください。
    <product-card 
        name="Sweat React" 
        description="Sweat à capuche 100% coton" 
        price="39.99" 
        image="react-sweat.jpg" 
    ></product-card>

    技術的な条件：
    -HTML と CSS の表示は Shadow DOM 内で行う。
    -カスタム要素に対して、星の要素（評価）を表示する。

✨ 改良点（オプション）：
    -「カートに追加」ボタンがカスタムイベント add-to-cart を発火し、製品情報を渡す。（→ カスタムイベントの調査が必要）

    -製品が「セール中」の場合、「セール中」バッジを表示（条件付き表示）
*/

"use strict";
import { ProductCard } from "./productCard.js";