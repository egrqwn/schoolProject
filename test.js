import {
  varA,
  varB,
  answer1,
  answer2,
  answer3,
  answer4,
  answer5,
  answer6,
  conclusions,
} from "./testDB.js";

let results = [];
let currentIndex = 0;

let backBtn = document.querySelector(".btn-back");
let forwardBtn = document.querySelector(".btn-forward");

let endBtn = document.querySelector(".btn-end");
endBtn.disabled = true;

let againBtn = document.querySelector(".block-again");

let aBtn = document.querySelector(".btn-a");
let bBtn = document.querySelector(".btn-b");
forwardBtn.disabled = true;

let testResults = [
  "1b",
  "2b",
  "3a",
  "4b",
  "5b",
  "6b",
  "7a",
  "8b",
  "9a",
  "10b",
  "11a",
  "12b",
  "13a",
  "14b",
  "15b",
  "16a",
  "17b",
  "18a",
  "19b",
  "20a",
  "21b",
  "22b",
  "23a",
  "24a",
  "25b",
  "26b",
  "27b",
  "28b",
  "29a",
  "30a",
  "31b",
  "32b",
  "33a",
  "34b",
  "35a",
  "36b",
  "37a",
  "38b",
  "39a",
  "40b",
  "41a",
  "42b",
];

let similarityArray = [0, 0, 0, 0, 0, 0];
let maxElem = similarityArray[0];

function fillContent() {
  aBtn.innerHTML = varA[currentIndex];
  bBtn.innerHTML = varB[currentIndex];
}

fillContent();

function checkPick() {
  if (results[currentIndex] != undefined) {
    forwardBtn.disabled = false;
  } else {
    forwardBtn.disabled = true;
  }
}

function checkCompleteBtn() {
  if (testResults.length == 42) {
    endBtn.disabled = false;
  }
}

function similarity() {
  for (let i = 0; i < testResults.length; i++) {
    for (let j = 0; j < answer1.length; j++) {
      if (testResults[i] == answer1[j]) {
        similarityArray[0]++;
      }
      if (testResults[i] == answer2[j]) {
        similarityArray[1]++;
      }

      if (testResults[i] == answer3[j]) {
        similarityArray[2]++;
      }

      if (testResults[i] == answer4[j]) {
        similarityArray[3]++;
      }

      if (testResults[i] == answer5[j]) {
        similarityArray[4]++;
      }

      if (testResults[i] == answer6[j]) {
        similarityArray[5]++;
      }
    }
  }

  for (let i = 0; i < similarityArray.length; i++) {
    if (similarityArray[i] > maxElem) {
      maxElem = similarityArray[i];
    }
  }

  for (let i = 0; i < similarityArray.length; i++) {
    if (maxElem == similarityArray[i]) {
      localStorage.setItem("conclusion " + i, conclusions[i]);
      console.log(conclusions[i]);
    }
  }

  console.log(maxElem);
  console.log(similarityArray);
}

similarity();

endBtn.onclick = function () {
  similarity();
  window.location.href = "results.html";
};

forwardBtn.onclick = function () {
  if (currentIndex < varA.length - 1) {
    currentIndex += 1;
  }
  fillContent();
  aBtn.classList.remove("selected");
  bBtn.classList.remove("selected");
  if (results[currentIndex] != undefined) {
    if (results[currentIndex].includes("a")) {
      aBtn.classList.add("selected");
    }
    if (results[currentIndex].includes("b")) {
      bBtn.classList.add("selected");
    }
  }
  checkPick();
};

backBtn.onclick = function () {
  if (currentIndex > 0) {
    currentIndex -= 1;
  }
  fillContent();
  aBtn.classList.remove("selected");
  bBtn.classList.remove("selected");
  if (
    results[currentIndex].includes("a") &&
    results[currentIndex] != undefined
  ) {
    aBtn.classList.add("selected");
  }
  if (
    results[currentIndex].includes("b") &&
    results[currentIndex] != undefined
  ) {
    bBtn.classList.add("selected");
  }
  checkPick();
};

aBtn.onclick = function () {
  results[currentIndex] = "";
  results[currentIndex] = currentIndex + 1 + "a";
  console.log(results);
  bBtn.classList.remove("selected");
  aBtn.classList.add("selected");
  checkPick();
  checkCompleteBtn();
};

bBtn.onclick = function () {
  results[currentIndex] = "";
  results[currentIndex] = currentIndex + 1 + "b";
  console.log(results);
  aBtn.classList.remove("selected");
  bBtn.classList.add("selected");
  checkPick();
  checkCompleteBtn();
};

againBtn.onclick = function () {
  currentIndex = 0;
  results = [];
  aBtn.innerHTML = varA[currentIndex];
  bBtn.innerHTML = varB[currentIndex];
  aBtn.classList.remove("btn-a");
  bBtn.classList.remove("btn-b");
  aBtn.classList.add("btn-a");
  bBtn.classList.add("btn-b");
  aBtn.classList.remove("selected");
  bBtn.classList.remove("selected");
  checkPick();
  localStorage.clear();
};

