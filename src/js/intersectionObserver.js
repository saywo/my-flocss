/*
 * IE11 polyfill
 * Intersection ObserverはIE以外はデフォルトで使える
 */
// polyfill使わないときはコメントアウト
import 'intersection-observer';

IntersectionObserver.prototype.POLL_INTERVAL = 100; // Time in milliseconds.

/*
 * lazy load
 */
const lazyImageObserver = () => {
  const targets = document.querySelectorAll('[data-lazyloaded]');
  const onIntersect = (entries, observer) => {
    // 交差検知したもののなかで、isIntersectingがtrueのDOMを色を変える関数に渡す
    entries.forEach((entry) => {
      // entry.isIntersectingで発火。オブジェクト確認
      if (entry.isIntersecting) {
        const imgElement = entry.target;
        const imgElementTagName = imgElement.tagName;
        if (imgElementTagName === 'IMG') {
          imgElement.src = imgElement.dataset.src;
        } else if (imgElementTagName === 'PICTURE') {
          imgElement.srcset = imgElement.dataset.src;
        }
        imgElement.addEventListener('load', () => {
          imgElement.dataset.lazyloaded = true;
        });
        observer.unobserve(imgElement);
      }
    });
  };
  const observer = new IntersectionObserver(onIntersect, {
    root: null, // ビューポート
    rootMargin: '200px 0px', // 0でもpxつける,-50%で要素の中央で発火
    threshold: 0,
  });

  if (targets) {
    targets.forEach((target) => {
      observer.observe(target);
    });
  }
};
lazyImageObserver();

/*
 *  アニメーション
 */
const effectObserver = () => {
  const targets = document.querySelectorAll('[data-effect]');
  const observer = new IntersectionObserver(onIntersect, {
    root: null, // ビューポート
    rootMargin: '0px 0px', // 0でもpxつける,-50%で要素の中央で発火
    threshold: 0,
  });
  function onIntersect(entries, observer) {
    // console.log(entries);
    // 交差検知したもののなかで、isIntersectingがtrueのDOMを色を変える関数に渡す
    entries.forEach((entry) => {
      // entry.isIntersectingで発火。オブジェクト確認
      if (entry.isIntersecting) {
        const { target } = entry;
        // target.classList.add('-action');
        target.dataset.effect = 'fired';
        observer.unobserve(target);
      }
    });
  }
  if (targets) {
    targets.forEach((target) => {
      observer.observe(target);
    });
  }
};
effectObserver();
