"use strict"

// APIから犬の画像を取得する関数（.then() を使用）
function getImage() {
  fetch("https://api.thedogapi.com/v1/images/search")
      .then(response => response.json()) // JSON 形式のテキスト(文字列)で送られてくるから、その返答をJSコードに変換
      .then(data => {
          console.log("data:", data); // 取得したデータ確認
          
          if (data.length > 0) { //データが1件以上あるか
              const imageUrl = data[0].url; // 配列の最初の要素[0].その要素の"url"
              displayImage(imageUrl); //このimageUrlを<img>タグのsrcに設定し、画像を表示
          }
      })
      .catch(error => console.error("error", error));
}

// 画像をページに表示する関数
function displayImage(url) {
  const imgElement = document.createElement("img"); // <img> タグを作成
  imgElement.src = url; // src 属性にURLを設定
  imgElement.alt = "Image"; 
  imgElement.style.maxWidth = "300px";
  document.body.appendChild(imgElement); // <img>タグをページに追加
}

// ボタンをクリックすると画像を取得
document.addEventListener("DOMContentLoaded", () => {
  const button = document.createElement("button");
  button.textContent = "Get image!";
  button.onclick = getImage;
  document.body.appendChild(button);
});
