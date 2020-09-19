// Hamburger button
const navToggle = $('.nav-toggle');
const navLinks = $('.nav-items a');

navToggle.click(() => {
  $('body').toggleClass('nav-open');
});

navLinks.click((link) => {
  link.forEach($('body').removeClass('nav-open'))
});

var typed = new Typed('#typed', {
    strings: [
      'front-end developer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

