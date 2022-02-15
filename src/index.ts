import * as _ from 'lodash';

function component() {
  const element = document.createElement('div');
  let say_hi = 'Hello'
  element.innerHTML = _.join(say_hi, ' ');

  return element;
}

document.body.appendChild(component());