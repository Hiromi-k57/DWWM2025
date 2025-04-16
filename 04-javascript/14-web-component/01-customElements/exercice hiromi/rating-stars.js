export class RatingStars extends HTMLElement {
  constructor() {
    super();
    //value属性を数値として取り出したい。もし無ければ0にしておこう
    // this.value = parseInt(this.getAttribute("value")) || 0;

    // 星を入れるコンテナ
    this.container = document.createElement("div");
    this.container.className = "rating-container";
    this.stars = []; // 星の要素を格納する配列

    for (let i = 1; i <= 5; i++) { // 1から5までの星を作成するため繰り返し *iは今何番目の星を作っているかを示す番号
      const span = document.createElement("span");
      span.classList.add("star"); //spanにstarというクラス名を追加
      span.textContent = "★";
      span.dataset.value = i; //HTMLの data-*属性にアクセスするための特別なオブジェクト

      span.addEventListener("click", () => {
        this.value = i;
        this.setAttribute("value", i);
        this.updateStars();
      });

      this.stars.push(span); // stars配列にspanを追加。追加の時はpushメソッドを使う(配列の末尾に要素を追加するメソッド)
      this.container.appendChild(span);
    }

    this.appendChild(this.container); //これで <rating-stars> の中に星が並ぶようになります
    this.updateStars();
  }

  //「どの属性を監視するか」を指定するメソッド
  // ここではvalue属性を監視するように指定しています
  // これにより、value属性が変更されたときにattributeChangedCallbackメソッドが呼び出されます
  static get observedAttributes() {
    return ["value"];
  }

  //属性が変更されたときに呼び出されるメソッド
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "value") {
      this.value = parseInt(newValue) || 0;
      this.updateStars();
    }
  }

  updateStars() {
    this.stars.forEach((star, index) => {
      //value の数だけ「色付き星」にする
      if (index < this.value) {
        star.classList.add("active");
      //それ以外の星は「消灯」（白いまま）
      } else {
        star.classList.remove("active");
      }
    });
  }
}
//"rating-stars" という名前のタグ（カスタム要素）をRatingStarsクラスと関連付ける,カスタム要素としてブラウザに登録する
customElements.define("rating-stars", RatingStars);