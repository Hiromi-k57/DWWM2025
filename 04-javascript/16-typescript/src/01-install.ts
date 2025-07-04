/* 
    Typescript est une surcouche à Javascript.
    Il permet d'ajouter des fonctionnalités que l'on trouve habituellement dans les langages de développement plus classique.

    Dont la principale, qui se trouve dans le nom, le typage.

    ? Installation :
        * npm install typescript --save-dev

    ? transpiler un fichier :
        * npx tsc pathToFile.ts
    ? transpiler vers un autre dossier :
        * npx tsc pathToFile.ts --outDir pathToFolder

    Typescript は Javascript へのオーバーレイです。 
    これにより、従来の開発言語に通常見られる機能を追加できます。 

    名前にもあるように、主なものはタイピングです。 

        ？施設 ：
        * npm インストール typescript --save-dev

        ？ファイルをトランスパイルする:
        * npx tsc pathToFile.ts

        ？別のフォルダにトランスパイルします:
        * npx tsc pathToFile.ts --outDir pathToFolder


    Pour éviter de retaper cela à chaque fois, on peut créer un fichier "tsconfig.js" à la racine du projet et y entrer :
     これを毎回再入力する手間を省くために、プロジェクトのルートに「tsconfig.js」ファイルを作成し、次のように入力します:
        {
            "compilerOptions": {
                "outDir": "dist"
            },
            "files": [
                "src/01-install.ts"
            ]
        }

    Ensuite on aura plus qu'à taper : 次に、次のように入力するだけです
        * npx tsc
    Ou si on veut que le terminal surveille tout changement: あるいは、ターミナルで変更を監視する場合:
        * npx tsc --watch
*/

const btn = document.querySelector("#compte");
let i = 0;
btn?.addEventListener("click", ()=>{
    i++;
    // btn.textContent = i;
    btn.textContent = i.toString();
})

/* 
    Par défaut typescript transpile vers ES3 qui est assez vieux.
    On peut modifier cela en ajoutant à notre tsconfig :
        * target: ESNext (ou autre version de ES)
    On peut profiter d'être ici pour ajouter des options supplémentaires comme :
        * noEmitOnError: true
    Ou :
        * strict : true

    デフォルトでは、Typescript はかなり古い ES3 にトランスパイルされます。 
    tsconfig に以下を追加することでこれを変更できます。
        * target: ESNext (ou autre version de ES)
    ここを利用することで、次のような追加オプションを追加できます。
        * noEmitOnError: true
    または ：
        * strict : true
*/