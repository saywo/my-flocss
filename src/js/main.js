// scssコンパイルのために必須の記述
// import "../scss/style.scss";

// js import
import './intersectionObserver';
import './smoothScroll';
import '@babel/polyfill';
// import noScrollToggle from './noscroll';
import './menu';
import resetHeader from './menu';
import './topTop';
import './externalLink';

// ポリフィル
import objectFitImages from 'object-fit-images';
objectFitImages();

// ie識別・対策
// const agent = window.navigator.userAgent.toLowerCase();
// const isIE11 = agent.indexOf('trident/7') !== -1;

// 別ページからのアンカーずれ解消
document.addEventListener('DOMContentLoaded', () => {
  if (location.hash) {
    const headerHeight = document.getElementById('js-header').clientHeight;
    setTimeout(() => {
      window.scrollBy(0, -headerHeight);
    }, 100);
  }
});

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

// メディアクエリ
const mediaQueryList = window.matchMedia('(max-width:959px)');
const listener = (e) => {
  resetHeader(e);
};
mediaQueryList.addListener(listener); // リスナー登録
listener(mediaQueryList); // 初期ロード時
