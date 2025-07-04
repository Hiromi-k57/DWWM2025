"use strict";


const url = "./hero.json";
const xmlhttp = new XMLHttpRequest();
let data;
xmlhttp.open("GET", url, true);
xmlhttp.send();

xmlhttp.onreadystatechange = handleRequest;

function handleRequest () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        try {
            data = JSON.parse(xmlhttp.responseText);
            console.log(data);
            for (let i = 0; i < data.members.length; i++) {
                const members = data.members[i];
                const div = document.querySelector('div');
                const div2 = div.cloneNode();
                document.body.append(div2);
                div2.classList.add(members.name.split(" ")[0]);
                div2.innerHTML =
                `<ul>
                    <li>name: ${members.name}</li>
                    <li>age: ${members.age}</li>
                    <li>secretIdentity: ${members.secretIdentity}</li>
                    <li>powers: ${members.powers}</li>
                    </ul>`;
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const optionName = document.querySelector("select");
optionName.addEventListener("change", showDetail);

function showDetail() {
    // すべての詳細情報を非表示にする
    const detailDivs = document.querySelectorAll('.detail');
    detailDivs.forEach(div => {
        div.style.display = 'none'; // 非表示にする
    });

    // 複数選択されたオプションの値を取得
    let selectedValues = Array.from(optionName.selectedOptions).map(option => option.value);
    console.log(selectedValues);

    // 選択された各キャラクターの詳細情報を表示
    selectedValues.forEach(value => {
        const detail = document.querySelector(`.detail.${value}`);
        if (detail) {
            detail.style.display = "block"; // 表示する
        }
    });
}


// const url = "./hero.json";
// const xmlhttp = new XMLHttpRequest();
// let data;
// xmlhttp.open("GET", url, true);
// xmlhttp.send();

// xmlhttp.onreadystatechange = handleRequest;

// function handleRequest ()
// {
//     if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
//         try{

//             data = JSON.parse(xmlhttp.responseText);
//             console.log(data);
//             for( let i=0 ; i< data.members.length; i++){
//                 const members = data.members[i]
//                 const div = document.querySelector('div');
//                 const div2 = div.cloneNode();
//                 document.body.append(div2);
//                 div2.classList.add(members.name.split(" ")[0]);
//                 div2.innerHTML = 
//                 `<ul>
//                     <li>name: ${members.name}</li>
//                     <li>age: ${members.age}</li>
//                     <li>secretIdentity: ${members.secretIdentity}</li>
//                     <li>powers: ${members.powers}</li>
//                     </ul>`
//             }
//         }
//         catch(error)
//         {
//             console.log(error);
            
//         }
//     }
// }


// const Molecule = document.getElementsByClassName("Molecule")
// const Madamme = document.getElementsByClassName("Madamme");
// const Eternal = document.getElementsByClassName("Eternal");
// const detailDiv = document.getElementsByClassName("detail");

// console.log(Molecule,Madamme,Eternal,detailDiv);
// let optionName = document.querySelector("select");
// optionName.addEventListener("change", showDetail);

// function showDetail ()
// {
//     let selectedValue = optionName.value;
//     console.log(selectedValue);
//     let detail = document.querySelector(".detail."+selectedValue);
//     console.log(detail);
    
//      if(detail)
//     {
//         detail.style.display = "block";
//     }
   
//   }



