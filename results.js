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
let resultsArr = [];

for (let key in localStorage) {
  if (typeof localStorage[key] == "string") {
    resultsArr.push(localStorage[key]);
  }
}

console.log(resultsArr);

let blockText = document.createElement("div");

// let textConclusion = document.createElement("p");
// textConclusion.classList.add("p-results");
// textConclusion.innerHTML = conclus1;
// blockText.appendChild(textConclusion);
