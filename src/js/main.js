const fadeIn = (el, timeout, display) => {
  el.style.opacity = 0;
  el.style.display = display || 'block';
  el.style.transition = `opacity ${timeout}ms`;
  setTimeout(() => {
    el.style.opacity = 1;
  }, timeout);
}

const fadeOut = (el, timeout) => { // Добавил аргумент "el" для указания элемента
  el.style.transition = `opacity ${timeout}ms`;
  el.style.opacity = 0;
  setTimeout(() => {
    el.style.display = 'none';
  }, timeout);
}
const timer = 450;
const buttons = document.querySelectorAll('.examples__btn');
const elements = document.querySelectorAll('[data-number]');

fadeIn(document.querySelectorAll('.examples__wrapper')[0], timer, 'flex')

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.getAttribute('data-number');
    elements.forEach(element => {
      if (element.getAttribute('data-number') === number) {
        if (element.classList.contains('examples__btn')) {
          element.classList.add('show');
          return
        }
        setTimeout(() => {
          fadeIn(element, timer, 'flex')
          element.classList.add('show');
        }, timer);
      } else {
        element.classList.remove('show');
        fadeOut(element, timer)
      }
    });
  });
});

// photo hover
const photo = document.querySelectorAll('.info__photo');

photo.forEach(photo => {
  photo.addEventListener('click', function () {
    this.classList.toggle('fullscreen');
  });
});


// accordion professional single
let questions = document.querySelectorAll('.professional__question');
let plusminus = document.querySelectorAll('.plusminus');

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', function () {
    this.classList.toggle("active");
    plusminus[i].classList.toggle('active');
    var panel = this.lastElementChild;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = '200' + "px";
    }
  })
}


/*____*/
var acc = document.getElementsByClassName("faq__line");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.lastElementChild;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = '200' + "px";
    }
  });
}
