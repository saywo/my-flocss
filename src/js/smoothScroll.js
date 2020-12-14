import SmoothScroll from 'smooth-scroll';

// smooth-scroll
const smoothScrollOption = {
  ignore: '[data-scroll-ignore]', // 無効にしたいリンクのセレクタ
  header: '[data-scroll-header]', // 固定ヘッダーのセレクタ
  speed: 500,
};
const scroll = new SmoothScroll('a[href*="#"]', smoothScrollOption); // eslint-disable-line no-unused-vars
