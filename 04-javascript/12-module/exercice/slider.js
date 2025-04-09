let sliderElement;
let btns;
/**
 * Crée un slider à partir du tableau d'image fournit 提供された画像配列からスライダーを作成します
 * @param {Array} imgs Un tableau contenant tous les chemins vers les images 画像へのすべてのパスを含む配列
 * @returns {HTMLElement} un élément HTML contenant le slider スライダーを含むHTML要素
 */
export function slider(imgs) 
{
    const carousel = document.createElement("div");
    carousel.classList.add("carousel");
    imgs.forEach(element => {
        
        const img = document.createElement("img");
        img.src = element;
        img.alt = "img";
        carousel.append(img)
    });
    sliderElement = carousel;
    return carousel;
} 

export function startSlider ()
{
    const imgs= sliderElement.children.length;
    console.dir(imgs); 
    
    let imgIndex = 0;
    const btnNext = document.getElementsByClassName("btn_next")[0];
    const btnBack = document.getElementsByClassName("btn_back")[0];

    
    
    btnNext.addEventListener('click', () => {
        const size = sliderElement.getBoundingClientRect();
    // console.log(size);
        imgIndex++;
        // 最初の画像の前は、最後の画像を指定する
        if (imgIndex > imgs - 1) {
          imgIndex = 0;
        } 
        sliderElement.scrollLeft = size.width * imgIndex
        console.dir(sliderElement);


      });

    btnBack.addEventListener('click', () => {
        const size = sliderElement.getBoundingClientRect(); //機能違えば同じ名前宣言するのは問題ない

        imgIndex--; // インデックスの値を減らして前の画像を指定する
        // 最初の画像の前は、最後の画像を指定する
        if (imgIndex < 0) {
        imgIndex = imgs - 1;
        }
        sliderElement.scrollLeft = size.width * imgIndex

        

    });
}