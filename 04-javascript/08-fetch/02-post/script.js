"use strict";

const url = "https://api.thedogapi.com/v1/images/upload";
const api_key = "live_U8C8pGOECtGkpLTkSJJ6QIBrZs0qC2gUTXObqsc40bpMn0KfQfVaPfoTgmPl9zFv";

const formulaire = document.querySelector('form');
const result =document.querySelector('.result');

formulaire.addEventListener("submit", uploadDog);

function uploadDog(e)
{
    e.preventDefault();
    const formData = new FormData(formulaire);
    result.textContent = "Cargement en cours";

    /* 
        Fetch peut prendre un second argument sous forme d'un objet.
            On pourra y préciser la méthode à utiliser, le coups de la requête ou encore l'entête (headers) de la requête
        Fetch はオブジェクトの形式で 2 番目の引数を取ることができます。
            使用するメソッド、リクエスト ストローク、さらにはリクエスト ヘッダーを指定できます。
    */
   fetch(url,{
    method: "POST",
    headers: {"x-api-key": api_key},
    body: formData,
   }).then(checkResponse);
}
function checkResponse(reponse){
    result.textContent = "Cargement terminé !";
    if(reponse.ok)
    {
        reponse.json().then(data=>{
            // console.log(data);
            result.innerHTML += `<hr><img src ="${data.url}" alt="image de chien" width="400">`;
        });
    }else
    {   
        reponse.text().then(data=>result.textContent=data)
       
    }
}