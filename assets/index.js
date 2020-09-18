const navToggle = $('.nav-toggle');
const navLinks = $('.nav-link');

navToggle.click(() => $('body').toggleClass('nav-open'))

navLinks.forEach(link => {
  link.click(() => {
    $('body').removeClass('nav-open')
  })
})

var typed = new Typed('#typed', {
    strings: [
      'a Web Developer.',
      'a Graphic Designer.'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

document.querySelectorAll('a[href^="#"').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});