let kmCounter = document.querySelector('#counter-km');
let dayCounter = document.querySelector('#counter-days');

let kostromaOffset = document.querySelector('#city-kostroma').offsetTop;
let ekbOffset = document.querySelector('#city-ekb').offsetTop;
let omskOffset = document.querySelector('#city-omsk').offsetTop;
let yablPerevalOffset = document.querySelector('#city-yablonovy-pereval').offsetTop;
let khabarovskOffset = document.querySelector('#city-khabarovsk').offsetTop;

document.addEventListener('scroll', function () {
  let scrollY = window.pageYOffset;

  if (scrollY <= kostromaOffset + 200) {
    kmCounter.textContent = 0;
    dayCounter.textContent = 0;
  } else if (scrollY <= ekbOffset + 500) {
    kmCounter.textContent = 376;
    dayCounter.textContent = 1;
  } else if (scrollY <= omskOffset + 500) {
    kmCounter.textContent = 1819;
    dayCounter.textContent = 2;
  } else if (scrollY <= yablPerevalOffset + 500) {
    kmCounter.textContent = 6110;
    dayCounter.textContent = 4;
  } else if (scrollY <= khabarovskOffset + 500) {
    kmCounter.textContent = 8534;
    dayCounter.textContent = 6;
  } else {
    kmCounter.textContent = 9300;
    dayCounter.textContent = 6;
  }
});
