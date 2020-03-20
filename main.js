(function() {
  window.onload = function() {
    const carouselSlide = document.querySelector('.carousel_slide');
    const carouselImages = document.querySelectorAll('.carousel_slide > div');

    //Navbar button
    const menu = document.querySelector('.menu');
    const burgerbutton = document.querySelector('#burger-menu');
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(function(el) {
      el.addEventListener('click', hideShow);
    });

    burgerbutton.addEventListener('click', hideShow);

    function hideShow() {
      if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
      } else {
        menu.classList.add('is-active');
      }
    }

    // CAROUSEL THING

    //counter variable
    let count = 0;
    let dir = 'R';
    let intervalId = undefined;

    //get the initial width of the container
    let size = carouselImages[0].clientWidth;

    //when the size of the window changes, change the variable of size in order to make it responsive
    window.addEventListener('resize', function() {
      size = carouselImages[0].clientWidth;
    });

    const next = () => {
      reloadInterval();
      if (count >= carouselImages.length - 1) return;
      count++;
      changeImage();
    };

    const prev = () => {
      reloadInterval();
      if (count <= 0) return;
      count--;
      changeImage();
    };

    const changeImage = () => {
      // console.log(`translateX('${-size * count}px')`);
      carouselSlide.style.transition = `transform 0.4s ease-in-out`;
      carouselSlide.style.transform = `translateX(${-size * count}px)`;
    };
    //buttons listener
    document.querySelector('#nextBtn').addEventListener('click', () => {
      dir = 'R';
      next();
    });
    document.querySelector('#prevBtn').addEventListener('click', () => {
      dir = 'L';
      prev();
    });

    const changeImageInterval = () => {
      if (dir === 'R') next();
      else if (dir === 'L') prev();
    };

    const reloadInterval = () => {
      clearInterval(intervalId);
      intervalId = setInterval(changeImageInterval, 3000);
    };

    carouselSlide.addEventListener('transitionend', () => {
      console.log(`the count is: ${count}`);
      console.log(carouselImages[count]);
      if (carouselImages[count].id === 'lastImg') {
        carouselSlide.style.transition = 'none';
        count = carouselImages.length - 2;
        carouselSlide.style.transform = `translateX(${-size * count}px)`;
      }
      if (carouselImages[count].id === 'firstImg') {
        carouselSlide.style.transition = 'none';
        count = carouselImages.length - count;
        carouselSlide.style.transform = `translateX(${-size * count}px)`;
      }
    });
    reloadInterval();
  };
})();
