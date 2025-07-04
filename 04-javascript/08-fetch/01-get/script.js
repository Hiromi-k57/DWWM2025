"use strict";
/* 
    Lorsque l'on veut récupérer des données depuis un fichier (json, html, xml...) ou une API.
    Nous avons besoin de lancer une requête à celui-ci. Comme lorsqu'on donne à notre navigateur l'url du fichier ou de l'api.
        ファイル (json、html、xml など) または API からデータを取得する場合。
        これに対してクエリを実行する必要があります。ブラウザにファイルや API の URL を指定する場合などです。

    JS offre deux solutions pour cela :
        - Le plus ancien XMLHttpRequest
        - Le plus récent fetch
*/
const url = "./cours.json";

// ? XMLHttpRequest :
// Je crée une nouvelle instance de l'objet XMLHttpRequest
const xmlhttp = new XMLHttpRequest();
// Je lui ajoute une fonction à executer lorsque son état change :
// 状態が変化したときに実行する関数を追加します:
xmlhttp.onreadystatechange = handleRequest;
/* 
    J'ouvre la requête avec en paramètre :
        1. la méthode à utiliser sous forme de string (ici GET)
        2. l'url auquel lancer la requête (ici ma const "url")
        3. Si la requête est asynchrone ou non (de préférence oui)
    次のパラメータを使用してクエリを開きます。
        1. 使用するメソッドを文字列形式（ここではGET）で指定します。
        2. リクエストを開始するための URL (ここでは const "url")
        3. リクエストが非同期かどうか（非同期が望ましい）
*/
xmlhttp.open("GET", url, true);
// J'envoi ma requête :
// xmlhttp.send();
console.log("log après le send");

function handleRequest()
{
    console.log(xmlhttp.readyState, xmlhttp.status);   
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200)
    {
        let success, data;
        /* 
            try{}catch(e){}
            Permet de tenter l'execution d'un code pouvant provoquer une erreur. 
            Mais si l'erreur est déclenché, au lieu de casser l'execution du code, elle est capturé dans le paramètre du "catch" 
            On pourra choisir de l'afficher comme on le souhaite.

            Optionnellement on peut ajouter un "finally" qui se déclenchera après le try catch qu'il soit réussi ou non.
                エラーを引き起こす可能性のあるコードの実行を試みることを許可します。
                ただし、エラーが発生した場合、コードの実行が中断されるのではなく、エラーは「catch」パラメータでキャプチャされます。
                ご希望に応じて表示方法を選択できます。

                オプションで、try catch が成功したかどうかに関係なくトリガーされる「finally」を追加できます。
        */
        try
        {
            // .responseText contient la réponse à notre requête
            console.log(xmlhttp.responseText);
            data = JSON.parse(xmlhttp.responseText);
            console.log(data);
            success = true;
        }
        catch(error)
        {
            console.error(error.message + " DANS -> " + xmlhttp.responseText);
            success = false;
        }
        finally
        {
            if(success)
            {
                document.body.innerHTML += `<h1>${data.title}</h1>`;
            }
        }
    } 
}

// ? FETCH
/* 
    fetch est toujours asynchrone.
    Par défaut, il est en get.
    Seul le premier argument est obligatoire, l'url auquel envoyer la requête.
    Il pourra prendre des options en second paramètre, si besoin.

    fetch est suivi de ".then()" qui contiendra une fonction callback à lancer une fois la requête terminé.

    フェッチは常に非同期です。デフォルトでは get にあります。
    必須なのは最初の引数、つまりリクエストを送信する URL だけです。
    必要に応じて、2 番目のパラメータとしてオプションを受け取ることができます。

    fetch の後には ".then()" が続き、これにはリクエストが完了すると起動されるコールバック関数が含まれます。
*/
// fetch(url).then(handleFetch);

function handleFetch(response)
{
    console.log(response);
    if(response.ok)
    {
        /* 
            L'objet response de fetch, contient sa propre méthode asynchrone pour traiter le json.
            Je n'utiliserais donc pas "JSON.parse()" mais "maRéponse.json().then()"

            Là aussi then contiendra une fonction callback à lancer une fois le traitement fini.
            On pourra choisir de le faire suivre d'un ".catch" qui fonctionne de la même manière mais se déclenche en cas d'erreur

            フェッチの応答オブジェクトには、JSON を処理するための独自の非同期メソッドが含まれています。
            したがって、「JSON.parse()」ではなく「myResponse.json().then()」を使用します。

            ここでも、処理が完了したら起動するコールバック関数が含まれます。
            同様に動作しますが、エラーが発生した場合にトリガーされる「.catch」を続けて実行することもできます。
        */
        response.json()
            .then(function(data)
            {
                console.log(data);
                
                // document.body.innerHTML +=`<h2>${data.articles}</h2>`;
                data.articles.forEach(arti=>{
                    document.body.innerHTML += /* HTML */
                    `<article>
                        <h2>${arti.heading}</h2>
                        <p>${arti.content}</p>
                    </article>`;
                })
            })
            .catch(function(error)
            {
                console.error(error);
            });
    }
    else
    {
        console.error(response.statusText);        
    }
}
/* 
    ! ATTENTION 
    Lorsque vous changez le contenu textuel (ou html) d'un élément. 
    (ici le body)
    Tous les éléments HTML qui étaient présent dedans, perdent leurs écouteurs d'évènements.
    Cela est dû au fait que l'on change le HTML avec une copie de l'ancien HTML sous forme de texte.
        ！注意
        要素のテキスト (または HTML) コンテンツを変更する場合。
        （ここに本体があります）
        内部に存在していたすべての HTML 要素は、イベント リスナーを失います。
        これは、テキスト形式の古い HTML のコピーを使用して HTML を変更しているためです。
*/
const btn = document.querySelector('button');
btn.addEventListener("click", ()=>console.log("CLIQUE !"));

// document.body.innerHTML += "test";
// document.body.innerHTML = document.body.innerHTML + "test";
console.log(document.body.innerHTML);
