/* 
    1. Templates seuls — Générateur de formulaire dynamique.

    Objectif : Maîtriser <template> pour du contenu dynamique.
    Description utilisateur :

    Créer une page qui utilise un <template> pour générer un formulaire depuis un tableau de Données.

    const fields = [ 
    { label: 'Nom', type: 'text', name: 'nom' }, 
    { label: 'Email', type: 'email', name: 'email' }, 
    { label: 'Message', type: 'textarea', name: 'message' } 
    ]; 

    Contraintes techniques :
    - Template HTML avec champ générique.
    - Champs insérés dynamiquement via JS.

    Améliorations possibles :
    - Validation selon le type.
    - Bouton “+ Champ” pour enrichir le formulaire.

        1. テンプレートのみ - 動的フォームビルダー。

        目標: 動的コンテンツの <template> をマスターする。
        ユーザーの説明:

        <template> を使用してデータ テーブルからフォームを生成するページを作成します。

        const fields = 

        技術的な制約:
        - 汎用フィールドを含む HTML テンプレート。
        - フィールドは JS 経由で動的に挿入されます。

        改善点:
        - タイプに応じた検証。
        - フォームを充実させるための「+ フィールド」ボタン。

    2. Templates + Shadow DOM + Slot — <dialog-box> personnalisable
    Objectif : Combiner les 3 briques pour faire un composant structuré, réutilisable et stylé.

    Description utilisateur :
    Créer un composant <dialog-box> stylisé avec titre (slot), contenu libre, et bouton “Fermer”.

    <dialog-box> 
    <h2 slot="title">Bienvenue !</h2> 
    <p>Merci de vous être connecté.</p>
    </dialog-box>

    Contraintes techniques :
    - Shadow DOM avec template intégré
    - Slots nommés
    - Bouton "Fermer" masque la boîte (toggle)

    Améliorations possibles :
    - Boutons dans le HTML faisant apparaître la boîte de dialogue
    - Boutons de la dialog-box personnalisables via slot

    - Animation d'apparition/disparition
    
        2. テンプレート + Shadow DOM + スロット — カスタマイズ可能な <dialog-box>
        目的: 3 つのレンガを組み合わせて、構造化された再利用可能なスタイリッシュなコンポーネントを作成します。

        ユーザーの説明:
        タイトル (スロット)、自由コンテンツ、および「閉じる」ボタンを使用して、スタイル設定された <dialog-box> コンポーネントを作成します。

        <dialog-box>

        技術的な制約:
        - 統合テンプレートを備えたShadow DOM
        - 名前付きスロット
        - 「閉じる」ボタンでボックスを非表示にします（切り替え）

        改善点:
        - ダイアログボックスを表示するHTML内のボタン
        - スロット経由でカスタマイズ可能なダイアログボックスボタン
*/

"use strict";

const fields = [ 
    { label: 'Nom', type: 'text', name: 'nom' }, 
    { label: 'Email', type: 'email', name: 'email' }, 
    { label: 'Age', type: 'number', name: 'age' },
    { input: 'Button', type: 'submit', name: 'button' },
];
const formulaire = document.querySelector("#formulaire");
const formulaireFragment = formulaire.content;
console.log(formulaireFragment);


const legend = formulaireFragment.querySelector("legend");
const label = formulaireFragment.querySelector("label");
const input = formulaireFragment.querySelector("input");
const form = document.createElement("form");
document.body.append(form);

fields.forEach(field=>{
    
    legend.textContent = field.label;
    input.type = field.type;
    input.name = field.name;
    input.placeholder = field.label;
    
    form.append(formulaireFragment.cloneNode(true));
})





import { DialogBox } from "./DialogBox.js";

