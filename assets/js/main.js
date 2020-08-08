//first slider
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  updateOnWindowResize: true,
  slidesPerView: 1,
  autoplay: {
    delay: 4000,
  },



  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//categories slider
var mySwiper = new Swiper('.categories-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  updateOnWindowResize: true,
  slidesPerView: 8,
  spaceBetween: 10,
  autoplay: {
    delay: 4000,
  },

  breakpoints: {
    // when window width is >= 1200px
    1200: {
      slidesPerView: 8,
      spaceBetween: 50
    },
    // when window width is >= 480px
    992: {
      slidesPerView: 5,
      spaceBetween: 30
    },
    // when window width is >= 480px
    782: {
      slidesPerView: 4,
      spaceBetween: 5
    },
    // when window width is >= 576px
    576: {
      slidesPerView: 3,
      spaceBetween: 5
    },
    // when window width is >= 250px
    250: {
      slidesPerView: 2,
      spaceBetween: 5
    },
    150: {
      slidesPerView: 1,
      spaceBetween: 5
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//best-seller slider
var mySwiper = new Swiper('.best-seller-swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  updateOnWindowResize: true,
  slidesPerView: 4,
  spaceBetween: 50,
  autoplay: {
    delay: 4000,
  },

  breakpoints: {
    // when window width is >= 480px
    992: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    // when window width is >= 480px
    782: {
      slidesPerView: 3,
      spaceBetween: 5
    },
    // when window width is >= 576px
    400: {
      slidesPerView: 2,
      spaceBetween: 5
    },
    // when window width is >= 250px
    0: {
      slidesPerView: 1,
      spaceBetween: 5
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//categories slider
var mySwiper = new Swiper('.categories-swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  updateOnWindowResize: true,
  slidesPerView: 4,
  spaceBetween: 50,
  autoplay: {
    delay: 4000,
  },

  breakpoints: {
    // when window width is >= 480px
    992: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    // when window width is >= 480px
    782: {
      slidesPerView: 3,
      spaceBetween: 5
    },
    // when window width is >= 576px
    400: {
      slidesPerView: 2,
      spaceBetween: 5
    },
    // when window width is >= 250px
    0: {
      slidesPerView: 1,
      spaceBetween: 5
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// sliders

let sliders = document.getElementById('sliders');

sliders.addEventListener('click', slidersChange);


function slidersChange(e) {
  let name = e.target.dataset.name;
  if (name) {
    let sliders = document.getElementById('sliders-body').children;
    let tags = document.getElementById('sliders-head').children[0].children;
    removeActiveTag(tags);
    addActiveTag(e.target);
    removeActiveSlider(sliders);
    addActiveSlider(sliders, name);
  }
}

function removeActiveTag(list){
  for (let i = 0; i < list.length; i++) {
    if (list[i].classList.contains('active')) {
      list[i].classList.remove('active');
    }
  }
}

function addActiveTag(e){
  e.classList.add('active');
}

function removeActiveSlider(list){
  for (let i = 0; i < list.length; i++) {
    if (list[i].classList.contains('active')) {
      list[i].classList.remove('active');
    }
  }
}
function addActiveSlider(list, name){
  for (let i = 0; i < list.length; i++) {
    if (list[i].dataset.name == name) {
      list[i].classList.add('active');
    }
  }
}


// second navbar

$('#sec-icon').click(function (e) { 
  $('#sec-items').toggleClass('show');
});

$('#close-btn').click(function (e) { 
  $('#sec-items').removeClass('show');
});


function show(e){
  $(e).toggleClass('active');
  console.log('called');
}
