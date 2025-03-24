/**
    1.Le champ nom d'utilisateur doit tourner au rouge si 
    il contient autre chose que des lettres, - ou _;
    ユーザー名フィールドに文字、-、_ 以外の文字が含まれている場合、ユーザー名フィールドは赤色に変わります。

    2.Le champ téléphone doit passer au rouge si le ce qui est entré
    ne correspond pas à un numéro de téléphone.
    入力した内容が電話番号と一致しない場合、電話番号フィールドは赤色に変わります。

    3.Le champ email doit passer au rouge si ce qui est entré ne 
    correspond pas à un email.
    入力した内容が電子メールと一致しない場合、電子メール フィールドは赤色に変わります。

    4.Ajouter une barre de progression qui change de couleur
    et se rempli à chaque fois que l'utilisateur sécurise 
    un peu plus sont mdp :
    ユーザーがパスワードを少しずつ保護するたびに色が変わり、数字がいっぱいになる進行状況バーを追加します。
        -lettre minuscule.
        -lettre majuscule.
        -chiffre.
        -caractère spécial.
        -au moins 8 caractère.
        
    5. le champ mdp bis doit tourner au rouge si il ne correspond 
    pas au champ mdp.

    (le changement au rouge peut être personalisé autrement,
    l'important est de montrer à l'utilisateur qu'il se trompe)
    パスワード フィールドと一致しない場合、パスワード BIS フィールドは赤色に変わります。
    (赤への変更はカスタマイズできますが、重要なのはユーザーに間違っていることを示すことです)
 */

    "use strict"

    const mdp = document.getElementsByClassName("mdp")[0];
    const pass = document.getElementById("pass");
    console.log(mdp,pass);
    const minuscule = /[a-z]/;
    const majuscule = /[A-Z]/;
    const chiffre = /[0-9]/;
    const special = /[&$@?!]/;

    

    pass.addEventListener("input",
        function(){
            let check =0;
            if (minuscule.test(pass.value)){
                check++
            }
            if (majuscule.test(pass.value)){
                check++
            }
            if (chiffre.test(pass.value)){
                check++
            }
            if (special.test(pass.value)){
                check++
            }



            switch(check){
                case 0:
                    mdp.style.backgroundColor="black";
                    break;
                case 1:
                    mdp.style.backgroundColor="red";
                    break;
                case 2:
                    mdp.style.backgroundColor="orange";
                    break;
                case 3:
                    mdp.style.backgroundColor="green";
                    break;
            }
        }
    )