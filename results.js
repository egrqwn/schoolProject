let resultsArr = [];

let linkTest = 'test.html';
let notFound = "Ничего нет. Пройди тест, чтобы узнать результаты";

let externalBlock = document.querySelector(".external-block");
externalBlock.innerHTML = "";

let blockConclusion = document.createElement('div')
blockConclusion.classList.add('block-conclusion');
externalBlock.appendChild(blockConclusion);

let aResults = document.createElement('a');
aResults.classList.add('a-results');
aResults.href = linkTest;
blockConclusion.appendChild(aResults);

let blockReset = document.querySelector('.block-reset-answers');

for (let key in localStorage) {
  if (typeof localStorage[key] == "string") {
    resultsArr.push(localStorage[key]);
  }
}

if (resultsArr.length == 0) {
  aResults.innerHTML = notFound;
} else {
  let resetAnswers = document.createElement('button');
  resetAnswers.classList.add('reset-answers');
  resetAnswers.innerHTML = "Пройти заново";
  blockReset.appendChild(resetAnswers);
  
  resetAnswers.onclick = function () {
    localStorage.clear();
    window.location.href = "test.html";
  }
}

for (let i = 0; i < resultsArr.length; i++) {
  let pResults = document.createElement('p');
  pResults.classList.add('p-results');
  pResults.innerHTML = resultsArr[i];
  blockConclusion.appendChild(pResults);
  
}

console.log(resultsArr);



