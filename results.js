// import {
//     conclusion1,
//     conclusion2,
//     conclusion3,
//     conclusion4,
//     conclusion5,
//     conclusion6,
//   } from "./testDB.js";

// import "./test.js";



// similarity();

let conclus1 = localStorage.getItem('conclusion2');
let conclus2 = localStorage.getItem('conclusion6');

let blockText = document.createElement("div");

let textConclusion = document.createElement("p");
textConclusion.classList.add("p-results");
textConclusion.innerHTML = conclus1;
blockText.appendChild(textConclusion);
