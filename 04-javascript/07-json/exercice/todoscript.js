/*
    1. Créer une todo list. à chaque appui sur le bouton ajout,
    créer un nouvel élément dans la liste.
    cet élément doit contenir la valeur de l'input et une croix.
    On en profitera pour vider l'input.
    2. le clique sur un élément de la liste lui ajoutera une classe qui aura pour 
    effet de barrer l'élément.
    3. le clique sur la croix supprimera l'élément concerné.
    4. sauvegarder la liste en localstorage.
    5. afficher la liste sauvegardé au chargement de la page.
    6. éditer la liste lorsque l'on coche ou supprime un élément.
    Bonus : Utiliser le drag and drop pour déplacer nos éléments dans la liste. il faudra penser à sauvegarder les éléments déplacé.

    1. ToDo リストを作成します。追加ボタンを押すたびに、リストに新しい項目が作成されます。
    この要素には、入力の値とクロスが含まれている必要があります。この機会に入力を空にしておきます。
    2. リスト内の項目をクリックすると、その項目にクラスが追加され、その項目が取り消し線で囲まれるようになります。
    3. ×をクリックすると、問題の要素が削除されます。
    4. リストをローカルストレージに保存します。
    5. ページの読み込み時に保存したリストを表示します。
    6. 項目を確認または削除するときにリストを編集します。
    ボーナス: ドラッグ アンド ドロップを使用してリスト内のアイテムを移動します。移動したアイテムを忘れずに保存する必要があります。
 */

    const text = document.getElementById("text");
    const btn = document.getElementsByTagName("button");
    const listSet = document.getElementsByClassName("listSet");
    const li = document.querySelectorAll("li");
    const check = listSet.getElementsByClassName("check");
   

    console.log(text,btn,listSet,li,check);
    