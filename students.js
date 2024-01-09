import profDescription from "./profDescription.js";
import professions from "./professions.js";

// let selectProf = document.querySelector('.subject');
// let select1 = document.querySelector('.professions1');

// select1.onchange = function() {
//     let value  = select1.value;
//     console.log(value);
//     let text = select1.options[select1.selectedIndex].text;
//     console.log(text);
// }

// let select2 = document.querySelector('.professions2');

// select2.onchange = function() {
//     let value = select2.value;
//     console.log(value);
//     let text = select2.options[select2.selectedIndex].text;
//     console.log(text);
// }

// import Chart from 'chart.js'

// (async function() {
//   const data = [
//     { year: 2010, count: 10 },
//     { year: 2011, count: 20 },
//     { year: 2012, count: 15 },
//     { year: 2013, count: 25 },
//     { year: 2014, count: 22 },
//     { year: 2015, count: 30 },
//     { year: 2016, count: 28 },
//   ];

//   new Chart( 
//     document.getElementById('acquisitions'),
//     {
//       type: 'bar',
//       data: {
//         labels: data.map(row => row.year),
//         datasets: [
//           {
//             label: 'Acquisitions by year',
//             data: data.map(row => row.count)
//           }
//         ]
//       }
//     }
//   );
// })();



const url = "https://api.hh.ru/vacancies";
const params = {
  text: "",
  per_page: 100,
  page: 1,
}

//console.log(url + "?" + new URLSearchParams(params));




let choiceSet = new Set();

let hhru = document.querySelector(".hh-script");
let classArray = document.querySelector(".block-choice-prof").children;
let btnChoice = document.querySelector('.pick-btn');
let profBlock = document.querySelector(".professions");
let btnDelete = document.querySelector(".delete");
let vakanc = document.querySelector('.vakancies');


function fastFetch() {
    fetch(url + "?" + new URLSearchParams(params.text=''))
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}


btnChoice.onclick =() => {
    hhClear();
    fastFetch();
    profBlock.innerHTML = "";
    for (let item of choiceSet) {
        let prof = professions[item];
        prof.map(name => {
            let profCard = document.createElement('div');
            profCard.classList.add('prof');
            profBlock.appendChild(profCard); 
            
            let el1 = document.createElement('div');
            profCard.appendChild(el1);

            let img = document.createElement('img');
            el1.appendChild(img);
            img.src = profDescription[name][1];

            let columnCard =  document.createElement('div');
            columnCard.classList.add("column-card");
            profCard.appendChild(columnCard);

            let el2 = document.createElement('h3');
            el2.innerHTML = name;
            columnCard.appendChild(el2);

            let el3 = document.createElement('p');
            el3.innerHTML = profDescription[name][0];
            columnCard.appendChild(el3);

            let el4 = document.createElement('button');
            el4.innerHTML = 'Посмотреть вакансию';
            columnCard.appendChild(el4);

                let headhunt = name;
                headhunt = "https://api.hh.ru/widgets/vacancies/search?count=5&locale=RU&links_color=1560b2&border_color=1560b2&text="+encodeURIComponent(headhunt)+"&currency=RUR&only_with_salary=false";
                hhru = document.createElement('script');
                hhru.className = 'hh-script';
                hhru.src = headhunt;
                vakanc.appendChild(hhru);

        })
    }
}

for (let i = 0; i < classArray.length; i++) {
    classArray[i].onclick = () => {
       // let classItem = classArray[i].querySelector('p').innerHTML;
       if (choiceSet.has(classArray[i].innerText)) {
        choiceSet.delete(classArray[i].innerText);
        classArray[i].classList.remove('choice-subject');

        }
        else {
            if (choiceSet.size < 4) {
                choiceSet.add(classArray[i].innerText);
                params.text += professions[classArray[i].innerText].join(" ") + ' ' ;
                console.log(params.text);
                classArray[i].classList.add('choice-subject');
            }
        }
    }
}

btnDelete.onclick =() => {
    choiceSet.clear();
    params.text = "";
    profBlock.innerHTML = '';
    hhClear();
    for (let i of classArray) {
        i.classList.remove('choice-subject');
    }
}

function hhClear() {
    let divs = vakanc.querySelectorAll('div')
    for (let i = divs.length - 1; i>=0; i--){
        divs[i].remove();
    }
}


let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slideInterval = 5000;
 
function changeSlide() {
  slides[currentIndex].style.opacity = 0;
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].style.opacity = 1;
}
 
setInterval(changeSlide, slideInterval);



