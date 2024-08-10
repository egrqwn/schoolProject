let goTopBtn = document.querySelector(".go-top");
window.addEventListener("scroll", trackScroll);
goTopBtn.addEventListener("click", goTop);


function trackScroll() {
  // вычисляем положение от верхушки страницы
  let scrolled = window.scrollY;
  // считаем высоту окна браузера
  let coords = document.documentElement.clientHeight;
  // если вышли за пределы первого окна
  if (scrolled > coords) {
    // кнопка появляется
    goTopBtn.classList.add("go-top--show");
  } else {
    // иначе исчезает
    goTopBtn.classList.remove("go-top--show");
  }
}

function goTop() {
  // пока не вернулись в начало страницы
  if (window.scrollY > 0) {
    // скроллим наверх
    window.scrollBy(0, -50); // второй аргумент - скорость
    setTimeout(goTop, 0); // входим в рекурсию
  }
};

export default trackScroll; goTop;
