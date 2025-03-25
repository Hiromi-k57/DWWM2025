/*
    ---------------- EXO 1 --------------------
    1. Rendre tous les paragraphes du main, invisible (js ou css).
    2. Ajouter Une observation sur chaque paragraphes.
    3. Lorsque l'élément est au moins à moitié dans le viewport, le rendre visible.
    4. Désactiver la détection de l'élément une fois l'action terminé.
    (Bonus). Faire venir le paragraphe depuis le côté.

    1. メインのすべての段落を非表示にします (js または css)。
    2. 各段落に観察事項を追加します。
    3. 要素がビューポートの半分以上を占めたら、要素を表示します。
    4. アクションが完了したら要素の検出を無効にします。
    （ボーナス）。段落を横から取り込みます。
 */
    
    const mainP = document.querySelectorAll("main p");
    option = {
    root:main,
    rootMargin: "0px",
    threshold: 1.0,
}
    console.log(mainP);

    main.style.display = 'none';
    console.log(mainP);

    

    const callback = (entries,observer) =>{
        entries.forEach((entry) => {
            console.log(entry);
            
        });
    };
    
    const observeP = new IntersectionObserver(callback, p);

    console.log(observeP);
    



    
    
    

   

    


    
    



/*
    ---------------- EXO 2 ----------------------
    1. Lorsque le dernier paragraphe est à 200px en dessous du viewport.
        Créer 10 paragraphes et les ajouter à la suite du main (de simple paragraphes avec du lorem).
    2. Désactiver la détection du dernier paragraphe.
    3. Ajouter l'animation de l'exercice 1 aux nouveaux paragraphes.
    4. Ajouter la détection du dernier paragraphe au nouveau dernier paragraphe qui vient d'être ajouté.

    1. 最後の段落がビューポートの 200 ピクセル下にある場合。
    10 個の段落を作成し、メインの後に追加します (lorem を使用した単純な段落)。
    2. 最後の段落の検出を無効にします。
    3. 演習 1 のアニメーションを新しい段落に追加します。
    4. 追加した新しい最後の段落に最後の段落検出を追加します。
*/
