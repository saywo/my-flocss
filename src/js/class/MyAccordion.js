const MyAccordion = class {
  constructor(trigger, target) {
    this.target = target;
    this.trigger = trigger;
  }

  toggle() {
    this.trigger.forEach((element) => {
      element.addEventListener('click', (event) => {
        const parent = element.parentNode.classList.contains('js-accordion') ? element.parentNode : undefined;
        event.preventDefault();
        if (parent.classList.contains('is-open')) {
          parent.classList.remove('is-open');
        } else {
          parent.classList.add('is-open');
        }
      });
    });
  }
};

export default MyAccordion;
