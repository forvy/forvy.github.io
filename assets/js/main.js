/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu');
    });
  }
};
showMenu('nav-toggle', 'nav-menu');


/*==================== REMOVE MENU MOBILE ====================*/
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('nav-menu')?.classList.remove('show-menu');
  });
});


/*==================== SMOOTH SECTION SCROLL ====================*/
function scrollToSection(id, behavior = 'smooth') {
  const el = document.getElementById(id);
  if (!el) return;

  const header = document.getElementById('header');
  const offset = header ? header.offsetHeight : 0;

  const top =
    el.getBoundingClientRect().top +
    window.pageYOffset -
    offset;

  window.scrollTo({
    top,
    behavior
  });
}


/* Handle nav click scrolling */
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');

    if (!href || !href.startsWith('#')) return;

    e.preventDefault();

    const id = href.substring(1);
    scrollToSection(id, 'smooth');

    // update URL without jump
    history.pushState(null, '', `#${id}`);
  });
});


/* Handle back/forward navigation */
window.addEventListener('popstate', () => {
  const hash = window.location.hash.replace('#', '');
  if (!hash) return;

  setTimeout(() => {
    scrollToSection(hash, 'auto');
  }, 50);
});


/* Initial load hash support */
window.addEventListener('load', () => {
  const hash = window.location.hash.replace('#', '');
  if (!hash) return;

  setTimeout(() => {
    scrollToSection(hash, 'auto');
  }, 100);
});


/*==================== ACTIVE LINK ON SCROLL ====================*/
function scrollActive() {
  const scrollY = window.pageYOffset;
  const header = document.getElementById('header');
  const offset = header ? header.offsetHeight : 0;

  document.querySelectorAll('section[id]').forEach(section => {
    const id = section.getAttribute('id');

    const top = section.offsetTop - offset - 1;
    const bottom = top + section.offsetHeight;

    const link = document.querySelector(`.nav__menu a[href="#${id}"]`);
    if (!link) return;

    if (scrollY >= top && scrollY < bottom) {
      link.classList.add('active-link');
    } else {
      link.classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);


/*==================== HEADER BACKGROUND ====================*/
function scrollHeader() {
  const nav = document.getElementById('header');
  if (window.scrollY >= 200) nav.classList.add('scroll-header');
  else nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);


/*==================== SCROLL TOP BUTTON ====================*/
function scrollTopBtn() {
  const scrollTop = document.getElementById('scroll-top');
  if (!scrollTop) return;

  if (window.scrollY >= 560) scrollTop.classList.add('show-scroll');
  else scrollTop.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollTopBtn);


/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';

const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});


/*==================== SCROLL REVEAL ====================*/
window.addEventListener('DOMContentLoaded', () => {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 900,
    delay: 150,
    reset: false
  });

  setTimeout(() => {
    sr.reveal('.home__data, .home__img, .about__data, .about__img', { interval: 120 });
    sr.reveal('.skills__title, .skills__card', { interval: 200 });
    sr.reveal('.skills__subtitle, .skills__name', { interval: 120 });
    sr.reveal('.portfolio__img, .portfolio__title, .app__data, .app__img', { interval: 200 });
    sr.reveal('.contact__data, .contact__button', { interval: 120 });
    sr.reveal('.footer__content');
  }, 100);
});