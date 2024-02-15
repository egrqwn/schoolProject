let resultsArr = [];

let linkTest = 'test.html';
let notFound = "Ничего нет. Пройди тест, чтобы узнать результаты";

for (let key in localStorage) {
  if (typeof localStorage[key] == "string") {
    resultsArr.push(localStorage[key]);
  }
}


console.log(resultsArr);

let externalBlock = document.querySelector(".external-block");
externalBlock.innerHTML = "";

let blockConclusion = document.createElement('div')
blockConclusion.classList.add('block-conclusion');
externalBlock.appendChild(blockConclusion);

let aResults = document.createElement('a');
aResults.classList.add('p-results');
aResults.href = linkTest;

if (resultsArr == 0) {
  aResults.innerHTML = notFound;
}

blockConclusion.appendChild(aResults);

