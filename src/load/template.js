`use strict`;

import timer from '../template/template.hbs';

const refs = {
  markupTimer: document.querySelector('#timer-1'),
};

const markup = timer();

refs.markupTimer.insertAdjacentHTML('beforeend', markup);
