const resetHeader = (e) => {
  const body = document.body;
  const hamburger = document.getElementById('js-hamburger');
  if (e.matches) {
    return;
  } else {
    if (hamburger.getAttribute('aria-expanded')) {
      hamburger.setAttribute('aria-expanded', 'false');
      body.classList.remove('is-drawerActive');
      body.style.position = '';
      body.style.top = '';
      body.classList.remove('is-noScroll');
      document.getElementById('js-headerNavSp').classList.remove('is-open');
    }
  }
};

export default resetHeader;
