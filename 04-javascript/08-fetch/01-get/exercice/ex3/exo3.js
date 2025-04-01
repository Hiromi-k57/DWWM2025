"use strict"

fetch("https://api.thedogapi.com/v1/images/search")

.then(response => {
    return response.blob();  
  })
  .then(data => {
    // dataを処理
    const img = document.getElementById('loadedImage');
    console.log(img);
   
  })
  .catch(error => {
    console.error(error);  
  });

  console.log(img);
  
// .then(response => response.blob())
// .then(data => {
//   const img = document.getElementById('loadedImage');
//   img.src = URL.createObjectURL(data);
// })
// .catch(error => {
//     console.error(error);  
//   });

//   console.log(img);
  
