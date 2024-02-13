import {
  varA,
  varB,
  answer1,
  answer2,
  answer3,
  answer4,
  answer5,
  answer6,
  conclusion1,
  conclusion2,
  conclusion3,
  conclusion4,
  conclusion5,
  conclusion6,
} from "./testDB.js";

let results = [];
let currentIndex = 0;

let backBtn = document.querySelector(".btn-back");
let forwardBtn = document.querySelector(".btn-forward");

let endBtn = document.querySelector(".btn-end");
endBtn.disabled = true;

let aToAnswer = document.querySelector(".a-to-answer");
aToAnswer.disabled = true;

let againBtn = document.querySelector(".block-again");

let aBtn = document.querySelector(".btn-a");
let bBtn = document.querySelector(".btn-b");
forwardBtn.disabled = true;

let testResults = ['1b', '2b', '3a', '4b', '5b', '6b', '7a', '8b', '9a', '10b', '11a', '12b', '13a', '14b', '15b', '16a', '17b', '18a', '19b', '20a', '21b', '22b', '23a', '24a', '25b', '26b', '27b', '28b', '29a', '30a', '31b', '32b', '33a', '34b', '35a', '36b', '37a', '38b', '39a', '40b', '41a', '42b'];

let similarityArray = [0,0,0,0,0,0];
let maxArray = similarityArray[0];

endBtn.onclick = function() {
    window.location.href = 'results.html';
}

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
    if (results.length < 10) {
        endBtn.disabled = false;
        aToAnswer.disabled = false;
    }
}

function similarity() {
  for (let i = 0; i < results.length ; i++) {
    for (let j = 0; j < answer1.length; j++) {
      if (results[i] == answer1[j]) {
        similarityArray[0]++;
      }

      if (results[i] == answer2[j]) {
        similarityArray[1]++;
      }

      if (results[i] == answer3[j]) {
        similarityArray[2]++;
      }

      if (results[i] == answer4[j]) {
        similarityArray[3]++;
      }

      if (results[i] == answer5[j]) {
        similarityArray[4]++;
      }

      if (results[i] == answer6[j]) {
        similarityArray[5]++;
      }
    }
  }
  
  for (let i = 0;i < similarityArray.length; i++) {
    if (similarityArray[i] > maxArray) {
        maxArray = similarityArray[i];
    }
  }
    if (maxArray == similarityArray[0]) {
      console.log(conclusion1);
      localStorage.setItem('conclusion1', conclusion1);
    }
    
    if (maxArray == similarityArray[1]) {
      console.log(conclusion2);
      localStorage.setItem('conclusion2', conclusion2);
    }

    if (maxArray == similarityArray[2]) {
      console.log(conclusion3);
      localStorage.setItem('conclusion3', conclusion3);
    }

    if (maxArray == similarityArray[3]) {
      console.log(conclusion4);
      localStorage.setItem('conclusion4', conclusion4);
    }

    if (maxArray == similarityArray[4]) {
      console.log(conclusion5);
      localStorage.setItem('conclusion5', conclusion5);
    }

    if (maxArray == similarityArray[5]) {
      console.log(conclusion6);
      localStorage.setItem('conclusion6', conclusion6);
    }

      console.log(maxArray);
      console.log(similarityArray);
  
}

similarity();

endBtn.onclick = function () {
  similarity();
}


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
};


// export {similarity};


