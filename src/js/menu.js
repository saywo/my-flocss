import noScrollToggle from './noscroll';

const headerFnc = () => {
  // ハンバーガーWAI-ARIA
  const hamburger = document.getElementById('js-hamburger');
  const hamburgerIcon = () => {
    const ariaExpanded = hamburger.getAttribute('aria-expanded');
    if (ariaExpanded === 'false') {
      hamburger.setAttribute('aria-expanded', 'true');
    } else {
      hamburger.setAttribute('aria-expanded', 'false');
    }
  };
  const hamburgerIsActive = () => {
    const targetClass = document.getElementById('js-headerNavSp').classList;
    if (targetClass.contains('is-open')) {
      targetClass.remove('is-open');
    } else {
      targetClass.add('is-open');
    }
  };
  // clickイベント
  hamburger.addEventListener('click', () => {
    hamburgerIcon();
    hamburgerIsActive();
    noScrollToggle();
  });
  // spグロナビリンクをクリックで閉じる
  const spHeaderLinks = document.querySelectorAll('.js-headerSpLink');
  spHeaderLinks.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      hamburgerIcon();
      hamburgerIsActive();
    });
  });
}; // sp
headerFnc();
