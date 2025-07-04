"use strict"
let languagesList;
fetch("./exo2.json")

.then(response => {
    return response.json();  
  })
  .then(data => {
    // dataを処理
    console.log(data);
    languagesList = data.language;
  })
  .catch(error => {
    console.error(error);  
  });

const selectBtn = document.getElementById("selectBtn")
const langues= document.getElementsByTagName("option")
const langueDetail = document.getElementsByClassName("body")

console.log(selectBtn, langues,langueDetail);

selectBtn.addEventListener("change",showDetail);

function showDetail ()
{
    let selectedValue = selectBtn.value;
    console.log(selectedValue);

    let detail = document.querySelector(".langueDetail");
    let h1 = document.getElementsByTagName("h1")[0];
    let p = document.getElementsByTagName("p")[0];
    console.log(detail, h1, p, languagesList[selectedValue]);

    const selectedLangue = languagesList[selectedValue];
     if(selectedLangue)
    {
        detail.style.visibility = "visible";
        h1.textContent = selectedLangue.h1
        p.textContent = selectedLangue.p
    }
 
    localStorage.setItem("selectedValue");
}




