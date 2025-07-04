/* 
  3. Créer un feu de circulation qui restera 3 seconde au vert,PUIS qui restera 1 seconde au jaune, PUIS qui restera 2 seconde au rouge.
  PUIS se répètera à nouveau. Tout cela à l'aide de promesse.
    3秒間緑のままになる信号機を作ります。
    次に、黄色で 1 秒間残り、次に赤色で 2 秒間残ります。
    その後、再度繰り返します。
*/

function vert() {
    return new Promise(resolve => {
        console.log("Vert");
        setTimeout(resolve, 3000); // 3秒後に次の信号に移行
    });
  }
  