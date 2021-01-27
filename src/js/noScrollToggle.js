// レイヤー開いてるときはbodyスクロール禁止
const noScrollToggle = () => {
  const { body } = document;
  if (body.classList.contains('is-noScroll')) {
    // レイヤーが閉じたら、topをscrollTopに
    const { top } = body.style;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(top || '0', 10) * -1);
    document.body.classList.remove('is-noScroll');
  } else {
    document.body.classList.add('is-noScroll');
    // レイヤーが開いたら、bodyにfixedを付与
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = 'fixed';
  }
};

export default noScrollToggle;
