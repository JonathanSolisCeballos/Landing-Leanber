(function() {
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
})();
