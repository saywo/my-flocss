/*
 * target="_blank"にrel="noopener"を付与
 * 自分のドメイン、ハッシュは対象外
 */
const externalLink = () => {
  const thisSiteDomain = document.domain;
  const aTags = document.querySelectorAll('a:not([target="_blank"])');
  // const array = [];
  if (!aTags.length) return;
  for (let i = 0; i < aTags.length; i += 1) {
    const aTag = aTags[i];
    const href = aTag.getAttribute('href');
    if (href.indexOf(`${thisSiteDomain}`) !== -1) {
      return; // 自分のドメインは対象外
    }
    aTag.setAttribute('target', '_blank');
    aTag.setAttribute('rel', 'noopener');
    // array.push(aTag);
  }
  // return array;
};
document.addEventListener('DOMContentLoaded', externalLink, false);
