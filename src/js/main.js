// scssコンパイルのために必須の記述
'use strict';
// import "../scss/style.scss";

//js import
import './intersectionObserver.js';
import './smoothScroll.js';
import '@babel/polyfill';
// import $ from 'jquery';

//ポリフィル
import objectFitImages from 'object-fit-images';
objectFitImages();

// import Stickyfill from "stickyfilljs"; //polyfill
// const sticky = document.querySelectorAll(".js-sticky");
// Stickyfill.add(sticky);

// ie識別・対策
// const agent = window.navigator.userAgent.toLowerCase();
// const isIE11 = agent.indexOf('trident/7') !== -1;

// メディアクエリ
const breakPointSp = 'max-width:959px';
const mediaQueryList = window.matchMedia(`(${breakPointSp})`);
const listener = (e) => {
  const body = document.body;
  if (e.matches) {
    /* the viewport is 959 pixels wide or less */
  } else {
    /* the viewport is more than than 959 pixels wide */

    const resetHeader = () => {
      document.getElementById('js-hamburger').setAttribute('aria-expanded', 'false');
      body.classList.remove('is-drawerActive');
      body.style.position = '';
      body.style.top = '';
      body.classList.remove('is-noScroll');
    };
    resetHeader();
  }
};
// リスナー登録
mediaQueryList.addListener(listener);
// 初期化処理
listener(mediaQueryList);

if (document.getElementById('js-toTop')) {
  const scrollTopTrigger = () => {
    const trigger = document.getElementById('js-toTop');
    trigger.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  };
  scrollTopTrigger();
}

//別ページからのアンカーずれ解消
document.addEventListener('DOMContentLoaded', () => {
  if (location.hash) {
    const headerHeight = document.getElementById('js-header').clientHeight;
    setTimeout(() => {
      window.scrollBy(0, -headerHeight);
    }, 100);
  }
});

/*
 * spグロナビ
 */
const headerFnc = () => {
  // ハンバーガーWAI-ARIA
  const hamburger = document.getElementById('js-hamburger');
  const hamburgerIcon = () => {
    const ariaExpanded = hamburger.getAttribute('aria-expanded');
    if (ariaExpanded == 'false') {
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
  //clickイベント
  hamburger.addEventListener('click', () => {
    hamburgerIcon();
    hamburgerIsActive();
    noScrollToggle();
  });
  //spグロナビリンクをクリックで閉じる
  const spHeaderLinks = document.querySelectorAll('.js-headerSpLink');
  spHeaderLinks.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      hamburgerIcon();
      hamburgerIsActive();
    });
  });
}; //sp
headerFnc();

/*
 *ロード画面
 */
// if (document.getElementById('js-loading')) {
//   const loadingFnc = (delay) => {
//     const loading = document.getElementById('js-loading');
//     window.addEventListener('load', function () {
//       loading.classList.add('is-fadeout'); //_js.scss/is-fadeoutのdurationと合わせる
//       this.setTimeout(() => {
//         loading.style.display = 'none';
//       }, delay);
//     });
//   };
//   loadingFnc(1000);
// }

/*
 * target="_blank"にrel="noopener"を付与
 * 自分のドメイン、ハッシュは対象外
 */
const externalLink = function () {
  const thisSiteDomain = document.domain;
  const aTags = document.querySelectorAll('a:not([target="_blank"])');
  let array = [];
  if (!aTags.length) return;
  for (let i = 0; i < aTags.length; i++) {
    let aTag = aTags[i];
    let href = aTag.getAttribute('href');
    if (href.indexOf(`${thisSiteDomain}`) !== -1) continue; //自分のドメインは対象外
    aTag.setAttribute('target', '_blank');
    aTag.setAttribute('rel', 'noopener');
    array.push(aTag);
  }
  return array;
};
document.addEventListener('DOMContentLoaded', externalLink, false);

//レイヤー開いてるときはbodyスクロール禁止
function noScrollToggle() {
  const body = document.body;
  if (body.classList.contains('is-noScroll')) {
    // レイヤーが閉じたら、topをscrollTopに
    let top = body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(top || '0') * -1);
    document.body.classList.remove('is-noScroll');
  } else {
    document.body.classList.add('is-noScroll');
    // レイヤーが開いたら、bodyにfixedを付与
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = 'fixed';
  }
}
// resizeCheckerSP(() => {
//   document.body.style.position = '';
//   document.body.style.top = '';
//   document.body.classList.remove('is-noScroll');
// });
