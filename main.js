import profDescription from "./profDescription.js";
import professions from "./professions.js";
import changeSlide from "./slider.js";
import trackScroll from "./btn-top.js";
import goTop from "./btn-top.js";

const url = "https://api.hh.ru/vacancies";
const params = {
  text: "",
  per_page: 70,
  page: 1,
};

let choiceSet = new Set();

let hhru = document.querySelector(".hh-script");
let classArray = document.querySelector(".block-choice-prof").children;
let btnChoice = document.querySelector(".pick-btn");
let profBlock = document.querySelector(".professions");
let btnDelete = document.querySelector(".delete");
let vakancies = document.querySelector(".vakancies");
let vakanciesConteiner = document.querySelector(".vakancies-conteiner");

function fastFetch() {
  fetch(url + "?" + new URLSearchParams(params))
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(typeof data);
      for (let i = 0; i < data["items"].length; i++) {
        console.log(1);

        let vakancCard = document.createElement("div");
        vakancCard.classList.add("vakanc-card");
        vakanciesConteiner.appendChild(vakancCard);

        let h3 = document.createElement("h3");
        h3.innerHTML = data["items"][i].name;
        vakancCard.appendChild(h3);

        let cityPrice = document.createElement("div");
        cityPrice.classList.add("city-price");
        vakancCard.appendChild(cityPrice);

        if (data.items[i].address !== null) {
          let p = document.createElement("p");
          p.classList.add("city");
          p.innerHTML = data["items"][i].address.city;
          cityPrice.appendChild(p);
        }

        if (data.items[i].salary !== null) {
          let salary = document.createElement("p");
          salary.innerHTML = data["items"][i].salary.from;
          cityPrice.appendChild(salary);

          let currency = document.createElement("p");
          currency.innerHTML = data["items"][i].salary.currency;
          cityPrice.appendChild(currency);
        }

        let requirements = document.createElement("div");
        requirements.classList.add("requirements");
        vakancCard.appendChild(requirements);

        let h4 = document.createElement("h4");
        h4.innerHTML = "Требования";
        requirements.appendChild(h4);

        let pRequirements = document.createElement("p");
        pRequirements.innerHTML = data["items"][i].snippet.requirement;
        requirements.appendChild(pRequirements);

        let hr = document.createElement("hr");
        vakancCard.appendChild(hr);

        let checkVakanc = document.createElement("div");
        checkVakanc.classList.add("check-vakanc");
        vakancCard.appendChild(checkVakanc);

        let span = document.createElement("span");
        checkVakanc.appendChild(span);

        let a = document.createElement("a");
        a.href = data["items"][i]["alternate_url"];
        a.innerHTML = "Посмотреть вакансию на hh.ru";
        span.appendChild(a);
      }

      return data;
    })
    .catch((error) => console.error(error));
}

btnChoice.onclick = () => {
  hhClear();
  // fastFetch();
  profBlock.innerHTML = "";

  for (let item of choiceSet) {
    let prof = professions[item];
    prof.map((name) => {
      let profCard = document.createElement("div");
      profCard.classList.add("prof");
      profBlock.appendChild(profCard);

      let el1 = document.createElement("div");
      profCard.appendChild(el1);

      let img = document.createElement("img");
      el1.appendChild(img);
      img.src = profDescription[name][1];

      let columnCard = document.createElement("div");
      columnCard.classList.add("column-card");
      profCard.appendChild(columnCard);

      let el2 = document.createElement("h3");
      el2.innerHTML = name;
      columnCard.appendChild(el2);

      let el3 = document.createElement("p");
      el3.innerHTML = profDescription[name][0];
      columnCard.appendChild(el3);

      let el4 = document.createElement("button");
      el4.classList.add("check-vakanc");
      el4.innerHTML = "Перейти к вакансии";
      columnCard.appendChild(el4);

      el4.onclick = () => {
        params.text = "";
        params.text = name;

        fastFetch();
      };
    });
  }
};

for (let i = 0; i < classArray.length; i++) {
  classArray[i].onclick = () => {
    // let classItem = classArray[i].querySelector('p').innerHTML;
    if (choiceSet.has(classArray[i].innerText)) {
      choiceSet.delete(classArray[i].innerText);
      classArray[i].classList.remove("choice-subject");
    } else {
      if (choiceSet.size < 4) {
        choiceSet.add(classArray[i].innerText);
        params.text += professions[classArray[i].innerText].join(" ") + " ";
        console.log(params.text);
        classArray[i].classList.add("choice-subject");
      }
    }
  };
}

btnDelete.onclick = () => {
  choiceSet.clear();
  params.text = "";
  profBlock.innerHTML = "";
  vakanciesConteiner.innerHTML = "";
  hhClear();
  for (let i of classArray) {
    i.classList.remove("choice-subject");
  }
};

function hhClear() {
  let divs = vakancies.querySelectorAll("div");
  for (let i = divs.length - 1; i >= 0; i--) {
    divs[i].remove();
  }
}

const slideInterval = 5000;
setInterval(changeSlide, slideInterval);
