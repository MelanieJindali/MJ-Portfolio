// Hamburger button
const navToggle = $('.nav-toggle');
const navLinks = $('.nav-items a');

navToggle.click(() => {
  $('body').toggleClass('nav-open');
});

navLinks.click((link) => {
  link.forEach($('body').removeClass('nav-open'))
});
