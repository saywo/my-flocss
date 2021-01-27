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
